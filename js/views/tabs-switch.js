"use strict";
define([], function() {
    function t(t, n) {
        return n = n || 1, t.slice(n)
    }

    function n(n, e, a) {
        var i = n.find(a.content);
        if (i.length) {
            var s = t(a.contentItemActive);
            i.find(a.contentItemActive).removeClass(s), i.find("[data-type='" + e + "']").each(function(t, n) {
                var e = $(n);
                t || e.trigger("click"), e.addClass(s)
            })
        }
    }

    function e(e, a, i) {
        var s = i.tabsItemClassActive,
            c = t(s);
        a.on("click", function(t) {
            var a = $(this);
            e.find(s).removeClass(c), a.addClass(c), n(e, a.data("type-tab"), i)
        })
    }
    return {
        apply: function(t, n) {
            var a = t || ".switch-container";
            n = $.extend(!0, {
                parentClass: a,
                tabsClass: a + "__tab",
                tabsItemClass: a + "__tab-item",
                tabsItemClassActive: a + "__tab-item--active",
                content: a + "__content",
                contentItem: a + "__content-item",
                contentItemActive: a + "__content-item--active"
            }, n);
            var i = $(n.parentClass),
                s = i.find(n.tabsClass),
                c = i.find(n.content);
            i.length && s.length && c && e(i, s.find(n.tabsItemClass), n)
        }
    }
});