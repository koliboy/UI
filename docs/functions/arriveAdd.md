# `$arriveAdd(targetSelector, callback)`

- **Description:** Observes mutations in the DOM and executes a callback when an element matching the `targetSelector` is added to the DOM.

- **Parameters:**
  - `targetSelector` (String): The CSS selector for the target element to watch for.
  - `callback` (Function): The callback function to execute when the target element is added. It receives two arguments:
    - `addedElement` (HTMLElement): The element that was added to the DOM.
    - `mutation` (MutationRecord): The mutation record containing information about the mutation.

- **Usage:**
  ```javascript
  $arriveAdd('.target-element', function(addedElement, mutation) {
      console.log('Element added:', addedElement);
      console.log('Mutation:', mutation);
      // Perform actions on addedElement
  });
  ```

- **Notes:**
  - This function uses the `MutationObserver` interface to watch for changes in the DOM.
  - It is useful for scenarios where you need to perform actions on elements that are dynamically added to the DOM.
  - The callback is triggered only when an element matching the `targetSelector` is added.
