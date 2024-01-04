function arriveAdd(targetSelector, callback) {
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
  observer.observe(document.body, observerConfig);
}
