## Custom Select Component

To enable the custom select component using the `form="select"` attribute, follow the provided example:

```html
<div form="select">
  <!-- Options go here -->
  <o value="option1" selected>Option 1</o>
  <o value="option2">Option 2</o>
  <!-- Add more options as needed -->
</div>
```

In this example, the `<div>` element has the attribute `form="select"`, indicating that it should be treated as a custom select component. Inside the `<div>`, `<o>` (option) elements are used to define selectable options. Each option can have a `value` attribute to represent its value.

Feel free to customize the options and their attributes based on your specific use case. The `form="select"` attribute triggers the custom styling and behavior associated with the custom select component.

To use the custom select component with the `selectType="left-icon"` attribute, you can follow the example below:

```html
<datalist name="names">
  <data value="dog"><img src="dog.png"></data>
  <data value="cat"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M7 2C4.2233691 2 2 4.2233691 2 7C2 9.0633125 3.229833 10.816997 5 11.583984L5 22L7 22L7 16C7 16 7.7262856 15.357163 9 15.105469L9 22L11 22L11 15.144531C12.064862 15.420104 13 16 13 16L13 22L15 22L15 16L17 16L17 22L19 22L19 13.917969C18.674 13.968969 18.341 14 18 14C14.692 14 12 11.533 12 8.5L12 7L10 7C7.3867614 7 6.1127578 8.4737779 5.5078125 9.6328125C4.5850311 9.1433862 4 8.1968408 4 7C4 5.2426309 5.2426309 4 7 4L7 2 z M 14 3.5L14 8.5C14 10.4 15.8 12 18 12C20.2 12 22 10.4 22 8.5L22 3.5L20 5.4003906C19.4 5.1003906 18.7 5 18 5C17.3 5 16.6 5.1003906 16 5.4003906L14 3.5 z M 16 7C16.6 7 17 7.4 17 8C17 8.6 16.6 9 16 9C15.4 9 15 8.6 15 8C15 7.4 15.4 7 16 7 z M 20 7C20.6 7 21 7.4 21 8C21 8.6 20.6 9 20 9C19.4 9 19 8.6 19 8C19 7.4 19.4 7 20 7 z" />
</svg></data>
</datalist>

<div name="names" selectType="left-icon" required search-holder="check" form="select" placeholder="Select pets" search>
  <o value="dog" selected>Dog</o>
  <o value="cat">Cat</o>
</div>
```

In this example:

- The `datalist` contains data values with associated images.
- The `<div>` element has the attribute `form="select"` to enable the custom select component.
- `selectType="left-icon"` is used to enable left-aligned icons.
- The `required` attribute indicates that the selection is mandatory.
- `search-holder="check"` specifies the search placeholder text.
- The `search` attribute enables the search functionality.
- `<o>` (option) elements represent selectable options with associated values and text content.

Feel free to customize the values, text, and images based on your requirements. The `selectType="left-icon"` attribute will style the options with left-aligned icons.

### Custom Select Attributes:

1. **Options Width:**
   - **Attribute:** `options-width`
   - **Description:** Set the width of the select select.
   - **Example:** `<select custom-select options-width="300px">`

2. **Scrollbar Hide:**
   - **Attribute:** `scrollbar-hide`
   - **Description:** Hide the scrollbar in the select.
   - **Example:** `<select custom-select scrollbar-hide>`

3. **Search:**
   - **Attribute:** `search`
   - **Description:** Enable searching/filtering options.
   - **Example:** `<select custom-select search>`

4. **Filter:**
   - **Attribute:** `filter`
   - **Description:** Enable option filtering.
   - **Example:** `<select custom-select filter>`

5. **Multiple Selection:**
   - **Attribute:** `multiple`
   - **Description:** Allow multiple selection.
   - **Example:** `<select custom-select multiple>`

6. **Size (Multiple Selection):**
   - **Attribute:** `size`
   - **Description:** Specify the number of visible options when multiple selection is enabled.
   - **Example:** `<select custom-select size="6">`

7. **Disabled:**
   - **Attribute:** `disabled`
   - **Description:** Disable the select select.
   - **Example:** `<select custom-select disabled>`

8. **Required:**
   - **Attribute:** `required`
   - **Description:** Mark the select as required.
   - **Example:** `<select custom-select required>`

9. **Placeholder:**
   - **Attribute:** `placeholder`
   - **Description:** Provide a placeholder text.
   - **Example:** `<select custom-select placeholder="Select an option">`

10. **Search Holder:**
    - **Attribute:** `search-holder`
    - **Description:** Customize the search placeholder.
    - **Example:** `<select custom-select search-holder="Search...">`

