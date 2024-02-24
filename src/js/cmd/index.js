!function () {
    setInterval(function () {
        var cmd = $qsall('[cmd-k]');
        cmd.forEach(function (c) {
            if (c.getAttribute("set-cmd") == null) {
                var k = c.getAttribute("cmd-k", "t");
                var conditions = c.getAttribute("cmd-if") || undefined;
                var prevent = c.getAttribute("cdm-p") == "true" ? true : false || false;
                var event_handle = c.getAttribute("cmd-event") || undefined;
                $cmd(k, conditions, prevent, function (event) {
                    if (event_handle) {
                        if (typeof c[event_handle] == 'function') {
                            c[event_handle]();

                        }
                    }
                })

            }
        });

    });

}();
