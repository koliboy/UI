!function () {

  function adjustVisibility(contents, self, isSub = false) {
    /*position:absolute or right: 0; in css*/

    var btn = self.getBoundingClientRect();
    contents.style.bottom = "auto"
    if (isSub) {
      contents.style.top = `${btn.top - 2}px`
      contents.style.left = `${btn.right - 2}px`
    } else {

      contents.style.top = `${btn.bottom}px`
      contents.style.left = `${btn.left}px`
    }

    var re2 = contents.getBoundingClientRect();
    if (re2.right > window.innerWidth) {
      contents.style.left = `${btn.left - re2.width}px`
    }

    if (re2.bottom > window.innerHeight) {
      contents.style.top = `${btn.top - re2.height}px`
      /*not posible visbilty after*/
      var adjust = contents.getBoundingClientRect();
      if (adjust.top < 0) {
        contents.style.top = "1px";
        contents.style.bottom = "0"  //`${window.innerHeight-btn.top}px`;
      }



      contents.setAttribute("up", null);
    } else {
      contents.setAttribute("down", null);
    }
  }




  function dropOpen(open, trigger, mobile = null) {
    $disableScroll();
    open.setAttribute("open", true)
    adjustVisibility(open, trigger);
    mobile.show();


    window.addEventListener('resize', function () {
      adjustVisibility(open, trigger);
      if (trigger.getAttribute("Isopen")) {
        mobile.show();

      } else {
        mobile.close()
      }

    });
    document.querySelectorAll('.dropdown').forEach(function (unset) {
      if (trigger != unset) {
        unset.removeAttribute('Isopen')
      }
    });

    document.querySelectorAll('.dropdown-menu[d-defind]').forEach(function (unset) {
      if (open != unset) {
        unset.removeAttribute("open")
        unset.removeAttribute("down")
        unset.removeAttribute("up");
      }
    });

    open.querySelectorAll(".dropdown-sub").forEach(function (clls) { /*opend is New close set*/
      var subMenu = clls.querySelector(".dropdown-menu");
      if (subMenu) {
        subMenu.removeAttribute("open");
        subMenu.removeAttribute("down");
        subMenu.removeAttribute("up");
        var tr = clls.querySelector("[dropdown='trigger']");
        if (tr) {
          tr.removeAttribute("Isopen", null);
        }
      }

    });



  }

  function dropClose(open, mobile, trigger) {
    if (open.getAttribute("open")) {
      open.removeAttribute("open")
      open.removeAttribute("down")
      open.removeAttribute("up");
      $enableScroll()
      if (mobile && trigger) {
        trigger.removeAttribute("Isopen");
        mobile.close();
      } else {

        document.querySelectorAll('.dropdown').forEach(function (unset) {
          unset.removeAttribute('Isopen')

        });
      }

    }


  }

  function subOpen(open, trigger) {
    adjustVisibility(open, trigger, true);
    open.setAttribute("open", true);
    trigger.querySelector("[dropdown='trigger']").setAttribute("Isopen", null)
    window.addEventListener('resize', function () {
      adjustVisibility(open, trigger, true);
    });



  }

  function subClose(open, trigger) {
    open.removeAttribute("open");
    open.removeAttribute("down");
    open.removeAttribute("up");
    trigger.querySelector("[dropdown='trigger']").removeAttribute("Isopen", null)

  }

  function ulitem(ul, sub = false) {

    var items = ul.querySelector(".items-drops");
    if (sub) {
      items = sub;

    }


    if (items) {
      Array.from(items.childNodes).forEach(function (it) {

        if (it instanceof Element && !it.classList.contains("dropdown-sub")) {

          if (it.getAttribute) {
            if (it.getAttribute("setup") == null) {
              it.setAttribute("setup", true);
              it.addEventListener("click", function () {
                if (this.getAttribute("disabled") == null) {
                  if (!(this.getAttribute("event-remove") == "true")) {

                    setTimeout(function () {
                      dropClose(ul);

                    });


                  }

                }

              });
            }
          }

        }
        else if (it instanceof Element && it.classList.contains("dropdown-sub")) {
          var subdrop = it.querySelector(".dropdown-menu");
          ulitem(ul, subdrop);

        }
      })
    }

  }

  setInterval(function () {
    var dropdown = document.querySelectorAll('.dropdown');
    dropdown.forEach(function (e) {
      if (e.getAttribute("step1") == null) {
        var defind = e.getAttribute("d-defind");
        var ul = undefined;
        var hover_events = ["mouseenter", "mouseleave", "mousemove", "mouseout",
          "mouseover", "pointerenter", "pointerleave", "pointermove",
          "pointerout", "pointerover", "pointerup"] /*ony support dekstop antor by click like mobile*/

        var trigger = e, event_d = "click"; /*default*/

        if (e.getAttribute("d-event") != null) {
          var eventListen = e.getAttribute("d-event");
          if (hover_events.includes(eventListen)) {
            if ($getDeviceType() == "Desktop") {
              event_d = e.getAttribute("d-event");
            } else {
              event_d = "click"
            }
          } else {
            event_d = e.getAttribute("d-event");
          }

        }




        trigger.addEventListener(event_d, function (event) {
          var self = this
          if (defind != null) {
            ul = document.querySelector(`.dropdown-menu[d-defind="${defind}"]`);
          }
          if (event_d == "contextmenu") {
            event.preventDefault();
          }
          if (ul) {

            mobile = $action_btm(ul.querySelector("mobile"));
            ulitem(ul);
            if (this.getAttribute('Isopen')) {

              if (!hover_events.includes(event_d)) {
                dropClose(ul);

              }



            } else {

              dropOpen(ul, trigger, mobile);
              this.setAttribute("Isopen", true);
              if (e.getAttribute("data")) {
                ul.setAttribute("data", e.getAttribute("data"));
              }

            }

            mobile.onclose(function () {
              this.close(function () { dropClose(ul, mobile, trigger) });
            });



          }







        });


        e.setAttribute("step1", true)



      }
    });

    /*setup2*/
    var stup2 = document.querySelectorAll(".dropdown-menu[d-defind]");

    stup2.forEach(function (ul) {

      if (ul.getAttribute("stup2") == null || ul.querySelector("mobile") == null) {
        ul.setAttribute("scroll-br", null);
        var mb = document.createElement("mobile");
        var items_drops = document.createElement("div");
        items_drops.classList.add("items-drops");


        mb.setAttribute("form", "bottom-bar");
        ul.querySelectorAll(".dropdown-sub [dropdown='trigger']").forEach(function (right_icon) {
          var rs = right_icon.querySelector("right");
          if (rs == null) {
            right_icon.innerHTML += `<right><svg  more_th="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M6.5234375 3.1484375L5.4765625 4.8515625L17.09375 12L5.4765625 19.148438L6.5234375 20.851562L20.908203 12L6.5234375 3.1484375 z"/>
</svg></right>`
          }
        });
        Array.from(ul.childNodes).forEach(function (c) {

          items_drops.append(c);
        });
        mb.append(items_drops);
        ul.append(mb)

        /*close dropdown-menu*/
        var menu_event_d = "click";
        if (ul.getAttribute("d-event") != null) {
          menu_event_d = ul.getAttribute("d-event");
        }

        document.addEventListener(menu_event_d, function (event) {

          if (event.target.closest('.dropdown-menu') != ul && !event.target.closest('.dropdown')) {

            if (!Array.from(ul.querySelectorAll(".dropdown-sub")).some(f => event.target.closest('.dropdown-sub') === f)) {
              if ($sizeDekstop()) {
                dropClose(ul, false, false);
              }
            }

          }

        });

        /*tree view*/
        ul.querySelectorAll(".dropdown-sub [dropdown='trigger']").forEach(function (sub) {
          /*dekstop*/
          sub.addEventListener("mousemove", function (event) {
            var btn = this.parentElement;
            var self = this;
            var menus = btn.querySelector(".dropdown-menu");

            if (menus) {
              if ($sizeDekstop()) {

                subOpen(menus, btn);
              }

              document.addEventListener('mousemove', function (event) {
                var selfClose = event.target.closest('.dropdown-sub');
                var dropmenu = event.target.closest('.dropdown-menu');


                if ((dropmenu == ul || dropmenu == btn.parentElement) && (selfClose !== btn)) {
                  if (!Array.from(btn.querySelectorAll(".dropdown-sub")).some(f => selfClose === f)) {
                    if ($sizeDekstop()) {

                      subClose(menus, btn);
                    }

                  }
                }

              });
            }
          });

          /*mobile*/

          sub.addEventListener("click", function (event) {
            var btn = this.parentElement;
            var menus = btn.querySelector(".dropdown-menu");
            if (menus) {

              if ($sizeMobile()) {
                if (menus.getAttribute("open") != null) {
                  subClose(menus, btn);
                } else {
                  subOpen(menus, btn);
                }
              }
            }

          });
        });



        ul.setAttribute("stup2", true)
      }

    });

  });

}();
