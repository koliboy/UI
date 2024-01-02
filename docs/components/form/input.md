
### Custom Input Component

The Custom Input Component is a stylized input container that allows for customization of the input element within a `<div>` element. It is designed for creating visually appealing and consistent input fields.

#### Usage:

```html
<!-- Use the Custom Input Component in your HTML -->
<div form="input">
  <input type="text" placeholder="Type something...">
</div>
```
- **`form` Attribute:** (`input`)
  - Specifies the type of form component. In this case, it is set to "input" to indicate that it is a custom input component.

#### Basic Usage:

```html
<!-- Use the Custom Input Component with Left Icon -->
<div form="input" class="my" left="icon">
 <error>somting error</error>
  <icon><!--<img src="/icons/credit.svg">--></icon>
  <input>
</div>

<!-- Use the Custom Input Component with Left Text -->
<div form="input" class="my" left="text">
  <text>Left Text</text>
  <input>
</div>
```

#### Components:

1. **Icon Container (`<icon>`):**
   - Represents the container for the left-aligned icon.
   - Use the `<img>` `<svg>` tag to include the icon image.

2. **Text Container (`<text>`):**
   - Represents the container for the left-aligned text.
   - Specify the text content within the `<text>` tag.

3. **Error Container (`<error>`):**
   - Represents the container for displaying error messages.
   - Populate the `<error>` tag with the relevant error message text.

4. **Input Field (`<input>`):**
   - Represents the actual input field.

#### Options:

- **Left Icon:**
  - To include a left-aligned icon, set the `left` attribute to `"icon"`.

- **Left Text:**
  - To include left-aligned text, set the `left` attribute to `"text"`.

#### Example:

```html
<!-- Example with Left Icon -->
<div form="input" class="my" left="icon">
  <icon></icon>
  <input>
</div>

<div form="input" class="my" left="text">
  <text>Left Text</text>
  <input>
</div>
```

#### Multiple Input

The Multiple Input Custom Component allows you to create a container for managing multiple input fields, such as those commonly found in credit card forms. Here's how you can use the component:

#### Basic Usage:

```html
<!-- Use the Multiple Input Component with Left Icon -->
<div form="input" multiple class="my" left="icon">
  <icon><svg form-input-right-icon form-input-right-error xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
            d="M12 2C6.4889971 2 2 6.4889971 2 12C2 17.511003 6.4889971 22 12 22C17.511003 22 22 17.511003 22 12C22 6.4889971 17.511003 2 12 2 z M 12 4C16.430123 4 20 7.5698774 20 12C20 16.430123 16.430123 20 12 20C7.5698774 20 4 16.430123 4 12C4 7.5698774 7.5698774 4 12 4 z M 11 7L11 9L13 9L13 7L11 7 z M 11 11L11 17L13 17L13 11L11 11 z" />
    </svg></icon>
  <input placeholder="Card Number">
  <input placeholder="Expiry">
  <input placeholder="CVV">
</div>
```

#### Components:

1. **Icon Container (`<icon>`):**
   - Represents the container for the left-aligned icon.
   - Use the `<img>` tag to include the icon image.

2. **Error Container (`<error>`):**
   - Represents the container for displaying error messages.
   - Populate the `<error>` tag with the relevant error message text.

3. **Input Fields (`<input>`):**
   - Represents the individual input fields.
   - Include multiple `<input>` tags for each input field.
   - Set the `placeholder` attribute for each input field to provide a placeholder text.

#### Options:

- **Left Icon:**
  - To include a left-aligned icon, set the `left` attribute to `"icon"`.

- **Multiple Inputs:**
  - Add the `multiple` attribute to indicate that this component will contain multiple input fields.

#### Example:

```html
<!-- Example with Left Icon and Multiple Inputs -->
<div form="input" multiple class="my" left="icon">

  <input placeholder="Card Number">
  <input placeholder="Expiry">
  <input placeholder="CVV">
</div>
```

Feel free to customize the appearance of the Multiple Input Custom Component by adding your preferred styles to the provided classes (`my`, `icon`, etc.) based on your project's design requirements.

## <div form="input" Attributes:

- **`left` Attribute:**
  - Values: `"text"` or `"icon"`
  - Description: Aligns content to the left side of the input. Use `"text"` for left-aligned text and `"icon"` for left-aligned icons.

- **`checkmark` Attribute:**
  - Description: Indicates that the input has passed validation, often visualized by a checkmark icon.

- **`checking` Attribute:**
  - Description: Indicates that the input is currently undergoing validation.

- **`disabled` Attribute:**
  - Description: Disables the input, preventing user interaction.

- **`error` Attribute:**
  - Description: Indicates that there is an error with the input, often visualized by an error message.

- **`toggle` Attribute:**
   - Description: Converts the input into a password field with a toggle option to show/hide the password.

- **`multiple` Attribute:**
  - Description: Indicates that the component will contain multiple input fields.

- **`join` Attribute:**
  - Values: `"/"`
  - Description: Specifies a character or text to join multiple input values when the `multiple` attribute is used.

