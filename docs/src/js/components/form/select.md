# Select Component Documentation

## Attributes

- **Options Width:** `300px`
  - Set the width of the select dropdown using the `options-width` attribute.

- **Scrollbar Hide:**
  - Use the `scrollbar-hide` attribute to hide the scrollbar in the dropdown.

- **Filter:**
  - Enable option filtering with the `filter` attribute.

- **Multiple Selection:**
  - Allow multiple selection using the `multiple` attribute.

- **Size (Multiple Selection):**
  - Specify the number of visible options when multiple selection is enabled. Example: `size="6"`.

- **Disabled:**
  - Disable the select dropdown using the `disabled` attribute.

- **Required:**
  - Mark the select as required with the `required` attribute.

- **Placeholder:**
  - Provide a placeholder text using the `placeholder` attribute.

- **Search Holder:**
  - Customize the search placeholder with the `search-holder` attribute.

- **Select Type:** `left-icon`
  - Use the `selectType` attribute with the value `left-icon` to enable left-aligned icons.


## Example Usage

```html
<select options-width="300px" scrollbar-hide filter multiple size="6" disabled required placeholder="Select an option" search-holder="Type to search">
    <option value="dog" selected>Dog</option>
    <option value="cat">Cat</option>
    <option value="hamster">Hamster</option>
    <!-- Add more options as needed -->
</select>
```

Certainly! Let's document all the properties you provided:

#### `$select` Properties:

### 1. `loadend` Property:

- **Type:** Method
- **Description:** A method that executes a provided function once the `$select` has completed loading.
- **Parameters:**
  - `caller` (Type: `function`, Default: `function(){}`): The function to be called when loading is complete.

### 2. `change` Property:

- **Type:** Method
- **Description:** A method that executes a provided function when the value of the `$select` changes.
- **Parameters:**
  - `caller` (Type: `function`, Default: `function(){}`): The function to be called on value change.

### 3. `value` Property:

- **Type:** Getter/Accessor
- **Description:** Gets the selected value(s) of the `$select`. If in multiple mode, returns a comma-separated string of values.
- **Returns:** `string` or `undefined` (if not selected)

### 4. `disabled` Property:

- **Type:** Getter/Setter
- **Description:** Gets or sets the disabled state of the `$select`.
- **Returns:** `boolean` (`true` if disabled, `false` if not)

### 5. `cntload` Property:

- **Type:** Method
- **Description:** A method that executes a provided function during content loading.
- **Parameters:**
  - `caller` (Type: `function`, Default: `function(){}`): The function to be called during content loading.

### 6. `html` Property:

- **Type:** Method
- **Description:** Sets the HTML content of the `$select` with the provided options HTML.
- **Parameters:**
  - `optionsHTML` (Type: `string`): The HTML string representing the options to be set for the `$select`.
- **Returns:** `undefined`

### 7. `add` Property:

- **Type:** Method
- **Description:** Adds a new option to the `$select`.
- **Parameters:**
  - `value` (Type: `string`): The value of the new option.
  - `text` (Type: `string`): The text content of the new option.
- **Returns:** `undefined`

### 8. `options` Property:

- **Type:** Method
- **Description:** A method to iterate over options and execute a provided function.
- **Parameters:**
  - `caller` (Type: `function`, Default: `function(){}`): The function to be called for each option.
  - `index` (Type: `string` or `number`, Default: `"all"`): The index of the option to target or `"all"` for all options.

### 9. `required` Property:

- **Type:** Getter/Setter
- **Description:** Gets or sets the required attribute of the `$select`.
- **Returns:** `boolean` (`true` if required, `false` if not)

### 10. `multiple` Property:

- **Type:** Method
- **Description:** A method to set the `$select` to multiple mode and optionally set the size.
- **Parameters:**
  - `m` (Type: `boolean`, Default: `false`): Set to `true` to enable multiple mode.
  - `size` (Type: `number`, Default: `false`): If provided, sets the size attribute.

### 11. `options_width` Property:

- **Type:** Method
- **Description:** Sets the width of the options in the `$select`.
- **Parameters:**
  - `width` (Type: `string`): The CSS width value for the options.

These properties and methods provide various functionalities to interact with and customize the behavior of the `$select` element.
