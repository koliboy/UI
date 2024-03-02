Below is the documentation for the `$isVisible` function:

### `$isVisible(to, from = window)`

- **Description:** Checks if an element is currently visible in the viewport or within another element.

- **Parameters:**
  - `to` (HTMLElement): The target element to check for visibility.
  - `from` (HTMLElement, optional): The container element within which visibility is checked. Defaults to `window`.

- **Returns:**
  - Boolean: `true` if the `to` element is visible, `false` otherwise.

- **Usage:**
  ```javascript
  const isVisible = $isVisible(element);
  ```

- **Examples:**
  ```javascript
  const element = document.querySelector('.target-element');
  const isVisible = $isVisible(element);
  console.log('Element visibility:', isVisible);
  ```

- **Notes:**
  - This function determines whether the specified `to` element is currently visible within the specified `from` container or viewport.
  - If no `from` container is provided, visibility is checked against the entire viewport (`window`).
  - It is useful for determining whether an element is in the viewport before performing actions such as lazy loading or animations.
 
  - Below is the documentation for the `$Visibility` function:

### `$Visibility(from, to)`

- **Description:** Scrolls the specified container to make the target element visible within it.

- **Parameters:**
  - `from` (HTMLElement): The container element to scroll.
  - `to` (HTMLElement): The target element to make visible within the container.

- **Usage:**
  ```javascript
  $Visibility(containerElement, targetElement);
  ```

- **Notes:**
  - This function calculates the position of the `to` element relative to the `from` container and scrolls the container to make the `to` element fully visible.
  - It is useful for scenarios where you want to ensure that a particular element is visible within a scrollable container, such as in single-page applications or navigation menus.
  - The function uses smooth scrolling behavior if supported by the browser.
