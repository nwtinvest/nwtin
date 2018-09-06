define(["tradeview", "tag-formatter", "share"], function(a, r, e) {
    a.apply();
    var t = new r(".blog-detail__body");
    e.init();
    var i = $(".blog-preview__overlay");
    i.each(function(a, r) {
        var e = $(r),
            t = n(e.data("background")),
            i = t.r + "," + t.g + "," + t.b;
        $direction = e.data("bgdirection"), e.css({
            background: "linear-gradient(to " + $direction + ", rgba(" + i + ",1) 50%, rgba(" + i + ",0) 80%)"
        })
    })
});