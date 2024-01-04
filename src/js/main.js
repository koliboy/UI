Object.defineProperties(this, {
    $arriveAdd: {
        value: function (targetSelector, callback) {  
          /* 
          $arriveAdd(match,callback)
          https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
          */
          
           const observer = new MutationObserver(function(mutationsList) {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        const addedElement = mutation.addedNodes[0];
        if (addedElement.matches(targetSelector)) {
          callback(addedElement);
        }
      }
    }
  });

  const observerConfig = { childList: true, subtree: true };
  observer.observe(document, observerConfig);
        },
        writable: false
    }
});

