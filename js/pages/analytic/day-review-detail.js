sdefine(["exports","share"],function(e,t){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(t);e["default"]=function(){$(".ui-share__button").each(function(e,t){return new s["default"]({"class":"ui-share",button:$(t),list:$(t).siblings(".ui-share__list"),text:$(t).siblings(".ui-share__text"),url:location.href,title:document.title,description:!1,direction:$(t).parent().hasClass("ui-share--left")?"left":"right"})})}});