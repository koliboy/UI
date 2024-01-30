# Dialog Component:

A dialog component is a user interface element that presents a modal or popup overlay to capture user input, display information, or prompt for actions. It is typically used to create focused interactions without navigating away from the current page.

#### HTML Structure:

```html
<!-- Dialog Trigger Button -->
<button data="post-id-3" dg-defind="rest" dialog="trigger">Open Dialog</button>

<!-- Dialog Container -->
<div class="dialog" dg-defind="rest" d-title="Hello Title">
   <div>Content</div>
   <div>Content 2</div>
</div>
```

#### Explanation:

1. **Dialog Trigger Button (`<button>`):**
   - The button that triggers the opening of the dialog.
   - Attributes:
     - `data`: Additional data associated with the button.
     - `dg-defind`: A unique identifier for the associated dialog.
     - `dialog="trigger"`: Marks this element as the trigger for the dialog.

2. **Dialog Container (`<div class="dialog">`):**
   - The container for the dialog content.
   - Attributes:
     - `dg-defind`: A unique identifier for the dialog, linking it with the triggering button.
     - `d-title`: Sets the title of the dialog.
   - Content:
     - The content inside the dialog container, such as text, form elements, or other components.

### Usage:

1. **Dialog Trigger Button:**
   - Add a button with the `dialog="trigger"` attribute to mark it as the trigger for the dialog.
   - Set a unique identifier using `dg-defind` to link the button with its associated dialog.

    ```html
    <button data="post-id-3" dg-defind="rest" dialog="trigger">Open Dialog</button>
    ```

2. **Dialog Container:**
   - Create a container with the class "dialog" to hold the content of the dialog.
   - Set a unique identifier using `dg-defind` to link the dialog with its triggering button.
   - Use the `d-title` attribute to specify the title of the dialog.

    ```html
    <div class="dialog" dg-defind="rest" d-title="Hello Title">
       <div>Content</div>
       <div>Content 2</div>
    </div>
    ```

## Dialog Component with Options:

```html
<!-- Dialog Container with Options -->
<div class="dialog" dg-defind="rest" d-title="Hello Title" open="true" md-screen="full" dk-screen="full" placement="center" close-self="false">
    <!-- Content -->
        <div>Content</div>
        <div>Content 2</div>
    
    <!-- Custom Header -->
    <div class="dialog-content" cnt-tag="header">My Custom Header</div>
    <!-- Custom Footer -->
    <div class="dialog-content" cnt-tag="footer">My Custom Footer</div>
</div>
```

#### Options Explained:

1. **`open="true"`:**
   - Opens the dialog by default without waiting for a trigger.

2. **`md-screen="full"` and `dk-screen="full"`:**
   - Makes the dialog full-screen width on mobile and desktop screens.

3. **`placement="center"`:**
   - Defines the default placement of the dialog. Options include "top," "bottom," or the default "center."

4. **`close-self="false"`:**
   - Prevents the dialog from closing when clicking outside the viewport or the close button.

5. **Custom Header and Footer:**
   - Utilizes the `cnt-tag` attribute to create custom header and footer content within the dialog.

### Usage:

1. **Default Open Dialog:**
   - The `open="true"` attribute opens the dialog by default without needing an external trigger.

2. **Full-Screen Width:**
   - `md-screen="full"` and `dk-screen="full"` make the dialog full-screen width on mobile and desktop screens.

3. **Placement Options:**
   - Adjust the `placement` attribute to set the default placement of the dialog. Options include "top," "bottom," or the default "center."

4. **Preventing Dialog Closure:**
   - Set `close-self="false"` to prevent the dialog from closing when clicking outside the viewport or the close button.

5. **Custom Header and Footer:**
   - Use the `cnt-tag="header"` and `cnt-tag="footer"` attributes to add custom header and footer content.



## Custom Styles

