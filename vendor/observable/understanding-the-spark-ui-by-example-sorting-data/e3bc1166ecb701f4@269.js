// https://observablehq.com/@robinl/understanding-the-spark-ui-by-example-sorting-data@269
import define1 from "./35e34eb0f0c5b63d@702.js";

function _title(md){return(
md`# Understanding the Spark UI by example: sorting data`
)}

function _intro(md){return(
md`

### Introduction 

This post uses the output of the Spark UI to explain what happens when you ask Spark to sort a large(ish) dataset. 

For more information about the Spark UI and the dataset we're using, see the [first post](https://robinl.github.io/robinlinacre/left_join/) in this series.  

We're going to execute the following 

\`\`\`sql
SELECT distance, origin, dest
FROM flights
ORDER BY distance DESC
\`\`\`

against the \`flights\` table, which has 123,534,969 records.

You can see the script [here](https://github.com/RobinL/understanding_spark_ui/blob/master/04-sort.ipynb)

### Interactive Spark UI

The following is the contents of the SQL tab in the Spark UI.  I've added additional details to the tooltips to help explain what's going on:



`
)}

function _jobs(d3,html,raw_html)
{
let d = d3.select(html`${raw_html}`).select(".unstyled")
 let contents = d.node().outerHTML
 return html`${contents}`
}


function _plan(plot_plan,raw_html,annotations){return(
plot_plan(raw_html, annotations, false)
)}

function _annotations()
{ 
  


  
  return {
    node_3: `Shuffle the data using rangepartitioning.  To sort a large dataset in parallel across \`n\` worker nodes, it wouldn't be particularly useful to randomly assign data to different worker nodes.   Instead, we need a strategy where each worker node can sort the data, and this results in a globally sorted dataset. This is what a range partitioner does: it tries to partition your dataset into \`spark.sql.shuffle.partition\` partitions of roughly equal ranges.

Each partition will have a min and max row, relative to the given ordering. All rows that are in between min and max in this ordering will reside in the partition. 

This explains why two scans of data are needed, and this SQL plan consists of two jobs (remember each job corresponds to an RDD action).  The first scan is needed to determine the min and max of each partition.  Spark samples (using reservoir sampling, see [here](https://github.com/eBay/Spark/blob/master/core/src/main/scala/org/apache/spark/util/random/SamplingUtils.scala#L33)) the whole dataset to determine min and max values for each partition that should roughly equally split the data.  In the second job, these values are used to shuffle the data.

The actual number of partitions created by the RangePartitioner might not be the same as the partitions parameter, in the case where the number of sampled records is less than the value of partitions.
`,
  node_6: `Read in the original data.  Note that the 'number of output rows' is 247m, twice the input data size of 123.5m rows.  This gives us a clue that the data has been scanned twice. See the tooltip for the 'exchange' node for more details. `
  }
}


function _observations(md){return(
md`## Observations

The most interesting performance-related clues we see from the UI are:

- There are two jobs, despite the job appearing to correspond to a single action.  See the notes on the 'exchange' node to see why there are in fact two actions, and therefore two jobs.
- We can see from the 'scan parquet' node that the data is scanned twice.  See the notes on the 'exchange' node for an explanation.
`
)}

function _annotations2(d3)
{
  let url = "https://gist.githubusercontent.com/RobinL/a82aaa19b13b1da6c60cb28c169c505d/raw/b98ceb36c7af3a6a78871f83221abd8cffa032f1/annotations.json"
 return d3.json(url)
}


function _metadata(get_metadata,raw_html){return(
get_metadata(raw_html)
)}

function _references(md){return(
md`## References and useful resources:

[Stackoverflow: How does Spark achieve sort order](https://stackoverflow.com/questions/32887595/how-does-spark-achieve-sort-order/32888236#32888236)

[Stackoverflow: Number of dataframe partitions after sorting?](https://stackoverflow.com/questions/53786188/number-of-dataframe-partitions-after-sorting)

[The determineBounds method that the range partitioner uses](https://github.com/apache/spark/blob/3da71f2da192276af041024b73e85e0acaac66a4/core/src/main/scala/org/apache/spark/Partitioner.scala#L322)

[The sampling method that the range partitioner uses](https://github.com/apache/spark/blob/16f1b23d75c0b44aac61111bfb2ae9bb0f3fab68/core/src/main/scala/org/apache/spark/util/random/SamplingUtils.scala#L33)

`
)}

function _mystyles(styles1){return(
styles1
)}

function _raw_html(d3)
{
  let url = "https://gist.githubusercontent.com/RobinL/866932e428eb0d7edafdf44263f738d5/raw/dcecbc0bbbc5a28b06e4eb9f28c866550b6c7241/sql_tab.html"
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
  main.variable(observer("jobs")).define("jobs", ["d3","html","raw_html"], _jobs);
  main.variable(observer("plan")).define("plan", ["plot_plan","raw_html","annotations"], _plan);
  main.variable(observer("annotations")).define("annotations", _annotations);
  main.variable(observer("observations")).define("observations", ["md"], _observations);
  main.variable(observer("annotations2")).define("annotations2", ["d3"], _annotations2);
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
