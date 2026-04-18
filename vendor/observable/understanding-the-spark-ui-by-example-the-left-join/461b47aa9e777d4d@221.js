// https://observablehq.com/@robinl/understanding-the-spark-ui-by-example-the-left-join@221
import define1 from "./35e34eb0f0c5b63d@702.js";

function _title(md){return(
md`# Understanding the Spark UI by example: the Left Join`
)}

function _intro(md){return(
md`

### Introduction 

The Spark UI is an invaluable tool to help understand and improve the performance of Spark jobs. This post uses the example of a left join to help build an understanding of what it can offer.

Note: This post is best viewed on a desktop computer. 

### Accessing the UI

If you are running Spark locally, the Spark UI is available at http://localhost:4040/. Further information about where to find it are [here](https://spark.apache.org/docs/latest/monitoring.html).  

In this post, I reproduce the contents of the SQL tab of the UI, but I've added additional details and explanations in the hover-over tooltips to help interpret what's going on.

### Setup

We will use the airlines dataset (downloaded from [here](https://blog.cloudera.com/analyzing-us-flight-data-on-amazon-s3-with-sparklyr-and-apache-spark-2-0/)) as an example. See [here](https://github.com/RobinL/understanding_spark_ui/blob/master/02_process_airlines.ipynb) for how I pre-processed the data.

This is composed of a large fact table of 123,534,969 flights, and a smaller dimension table of the details of 3,376 airports.

We will join these two tables together in Spark using the following SQL (see [here](https://github.com/RobinL/understanding_spark_ui/blob/master/03_left_join.ipynb) for full code):

\`\`\`sql
SELECT flights.carrier, airports.iata, airports.airport as destination
FROM flights 
LEFT JOIN airports
on flights.dest = airports.iata
WHERE flights.origin = 'LAX'
\`\`\`


### Interactive Spark UI

The SQL tab in the Spark UI gives the highest-level overview of how Spark has converted the SQL query into a physical execution plan.  This is a graphical equivalent to the physical plan you can see if you type: \`spark.sql(sql_statement).explain()\`.  The SQL tab appears once you've run at least one query.

For this query, you will see the following diagram.  You can hover over the various nodes in the below diagram for a detailed explanation.

Technical note: To make this post more informative, I've asked Spark to use a [sort merge join](https://stackoverflow.com/questions/50019457/why-does-spark-planner-prefer-sort-merge-join-over-shuffled-hash-join). In reality, the airports table is small enough to use a [broadcast hash join](https://jaceklaskowski.gitbooks.io/mastering-spark-sql/spark-sql-joins-broadcast.html).



`
)}

function _plan(plot_plan,raw_html,annotations){return(
plot_plan(raw_html, annotations, false)
)}

function _annotations()
{ 
  
  let exchange = `Spark has seen the left join on \`dest\`.  In order to perform this join, data needs to be sorted by the \`dest\` column.  Spark uses a hash partition using the default 200 shuffle partitions (see original tooltip) to split the data between executors.  The data from both the \`parquet\` and the \`csv\` file will  be hashpartitioned on the \`dest\` field.   This means data from the same \`dest\` ends up on the same executor node (computer), meaning that this part of data can be joined without further shuffles.

This process will work well if the data is evenly distributed across \`dest\` values.  We can get an indication of whether this is the case from the timings - if the max timing is much greater than the median, we probably have a problem. 
`
  
  return {
 cluster_7: `Spark has generated optimised Java code that combines three operations:  read the data, filter it, and select the requested columns (project).  Since the incoming data is in multiple files, Spark will be able to perform these operations in parallel.
    
The timings are  \`28.9 s (302 ms, 1.2 s, 2.3 s)\`.  These numbers are total (min, median, max).  They give us basic information about how effectively parallelisation has worked.  A large disparity between median and max may be indicative of data skew (i.e. one part of the data taking a lot longer to process than others, and thereby holding up the whole operation)
    `,
 node_10: "Spark has used predicate pushdown on the `WHERE flights.origin = 'LAX` part of the query to optimise the file read.  This allows Spark to filter data out as it is read in.  In this case Spark is able to exploit  the metadata headers of the Parquet files that contain information about the data contents of the file.  This allows Spark to skip reading large parts of the Parquet files.  "
,
 node_9: "In addition to filtering on the `WHERE` condition, Spark filters out any data which is NULL in the field which we are joining on."
  ,
  cluster_14: "Note the timings are all the same.  This is a pretty big clue that Spark has not parallelised this step.  This is because there's a small csv file on disk, which is below Spark's size threshold for parallelisation."
  ,
    node_6: exchange,
    node_13: exchange,
    node_3: "Where one 'side' of the join is small, like the `airports` table, Spark would usually use a broadcast hash join, whereby the whole of the airports table is broadcast to each compute node.  This avoids the need to shuffle the larger `flights` table.  To make this example more interesting, I forced it not to use the broadcast join by setting the config option `spark.sql.autoBroadcastJoinThreshold` to `0`.   The `SortMergeJoin` is the standard join that Spark 2.0+ uses when both sides of the join are large.   See https://stackoverflow.com/questions/50019457/why-does-spark-planner-prefer-sort-merge-join-over-shuffled-hash-join for more information."
    
    
    
  }
}