11. **Select Type:**
    - **Attribute:** `selectType`
    - **Description:** Use the value `left-icon` to enable left-aligned icons.
    - **Example:** `<select custom-select selectType="left-icon">`

These attributes provide flexibility in customizing the appearance and functionality of your custom select element.


## Example Usage

```html
<select options-width="300px" scrollbar-hide filter multiple size="6" disabled required placeholder="Select an option" search-holder="Type to search">
    <option value="dog" selected>Dog</option>
    <option value="cat">Cat</option>
    <option value="hamster">Hamster</option>
    <!-- Add more options as needed -->
</select>
```



### `$select` Method:

The `$select` method is a versatile utility for creating and manipulating custom select elements in HTML. It provides a set of properties and methods that allow developers to easily enhance the functionality of standard `<select>` elements.
```html
<div  class="custom-select"   required  search-holder="check"     form="select"      placeholder="select pets"  search >
      <o value="dog" selected>Dog</o>
       <o value="cat">Cat</o>
     
  </div>
```
#### Example Usage:

```javascript
// Creating a new $select instance
const mySelect = $select(document.querySelector('.custom-select'));
```
### `$select` Properties:

1. **`loadend` Property:**
   - **Type:** Method
   - **Description:** Executes a provided function once the `$select` has completed loading.
   - **Parameters:**
     - `caller` (Type: `function`, Default: `function(){}`): The function to be called when loading is complete.

   **Example:**
   ```javascript
   mySelect.loadend(function(caller){
       // Your code to be executed after loading
   });
   ```

2. **`change` Property:**
   - **Type:** Method
   - **Description:** Executes a provided function when the value of the `$select` changes.
   - **Parameters:**
     - `caller` (Type: `function`, Default: `function(){}`): The function to be called on value change.

   **Example:**
   ```javascript
   mySelect.change(function(caller){
       // Your code to be executed on value change
   });
   ```

3. **`value` Property:**
   - **Type:** Getter/Accessor
   - **Description:** Gets the selected value(s) of the `$select`. If in multiple mode, returns a comma-separated string of values.
   - **Returns:** `string` or `undefined` (if not selected)

   **Example:**
   ```javascript
   var selectedValue = mySelect.value;
   ```

4. **`disabled` Property:**
   - **Type:** Getter/Setter
   - **Description:** Gets or sets the disabled state of the `$select`.
   - **Returns:** `boolean` (`true` if disabled, `false` if not)

   **Example:**
   ```javascript
   mySelect.disabled = true; // Set disabled
   var isDisabled = mySelect.disabled; // Get disabled state
   ```

5. **`cntload` Property:**
   - **Type:** Method
   - **Description:** Executes a provided function during content loading.
   - **Parameters:**
     - `caller` (Type: `function`, Default: `function(){}`): The function to be called during content loading.

   **Example:**
```javascript
  mySelect.cntload(function(event){  //append new optiond  enable loding status in option bar
  event.label(true,"loding>") //show lable in showe bar
  
  fetch("/products-options.html")
  .then(response => {
    // Check if the request was successful (status code 200)
    if (!response.ok) {
      event.error() ;  //error  show 
      event.label(true,"Opps!!")
    }
    return response.text();
  })
  .then(data => {
   
    event.clear(data); //append new options
  })
  .catch(error => {
    event.error() ;  //error  show 
    event.label(true,"Opps!!")
  });
   
});
   
```
### `event` Object:

The `event` object is used within the `cntload` property to handle loading status, errors, and clearing content during loading. It provides several methods for managing the loading process.

1. **`label` Method:**
   - **Parameters:**
     - `action` (Type: `boolean`, Default: `false`): Determines whether to show or hide the loading label.
     - `text` (Type: `string`, Default: `null`): The text content to be displayed in the loading label.

   - **Description:** Displays or hides a loading label with optional custom text.

   ```javascript
   event.label(true, "Loading..."); // Show loading label with custom text
   ```

2. **`error` Method:**
   - **Description:** Marks an error during loading, typically used to handle fetch errors.

   ```javascript
   event.error(); // Trigger error handling
   ```

3. **`clear` Method:**
   - **Parameters:**
     - `appendData` (Type: `string`, Default: `""`): The HTML content to be appended after loading.

   - **Description:** Clears loading status, appends new content (if provided), and handles additional actions after loading.

   ```javascript
   event.clear("<o value='1'>Option 1</o><o value='2'>Option 2</o>");
   ```

   In the example, `event.clear` removes loading indicators, appends new options, and executes additional actions after loading.

These methods provide flexibility in managing loading status, errors, and content clearing, allowing you to customize the behavior during the loading process.

