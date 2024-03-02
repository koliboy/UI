
### `$parserHTML(string, applyto, method = "append", scriptMethod = "after")`

- **Description:** Parses an HTML string, extracts scripts, and injects HTML content into the DOM.

- **Parameters:**
  - `string` (String): The HTML string to be parsed and injected into the DOM.
  - `applyto` (HTMLElement): The target element or container where the parsed HTML content will be injected.
  - `method` (String, optional): The method used to inject the parsed HTML content into the target element. Default is `"append"`.
    - Options: `"textContent"`, `"innerHTML"`, `"append"`, `"appendChild"`, or any other valid method.
  - `scriptMethod` (String, optional): The method used to inject extracted scripts into the DOM. Default is `"after"`.
    - Options: `"append"`, `"after"`, `"before"`, `"prepend"`, or any other valid method.

- **Usage:**
  ```javascript
  $parserHTML('<div>Hello, world!</div>', document.body, 'append', 'after');
  ```

- **Notes:**
  - This function parses the provided HTML string and injects the resulting elements into the specified `applyto` element using the specified `method`.
  - Extracted scripts are injected into the DOM using the specified `scriptMethod`.
  - It is useful for dynamically loading HTML content, such as templates or partial views, retrieved from an external source.
  - Ensure that the `applyto` element exists in the DOM before calling this function, or unexpected behavior may occur.
