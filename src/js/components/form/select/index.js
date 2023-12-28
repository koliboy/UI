void function () {
    function adjustVisibility(contents, self) {
        /*position:absolute or right: 0; in css*/
        contents.style.top = `${self.getBoundingClientRect().height + 3}px`
        contents.style.left = 0;
        var window_over = contents.getBoundingClientRect();
        if (window_over.bottom > window.innerHeight && (contents.getBoundingClientRect().height + 10 < self.getBoundingClientRect().top)) {
            contents.style.top = `-${contents.getBoundingClientRect().height + 3}px`;

        }

        if (window_over.right > window.innerWidth) {
            contents.style.left = `-${(window_over.right - window.innerWidth) + 30}px`

        }
    }

    function iconSet(self, option) {
        if (self.getAttribute("selectType") == "left-icon") {
            try {
                var name = self.getAttribute("name");
                var datalist = document.querySelector(`datalist[name="${name}"]`);
                var imgORsvg = datalist.querySelector(`data[value="${option.getAttribute("value")}"]`);
                option.querySelector('[form-input-left-icon]').innerHTML = imgORsvg.innerHTML
            } catch (e) {
                /**/
            }

        }
    }
    function unsCheckAll(elment) {
        var a = Array.from(elment.querySelectorAll("o[select-ul]")).filter(function (f) { if (f.getAttribute("selected") != null) { return f } })

        if (a.length == 0) { /*no selected*/

            elment.setAttribute("value", "")
            elment.setAttribute("placeholder_view", null)
            elment.querySelector('[input] [form-text-width]').textContent = elment.getAttribute('placeholder')
            if (elment.getAttribute("selectType") == "left-icon") {
                elment.querySelector('[input] [form-input-left-icon]').innerHTML = input_icon_def;
            }

        }
        return a.length
    }

    function newselected(element, e) {
        var self = element;
        var set_value = self.getAttribute('value')
        var options = e.querySelectorAll("[options] [select-ul]");

        if (e.getAttribute("filter") == null) {
            e.querySelector('[input] [form-text-width]').textContent = self.textContent
        }


        self.querySelector("[form-input-right-icon]").innerHTML = path_selected
        if (self.getAttribute('value')) {
            e.setAttribute('value', set_value)
        } else {
            e.setAttribute('value', "")
        }
        self.setAttribute("selected", true)
        if (e.getAttribute("multiple") == null) {
            options.forEach(function (us) {
                if (self != us) {
                    us.querySelector("[form-input-right-icon]").innerHTML = path_selecte
                    us.removeAttribute("selected");

                }
            });
        }


        if (e.getAttribute("selectType") == "left-icon") {
            e.querySelector('[input] [form-input-left-icon]').innerHTML = self.querySelector('[form-input-left-icon]').innerHTML
        }

        e.removeAttribute("placeholder_view");
    }

    function unselected(self, e) {
        self.removeAttribute("selected")
        self.querySelector("[form-input-right-icon]").innerHTML = path_selecte

    }

    function adjustSizeDesktop(self) {

        if (self.getAttribute("options-width") && (768 <= window.innerWidth)) {  /*dekstop only*/

            self.querySelector("[contents]").style.width = `${self.getAttribute("options-width")}`
        } else {
            self.querySelector("[contents]").style.width = "100%"
        }
    }

    var selectOpen = function (self) {
        self.setAttribute("focus", true);
        self.setAttribute("open", true);
        /* var topDefult = self.querySelector("[input]").getBoundingClientRect().height
          self.querySelector("[contents]").style.top =`${topDefult+3}px`*/
        adjustVisibility(self.querySelector("[contents]"), self);
        adjustSizeDesktop(self)
        window.addEventListener('resize', function () {
            adjustVisibility(self.querySelector("[contents]"), self);
            adjustSizeDesktop(self);
        });


    }

    var selectClose = function (self) {
        self.removeAttribute("focus");
        self.removeAttribute("open");
        var mobile_view = $action_btm(self.querySelector("mobile"));
        mobile_view.close(); //agin close up when click to close desktop

    }
    var selectEvent = function (e) { /*you sould load function after chnage any content in Element fragment*/

        /*select*/
        e.querySelectorAll("[options] [select-ul]").forEach(function (e2) {
            if (e2.getAttribute("event-steup") == null) {
                if (e2.getAttribute("disabled") == null) {
                    e2.addEventListener("click", function () {

                        var options = e.querySelectorAll("[options] [select-ul]");
                        var mobile_close = $action_btm(e.querySelector("mobile"));
                        if (e.getAttribute("multiple") == null) {



                            if (this.getAttribute('selected') == null || e.getAttribute('required') != null) {
                                newselected(this, e);



                            } else {
                                unselected(this, e)
                                unsCheckAll(e)

                            }
                            //selectClose(e);  
                            if (e.getAttribute("open") == "true") {
                                e.querySelector("[input]").click()
                            }


                        } else {

                            if (this.getAttribute('selected') == null) {
                                newselected(this, e);
                            } else if (unsCheckAll(e) != 1 || e.getAttribute('required') == null) {
                                unselected(this, e)
                            }

                            if (e.getAttribute("size") != null) {

                                if (unsCheckAll(e) > e.getAttribute("size")) { //max 
                                    for (let max = 0; options.length > max; max++) {
                                        if (options[max] != this && options[max].getAttribute('selected') !== null) {
                                            unselected(options[max], e);
                                            break;
                                        }
                                    }
                                }
                                if (unsCheckAll(e) == e.getAttribute("size")) {
                                    if (e.getAttribute("open") == "true") {
                                        e.querySelector("[input]").click()
                                    }
                                }
                                e.querySelector("[multiple-remain] [remain]").textContent = e.getAttribute("size");
                                e.querySelector("[multiple-remain] [done]").textContent = unsCheckAll(e)

                            }


                            var v = [], t = [], o_ob = [];

                            options.forEach(function (al) {
                                if (al.getAttribute('selected') != null) {
                                    v.push(al.getAttribute("value"))
                                    t.push(al.querySelector('[form-text-width]').textContent)
                                    o_ob.push(al)
                                }

                            });


                            if (e.getAttribute("filter") == null) {
                                e.querySelector('[input] [form-text-width]').textContent = t.toString()


                            }

                            e.setAttribute("value", v.toString())
                            if (o_ob.length > 0 && e.getAttribute("selectType") == "left-icon") {
                                e.querySelector('[input] [form-input-left-icon]').innerHTML = o_ob[o_ob.length - 1].querySelector('[form-input-left-icon]').innerHTML
                            }

                            unsCheckAll(e)

                        }


                    });
                }
                e2.setAttribute("event-steup", true);
            }
        });


        /*search*/
        function find(el, keyword = "") {
            var finds = Array.from(el.querySelectorAll("[options] [select-ul]")).filter(function (f) {
                if (f.querySelector('[form-text-width]').textContent.toLowerCase().includes(keyword.toLowerCase())) {
                    return true
                }
            });
            return finds
        }

        var back = e.querySelectorAll("[options] [select-ul]")

        e.querySelector("[select-ul-search] input").addEventListener("input", function () {
            var keyword = this.value.trim();
            e.querySelector("[options]").scrollTop = 0;

            var shif = e.querySelectorAll("[options] [select-ul]")[0]
            find(e, keyword).forEach(function (top) {
                if (shif) {
                    shif.before(top);

                }
            });
            if (keyword.length == 0) {
                e.querySelectorAll("[options] [select-ul]").forEach(function (remove) {
                    remove.remove()
                })
                back.forEach(function (b) {
                    e.querySelector("[options]").append(b)
                });
            }
        });

    }

    var path_selected = `<path d="M11,16.4l-4.7-4.7l1.4-1.4l3.3,3.3l8.4-8.4C17.5,3.3,14.9,2,12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10 c0-1.9-0.5-3.6-1.4-5.1L11,16.4z"/>`
    var path_selecte = ` <path d="M12 2C6.4889971 2 2 6.4889971 2 12C2 17.511003 6.4889971 22 12 22C17.511003 22 22 17.511003 22 12C22 6.4889971 17.511003 2 12 2 z M 12 4C16.430123 4 20 7.5698774 20 12C20 16.430123 16.430123 20 12 20C7.5698774 20 4 16.430123 4 12C4 7.5698774 7.5698774 4 12 4 z"/>`
    var input_icon_def = `<svg  opacity="0.30"  defult f xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M5.453125 3L3 5.453125L3 8.2792969L8.28125 3L5.453125 3 z M 12.582031 3L3 12.582031L3 15.410156L15.410156 3L12.582031 3 z M 19.59375 3L3 19.595703L3 20.970703L4.453125 20.970703L21 4.421875L21 3L19.59375 3 z M 21 8.6660156L8.6953125 20.970703L11.523438 20.970703L21 11.494141L21 8.6660156 z M 21 15.736328L15.767578 20.970703L18.595703 20.970703L21 18.564453L21 15.736328 z" />
</svg>`

    function optionPropert(p) {
        p.querySelectorAll('o').forEach(function (po) {
            if (po.getAttribute("prop-setup") == null) {
                Object.defineProperties(po, {
                    value: {
                        get: function () {
                            return this.getAttribute("value")
                        }
                    },
                    text: {
                        get: function () {
                            return this.querySelector('text').textContent;
                        }
                    },
                    selected: {
                        get: function () {
                            return this.getAttribute('selected') == null ? false : true
                        },
                        set: function (bool) {

                            var s = this
                            const i = setInterval(function () {
                                if (p.getAttribute("step2") == "true") {
                                    if (bool) { s.getAttribute('selected') == null ? s.click() : false } else { s.getAttribute('selected') != null ? s.click() : false; }
                                    clearInterval(i)
                                }
                            });
                        }
                    },
                    edit: {
                        value: function (value, text) {
                            var s = this
                            const i = setInterval(function () {
                                if (p.getAttribute("step2") == "true") {
                                    s.setAttribute("value", new String(value));
                                    s.querySelector("[form-text-width]").textContent = text
                                    clearInterval(i)
                                }
                            });
                        },
                        disabled: {
                            get: function () {
                                return this.getAttribute("disabled") != null ? true : false;
                            },
                            set: function (bool) {
                                if (bool) {
                                    this.setAttribute("disabled", null)
                                } else {
                                    this.removeAttribute("disabled")
                                }
                            }
                        }

                    },

                });
                po.setAttribute("prop-setup", true);
            }

        })
    }

    function selectPropert() {
        var properties = document.querySelectorAll('div[form="select"]');
        properties.forEach(function (p) {
            if (p.getAttribute("properties-setup") == null) {

                /*self*/
                Object.defineProperties(p, {
                    loadend: {
                        value: function (caller = function () { }) {
                            var s = this;
                            const i = setInterval(function () {
                                if (s.getAttribute("step2") == "true") {
                                    caller.call(s, s);
                                    clearInterval(i)
                                }
                            });
                        }
                    },
                    change: {
                        value: function (caller = function () { }) {
                            var s = this;
                            const i = setInterval(function () {
                                if (s.getAttribute("step2") == "true" && s.getAttribute("reload") == null) {
                                    s.setAttribute("reload", true);

                                    s.querySelectorAll(['[options] [select-ul]']).forEach(function (u) {
                                        if (u.getAttribute("event-chnage-steup") == null) {
                                            u.addEventListener("click", function () {
                                                if (u.getAttribute("disabled") == null) {
                                                    caller.call(s, s)
                                                }

                                            });
                                            u.setAttribute("event-chnage-steup", true)
                                        }

                                    })

                                    // clearInterval(i)
                                }
                            });
                        }
                    },
                    value: {
                        get: function () {
                            if (this.getAttribute("step2") == null) { /*.getAttribute("step2")*/
                                var value_re = ""
                                if (this.getAttribute("multiple") == null) {
                                    value_re = this.querySelector("option[selected]").value
                                } else {
                                    value_re = Array.from(this.querySelectorAll("option[selected]")).map(function (e) {
                                        return e.value
                                    }).toString();
                                }

                                return value_re
                            } else {
                                return this.getAttribute('value')
                            }
                        },

                    },
                    disabled: {
                        get: function () {
                            return this.getAttribute("disabled") != null ? true : false;
                        },
                        set: function (bool) {
                            if (bool) {
                                this.setAttribute("disabled", null)
                            } else {
                                this.removeAttribute("disabled")
                            }
                        }
                    },
                    cntload: {
                        value: function (caller = function () { }) {
                            var s = this; var click = 0;


                            const i = setInterval(function () {
                                if (s.getAttribute("step2") == "true") {
                                    var lEl = s.querySelector('[contents] [loading-content]')
                                    var event = {

                                        label: function (action = false, text = null) {
                                            if (action) {
                                                lEl.querySelector("[label]").style.display = "flex"
                                                lEl.querySelector("[label]").textContent = text;
                                            }
                                        },
                                        clearloade: false,
                                        error: function () {
                                            s.removeAttribute("cnt-laoding-wait");
                                            lEl.setAttribute("error", null);
                                            click = 1;

                                        },
                                        clear: function (appendData = "") {
                                            s.removeAttribute("cnt-laoding");
                                            s.removeAttribute("cnt-laoding-wait");
                                            event.clearloade = true;
                                            click = 0;
                                            s.html(appendData);
                                            // selectClose(s) 
                                            //s.querySelector("[input]").click()
                                            //  $action_btm(self.querySelector("mobile"))
                                            var i2 = setInterval(function () {
                                                if (s.getAttribute("step2") == "true") {
                                                    var mobile_view = $action_btm(s.querySelector("mobile"))
                                                    mobile_view.show()

                                                    mobile_view.onclose(function () {
                                                        this.close(function () {
                                                            selectClose(s);
                                                        });
                                                    });
                                                    clearInterval(i2)
                                                }


                                            });





                                        },
                                    }
                                    var opend = s.querySelector("[input]");
                                    if (!event.clearloade && s.getAttribute("cnt-laoding-wait") == null) {
                                        s.setAttribute("cnt-laoding-wait", true);

                                        click = 1;
                                        opend.addEventListener("click", function () {
                                            if (click == 1 && s.getAttribute("open") != null) {

                                                click = 0;

                                                s.querySelector('[contents] [options]').style.display = "none";
                                                s.querySelector("[contents] [select-ul-search]").style.display = "none";
                                                s.setAttribute("cnt-laoding", true);
                                                lEl.removeAttribute("error");
                                                caller.call(event, event, s)

                                            }

                                        });



                                    } else {
                                        click = 0
                                    }
                                    //e.querySelector("[input]").addEventListener("click"
                                    clearInterval(i)
                                }
                            });

                        }
                    },
                    html: {
                        value: function (optionsHTML) {
                            var s = this;
                            const i = setInterval(function () {
                                if (s.getAttribute("step2") == "true") {
                                    s.innerHTML = optionsHTML
                                    s.removeAttribute("ui-setup"); s.removeAttribute("step2");
                                    s.removeAttribute("step1");
                                    s.setAttribute("reload", true);
                                    s.removeAttribute("reload")
                                    clearInterval(i);
                                }
                            });
                        }
                    },
                    add: {
                        value: function (value, text) {
                            var s = this
                            const i = setInterval(function () {
                                if (s.getAttribute("step2") == "true") {
                                    var o = document.createElement("o");
                                    o.setAttribute("select-ul", null); o.setAttribute("form-font-size", null); o.setAttribute("form-cursor", null);
                                    o.setAttribute("value", value);
                                    o.innerHTML = ` 
                       <div form-input-left-icon></div> <text form-text-width>${text}</text>
                       <svg form-input-right-icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                       <path d="M12 2C6.4889971 2 2 6.4889971 2 12C2 17.511003 6.4889971 22 12 22C17.511003 22 22 17.511003 22 12C22 6.4889971 17.511003 2 12 2 z M 12 4C16.430123 4 20 7.5698774 20 12C20 16.430123 16.430123 20 12 20C7.5698774 20 4 16.430123 4 12C4 7.5698774 7.5698774 4 12 4 z" />
                       </svg>`
                                    iconSet(s, o);
                                    s.querySelector("[contents] [options]").append(o);
                                    selectEvent(s);
                                    optionPropert(s);
                                    s.removeAttribute("reload");
                                    clearInterval(i)
                                }
                            });
                        }
                    },
                    options: {
                        value: function (caller = function () { }, index = "all") {
                            var s = this;
                            const i = setInterval(function () {
                                if (s.getAttribute("step2") == "true") {
                                    var ops = s.querySelectorAll("o");
                                    for (let i = 0; ops.length > i; i++) {

                                        if (index != "all") {
                                            if (i == index) {
                                                caller.call(s, ops[i], i);
                                                break
                                            }
                                        }
                                        else {
                                            caller.call(s, ops[i], i);
                                        }
                                    }
                                    clearInterval(i)
                                }
                            });

                        }
                    },
                    required: {
                        get: function () {
                            return this.getAttribute("required") != null ? true : false;
                        },
                        set: function (bool) {
                            if (bool) {
                                this.setAttribute("required", null)
                            } else {
                                this.removeAttribute("required")
                            }
                        }
                    },
                    multiple: {
                        value: function (m = false, size = false) {
                            if (m) {
                                this.setAttribute("multiple", true);
                                if (size) {
                                    this.setAttribute("size", size)
                                }

                            } else {
                                this.removeAttribute("multiple")
                            }
                        }
                    },
                    options_width: {
                        value: function (width) {
                            this.setAttribute("options-width", width)
                        }
                    }

                });
                /*options*/
                optionPropert(p)
                p.setAttribute("properties-setup", true)
            }

        });
    }
    selectPropert();

    Object.defineProperties(this, {
        $select: {
            value: function (element) {
                selectPropert();
                return element
            },
            writable: false
        }
    });


    setInterval(function () {
        var step1 = document.querySelectorAll('div[form="select"]');

        step1.forEach(function (e) {
            if (e.getAttribute("step1") == null) {
                e.setAttribute("placeholder_view", null); e.setAttribute("form-border", null); e.setAttribute("form-font-size", null); e.setAttribute("form-input-color", null);
                e.setAttribute("value", "")

                var input_box = document.createElement("div");
                var placeholder = e.getAttribute('placeholder') != null ? e.getAttribute('placeholder') : ""
                input_box.setAttribute("input", null); input_box.setAttribute("form-cursor", null); input_box.setAttribute("padding", null)
                var input_boxInner = `<div form-input-left-icon> <svg  opacity="0.30"  defult  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.453125 3L3 5.453125L3 8.2792969L8.28125 3L5.453125 3 z M 12.582031 3L3 12.582031L3 15.410156L15.410156 3L12.582031 3 z M 19.59375 3L3 19.595703L3 20.970703L4.453125 20.970703L21 4.421875L21 3L19.59375 3 z M 21 8.6660156L8.6953125 20.970703L11.523438 20.970703L21 11.494141L21 8.6660156 z M 21 15.736328L15.767578 20.970703L18.595703 20.970703L21 18.564453L21 15.736328 z" /</svg></div>
         <text form-text-width>${placeholder}</text>
     <svg form-input-right-icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
   <path d="M11 3L11 17.070312L6.4296875 12.5L4.9296875 14L12 21.070312L19.070312 14L17.570312 12.5L13 17.070312L13 3L11 3 z" />
 </svg>
`
                input_box.innerHTML = input_boxInner;
                if (e.querySelector("o")) {
                    e.querySelector("o").before(input_box)
                } else {
                    e.append(input_box)
                }


                /*option sets*/
                var contents = document.createElement("div"); contents.setAttribute('contents', null);
                //contents.style.display = "block"
                var search_holder = e.getAttribute("search-holder") != null ? e.getAttribute("search-holder") : "search";

                contents.innerHTML = `
          <mobile max-height="90%" form="bottom-bar">
  <div select-ul-search>
    <svg form-input-left-icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M9 2C5.1458514 2 2 5.1458514 2 9C2 12.854149 5.1458514 16 9 16C10.747998 16 12.345009 15.348024 13.574219 14.28125L14 14.707031L14 16L20 22L22 20L16 14L14.707031 14L14.28125 13.574219C15.348024 12.345009 16 10.747998 16 9C16 5.1458514 12.854149 2 9 2 z M 9 4C11.773268 4 14 6.2267316 14 9C14 11.773268 11.773268 14 9 14C6.2267316 14 4 11.773268 4 9C4 6.2267316 6.2267316 4 9 4 z" />
    </svg>
    <input type="text" form-text-width form-input-placeholder placeholder="${search_holder}">
  </div>
  <div multiple-remain padding form-font-size><span done>0</span>/<span remain>0</span></div>
  <div options scroll-br>
  </div>
   <div loading-content > 
       <div load_i padding  spinner-icon>
           <svg load  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M11 2.1816406L11 6L13 6L13 2.1816406L11 2.1816406 z M 7.9570312 2.9960938L6.2246094 3.9960938L8.1347656 7.3046875L9.8652344 6.3046875L7.9570312 2.9960938 z M 16.042969 2.9960938L14.134766 6.3046875L15.865234 7.3046875L17.775391 3.9960938L16.042969 2.9960938 z M 3.9960938 6.2246094L2.9960938 7.9570312L6.3046875 9.8652344L7.3046875 8.1347656L3.9960938 6.2246094 z M 20.003906 6.2246094L16.695312 8.1347656L17.695312 9.8652344L21.003906 7.9570312L20.003906 6.2246094 z M 2.1816406 11L2.1816406 13L6 13L6 11L2.1816406 11 z M 18 11L18 13L21.818359 13L21.818359 11L18 11 z M 6.3046875 14.134766L2.9960938 16.042969L3.9960938 17.775391L7.3046875 15.865234L6.3046875 14.134766 z M 17.695312 14.134766L16.695312 15.865234L20.003906 17.775391L21.003906 16.042969L17.695312 14.134766 z M 8.1347656 16.695312L6.2246094 20.003906L7.9570312 21.003906L9.8652344 17.695312L8.1347656 16.695312 z M 15.865234 16.695312L14.134766 17.695312L16.042969 21.003906L17.775391 20.003906L15.865234 16.695312 z M 11 18L11 21.818359L13 21.818359L13 18L11 18 z" />
</svg>
  <svg error  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M22.239,18.451L13.442,3.816C13.135,3.305,12.596,3,12,3s-1.135,0.305-1.441,0.815L1.761,18.451 c-0.312,0.519-0.32,1.168-0.022,1.695C2.036,20.673,2.597,21,3.203,21h17.595c0.605,0,1.167-0.327,1.464-0.854 C22.56,19.619,22.551,18.97,22.239,18.451z M13,18h-2v-2h2V18z M13,14h-2V9h2V14z" />
</svg>
       </div>
       <div style="display:noned"  load_i label  form-font-size form-input-color  padding>Loading...</div>
       </div>
</mobile>
`

                e.querySelectorAll('o').forEach(function (o) {
                    o.setAttribute("select-ul", null); o.setAttribute("form-font-size", null); o.setAttribute("form-cursor", null);
                    o.getAttribute("value") == null ? o.setAttribute("value", "") : true;
                    var text = o.textContent
                    o.innerHTML = `
                 <div form-input-left-icon></div> 
<text form-text-width>${text}</text>
 
<svg form-input-right-icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path
    d="M12 2C6.4889971 2 2 6.4889971 2 12C2 17.511003 6.4889971 22 12 22C17.511003 22 22 17.511003 22 12C22 6.4889971 17.511003 2 12 2 z M 12 4C16.430123 4 20 7.5698774 20 12C20 16.430123 16.430123 20 12 20C7.5698774 20 4 16.430123 4 12C4 7.5698774 7.5698774 4 12 4 z" />
</svg>
`
                    iconSet(e, o)
                    contents.querySelector("[options]").append(o);

                });

                var now_selected = contents.querySelector("[options]").querySelectorAll('o[selected]');

                input_box.after(contents)
                var disabled_el = document.createElement("div");
                disabled_el.setAttribute("sel-disabled", true);
                contents.after(disabled_el)


                var v = [], t = []

                if (e.getAttribute("multiple") != null && now_selected.length > 0) {

                    if (e.getAttribute("size") == null) {
                        now_selected.forEach(function (sl) {

                            newselected(sl, e);
                            v.push(sl.getAttribute('value'))
                            t.push(sl.querySelector('text').textContent)
                        });


                    } else {
                        var size = e.getAttribute("size") - 1;
                        e.querySelector("[multiple-remain] [remain]").textContent = e.getAttribute("size");
                        now_selected.forEach(function (sl, ind) {

                            if (size >= ind) {
                                newselected(sl, e);
                                v.push(sl.getAttribute('value'))
                                t.push(sl.querySelector('text').textContent);
                                e.querySelector("[multiple-remain] [done]").textContent = ind + 1
                            } else {
                                sl.removeAttribute('selected');
                            }
                        });
                    }


                    e.setAttribute("value", v.toString());

                    if (e.getAttribute("filter") == null) {
                        e.querySelector('[input] [form-text-width]').textContent = t.toString()
                    }

                } else {

                    now_selected.length > 0 ? newselected(now_selected[0], e) : true
                }





                e.setAttribute("step1", true);
                e.setAttribute("ui-setup", true);
            }
        });

        /*setup 2*/
        var select_steup2 = document.querySelectorAll('div[form="select"][ui-setup="true"]');
        select_steup2.forEach(function (e) {
            if (e.getAttribute('step2') == null) {
                /*opend*/
                e.querySelector("[input]").addEventListener("click", function (event) {
                    var self = this.parentElement;


                    if (!self.getAttribute("disabled")) {

                        if (self.getAttribute("open")) { /*is aredy opend*/
                            selectClose(self);

                        } else {

                            selectOpen(self)
                            var mobile_view = $action_btm(self.querySelector("mobile"));
                            mobile_view.show();

                            mobile_view.onclose(function () {
                                this.close(function () {
                                    selectClose(self);
                                });
                            });






                        }




                    }
                    document.addEventListener('click', function (event) {
                        if (event.target.closest('div[form="select"]') != self) {
                            selectClose(self);
                        }
                    });
                });
                selectEvent(e);
                e.setAttribute("step2", true);
            }
        });


    });

}(); 
