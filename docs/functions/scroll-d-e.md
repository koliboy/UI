Below is the documentation for the `$disableScroll` and `$enableScroll` functions:

### `$disableScroll()`

- **Description:** Disables scrolling on the document by applying CSS styles and preventing default scroll behavior.

- **Usage:**
  ```javascript
  $disableScroll();
  ```

- **Notes:**
  - This function adds a class (`Scrollon`) to elements with the class `.d-scroll` to prevent scrolling.
  - It sets the CSS style `overflow: hidden` on both the `documentElement` and `body` to disable scrolling.
  - This function is commonly used to prevent scrolling when modal dialogs or overlays are displayed.

---

### `$enableScroll()`

- **Description:** Enables scrolling on the document by removing previously applied CSS styles.

- **Usage:**
  ```javascript
  $enableScroll();
  ```

- **Notes:**
  - This function removes the `Scrollon` class from elements with the class `.d-scroll` to allow scrolling.
  - It resets the CSS style `overflow` on both the `documentElement` and `body` to its default value (`auto`).
  - Use this function to re-enable scrolling after it has been disabled using `$disableScroll`.
