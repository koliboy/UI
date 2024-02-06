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
     ```

     ```html
     <pre type="html"><code>
        <h1>code 2</h1>
     </code></pre>
     <button class="button clip-b" clip-b-t="code" clip-b-e="index" clip-b-v="innerHTML"></button>
     <!-- This button copies the inner HTML of the next code element corresponding to its index when clicked. -->
     ```

     ```html
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
