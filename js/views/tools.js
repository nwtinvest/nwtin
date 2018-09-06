define(["underscore","tabs","helpers","config","table-body-scroll","numeral","tradeview"],function(e,t,a,r,n,i,o){function s(e,t){var a=e.split("."),r=a[1].length;return r>=t?Number(e).toFixed(t):Number(e).toFixed(r)}var d,l,u,c,f,p,m,h={useScroll:!1};return{apply:function(i,s,u){o.init();var v=this,g=$("#tools");u||$(document).on("platformChanged",function(){v.apply(i,s,!0)}),h.rows_enum=s;var b,y,x,C=$(i),F=$('[data-role="tabs"]',C),w=F.find(".outer"),R=F.find(".inner"),k={},E=$(".arrow",C);if($("#tabs-trading-tools").find("span").each(function(){x=$(this),y=x.data("tab"),k[y]=x.html()}),!u){m=$("table",C),c=$('[data-role="table-body"]',C),f=e.template(R.find("script").html()),p=e.template(c.find("script").html()),C.on("init update tab-change",function(e){if("tab-change"==e.type)return d=F.data("current-tab"),v.render(),m.addClass("tab-changed"),void setTimeout(function(){m.removeClass("tab-changed")},100);var n=[];n.push("XPTRUR"),n.push("XPDRUR"),n.push("XAGRUR"),n.push("XAURUR"),$.ajax({url:r.getQuotesUrl,success:function(r){o.update(r);var i=r.message;l=[];for(var s=0,d=i.length;s<d;s++){var u=i[s];l[u.group]||(l[u.group]=[]),n.indexOf(u.name)==-1&&l[u.group].push(u)}if(v.render(!0),g.hasClass("loader")&&g.removeClass("loader"),"init"==e.type){R.empty();for(var c in l)c in k&&R.append(f({id:c,name:k[c]}));t.apply(F,{changePanels:!1,mobile:{swipePanels:!1,clickTabs:!1}}),b=F.find(".item"),"init"==e.type&&(a.isMobile()||a.isTablet())&&v.mobileInit(C,F,b,m)}},error:function(e){},complete:function(){}})}),E.on("click",function(e){var t=w.scrollLeft(),a=2*$(e.target).is(".right")-1;w.stop().animate({scrollLeft:t+400*a},300)}),h.useScroll&&n.apply(m);setInterval(function(){C.trigger("update")},3e3)}C.triggerHandler("init")},calcuSpread:function(e,t,a,r){return"CFD\\Bonds"==e?"12.50":"Forex\\Major"==e?parseFloat((t-a)*Math.pow(10,r-1),10).toFixed(2):parseFloat(t-a,10).toFixed(2)},render:function(e){c.empty();var t=0;for(var a in l[d]){if(t++,t>h.rows_enum)break;var r=l[d][a],n=u[d][a],o=100-r.last_price/(r.bid/100),f=!(r.name.length<=3);o=(isNaN(o)?0:o).toFixed(3),c.append(p({name:r.symbol_name,spread:r.spread,price:f?s(r.bid,5):i(r.bid).afFormat(),diffArea:e&&n.bid!=r.bid?"diff-area":"",diff:(o>0?"+":"")+o+"%",aff:o>=0?"aff":""}))}u=l,m.trigger("pull"),setTimeout(function(){c.find(".diff-area").removeClass("diff-area")},100)},mobileInit:function(e,t,a,r){function n(e){var t=e.touches[0].pageX-i;(t<-50||t>50)&&d.trigger("swipe",[t])}var i,o,s=(t.width(),0),d=e;a.eq(0);if(t.data("markers"))o=t.data("markers");else{o=$("<div/>",{"class":"markers"});for(var l=0;l<a.length;l++)o.append($("<span/>",{"class":"item"}));t.data("markers",o)}var u=$(".item",o);u.removeClass("current"),u.eq(0).addClass("current"),d.after(o),e.data("handlersExists")||(d[0].addEventListener("touchstart",function(e){i=e.touches[0].pageX,d[0].addEventListener("touchmove",n,!1)},!1),d[0].addEventListener("touchend",function(e){d[0].removeEventListener("touchmove",n,!1)},!1),d.on("swipe",function(e,t){d[0].removeEventListener("touchmove",n,!1),s=Math.min(a.length-1,Math.max(0,s-(t>0?1:-1))),a.eq(s).triggerHandler("init"),u.removeClass("current"),u.eq(s).addClass("current")}),t.data("handlersExists",!0))}}});