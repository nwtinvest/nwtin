define(["underscore","tabs","config","table-body-scroll","tradeview"],function(e,t,r,a,n){return{apply:function(e){function t(e,t,r,a){for(var n in e)if(t.indexOf(e[n].name)!=-1||"others"==a){var d=new Date,o=(e[n].name,e[n].symbol_name),i=0,s=0,u=0;switch(d=(d+" ").slice(15,24),i=e[n].bid,s=e[n].ask,u=e[n].spread,a){case"exchange":i=parseFloat(Number(i)-.1,10).toFixed(3),s=parseFloat(Number(s)+.1,10).toFixed(3);break;case"forward":switch(e[n].name){case"DECRUR":d="15.12.2016";break;case"JUNRUR":d="15.06.2017";break;case"SEPRUR":d="15.09.2016";break;case"MARRUR":d="15.03.2017"}}var p=e[n].last_price,l=100-p/(i/100);l=(isNaN(l)?0:l).toFixed(2);var c=(i-p).toFixed(5),R="+",f="green";switch(l>0?(R="+",f="green"):0===l?(R=" ",f="green"):(R="",f="red"),a){case"exchange":r.append("<tr><td>"+o+"</td><td>"+i+"</td><td>"+s+"</td><td>"+u+"</td><td>"+R+l+"%</td><td>"+d+"</td></tr>");break;case"popular":var h=$($("#template-quotes-tr").find("table").html());h.find(".pair-name").html(o),h.find(".bid-price").html(i),h.find(".ask-price").html(s),h.find(".spred").html(u),h.find(".relative-change").addClass(f).html(R+l+"%"),h.find(".absolute-change-pt").addClass(f).html(R+c),h.find(".time").html(d),r.append(h.html());break;case"forward":case"others":r.append("<tr><td>"+o+"</td><td>"+i+"</td><td>"+u+"</td><td>"+R+l+"%</td><td>"+d+"</td></tr>")}}}function a(){var a=[];a.push("XPTRUR"),a.push("XPDRUR"),a.push("XAGRUR"),a.push("XAURUR"),$.ajax({url:r.getQuotesUrl,success:function(r){n.update(r);var o=r.message;byGroup=[];for(var i=0,s=o.length;i<s;i++){var u=o[i];byGroup[u.group]||(byGroup[u.group]=[]),a.indexOf(u.name)==-1&&byGroup[u.group].push(u)}e.forEach(function(e){var r=e[0],a=e[1],n=e[2],o=$(r),i=o.find("tbody"),s=[];if(i.find("tr").detach(),"Forex\\Major"===n||"Forex\\Crosses"===n||"Indicative"===n||"Forex\\Selt"===n){for(var u in byGroup[n])["DECRUR","JUNRUR","SEPRUR","MARRUR"].indexOf(byGroup[n][u].name)==-1&&s.push(byGroup[n][u].name);t(byGroup[n],s,i,"popular")}"Forex\\Obmen"===n&&(t(byGroup["Forex\\Selt"],["EURRUR","USDRUR"],i,"exchange"),t(byGroup["Forex\\Major"],["EURUSD"],i,"exchange")),"Forex\\Selt\\Forward"===n&&t(byGroup["Forex\\Selt"],["DECRUR","JUNRUR","SEPRUR","MARRUR"],i,"forward"),"CFD\\Bonds"!==n&&"CFD\\Equities RU"!==n&&"CFD\\Equities USA"!==n&&"CFD\\Equities UK"!==n&&"Metals"!==n&&"CFD\\Commodities Futures"!==n&&"CFD\\Bonds Int Futures"!==n&&"CFD\\Stock Indices"!==n&&"CFD\\Stock Indices Futures"!==n||t(byGroup[n],[],i,"others"),d(o,a)})},error:function(e){},complete:function(){}})}function d(e,t){var r=e.find("tbody tr:nth-child("+t+")");if(r.next().length&&!r.parent().parent().hasClass("invalid")){r.nextAll("tr").hide();var a=r.parent().parent().parent().find(".more-link");a.show(),a.click(function(e){e.preventDefault(),r.parent().parent().addClass("invalid"),r.nextAll("tr"),r.nextAll("tr").show(),a.hide()})}}a(),n.init();setInterval(function(){a()},5e3)}}});