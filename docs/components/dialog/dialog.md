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
    <div class="dialog-content">
        <div>Content</div>
        <div>Content 2</div>
    </div>
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