function _parallelisation(md){return(
md`## Parallelisation

We already know that Spark is able to execute much of its work in parallel, within the nodes of the DAG.  However, the speedup that parallelism gives us for these individual operations such as sorts or aggregates is often limited by the need to partition and shuffle data.  

The diagram helps us understand a higher level of parallelism that can happening between parts of the workflow, which often does not suffer from this 'speed limit', and which we should often seek to maximise.

In this case, the two leaf nodes at the top of the diagram show that the two input tables can be processed in parallel, right up until the join.  The data is read, filtered, and then sorted, and this can happen completely independently.  It's only at the 'SortMergeJoin' node that these two processes need to wait for each other to complete.


In more complex jobs, there may be 10s of these leaf nodes, and it may be possible to adjust your code to make them stay independent for longer.




`
)}

function _other_parts(md){return(
md`## Other parts of the Spark UI

The SQL tab of the Spark UI provides the highest-level overview of the execution of your Spark program.  

The rest of the UI provides more details at different levesl.  

- A given Spark SQL query may be broken into one or more jobs.  Each job corresponds to a single RDD action.  For example, if your query contains a scalar subquery, your query will produce [multiple jobs](https://youtu.be/ywPuZ_WrHT0?t=416) because that subquery will be executed independently and the results will be sent across the cluster.

 The query in this example corresponds to a single job, because it corredponds to a single RDD action - the write back to the file system.

- Jobs are divided into "stages" based on the shuffle boundary. A stage is a collection of tasks that run the same code, each on a different subset of the data. 

- Each stage is further divided into tasks based on the number of partitions in the RDD. So tasks are the smallest units of work for Spark. Every task inside a stage does the exact same thing, only on a different segment of the data. 

To delve further into the functioning of this left join, I would usually do the following:

- Navigate to the jobs tab, to see more information about the stages of the job
- Click through to the stages of the job, to better understand the amount of parallelism being used (as represented by the number of tasks), and to get further information about data skew (e.g. by looking at the percentiles in the in 'stages' tab.

`
)}

function _annotations2(d3)
{
  let url = "https://gist.githubusercontent.com/RobinL/a82aaa19b13b1da6c60cb28c169c505d/raw/b98ceb36c7af3a6a78871f83221abd8cffa032f1/annotations.json"
 return d3.json(url)
}


function _8(md){return(
md`## Questions

Why does the flights dataset read in 20 partitions despite scanning 258 files on disk?

We can change this by setting e.g.\`conf.set("spark.sql.files.maxPartitionBytes", 1024*1024*10)\` but I don't understand why we don't get one partition per file. 
`
)}

function _metadata(get_metadata,raw_html){return(
get_metadata(raw_html)
)}

function _references(md){return(
md`## References and useful resources:

[Youtube: Apache Spark Core—Deep Dive—Proper Optimization Daniel Tomes](https://www.youtube.com/watch?v=daXEp4HmS-E&t=3868s)

[Youtube: A Deep Dive into Query Execution Engine of Spark SQL - Maryann Xue](https://www.youtube.com/watch?v=ywPuZ_WrHT0)

[Youtube: A Deep Dive into Query Execution Engine of Spark SQL - continued](https://www.youtube.com/watch?v=BqCW5OxMP4I&t=2s)

[Youtube: A Deep Dive into Spark SQL's Catalyst Optimizer with Yin Huai](https://www.youtube.com/watch?v=RmUn5vHlevc)


[Spark Shuffle and Spill Explained - Chendi Xue](https://xuechendi.github.io/2019/04/15/Spark-Shuffle-and-Spill-Explained)

[Visual API](https://training.databricks.com/visualapi.pdf)
`
)}

