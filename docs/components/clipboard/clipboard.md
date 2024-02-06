### Component: Clipboard

This component provides examples of how to use the clipboard functionality with different target elements.

1. **Simple Usage**
   ```html
   <button class="button clip-b" clip-b-d="Copy Text"></button>
   <!-- This button copies the text "Copy Text" when clicked. -->
   ```

2. **Target Element Usage**
   - Example with input element:
     ```html
     <input class="input" value="Copy Text">
     <button class="button clip-b" clip-b-t=".input"></button>
     <!-- This button copies the value of the input element with the class "input" when clicked. -->
     ```

   - Example with div element:
     ```html
     <div class="brave">HELLO 👋</div>
     <button class="button clip-b" clip-b-t=".brave" clip-b-v="textContent"></button>
     <!-- This button copies the text content of the div element with the class "brave" when clicked. -->
     ```

   - Supported values for `clip-b-v` attribute:
     - `textContent`
     - `value`
     - `innerHTML`

3. **Each Target Element with Index**
   - Example with code elements:

```html
     <pre type="html"><code>
        <h1>code 1</h1>
     </code></pre>
     <button class="button clip-b" clip-b-t="code" clip-b-e="index" clip-b-v="innerHTML"></button>
     <!-- This button copies the inner HTML of the code element corresponding to its index when clicked. -->
   
     <pre type="html"><code>
        <h1>code 2</h1>
     </code></pre>
     <button class="button clip-b" clip-b-t="code" clip-b-e="index" clip-b-v="innerHTML"></button>
     <!-- This button copies the inner HTML of the next code element corresponding to its index when clicked. -->
   
<pre type="html"><code>
        <h1>code 3</h1>
     </code></pre>
     <button class="button clip-b" clip-b-t="code" clip-b-e="index" clip-b-v="innerHTML"></button>
     <!-- This button copies the inner HTML of the next code element corresponding to its index when clicked. -->
```

   - The `clip-b-e="index"` attribute ensures that each button follows the index of its corresponding code element.

#### Note
- Ensure that the necessary class names and attributes are correctly set on the target elements for the clipboard functionality to work as expected.
- Test the functionality thoroughly across different browsers to ensure compatibility.

## **`clip-b-t` Attribute**

The `clip-b-t` attribute is an essential attribute associated with the clipboard component (`clip-b`). It specifies the target element(s) from which text content will be copied when the clipboard button is clicked. This attribute plays a crucial role in determining the source of the text data to be copied to the clipboard.

### Syntax:
```html
<button class="button clip-b" clip-b-t="targetSelector"></button>
```

### Attributes:
- `clip-b-t`: This attribute specifies the target element or elements from which text content will be copied.
  - **targetSelector**: A CSS selector that identifies the target element(s) from which text content will be copied.

### Usage:
- **Single Target Element**: You can specify a single target element using its CSS selector. For example:
  ```html
  <button class="button clip-b" clip-b-t=".input"></button>
  ```
  This will copy the text content from the input field with the class `input` when the button is clicked.

- **Multiple Target Elements**: If you have multiple elements from which you want to copy text content, you can specify them using a common CSS selector. For example:
  ```html
  <button class="button clip-b" clip-b-t="p"></button>
  ```
  This will copy text content from all `<p>` elements on the page.

### Additional Notes:
- The target element specified using `clip-b-t` should contain the text content you wish to copy to the clipboard.
- It's important to ensure that the specified target element(s) exist in the DOM when the clipboard button is clicked.
- You can combine the `clip-b-t` attribute with other attributes like `clip-b-v` to further customize the data that will be copied to the clipboard.

### Example:
```html
<!-- Copy text from a specific paragraph -->
<p id="paragraph1">This is the text to be copied.</p>
<button class="button clip-b" clip-b-t="#paragraph1"></button>


<p>This is paragraph 2.</p>
<button class="button clip-b" clip-b-t="p"></button>
```

In summary, the `clip-b-t` attribute allows you to specify the target element(s) whose text content will be copied to the clipboard when the associated clipboard button is clicked. It provides flexibility in selecting the desired source of text data for copying.
