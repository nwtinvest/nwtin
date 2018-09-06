+function(s){"use strict";function t(t){var e,a=t.attr("data-target")||(e=t.attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"");return s(a)}function e(t){return this.each(function(){var e=s(this),i=e.data("bs.collapse"),o=s.extend({},a.DEFAULTS,e.data(),"object"==typeof t&&t);!i&&o.toggle&&/show|hide/.test(t)&&(o.toggle=!1),i||e.data("bs.collapse",i=new a(this,o)),"string"==typeof t&&i[t]()})}var a=function(t,e){this.$element=s(t),this.options=s.extend({},a.DEFAULTS,e),this.$trigger=s('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};a.VERSION="3.4.0",a.TRANSITION_DURATION=350,a.DEFAULTS={toggle:!0,itemClass:"collapse__item",headerClass:"collapse__header",openClass:"collapse__body--in",closeClass:"collapse__body--collapse",progressClass:"collapse__body--collapsing",closeHeaderClass:"collapse__header--collapsed",toggleAttr:"collapse"},a.prototype.dimension=function(){var s=this.$element.hasClass("width");return s?"width":"height"},a.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass(this.options.openClass)){var t,i=this.$parent&&this.$parent.children("."+this.options.itemClass).children("."+this.options.openClass+", ."+this.options.progressClass);if(!(i&&i.length&&(t=i.data("bs.collapse"),t&&t.transitioning))){var o=s.Event("show.bs.collapse");if(this.$element.trigger(o),!o.isDefaultPrevented()){i&&i.length&&(e.call(i,"hide"),t||i.data("bs.collapse",null));var n=this.dimension();this.$element.removeClass(this.options.closeClass).addClass(this.options.progressClass)[n](0).attr("aria-expanded",!0),this.$trigger.removeClass(this.options.closeHeaderClass).attr("aria-expanded",!0),this.transitioning=1;var l=function(){this.$element.removeClass(this.options.progressClass).addClass(this.options.closeClass+" "+this.options.openClass)[n](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!s.support.transition)return l.call(this);var r=s.camelCase(["scroll",n].join("-"));this.$element.one("bsTransitionEnd",s.proxy(l,this)).emulateTransitionEnd(a.TRANSITION_DURATION)[n](this.$element[0][r])}}}},a.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass(this.options.openClass)){var t=s.Event("hide.bs.collapse");if(this.$element.trigger(t),!t.isDefaultPrevented()){var e=this.dimension();this.$element[e](this.$element[e]())[0].offsetHeight,this.$element.addClass(this.options.progressClass).removeClass(this.options.closeClass+" "+this.options.openClass).attr("aria-expanded",!1),this.$trigger.addClass(this.options.closeHeaderClass).attr("aria-expanded",!1),this.transitioning=1;var i=function(){this.transitioning=0,this.$element.removeClass(this.options.progressClass).addClass(this.options.closeClass).trigger("hidden.bs.collapse")};return s.support.transition?void this.$element[e](0).one("bsTransitionEnd",s.proxy(i,this)).emulateTransitionEnd(a.TRANSITION_DURATION):i.call(this)}}},a.prototype.toggle=function(){this[this.$element.hasClass(this.options.openClass)?"hide":"show"]()},a.prototype.getParent=function(){return s(this.options.parent).find('[data-toggle="'+this.options.toggleAttr+'"][data-parent="'+this.options.parent+'"]').each(s.proxy(function(e,a){var i=s(a);this.addAriaAndCollapsedClass(t(i),i)},this)).end()},a.prototype.addAriaAndCollapsedClass=function(s,t){var e=s.hasClass("in");s.attr("aria-expanded",e),t.toggleClass(this.options.closeHeaderClass,!e).attr("aria-expanded",e)};var i=s.fn.collapse;s.fn.collapse=e,s.fn.collapse.Constructor=a,s.fn.collapse.noConflict=function(){return s.fn.collapse=i,this},s(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(a){var i=s(this);i.attr("data-target")||a.preventDefault();var o=t(i),n=o.data("bs.collapse"),l=n?"toggle":i.data();e.call(o,l)})}(jQuery);