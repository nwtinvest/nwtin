define(["helpers"],function(e){return{apply:function(i){var r=$(i);if(e.isMobile()&&r.length){var t=r.find(".title"),a=r.find('[data-role="spoiler"]');a.data("hided",!0).addClass("hided"),t.css("background","url('./img/icon-select-arrow.png') right 0 top 10px no-repeat"),t.on("click",function(){$(this).css("background","url('./img/icon-select-arrow.png') right 0 top 10px no-repeat"),a.data("hided")?($(this).css("background","url('./img/icon-select-arrow-rewerse.png') right 0 top 10px no-repeat"),a.data("hided",!1).removeClass("hided")):($(this).css("background","url('./img/icon-select-arrow.png') right 0 top 10px no-repeat"),a.data("hided",!0).addClass("hided"))})}}}});