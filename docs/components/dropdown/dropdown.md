
#### HTML Structure:

```html
<button class="dropdown" d-event="click" data="post-id-2" d-defind="rest" dropdown="trigger">rest</button>

<ul class="dropdown-menu" d-event="mouseover" d-defind="rest">
    <a href="#home">Home</a>
    <a>About</a>
    <a disabled>Services</a> <!-- Target disabled: This item is disabled and cannot be clicked. -->
    <a event="remove">Contact</a> <!-- Not closeable when clicked: This item will not close the dropdown when clicked. -->
    <button event="remove">Button</button>
</ul>
```

#### Explanation:

1. **Button Element (`<button>`):**
   - **Class:**
     - `dropdown`: Indicates that this button triggers a dropdown menu.
   - **Attributes:**
     - `d-event="click"`: Specifies that the dropdown is triggered on a click.
     - `data="post-id-2"`: Additional data associated with the button.
     - `d-defind="rest"`: A unique identifier for the associated dropdown menu.
     - `dropdown="trigger"`: Marks this element as the trigger for the dropdown.

2. **Dropdown Menu (`<ul class="dropdown-menu">`):**
   - **Attributes:**
     - `d-event="click"`: Specifies that the dropdown menu is triggered on a click.
     - `d-defind="rest"`: A unique identifier to link the dropdown menu with the triggering button.
   - **Dropdown Items:**
     - `<a>` tags represent individual items in the dropdown menu.
       - Example items: Home, About, Services, Contact.
     - `<button>`: A button element inside the dropdown menu.

#### Usage:

1. **Dropdown Trigger (`<button>`):**
   - Add the class `dropdown` to any button that should trigger a dropdown.
   - Set the `d-event` attribute to "click" to make the dropdown trigger on a click.
   - Use the `data` attribute for any additional data associated with the button.
   - Set a unique identifier using `d-defind` to link the button with its associated dropdown menu.
   - Add the `dropdown="trigger"` attribute to mark this element as the dropdown trigger.

2. **Dropdown Menu (`<ul class="dropdown-menu">`):**
   - Place the `<ul>` element immediately after the triggering button.
   - Set the `d-event` attribute to "click" to make the dropdown menu triggered on a click.
   - Use `d-defind` with the same value as the triggering button to create a link between them.
   - Inside the `<ul>`, use `<a>` tags for individual dropdown items, and optionally, `<button>` elements.

#### Usage:

1. **Disabled Item (`<a disabled>`):**
   - Use the `disabled` attribute on an `<a>` tag to create a disabled item.
   - The disabled item cannot be clicked or interacted with.

2. **Item Not Closeable When Clicked (`<a event="remove">` and `<button event="remove">`):**
   - Use the `event="remove"` attribute on an `<a>` or `<button>` tag to create an item that will not close the dropdown when clicked.
   - This can be useful for items that trigger additional actions without closing the dropdown.
     
#### Notes:

- The dropdown will now be triggered when the button is clicked.
- Adjust the `d-defind` values to match between the triggering button and its associated dropdown menu.

Feel free to ask if you have any more questions or if there's anything else I can help you with!


## Text with Left and Right Icons:

```html
<ul class="dropdown-menu" d-event="mouseover" d-defind="rest">
    <a>Home</a>
    <a>
        <left>
            <img src="https://koliboy.github.io/formui/data/images/usa.png">
        </left> 
        <div>About</div>
        <right>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M6.5234375 3.1484375L5.4765625 4.8515625L17.09375 12L5.4765625 19.148438L6.5234375 20.851562L20.908203 12L6.5234375 3.1484375 z"/>
            </svg>
        </right>
    </a>
</ul>
```


#### Usage:

1. **Text with Left and Right Icons (`<a>`):**
   - Use the `<a>` tag for each dropdown item.
   - Customize the content within `<left>`, `<div>`, and `<right>` to achieve the desired layout.
   - The `<img>` tag inside `<left>` is for displaying an image/icon on the left.
   - The `<div>` tag contains the text for the item.
   - The `<svg>` tag inside `<right>` is for displaying an SVG icon on the right.
