define(["tabs","config","numeral","portfolios-calculator","widget-slider"],function(t,e,a,o,i){var n=$(".complite_portfel_block .btn-panel .btn"),l=!0;return{apply:function(e){var r=this,s=$(e),c=($('[data-persent="percent"]',s),$('[data-role="currency-selector"]',s)),d=$('[data-role="current-currency"]'),u=$('[data-role="sum-diff-percent"]',s),g=$('[data-role="sum-diff"]',s),f=new i($('[data-role="valuta-slider"]',s)),m=new i($('[data-role="period-slider"]',s)),p=1,h=365,v=180;m.setRange(p,h,v),t.apply(c,{changePanels:!1,mobile:{swipePanels:!1,clickTabs:!0}}),n.click(function(t){t.preventDefault(),$(".complite_portfel_block .complite_portfel").show(),$(this).hide(),l=!1}),s.on("init tab-change  slider-change",function(t){$.when(o.isInit).done(function(){var t=c.data("current-tab");o.calculate(f.getPosition(),t.toUpperCase());var e=o.minAmountInvest(),i=o.maxAmountInvest(),n=o.getAmount();f.setRange(e,i,n);var l=$('[data-role="valuta-slider"] [data-role="sum"] ',s);l.text(a(n.toFixed(0)).afFormat());var p=o.getMostProfitablePortfolio();$("#pick-up-portfolio").attr("href",r.getLinkPageBondCalculator(p)),u.text(a((p.getPotentialIncome()*(m.getPosition()/365)).toFixed(2)).afFormat()),g.text(a((p.getTargetIncome()*(m.getPosition()/365)).toFixed(0)).afFormat());var h;switch(t){case"usd":h="&#036";break;case"eur":h="&#128";break;case"rur":h="₽"}d.html(h),r.renderListPortfolio(m.getPosition(),h)})}),s.trigger("slider-change"),$(f).on("slider-change",function(){s.trigger("slider-change")}),$(m).on("slider-change",function(){var t=$('[data-role="period-slider"] [data-role="period"]',s);t.html(parseInt(this.getPosition())),s.trigger("slider-change")})},renderListPortfolio:function(t,e){var i=this;$.when(o.isInit).done(function(){var r=o.getPortfolios(),s=$("#portfolios-list");s.html(""),r.length<=3?(n.hide(),l=!0):1==l&&n.show(),$.each(r,function(o,l){var r=$($("#template-portfolio").html()),c=l.getID();n.is(":visible")&&o>2&&r.hide(),0==o&&$(".btn-invest").attr("href",i.getLinkPageBondCalculator(l)),r.find(".name-value").html(l.getName(r.find(".volatility-value").data("locale"))),r.find(".min-sum-investment-value").html(a(l.getMinSumInvestment().toFixed(0)).afFormat()),r.find(".annual-income-value").html(a((l.getTargetIncome()*(t/365)).toFixed(0)).afFormat()),r.find(".current-currency").html(e),r.find(".income-percent-value").html(a(l.getPotentialIncome().toFixed(2)).afFormat()),r.find(".volatility-value").html(l.getVolatilityName(r.find(".volatility-value").data("locale"))+" "+r.find(".volatility-value").data("strategie")).addClass(i.getVolatilityClassName(l)),r.find(".link-page-bond-calculator").attr("href",i.getLinkPageBondCalculator(l)),r.find(".portfel-header__bg").find("img").attr({src:"/themes/main/assets/img/portfolio/portfolio-"+c+".jpg",alt:"Portfolio "+c}),s.append(r)})})},getLinkPageBondCalculator:function(t){var a=e.linkPageBondCalculator,o=$.param({amount:parseFloat(t.getAmountInvest().toFixed(2)),portfolioId:t.getID(),currency:t.getCurrency(),language:window.location.pathname.split("/")[1]});return a+"?"+o},getVolatilityClassName:function(t){switch(t.getVolatility()){case PortfolioVolatilityEnum.aggressive:return"agressive";case PortfolioVolatilityEnum.moderate:return"middle";case PortfolioVolatilityEnum.balanced:return"calm"}}}});