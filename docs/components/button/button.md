# Button 

The Button component is a versatile element that can be used to trigger various actions within your web application. It supports different styles and configurations, allowing you to customize its appearance and behavior based on your requirements.

## Usage

The Button component can be used in various ways to suit different needs. Here are some examples of how to use the Button component:

### Example 1: Basic Button

```html
<div class="button">
    <div class="text">Cancel Sending</div>
    <div class="icon">
        <img src="/cancel.png" alt="Cancel Icon">
    </div>
</div>
```

### Example 2: Disabled Button

```html
<div class="button" disabled>
    <div class="text">New Mail</div>
    <div class="icon">
        <img src="/mail.svg" alt="Mail Icon">
    </div>
</div>
```

### Example 3: Anchor Button

```html
<a href="/mail/help" class="button">
    Mail Help?
</a>
```

### Example 4: Icon-only Button

```html
<button class="button" align="icon">
    <div class="icon">
        <img src="/compose.svg" alt="Compose Icon">
    </div>
</button>
```

### Example 5: Text-only Button

```html
<button class="button">
    Exit
</button>
```

## Attributes

- `disabled`: When present, it indicates that the button should be disabled.
- `align="icon"`: Aligns the button content to only display the icon.

#

## Notes

- Ensure to replace placeholder image URLs (`/cancel.png`, `/mail.svg`, `/compose.svg`) with the actual URLs for your icons.

Now you can easily integrate the Button component into your web application with the provided examples and customize it according to your design preferences.
