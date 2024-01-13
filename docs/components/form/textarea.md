# Textarea

# [View DEMO](https://koliboy.github.io/formui/docs/components/form/textarea.html)

# [View Prieview](https://koliboy.github.io/formui/docs/components/form/textarea.html)

# styled UI

| Properties | 	Descriptio | for | Default
|----------|----------|----------|---
| --background-color  | background-color | textarea | mainCSS
| --color-secondary  | foucs=>border | textarea | mainCSS
| --border-radius  | border-radius | textarea | mainCSS
| --border-width  | border-width | textarea | mainCSS
| --border-style  | border-style | textarea | mainCSS
| --font-size  | font-size | textarea | mainCSS
| --color  | color | textarea | mainCSS
| --padding  | top-bottom | textarea | mainCSS
| --disabled-bacground  | background-color | textarea | mainCSS
| --disabled-bacground  | background-color | textarea | mainCSS
| --disabled-opacity  | opacity | textarea | mainCSS
| --placeholder-color  | placeholder-color | textarea | mainCSS





## Textarea Component 

The Auto-Height Textarea Component is a self-contained script that can be easily integrated into web projects to enable automatic height adjustment for textarea elements based on their content. This component enhances the user experience when dealing with multiline text input fields.

### Features

- Dynamically adjusts textarea height as the user types.
- Supports minimum height configuration.
- Compatible with textarea elements having the `height="auto"` attribute.

### Getting Started




#### 2. Add Auto-Height Textarea to Your HTML

Create textarea elements with the `height="auto"` attribute to enable automatic height adjustment.

```html
<textarea height="auto" name="comment" rows="5" cols="30" placeholder="Type your comment here..."></textarea>
```

### Configuration Options

The Auto-Height Textarea Library provides the following configuration options:

- **`height="auto"`**: Set this attribute on your textarea element to enable the auto-height feature.

- **`min` Attribute**: Optionally, you can set a minimum height for the textarea. If the content is less than the minimum height, it will still be displayed at the specified minimum height.

### Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Auto-Height Textarea Example</title>
</head>
<body>
    <textarea height="auto" name="comment" rows="5" cols="30" placeholder="Type your comment here..."></textarea>
</body>
</html>
```

