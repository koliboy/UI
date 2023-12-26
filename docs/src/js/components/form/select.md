# Select Component Documentation



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

// Setting up loadend event
mySelect.loadend(function(caller) {
    console.log('Custom select has finished loading.');
});

// Setting up change event
mySelect.change(function(caller) {
    console.log('Value changed in custom select:', this.value);
});

// Getting the selected value
const selectedValue = mySelect.value;
console.log('Selected Value:', selectedValue);

// Disabling the custom select
mySelect.disabled = true;

// Setting up content loading event
mySelect.cntload(function(caller) {
    console.log('Content is being loaded in the custom select.');
});

// Setting HTML content for the custom select
const optionsHTML = `
    <o value="option1">Option 1</o>
    <o value="option2">Option 2</o>
    <o value="option3">Option 3</o>
`;
mySelect.html(optionsHTML);

// Adding a new option to the custom select
mySelect.add('newOption', 'New Option');

// Iterating over options
mySelect.options(function(option, index) {
    console.log(`Option ${index}: ${option.value}`);
});

// Setting the custom select as required
mySelect.required = true;

// Enabling multiple selection mode
mySelect.multiple(true);

// Setting the width of options
mySelect.options_width('150px');
```

#### Properties and Methods:

1. **`loadend` Property:**
   - **Type:** Method
   - **Description:** Executes a provided function once the `$select` has completed loading.
   - **Parameters:**
     - `caller` (Type: `function`, Default: `function(){}`): The function to be called when loading is complete.

2. **`change` Property:**
   - **Type:** Method
   - **Description:** Executes a provided function when the value of the `$select` changes.
   - **Parameters:**
     - `caller` (Type: `function`, Default: `function(){}`): The function to be called on value change.

3. **`value` Property:**
   - **Type:** Getter/Accessor
   - **Description:** Gets the selected value(s) of the `$select`. If in multiple mode, returns a comma-separated string of values.
   - **Returns:** `string` or `undefined` (if not selected)

4. **`disabled` Property:**
   - **Type:** Getter/Setter
   - **Description:** Gets or sets the disabled state of the `$select`.
   - **Returns:** `boolean` (`true` if disabled, `false` if not)

5. **`cntload` Property:**
   - **Type:** Method
   - **Description:** Executes a provided function during content loading.
   - **Parameters:**
     - `caller` (Type: `function`, Default: `function(){}`): The function to be called during content loading.

6. **`html` Property:**
   - **Type:** Method
   - **Description:** Sets the HTML content of the `$select` with the provided options HTML.
   - **Parameters:**
     - `optionsHTML` (Type: `string`): The HTML string representing the options to be set for the `$select`.
   - **Returns:** `undefined`

7. **`add` Property:**
   - **Type:** Method
   - **Description:** Adds a new option to the `$select`.
   - **Parameters:**
     - `value` (Type: `string`): The value of the new option.
     - `text` (Type: `string`): The text content of the new option.
   - **Returns:** `undefined`

8. **`options` Property:**
   - **Type:** Method
   - **Description:** A method to iterate over options and execute a provided function.
   - **Parameters:**
     - `caller` (Type: `function`, Default: `function(){}`): The function to be called for each option.
     - `index` (Type: `string` or `number`, Default: `"all"`): The index of the option to target or `"all"` for all options.

9. **`required` Property:**
   - **Type:** Getter/Setter
   - **Description:** Gets or sets the required attribute of the `$select`.
   - **Returns:** `boolean` (`true` if required, `false` if not)

10. **`multiple` Property:**
    - **Type:** Method
    - **Description:** A method to set the `$select` to multiple mode and optionally set the size.
    - **Parameters:**
      - `m` (Type: `boolean`, Default: `false`): Set to `true` to enable multiple mode.
      - `size` (Type: `number`, Default: `false`): If provided, sets the size attribute.

11. **`options_width` Property:**
    - **Type:** Method
    - **Description:** Sets the width of the options in the `$select`.
    - **Parameters:**
      - `width` (Type: `string`): The CSS width value for the options.


