import define1 from "./146f352f1166f0d1@2202.js";

function _title(md){return(
md`# Spark UI SQL customise annotations`
)}

function _md_1(md){return(
md`Paste the whole of the html page from the Spark SQL tab of the spark UI here (an example is provided)`
)}

function _raw_html(textarea,sample_html){return(
textarea({"value":sample_html, "rows": 6, width: "100%"})
)}

function _output_svg(plot_plan,raw_html,additional_annotations){return(
plot_plan(raw_html, additional_annotations)
)}

function _additional_annotations()
{return {
  "cluster_11": "hello",
  "node_13": "Read in the data"
}}


function _md_glossary(md,glossary_keys,html,glossary)
{
  return md`
  
  ## Glossary

  ${glossary_keys.map(k => html`<h3 class="title_case">${k}</h3><p>${md`${glossary[k].definition}`}</p>`)}
`
}


function _metadata(d3,html,raw_html)
{
   let metadata_html = d3.select(html`${raw_html}`).select("#plan-viz-metadata")
    metadata_html = metadata_html.node().outerHTML                                               
  return html`${metadata_html}`
  
}


function _get_metadata(d3,html){return(
function get_metadata(raw_html) {
   let metadata_html = d3.select(html`${raw_html}`).select("#plan-viz-metadata")
    metadata_html = metadata_html.node().outerHTML                                               
  return html`${metadata_html}`
}
)}

function _get_svg(d3,html){return(
function(raw_html) {
   let svg_text = d3.select(html`${raw_html}`).select("#plan-viz-graph svg")
svg_text = svg_text.attr("class", "sparkui")
svg_text = svg_text.node().outerHTML
return svg_text
  
}
)}

function _plot_plan(get_svg,svg,d3,md,get_text_content_spaces,get_definitions_from_text,html,$){return(
function plot_plan(raw_html, additional_annotations, include_id=false){
  let raw_svg = get_svg(raw_html)
  let plan = svg`${raw_svg}`
  
  let elems = d3.select(plan)
  elems = elems.attr("class", "sparkui")
  
  
  elems.selectAll(".node").on("mouseover", function() {
    debugger;

    let node_class_as_text = [...this.classList].find(d => d.includes("node_"))
    let node_id_as_int = + node_class_as_text.match(/\d+/)[0] 
    
    let custom_text = ""
    if (node_class_as_text in additional_annotations) {
      custom_text = md`${additional_annotations[node_class_as_text]}`
    }
    
    let node_contents_text = get_text_content_spaces(this)
    
    let original_tooltip_text
    try {
      original_tooltip_text = d3.select("#plan-meta-data-" + node_id_as_int).text()}
    catch(err)  {
      original_tooltip_text = ""
    }
    
    let defs = get_definitions_from_text(node_contents_text + " " + original_tooltip_text)
    
    let final_text = html`${custom_text} ${defs} <p><strong>Original tooltip: </strong>${original_tooltip_text}</p>`
    
    if (include_id) {
      final_text = html`${node_class_as_text} ${final_text}`
    }
    
    var domNode = d3.select(this).node();
    
      $(domNode).tooltip({
        title: final_text, trigger: "manual", container: "body", placement: "right", html: true
      });
      $(domNode).tooltip("show");
    
    
  }).on('mouseout', function(d) {
      var domNode = d3.select(this).node();
      $(domNode).tooltip("destroy");
    })
  
  
  elems.selectAll(".cluster").on("mouseover", function() {


    let cluster_class_as_text = [...this.classList].find(d => d.includes("cluster_"))
    let cluster_id_as_int = + cluster_class_as_text.match(/\d+/)[0] 
    
    
    let custom_text = ""
    if (cluster_class_as_text in additional_annotations) {
      custom_text = md`${additional_annotations[cluster_class_as_text]}`
    }
    
    // let cluster_contents_text = this.textContent
    let cluster_contents_text = get_text_content_spaces(this)
   
    let contents = html`${custom_text} ${get_definitions_from_text(cluster_contents_text)}`
    
    if (include_id) {
      contents = html`${cluster_class_as_text} ${contents}`
    }
    
    var domNode = d3.select(this).node();
    
      $(domNode).tooltip({
        title: contents, trigger: "manual", container: "body", placement: "right", html: true
      });
      $(domNode).tooltip("show");
    
    
  }).on('mouseout', function(d) {
      var domNode = d3.select(this).node();
      $(domNode).tooltip("destroy");
    })
  
  return plan
  
  

}
)}

function _get_text_content_spaces(){return(
function get_text_content_spaces(node) {
  
    let node_contents_text = ""
    
    function iterate_and_concat_text_content (node) {
      for (var i = 0; i < node.childNodes.length; i++) {

        var child = node.childNodes[i];
        iterate_and_concat_text_content(child);

        if (!(child.firstChild)) {
          node_contents_text += child.textContent + " "
        }
       }
    }
  iterate_and_concat_text_content(node)

  return node_contents_text
}
)}

function _get_definitions_from_text(glossary_keys,glossary,html){return(
function get_definitions_from_text(text) {
 
  let definitions_needed = []
  glossary_keys.forEach(key => {
    
    if (text.toLowerCase().includes(`${key} `) || text.toLowerCase().includes(`${key}(`) ) {
        definitions_needed.push(key)
        }
  })

  
  let html_elems = definitions_needed.map(def => {
    let short_def = glossary[def]["short_definition"]
    let key = glossary[def]["key"]
    return html`<p><strong class="title_case">${key}</strong>: ${short_def}</p>`  
  })

  
  return html_elems
  
}
)}

