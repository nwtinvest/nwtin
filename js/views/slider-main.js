define(["helpers","jquery.bxslider","trading-currencies"],function(e,i,t){function n(e,i,t){t=t||400,i="."+i,e.find(i).fadeIn(t)}function r(e,i,t){t=t||400,i="."+i,e.find(i).fadeOut(t)}function o(){var e=g.length;if(0==e)return!1;for(var i=0;i<e;i++)a($(g[i]));return!0}function a(e){var i,t=e.data("noloop")?"":"loop";i=$('<video class="video-slide '+e.data("class")+'-video" '+t+'><source src="'+e.data("video-src")+'"></video>'),S.push(i),d(i),p.after(i)}function d(e){var i,t=1.54;e.bind("loadedmetadata",function(){t=this.videoWidth/this.videoHeight;var e=$(this);i=v.width()/t>parseInt(v.height()),i?e.css({width:"100%",height:"auto",left:"0px"}):e.css({width:"auto",height:"100%",left:"calc(50vw - "+e.width()/2+"px)"})})}function s(){if(m||w)return!1;var e,i=S.length;if(0==i&&(e=o()),!e)return!1;for(var t=0;t<i;t++)d(S[t]);return!0}function u(e){return!!e&&(e.play(),!0)}function f(e,i){return!!e&&(i=i||0,e.pause(),e.currentTime=i,!0)}function c(e,i,t){return!!e&&(i=i||400,t=t||400,setTimeout(function(){$(e).fadeIn(i)},t),!0)}function l(e,i){return!!e&&(i=i||400,$(e).fadeOut(i),!0)}t.apply(".slider-main-currencies","section.top");var v,h,p,b,g,m=e.isMobile(),w=e.isTablet(),x=600,S=[];return{init:function(i,t,a,d){b=i||$(".bxslider"),h=t||$(".bg-slider"),v=a||$(".top.flex_container"),p=d||$(".video_gradient"),g=b.find("li"),b.bxSlider({mode:"fade",onSliderLoad:function(e){var i=$(g[e]);if($(".title","section.top").remove(),$(".sub-title","section.top").remove(),v.addClass("slider-main"),n(h,i.data("class"),x),b.addClass("init"),m||w)return!0;o();var t=S[e];t&&(c(t[0],x),u(t[0]))},onSlideBefore:function(e,i,t){return r(h,$(g[i]).data("class"),x),n(h,e.data("class"),x),m||w?($(".video-slide").remove(),S=[],!0):void(0==S.length&&o())},onSlideAfter:function(e,i,t){if(m||w)return!0;var n=S[i],r=S[t];n&&(l(n[0],x),f(n[0],0)),r&&(c(r[0],x),u(r[0]))}}),$(window).on("resize",function(){m=e.isMobile(),w=e.isTablet(),s()})}}});