```html
<!-- Dialog Container with Options and Custom Styles -->
<div class="dialog dialog-mdl" dg-defind="rest" d-title="Hello Title" open="true"  placement="center" close-self="false">
    <!-- Content -->
       <div>Content</div>
        <div>Content 2</div>
    
    <!-- Custom Header -->
    <div class="dialog-content" cnt-tag="header">My Custom Header</div>
    <!-- Custom Footer -->
    <div class="dialog-content" cnt-tag="footer">My Custom Footer</div>
</div>
```

```css
/* Custom Styles for Dialog */
.dialog .dialog-mdl {
    /* Customize module size and control height/width */
    max-width: 300px;
}

.dialog .dialog-content {
    /* Customize content appearance */
    background: pink;
}
```

#### CSS Styles Explained:

1. **`.dialog .dialog-mdl`:**
   - Targets the dialog with the class "dialog-mdl" to customize module size.
   - Adjusts the `max-width` property to control the maximum width of the dialog.

2. **`.dialog .dialog-content`:**
   - Targets the content inside the dialog with the class "dialog-content" to customize its appearance.
   - Sets the background color to pink as an example.


## Events 

### Using `$dialog` Function:

```javascript
// Open the dialog using $dialog function
$dialog(document.querySelector(".dialog")).open();

// Close the dialog using $dialog function
$dialog(document.querySelector(".dialog")).close();
```

### Adding Event Listeners to Dialog:

```javascript
// Get the dialog element
var dialog = document.querySelector(".dialog");

// Add an event listener for the "open" event
dialog.addEventListener("open", function () {
    console.log("Dialog opened!");
    // Additional actions when the dialog is opened
});

// Add an event listener for the "close" event
dialog.addEventListener("close", function () {
    console.log("Dialog closed!");
    // Additional actions when the dialog is closed
});
```

### Explanation:

1. **Using `$dialog` Function:**
   - `$dialog` is a custom function that facilitates opening and closing dialogs.
   - `open()` method opens the dialog.
   - `close()` method closes the dialog.

2. **Adding Event Listeners:**
   - Event listeners are added to the dialog element to listen for "open" and "close" events.
   - The callback functions inside event listeners execute when the respective events occur.
   - Additional actions or logic can be added within the callback functions.

### Usage:

1. **Using `$dialog` Function:**
   - Use `$dialog` function to programmatically open and close the dialog.

2. **Adding Event Listeners:**
   - Register event listeners on the dialog element.
   - Customize the callback functions to perform specific actions when the dialog is opened or closed.

## Data

```html
<article class="blog-post">
    <h1 class="post-title">id-1</h1>
    <button data="post-id-1" d-defind="rest" dialog="trigger">more...</button>
</article>

<article class="blog-post">
    <h1 class="post-title">id-2</h1>
    <button data="post-id-2" d-defind="rest" dialog="trigger">more...</button>
</article>

<article class="blog-post">
    <h1 class="post-title">id-3</h1>
    <button data="post-id-3" d-defind="rest" dialog="trigger">more...</button>
</article>
```

### Dialog Structure:

```html
<div class="dialog dialog-mdl" dg-defind="rest" d-title="Hello Title" open="true" placement="center" close-self="false">
       <div class="post-delete"> Delete</div>
        <div> Share Post</div>
    
    <!-- Custom Header -->
    <div class="dialog-content" cnt-tag="header">My Custom Header</div>
    <!-- Custom Footer -->
    <div class="dialog-content" cnt-tag="footer">My Custom Footer</div>
</div>
```

### Example Script:

```javascript
// Example script for handling a click event within the dialog
document.querySelector('.post-delete').addEventListener('click', function () {
    // Retrieve the post ID associated with the dialog
    var post_id = document.querySelector('.dialog').getAttribute('data');
    console.log('Delete post with ID:', post_id);
   
    
});
```

### Explanation:

- The script now uses `document.querySelectorAll` to select all buttons with `dialog="trigger"`.
- For each button, it adds a click event listener to open the associated dialog.
- The event listener retrieves the `data` attribute of the clicked button to identify the post ID.
- The script then opens the dialog with the corresponding post ID.
- The script also includes a click event listener within the dialog to handle the "post-delete" action and close the dialog afterward.