function _glossary(d3)
{
  let url = "https://raw.githubusercontent.com/RobinL/spark_glossary/master/glossary.json"
 return d3.json(url)
}


function _glossary_keys(glossary){return(
Object.keys(glossary)
)}

function _d3(require){return(
require("d3")
)}

function _sample_html(d3)
{
  let url = "https://gist.githubusercontent.com/RobinL/439154b37f6806ebf4197a90a04e0923/raw/2ac69e42a88c0364f86094e96789548adbef389d/spark_ui_html.html"
 return d3.text(url)
}


function _$(require){return(
require("jquery")
)}

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


function _styles1(html){return(
html`<style> 
        .sparkui {
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 11.844px;
    font-weight: bold;
    line-height: 14px;
        }
 .sparkui {
  font-weight: normal;
  text-shadow: none;
}

svg.sparkui  g.cluster rect {
  fill: #A0DFFF;
  stroke: #3EC0FF;
  stroke-width: 1px;
}

 svg.sparkui g.node rect {
  fill: #C3EBFF;
  stroke: #3EC0FF;
  stroke-width: 1px;
}

/* Highlight the SparkPlan node name */
svg.sparkui text :first-child {
  font-weight: bold;
}

svg.sparkui path {
  stroke: #444;
  stroke-width: 1.5px;
}

/* Breaks the long string like file path when showing tooltips */
.tooltip-inner {
  word-wrap:break-word;
} 



.tooltip {font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;}

.tooltip code {
font-size:11px
}

.tooltip{position:absolute;z-index:1030;display:block;visibility:visible;font-size:11px;line-height:1.4;opacity:0;filter:alpha(opacity=0);}.tooltip.in{opacity:0.8;filter:alpha(opacity=80);}
.tooltip.top{margin-top:-3px;padding:5px 0;}
.tooltip.right{margin-left:3px;padding:0 5px;}
.tooltip.bottom{margin-top:3px;padding:5px 0;}
.tooltip.left{margin-left:-3px;padding:0 5px;}
.tooltip-inner{max-width:400px;padding:8px;color:#ffffff;text-align:left;text-decoration:none;background-color:#000000;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;}
.tooltip-arrow{position:absolute;width:0;height:0;border-color:transparent;border-style:solid;}
.tooltip.top .tooltip-arrow{bottom:0;left:50%;margin-left:-5px;border-width:5px 5px 0;border-top-color:#000000;}
.tooltip.right .tooltip-arrow{top:50%;left:0;margin-top:-5px;border-width:5px 5px 5px 0;border-right-color:#000000;}
.tooltip.left .tooltip-arrow{top:50%;right:0;margin-top:-5px;border-width:5px 0 5px 5px;border-left-color:#000000;}
.tooltip.bottom .tooltip-arrow{top:0;left:50%;margin-left:-5px;border-width:0 5px 5px;border-bottom-color:#000000;}




.title_case {
text-transform: capitalize
}



</style>`
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer("title")).define("title", ["md"], _title);
  main.variable(observer("md_1")).define("md_1", ["md"], _md_1);
  main.variable(observer("viewof raw_html")).define("viewof raw_html", ["textarea","sample_html"], _raw_html);
  main.variable(observer("raw_html")).define("raw_html", ["Generators", "viewof raw_html"], (G, _) => G.input(_));
  main.variable(observer("output_svg")).define("output_svg", ["plot_plan","raw_html","additional_annotations"], _output_svg);
  main.variable(observer("additional_annotations")).define("additional_annotations", _additional_annotations);
  main.variable(observer("md_glossary")).define("md_glossary", ["md","glossary_keys","html","glossary"], _md_glossary);
  main.variable(observer("metadata")).define("metadata", ["d3","html","raw_html"], _metadata);
  main.variable(observer("get_metadata")).define("get_metadata", ["d3","html"], _get_metadata);
  main.variable(observer("get_svg")).define("get_svg", ["d3","html"], _get_svg);
  main.variable(observer("plot_plan")).define("plot_plan", ["get_svg","svg","d3","md","get_text_content_spaces","get_definitions_from_text","html","$"], _plot_plan);
  main.variable(observer("get_text_content_spaces")).define("get_text_content_spaces", _get_text_content_spaces);
  main.variable(observer("get_definitions_from_text")).define("get_definitions_from_text", ["glossary_keys","glossary","html"], _get_definitions_from_text);
  main.variable(observer("glossary")).define("glossary", ["d3"], _glossary);
  main.variable(observer("glossary_keys")).define("glossary_keys", ["glossary"], _glossary_keys);
  main.variable(observer("d3")).define("d3", ["require"], _d3);
  main.variable(observer("sample_html")).define("sample_html", ["d3"], _sample_html);
  main.variable(observer("$")).define("$", ["require"], _$);
  main.variable(observer("bstt")).define("bstt", ["$"], _bstt);
  main.variable(observer("styles1")).define("styles1", ["html"], _styles1);
  const child1 = runtime.module(define1);
  main.import("slider", child1);
  main.import("textarea", child1);
  return main;
}
