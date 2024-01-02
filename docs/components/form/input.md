
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
