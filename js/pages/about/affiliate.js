define(["start-panel", "invest-calculator", "tabs", "tradeview", "tabs-switch", "toggle-elements", "bond-lib"], function(a, e, l, t, p) {
    t.apply(), a.apply("section.trading"), e.apply("#convertCalculator"), l.apply("#overviewsTabs", {
        tablet: {
            dropDown: !0
        }
        , mobile: {
            swipePanels: !0, clickTabs: !1
        }
    }
    ), l.apply("#overviewsTabs1", {
        tablet: {
            dropDown: !0
        }
        , mobile: {
            swipePanels: !0, clickTabs: !1
        }
    }
    ), p.apply()
}

);