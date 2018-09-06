define(["router", "main-menu", "tradeview", "disclaimer-noscroll", "footer", "partner"], function(a, t, e, i, s) {
    function o() {
        var a = localStorage.getItem("RiskWarning"),
            t = window.location.pathname;
        return !(!a || t == "/" + localeSite) || (r.removeClass("risk-warning--none"), !1)
    }
    var n = $("#wrapper"),
        d = n.css("min-width");
    $(window).on("resize", function() {
        var a = n.css("min-width");
        d != a && ($(document).trigger("platformChanged"), d = a)
    }), t.apply($("header")), i.apply(".footer__disksman", ".footer"), s.init(), a.registerRoutes({
        home: {
            path: /^\/(\w{0,2})?(\/)?$/i,
            moduleId: "pages/home"
        },
        investments: {
            path: /\/investments/i,
            moduleId: "pages/analytic/premium"
        },
        investments: {
            path: /\/investments/i,
            moduleId: "pages/investments/deposit"
        },
        supportFaq: {
            path: /\/support\/faq/i,
            moduleId: "pages/support/faq"
        },
        supportGlossary: {
            path: /\/support\/glossary/i,
            moduleId: "pages/support/faq"
        },
        supportDepositWithdrawal: {
            path: /\/support\/deposit-withdrawal/i,
            moduleId: "pages/support/depositWithdrawal"
        },
        supportAnaliticpay: {
            path: /\/support\/pay-analytics/i,
            moduleId: "pages/support/depositWithdrawal"
        },
        afiliateProgram: {
            path: /\/about\/affiliate/i,
            moduleId: "pages/affiliateProgram"
        },
        blog: {
            path: /\/blog/i,
            moduleId: "pages/blog"
        },
        analyticsPremium: {
            path: /\/analytic\/premium/i,
            moduleId: "pages/analytic/premium"
        },
        analyticsPremium: {
            path: /\/analytic\/premium/i,
            moduleId: "pages/investments/deposit"
        },
        doc: {
            path: /\/doc/i,
            moduleId: "pages/about/documents"
        }
        
        
        
    }).init(), void 0 === a.activeRoute.active && e.apply(), $(".header__main__about").addClass("init"), $(".header__main__rel-and-lang").addClass("init"), $(".header__main__menu > li").not(".lk").addClass("init"), $(".title", "section.top").addClass("init"), $(".sub-title", "section.top").addClass("init"), $(".links", "section.top").addClass("init"), $(".links", "section.trading").addClass("init");
    var r = $(".risk-warning"),
        p = $(".risk-warning__close");
    p.on("click", function() {
        r.addClass("risk-warning--none"), localStorage.setItem("RiskWarning", !0)
    }), o()
});