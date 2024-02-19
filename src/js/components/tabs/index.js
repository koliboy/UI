!function () {
    function foucs(from, to) {
        var rect = $reactFrom(from, to);
        var top = rect.top + from.scrollTop
        var left = rect.left + from.scrollLeft;
        from.scroll({ top: top, left: left, behavior: "smooth", });

    }
    function active(btn) {
        btn.setAttribute("tab-active", "t");
        var t = $qs(btn.getAttribute("tab-t")) || undefined
        if (t) {
            t.setAttribute("tab-active", "t");
            var focus = btn.getAttribute("tab-f-t");
            if (focus) {
                foucs(t, t.querySelector(focus));
            }
        }
        try {
            var tab_chnage = new CustomEvent('change');
            var label = btn.getAttribute("tab-label");
            label == null ? tab_chnage.label = null : tab_chnage.label = label
            this.dispatchEvent(tab_chnage);
        } catch (err_) {
            null;
        }

        var collps = Array.from(this.querySelectorAll(".tab")).filter(t => t != btn);
        collps.forEach(function (rm) {
            rm.removeAttribute("tab-active");
            var t2 = $qs(rm.getAttribute("tab-t")) || undefined;
            if (t2) {
                t2.removeAttribute("tab-active");
            }
        })

    }

    setInterval(function () {
        var tabs = $qsall(".tabs");
        tabs.forEach(function (e) {
            if (e.getAttribute("set-tabs") == null) {
                e.setAttribute("set-tabs", "t");


                var btntab = e.querySelectorAll(".tab");


                btntab.forEach(function (e2) {
                    var event = e2.getAttribute("tab-e") || "click";
                    e2.addEventListener(event, function () {
                        active.call(e, this);
                    });

                    e2.getAttribute("tab-d") != null ? active.call(e, e2) : false;

                });

                if (e.getAttribute("tabs-url") == "hash") {
                    window.addEventListener('hashchange', function () {
                        var match = e.querySelector(`[href="${window.location.hash}"]`);
                        match != null ? active.call(e, match) : null;
                    });
                }
            }
        });
    });

}();
