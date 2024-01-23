# dropdown

A dropdown component is a user interface element commonly used in web development. It provides a compact way to present a list of options or actions to users, initially hidden and revealed upon interaction. Typically activated by clicking or hovering over a trigger element, the dropdown displays a menu that allows users to select from available choices. Dropdown components enhance navigation and user experience by organizing and simplifying access to various options, making them widely utilized in forms, navigation bars, and interactive interfaces on websites and applications.



#### HTML Structure:

```html
<button class="dropdown" d-event="click" data="post-id-2" d-defind="rest" dropdown="trigger">rest</button>

<ul class="dropdown-menu" overflow-x="nowrap" d-event="mouseover" d-defind="rest">
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

 **Overflow Control:**
   - The `overflow-x="nowrap"` style is applied to control horizontal overflow within the dropdown menu.
   - This is useful when you want to keep the content in a single line without wrapping.
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
            <img src="/images/usa.png">
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


## Submenu Container :

```html
<ul class="dropdown-menu" d-event="mouseover" d-defind="rest">
    <a>Home</a>
    <div class="dropdown-sub">
        <a dropdown="trigger">
            <div>Account</div>
        </a>
        <ul class="dropdown-menu">
            <a>Tree</a>
            <div class="dropdown-sub">
                <a dropdown="trigger">
                    <div>Account</div>
                </a>
                <ul class="dropdown-menu">
                    <a>Tree</a>
                </ul>
            </div>
        </ul>
    </div>
</ul>

```

#### Explanation:

1. **Submenu Container (`<div class="dropdown-sub">`):**
   - Represents a container for a submenu item.
   - Contains a trigger (`<a dropdown="trigger">`) and content (`<div>`).

2. **Submenu Trigger (`<a dropdown="trigger">`):**
   - Represents the trigger for the submenu.
   - Allows users to interact with the submenu.

3. **Submenu Content (`<div>`):**
   - Represents the content of the submenu item.
   - Can include text or other elements.

4. **Nested Submenu (`<div class="dropdown-sub">` within submenu):**
   - Allows for the creation of nested submenus.
   - Follows the same structure as the top-level submenu.

5. **Nested Submenu Trigger (`<a dropdown="trigger">` within nested submenu):**
   - Acts as the trigger for the nested submenu.

6. **Nested Submenu Content (`<div>` within nested submenu):**
   - Represents the content of the nested submenu item.

7. **Nested Submenu Items (`<ul class="dropdown-menu">` within nested submenu):**
   - Represents the dropdown menu associated with the nested submenu.
   - Contains items, such as `<a>`, that users can interact with.

#### Usage:

1. **Creating a Submenu:**
   - Use `<div class="dropdown-sub">` to create a container for a submenu item.
   - Include a trigger (`<a dropdown="trigger">`) and content (`<div>`) inside the submenu item.

2. **Nested Submenus:**
   - To create nested submenus, place another `<div class="dropdown-sub">` within the submenu.
   - Continue nesting as needed.

3. **Submenu Trigger:**
   - Use `<a dropdown="trigger">` as the trigger for the submenu.
   - This element is clickable and opens the associated submenu.

4. **Submenu Content:**
   - Use `<div>` to represent the content of the submenu item.
   - This can include text or other elements.

5. **Nested Submenu Trigger and Content:**
   - Follow the same structure for nested submenus, including a trigger and content.

6. **Nested Submenu Items:**
   - Include `<ul class="dropdown-menu">` within the nested submenu to represent the dropdown menu.
   - Add items, such as `<a>`, inside the nested submenu.


## Data:

```html
<!-- Example blog posts with dropdown components -->
<article class="blog-post">
    <h1 class="post-title">id-1</h1>
    <button class="dropdown" data="post-id-1" d-defind="rest" dropdown="trigger">more...</button>
</article>

<article class="blog-post">
    <h1 class="post-title">id-2</h1>
    <button class="dropdown" data="post-id-2" d-defind="rest" dropdown="trigger">more...</button>
</article>

<article class="blog-post">
    <h1 class="post-title">id-3</h1>
    <button class="dropdown" data="post-id-3" d-defind="rest" dropdown="trigger">more...</button>
</article>

<!-- Dropdown menu with options -->
<ul class="dropdown-menu each_id" d-event="mouseover" d-defind="rest">
    <a>
        <div class="post-delete">Delete Post</div>
    </a>
    <a>
        <div class="post-share">Share Post</div>
    </a>
</ul>

<script>
    // Example script for handling a click event within the dropdown menu
    document.querySelector(".post-delete").addEventListener("click", function () {
        // Retrieve the post ID associated with the dropdown menu
        var post_id = document.querySelector(".each_id").getAttribute("data");
        console.log("Delete post with ID:", post_id);
        // Perform the desired actions with the post ID
    });
</script>
```

#### Explanation:

1. **Blog Post Structure:**
   - Each blog post is represented by an `<article>` element containing a post title (`<h1>`) and a dropdown button.

2. **Dropdown Component:**
   - The dropdown component is represented by a `<button>` element with the class "dropdown."
   - It includes the `data` attribute to store additional information, such as the post ID (`data="post-id-1"`).
   - The `d-defind` attribute provides a unique identifier for the associated dropdown menu.
   - The `dropdown="trigger"` attribute marks the button as the trigger for the dropdown menu.

3. **Dropdown Menu:**
   - The dropdown menu (`<ul class="dropdown-menu each_id">`) contains options like "Delete Post" and "Share Post."

4. **Dropdown Menu Script:**
   - The script listens for a click event on the "Delete Post" option within the dropdown.
   - It retrieves the post ID associated with the dropdown menu using `getAttribute("data")`.
   - The post ID is then logged to the console, and you can perform desired actions with the post ID.

#### Usage:

1. **Dropdown Trigger Button:**
   - Clicking on the "more..." button triggers the dropdown menu.

2. **Dropdown Menu Options:**
   - The dropdown menu provides options like "Delete Post" and "Share Post."

3. **Script Handling:**
   - The script demonstrates handling a click event within the dropdown menu, extracting the associated post ID.
