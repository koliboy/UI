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
### isloading: Loading State
```html
<div class="button" isloading="true" label="Mail Sending....">
    <div class="text">Send Mail</div>
    <div class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M4 4C3.07 4 2.2923125 4.6429063 2.0703125 5.5039062L12 11.726562L21.935547 5.5214844C21.719547 4.6504844 20.937 4 20 4L4 4 z M 2 7.734375L2 18C2 19.103 2.897 20 4 20L20 20C21.103 20 22 19.103 22 18L22 7.7558594L12 14L2 7.734375 z"/>
        </svg>
    </div>
</div>
```
## Attributes

- `isloading`: When present, it indicates that the button is in a loading state.
- `label`: Specifies the label to be displayed during the loading state. Update this attribute with a meaningful message, such as "Mail Sending...".


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