#### Example:

```html
<!-- Example with Icon, Disabled, and Password Toggle -->
<div form="input" left="icon" disabled toggle>
  <icon><img src="/icons/lock.svg"></icon>
  <input placeholder="Password" type="password">
</div>
```

### Input Attributes

The `pattern`, `required`, `min`, and `maxlength` attributes provide additional control and validation for input fields.

#### 1. `pattern` Attribute:

- **Description:** Sets a regular expression pattern that the input's value must match.
- **Example:**
  ```html
  <input pattern="[a-zA-Z0-9]{3,10}" placeholder="Alphanumeric, 3 to 10 characters">
  ```

#### 2. `required` Attribute:

- **Values:**
  - `"number"`
  - `"password"`
  - `"username"`
  - `"mail"`
  - Any custom validation string.
- **Description:** Specifies the type of input validation required. Use predefined values or create custom validation strings.
- **Example:**
  ```html
  <input required="password" placeholder="Password">
  ```

#### 3. `min` Attribute:

- **Description:** Sets the minimum length or value for the input.
- **Example:**
  ```html
  <input type="number" min="1" placeholder="Minimum value is 1">
  ```

#### 4. `maxlength` Attribute:

- **Description:** Sets the maximum length of the input value.
- **Example:**
  ```html
  <input maxlength="50" placeholder="Maximum length is 50 characters">
  ```

These attributes offer flexibility and control over the input field's content and validation rules. Use them as needed based on your specific requirements.

##  $input Propertys

The $input function enhances the properties of input elements within a custom input component. It defines and sets up various attributes and methods for improved styling and functionality. Here's how you can use it:

```html
<div form="input">
  <!-- Input field goes here -->
  <input placeholder="Type something...">
</div>
```

`$input`

- **Example:**
  ```javascript
  var customInput = $input(document.querySelector('div[form="input"]'));
  
  ```

#### 2. `disabled` Property:

- **Type:** Getter/Setter
- **Description:** Gets or sets the disabled state of the custom input component.
- **Example:**
  ```javascript
  customInput.disabled = true; // Disable the input
  var isDisabled = customInput.disabled; // Get the disabled state
  ```

#### 3. `focus` Method:

- **Type:** Method
- **Description:** Sets focus on the input element.
- **Example:**
  ```javascript
  customInput.focus();
  ```

#### 4. `blur` Method:

- **Type:** Method
- **Description:** Removes focus from the input element.
- **Example:**
  ```javascript
  customInput.blur();
  ```

#### 5. `invalid` Method:

- **Type:** Method
- **Description:** Sets or clears the invalid state of the input component.
- **Parameters:**
  - `bool` (Type: `boolean`, Default: `false`): Set to `true` to indicate an invalid state.
  - `message` (Type: `string`, Default: `null`): Optional error message to display.
- **Example:**
  ```javascript
  customInput.invalid(true, "Invalid input");
  ```

#### 6. `isValid` Property:

- **Type:** Getter
- **Description:** Gets the validity state of the input component. Returns `true` if valid, `false` if invalid.
- **Example:**
  ```javascript
  var isValid = customInput.isValid;
  ```

#### 7. `checkmark` Property:

- **Type:** Getter/Setter
- **Description:** Gets or sets the checkmark state of the input component.
- **Example:**
  ```javascript
  customInput.checkmark = true; // Show the checkmark
  var hasCheckmark = customInput.checkmark; // Check the checkmark state
  ```

#### 8. `check` Property:

- **Type:** Getter/Setter
- **Description:** Gets or sets the checking state of the input component.
- **Example:**
  ```javascript
  customInput.check = true; // Show the checking state
  var isChecking = customInput.check; // Check the checking state
  ```

#### 9. `icon` Method:

- **Type:** Method
- **Description:** Sets the icon of the input component.
- **Parameters:**
  - `obj` (Type: `string` or `SVGElement` or `HTMLImageElement`): The icon content.
- **Example:**
  ```javascript
  customInput.icon('<img src="/icons/left.svg">');
  ```

#### 10. `text` Method:

- **Type:** Method
- **Description:** Sets the text content next to the input.
- **Parameters:**
  - `leftText` (Type: `string`): The text content.
- **Example:**
  ```javascript
  customInput.text("Left Text");
  ```

#### 11. `getIcon` Property:

- **Type:** Getter
- **Description:** Gets the icon element associated with the input component.
- **Example:**
  ```javascript
  var iconElement = customInput.getIcon;
  ```

#### 12. `getText` Property:

- **Type:** Getter
- **Description:** Gets the text content associated with the input component.
- **Example:**
  ```javascript
  var leftTextContent = customInput.getText;
  ```

### Multiple Input Example:

```html
<div form="input" multiple>
  <input placeholder="Card Number">
  <input placeholder="Expiry">
  <input placeholder="CVV">
</div>
```

This custom input component provides enhanced styling and functionality for input elements. Customize it further based on your needs.
