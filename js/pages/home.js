define(["start-panel", "convert-calculator", "tools", "tabs", "slider-main"], function(a, o, l, t, e) {
    a.apply("section.top", {
        copyLkBtnsOnMain: !0
    }), e.init(), o.apply("#convertCalculator"),  
    t.apply("#overviewsTabs", {
        tablet: {
            dropDown: 0
        },
        mobile: {
            swipePanels: !0,
            clickTabs: !1
        }
    }), t.apply("#aboutTabs", {
        tablet: {
            dropDown: !0
        },
        mobile: {
            swipePanels: !0,
            clickTabs: !1
        }
    })
});