6. **`html` Property:**
   - **Type:** Method
   - **Description:** Sets the HTML content of the `$select` with the provided options HTML.
   - **Parameters:**
     - `optionsHTML` (Type: `string`): The HTML string representing the options to be set for the `$select`.
   - **Returns:** `undefined`

   **Example:**
   ```javascript
   mySelect.html("<o value='1'>Option 1</o><o value='2'>Option 2</o>");
   ```

7. **`add` Property:**
   - **Type:** Method
   - **Description:** Adds a new option to the `$select`.
   - **Parameters:**
     - `value` (Type: `string`): The value of the new option.
     - `text` (Type: `string`): The text content of the new option.
   - **Returns:** `undefined`

   **Example:**
   ```javascript
   mySelect.add("3", "Option 3");
   ```

8. **`options` Property:**
   - **Type:** Method
   - **Description:** A method to iterate over options and execute a provided function.
   - **Parameters:**
     - `caller` (Type: `function`, Default: `function(){}`): The function to be called for each option.
     - `index` (Type: `string` or `number`, Default: `"all"`): The index of the option to target or `"all"` for all options.

   **Example:**
   ```javascript
   mySelect.options(function(option, index){
       // Your code to be executed for each option
   }, 2); // Execute for the option at index 2
   ```

9. **`required` Property:**
   - **Type:** Getter/Setter
   - **Description:** Gets or sets the required attribute of the `$select`.
   - **Returns:** `boolean` (`true` if required, `false` if not)

   **Example:**
   ```javascript
   mySelect.required = true; // Set required
   var isRequired = mySelect.required; // Get required state
   ```

10. **`multiple` Property:**
    - **Type:** Method
    - **Description:** A method to set the `$select` to multiple mode and optionally set the size.
    - **Parameters:**
      - `m` (Type: `boolean`, Default: `false`): Set to `true` to enable multiple mode.
      - `size` (Type: `number`, Default: `false`): If provided, sets the size attribute.

    **Example:**
    ```javascript
    mySelect.multiple(true, 3); // Enable multiple mode with a visible size of 3
    ```

11. **`options_width` Property:**
    - **Type:** Method
    - **Description:** Sets the width of the options in the `$select`.
    - **Parameters:**
      - `width` (Type: `string`): The CSS width value for the options.

    **Example:**
    ```javascript
    mySelect.options_width("200px"); // Set options width to 200px
    ```



### `<o>` Element Attributes:

The `<o>` element represents an option in a select dropdown. It can have the following attributes:

1. **`value` Attribute:**
   - **Type:** String
   - **Description:** Specifies the value associated with the option. This is the value that will be submitted to the server when the form is submitted.

   ```html
   <o value="dog">Dog</o>
   ```

2. **`selected` Attribute:**
   - **Type:** Boolean
   - **Description:** Indicates that the option should be pre-selected when the page loads.

   ```html
   <o value="cat" selected>Cat</o>
   ```

3. **`disabled` Attribute:**
   - **Type:** Boolean
   - **Description:** Disables the option, making it unselectable and often visually indicating that it's not an available choice.

   ```html
   <o value="bird" disabled>Bird</o>
   ```

### `options` Properties:

The `options` element represents an option within the custom select component. It provides properties that allow you to interact with and customize individual options.

#### 1. `value` Property:

- **Type:** Getter/Accessor
- **Description:** Gets the value of the option.
- **Returns:** `string` or `undefined` (if not set)

```javascript
// Example:
var optionValue = optionsElement.value;
```

#### 2. `text` Property:

- **Type:** Getter/Accessor
- **Description:** Gets the text content of the option.
- **Returns:** `string`

```javascript
// Example:
var optionText = optionsElement.text;
```

#### 3. `selected` Property:

- **Type:** Getter/Setter
- **Description:** Gets or sets whether the option is selected.
- **Returns:** `boolean` (`true` if selected, `false` if not)

```javascript
// Example:
var isSelected = optionsElement.selected; // Gets the current selection state

optionsElement.selected = true; // Sets the option as selected
```

#### 4. `edit` Property:

- **Type:** Method
- **Description:** Edits the option by setting a new value and text.
- **Parameters:**
  - `value` (Type: `string`): The new value for the option.
  - `text` (Type: `string`): The new text content for the option.

```javascript
// Example:
optionsElement.edit("new-value", "New Option Text");
```

#### 5. `disabled` Property:

- **Type:** Getter/Setter
- **Description:** Gets or sets whether the option is disabled.
- **Returns:** `boolean` (`true` if disabled, `false` if not)

```javascript
// Example:
var isDisabled = optionsElement.disabled; // Gets the current disabled state

optionsElement.disabled = true; // Disables the option
```
