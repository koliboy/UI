function $qs(selectors){
    return document.querySelector(selectors);
}
function $qsall(selectors){
    return document.querySelectorAll(selectors);
}


Object.defineProperties(window, {
    $arriveAdd: {
        value: function (targetSelector, callback) { /*call(element,MutationRecord])*/
        
            const observer = new MutationObserver(function(mutationsList) {
                for (const mutation of mutationsList) {
                    /* 
                     $arriveAdd(match,callback)
                     https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
                       */
                    if (mutation.addedNodes.length > 0) {
                        const addedElement = mutation.addedNodes[0];
                        if( typeof addedElement.matches == "function"){
                           if (addedElement.matches(targetSelector)) {
                               callback(addedElement,mutation);
                            }
                        }
                    }
                }
            });

            const observerConfig = {
                childList: true,
                attributes: true,
                subtree: true,
            };

            observer.observe(document, observerConfig);
        },
        writable: false
    }
});

function $disableScroll() {
    document.querySelectorAll(".d-scroll").forEach(function(disS){
        disS.classList.add("Scrollon");
    });
    document.documentElement.style.overflow = 'hidden';  // For most modern browsers
    document.body.scroll = 'no';  // For some older browsers
    
};
function $enableScroll() {
    document.querySelectorAll(".disableScroll").forEach(function(disS){
        disS.classList.remove("Scrollon");
    });
    document.documentElement.style.overflow = 'auto';
    document.body.scroll = 'yes';
};

function $sizeDekstop(){
    return 768 < window.innerWidth;
};
function $sizeMobile(){
    return 768 >= window.innerWidth;
};


function $getDeviceType() {
  const userAgent = navigator.userAgent;
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
    return 'Mobile';
  } else {
    return 'Desktop';
  }
};

function $parserHTML(string_, applyto, method = "append", scriptMehtod = "after") {
    //methods textCotent,innerHTML,append,appendChild .....
    //scriptMehtod append,after before,prepend

    var parser = new DOMParser();
    var htmlDoc = parser.parseFromString(string_, 'text/html');

    var scripts = document.createElement("div");
    htmlDoc.querySelectorAll("script").forEach(function (script) {
        scripts.append(script);
    });
    if (typeof applyto[method] == "function") {
        Array.from(htmlDoc.body.childNodes).forEach(function (doc) {
            applyto[method](doc);
        });
    } else {
        applyto[method] = htmlDoc.body[method]
    }

    Array.from(scripts.childNodes).forEach(function (script) {

        var newScript = document.createElement("script");
        script_scopp = ["async", "crossorigin", "defer", "fetchpriority", "integrity",
            "nomodule", "src", "text", "type"]
        script_scopp.forEach(function (scop) {
            if (script.getAttribute(scop) != null) {
                newScript.setAttribute(scop, script.getAttribute(scop));
            }
        })
        if (script.getAttribute("src") == null) {
            newScript.innerHTML = script.innerHTML;
        }
        applyto[scriptMehtod](newScript);
    });
};

function $cntload($target__$_$,$call__$_$,scops_apply={}){
//$cntload(element,success)
//$call__$_$.call [status = 200,300 ,300 is error],[data],[targetElement],[http],[this=targetElement]
//scops_apply target global or local variables orgin scope is global not local caller function

 
function queryParams___$_$(query__$_$ = {},scope__$_$ =true) {
    
    var queryParams__$_$ = {}
    
    try { 
        var parse__$_$ = JSON.parse(query__$_$);
        if(scope__$_$){
          for (var [key__$_$, value__$_$] of Object.entries(parse__$_$)) {
            try {    
                if (value__$_$[0] == "$") {
                   if(scops_apply[value__$_$.slice(1)]){
                      parse__$_$[key__$_$] = scops_apply[value__$_$.slice(1)]
                   }else{
                      parse__$_$[key__$_$] = eval(value__$_$.slice(1));
                   }
                    
                }

            } catch (errorx) {
                null 
            } 

        }
        }
       
        queryParams__$_$ = parse__$_$;
    }
    catch (errorx) {
        null
    }
    
    return queryParams__$_$
}

var geth__$__$ =  $target__$_$.getAttribute("cnt-load-get") || $target__$_$.getAttribute("htp-get");
var posth__$__$ =  $target__$_$.getAttribute("cnt-load-post") ||  $target__$_$.getAttribute("htp-post"); 
var query__$__$ = $target__$_$.getAttribute("htp-query") == null ?"{}":`${$target__$_$.getAttribute("htp-query")}`;
var headers__$__$ = $target__$_$.getAttribute("htp-headers") == null ?"{}":`${$target__$_$.getAttribute("htp-headers")}`;
var status__$__$ = $target__$_$.getAttribute("htp-status") == null ?200:`${$target__$_$.getAttribute("htp-status")}`;

if(geth__$__$ != null){
      
    let pr__$__$  = queryParams___$_$(query__$__$);
    let he__$__$  = queryParams___$_$(headers__$__$);
    
    let $op__$__$ = {
        headers:he__$__$,
        status:eval(status__$__$),
        body:null
    }
$http.get(geth__$__$,pr__$__$,$op__$__$).done(function(data__$_$,ht__$_$){
       if( typeof $call__$_$ == "function"){
           $call__$_$.call($target__$_$,200,data__$_$,ht__$_$);
       }
}).error(function(){ 
    if( typeof $call__$_$ == "function"){
          $call__$_$.call($target__$_$,300,null,null);
       }
}); 
   
}
else if(posth__$__$ != null){
    let pr__$__$  = queryParams___$_$(query__$__$);
    let he__$__$  = queryParams___$_$(headers__$__$);
    he__$__$["Content-Type"] = "application/json"
    let $op__$__$ = {
        headers: he__$__$,
        status:eval(status__$__$),
        body:JSON.stringify(pr__$__$)
    }
         
var HTP__$_$ =   $http.post(posth__$__$,$op__$__$).done(function(data__$_$,ht__$_$){
       if( typeof $call__$_$ == "function"){
           $call__$_$.call($target__$_$,200,data__$_$,ht__$_$);
       }
      // $parserHTML(data,ss("button"),"innerHTML") 
         
}).error(function(){ 
    if( typeof $call__$_$ == "function"){
           $call__$_$.call($target__$_$,300,null,null);
       }
}); 
} 
    
};


!function () {
    document.addEventListener("DOMContentLoaded", (event) => {
        if ($getDeviceType() == "Desktop") {
            var Myscroll = document.createElement("style");
            Myscroll.innerHTML = `[scroll-br] {scrollbar-width: thin;}
[scroll-br]::-webkit-scrollbar { width: 8px;}[scroll-br]::-webkit-scrollbar-thumb:hover {background: #999999;}
[scroll-br]::-webkit-scrollbar-thumb:active {background: #999999;}
[scroll-br]::-webkit-scrollbar-thumb {background: rgba(209, 209, 209, 0.94); border-radius: 6px;}`;
            var head = $qs("head");
            if (head) {
               head.append(Myscroll);
            }

        }
    });

}();
