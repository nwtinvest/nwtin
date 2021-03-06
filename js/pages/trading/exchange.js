define(["exchange-slider", "exchange-tool", "tabs", "start-panel", "tradeview", "interactive-bg", "collapse", "transition"], function(e, t, i, n, a, c,) {
    a.apply();
    var r = new e(".benefits__row", {
        adaptiveHeight: !0
    });
    r.init();
    var o = new e(".currency-exchange__slider", {
        adaptiveHeight: !0
    });
    o.init();
    var l = new t;
    l.init(), i.apply("#exchange-type", {
        tablet: {
            dropDown: !0
        },
        mobile: {
            swipePanels: !0,
            clickTabs: !1
        }
    }), $("#exchange-type").on("tab-change", function(e) {
        setTimeout(function() {
            o.reload()
        }, 0)
    }), n.apply(".interactive-bg__video");
    var p = new c(".interactive-content", ".interactive-bg__gradient");
    p.init()
});