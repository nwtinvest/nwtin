define(["start-panel", "tabs", "tradeview", "invest-slider"], function(e, a, i) {
    i.apply(), e.apply("section.trading"), a.apply("#overviewsTabs", {
        tablet: {
            dropDown: !0
        },
        mobile: {
            swipePanels: !0,
            clickTabs: !1
        }
    })
});