function _mystyles(styles1){return(
styles1
)}

function _raw_html(d3)
{
  let url = "https://gist.githubusercontent.com/RobinL/a82aaa19b13b1da6c60cb28c169c505d/raw/eb9fdc6fe0b850c3de162b85579c7e0c764c461d/SQL_tab.html"
 return d3.text(url)
}


function _bstt($)
{
  
  $;

  return function($) {

  "use strict"; // jshint ;_;


 /* TOOLTIP PUBLIC CLASS DEFINITION
  * =============================== */

  var Tooltip = function (element, options) {
    this.init('tooltip', element, options)
  }

  Tooltip.prototype = {

    constructor: Tooltip

  , init: function (type, element, options) {
      var eventIn
        , eventOut
        , triggers
        , trigger
        , i

      this.type = type
      this.$element = $(element)
      this.options = this.getOptions(options)
      this.enabled = true

      triggers = this.options.trigger.split(' ')

      for (i = triggers.length; i--;) {
        trigger = triggers[i]
        if (trigger == 'click') {
          this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
        } else if (trigger != 'manual') {
          eventIn = trigger == 'hover' ? 'mouseenter' : 'focus'
          eventOut = trigger == 'hover' ? 'mouseleave' : 'blur'
          this.$element.on(eventIn + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
          this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
        }
      }

      this.options.selector ?
        (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
        this.fixTitle()
    }

  , getOptions: function (options) {
      options = $.extend({}, $.fn[this.type].defaults, this.$element.data(), options)

      if (options.delay && typeof options.delay == 'number') {
        options.delay = {
          show: options.delay
        , hide: options.delay
        }
      }

      return options
    }

  , enter: function (e) {
      var defaults = $.fn[this.type].defaults
        , options = {}
        , self

      this._options && $.each(this._options, function (key, value) {
        if (defaults[key] != value) options[key] = value
      }, this)

      self = $(e.currentTarget)[this.type](options).data(this.type)

      if (!self.options.delay || !self.options.delay.show) return self.show()

      clearTimeout(this.timeout)
      self.hoverState = 'in'
      this.timeout = setTimeout(function() {
        if (self.hoverState == 'in') self.show()
      }, self.options.delay.show)
    }

  , leave: function (e) {
      var self = $(e.currentTarget)[this.type](this._options).data(this.type)

      if (this.timeout) clearTimeout(this.timeout)
      if (!self.options.delay || !self.options.delay.hide) return self.hide()

      self.hoverState = 'out'
      this.timeout = setTimeout(function() {
        if (self.hoverState == 'out') self.hide()
      }, self.options.delay.hide)
    }

  , show: function () {
      var $tip
        , pos
        , actualWidth
        , actualHeight
        , placement
        , tp
        , e = $.Event('show')

      if (this.hasContent() && this.enabled) {
        this.$element.trigger(e)
        if (e.isDefaultPrevented()) return
        $tip = this.tip()
        this.setContent()

        if (this.options.animation) {
          $tip.addClass('fade')
        }

        placement = typeof this.options.placement == 'function' ?
          this.options.placement.call(this, $tip[0], this.$element[0]) :
          this.options.placement

        $tip
          .detach()
          .css({ top: 0, left: 0, display: 'block' })

        this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

        pos = this.getPosition()


        actualWidth = $tip[0].offsetWidth
        actualHeight = $tip[0].offsetHeight

        switch (placement) {
          case 'bottom':
            tp = {top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2}
            break
          case 'top':
            tp = {top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2}
            break
          case 'left':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth}
            break
          case 'right':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width}
            break
        }

        this.applyPlacement(tp, placement)
        this.$element.trigger('shown')
      }
    }

  , applyPlacement: function(offset, placement){
      var $tip = this.tip()
        , width = $tip[0].offsetWidth
        , height = $tip[0].offsetHeight
        , actualWidth
        , actualHeight
        , delta
        , replace

      $tip
        .offset(offset)
        .addClass(placement)
        .addClass('in')

      actualWidth = $tip[0].offsetWidth
      actualHeight = $tip[0].offsetHeight

      if (placement == 'top' && actualHeight != height) {
        offset.top = offset.top + height - actualHeight
        replace = true
      }

      if (placement == 'bottom' || placement == 'top') {
        delta = 0

        if (offset.left < 0){
          delta = offset.left * -2
          offset.left = 0
          $tip.offset(offset)
          actualWidth = $tip[0].offsetWidth
          actualHeight = $tip[0].offsetHeight
        }

        this.replaceArrow(delta - width + actualWidth, actualWidth, 'left')
      } else {
        this.replaceArrow(actualHeight - height, actualHeight, 'top')
      }

      if (replace) $tip.offset(offset)
    }

  , replaceArrow: function(delta, dimension, position){
      this
        .arrow()
        .css(position, delta ? (50 * (1 - delta / dimension) + "%") : '')
    }

  , setContent: function () {
      var $tip = this.tip()
        , title = this.getTitle()

      $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
      $tip.removeClass('fade in top bottom left right')
    }

  , hide: function () {
      var that = this
        , $tip = this.tip()
        , e = $.Event('hide')

      this.$element.trigger(e)
      if (e.isDefaultPrevented()) return

      $tip.removeClass('in')

      function removeWithAnimation() {
        var timeout = setTimeout(function () {
          $tip.off($.support.transition.end).detach()
        }, 500)

        $tip.one($.support.transition.end, function () {
          clearTimeout(timeout)
          $tip.detach()
        })
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        removeWithAnimation() :
        $tip.detach()

      this.$element.trigger('hidden')

      return this
    }

  , fixTitle: function () {
      var $e = this.$element
      if ($e.attr('title') || typeof($e.attr('data-original-title')) != 'string') {
        $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
      }
    }

  , hasContent: function () {
      return this.getTitle()
    }

  , getPosition: function () {
      var el = this.$element[0]
      return $.extend({}, (typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : {
        width: el.offsetWidth
      , height: el.offsetHeight
      }, this.$element.offset())
    }

  , getTitle: function () {
      var title
        , $e = this.$element
        , o = this.options

      title = $e.attr('data-original-title')
        || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

      return title
    }

  , tip: function () {
      return this.$tip = this.$tip || $(this.options.template)
    }

  , arrow: function(){
      return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }

  , validate: function () {
      if (!this.$element[0].parentNode) {
        this.hide()
        this.$element = null
        this.options = null
      }
    }

  , enable: function () {
      this.enabled = true
    }

  , disable: function () {
      this.enabled = false
    }

  , toggleEnabled: function () {
      this.enabled = !this.enabled
    }

  , toggle: function (e) {
      var self = e ? $(e.currentTarget)[this.type](this._options).data(this.type) : this
      self.tip().hasClass('in') ? self.hide() : self.show()
    }

  , destroy: function () {
      this.hide().$element.off('.' + this.type).removeData(this.type)
    }

  }


 /* TOOLTIP PLUGIN DEFINITION
  * ========================= */

  var old = $.fn.tooltip

  $.fn.tooltip = function ( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('tooltip')
        , options = typeof option == 'object' && option
      if (!data) $this.data('tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tooltip.Constructor = Tooltip

  $.fn.tooltip.defaults = {
    animation: true
  , placement: 'top'
  , selector: false
  , template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
  , trigger: 'hover focus'
  , title: ''
  , delay: 0
  , html: false
  , container: false
  }


 /* TOOLTIP NO CONFLICT
  * =================== */

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(window.jQuery);
}


export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer("title")).define("title", ["md"], _title);
  main.variable(observer("intro")).define("intro", ["md"], _intro);
  main.variable(observer("plan")).define("plan", ["plot_plan","raw_html","annotations"], _plan);
  main.variable(observer("annotations")).define("annotations", _annotations);
  main.variable(observer("parallelisation")).define("parallelisation", ["md"], _parallelisation);
  main.variable(observer("other_parts")).define("other_parts", ["md"], _other_parts);
  main.variable(observer("annotations2")).define("annotations2", ["d3"], _annotations2);
  main.variable(observer()).define(["md"], _8);
  main.variable(observer("metadata")).define("metadata", ["get_metadata","raw_html"], _metadata);
  main.variable(observer("references")).define("references", ["md"], _references);
  const child1 = runtime.module(define1);
  main.import("plot_plan", child1);
  main.import("styles1", child1);
  main.import("$", child1);
  main.import("get_svg", child1);
  main.import("d3", child1);
  main.import("get_metadata", child1);
  main.variable(observer("mystyles")).define("mystyles", ["styles1"], _mystyles);
  main.variable(observer("raw_html")).define("raw_html", ["d3"], _raw_html);
  main.variable(observer("bstt")).define("bstt", ["$"], _bstt);
  return main;
}
