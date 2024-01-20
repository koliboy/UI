Object.defineProperties(this, {
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
    document.querySelectorAll(".disableScroll").forEach(function(disS){
        disS.classList.add("Scrollon");
    });
    document.documentElement.style.overflow = 'hidden';  // For most modern browsers
    document.body.scroll = 'no';  // For some older browsers
    
} 
function $enableScroll() {
    document.querySelectorAll(".disableScroll").forEach(function(disS){
        disS.classList.remove("Scrollon");
    });
    document.documentElement.style.overflow = 'auto';
    document.body.scroll = 'yes';
} 

function $sizeDekstop(){
    return 768 < window.innerWidth;
}
function $sizeMobile(){
    return 768 >= window.innerWidth;
}


function $getDeviceType() {
  const userAgent = navigator.userAgent;
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
    return 'Mobile';
  } else {
    return 'Desktop';
  }
}
