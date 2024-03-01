# Image

Use the following code to create a simple image component in your documentation:
```css
.img-container {
    max-width:700px;
}
```
```html
<div class="img-container">
    <img class="img" src="path_to_your_image.jpg" alt="Image Description">
</div>
```

#### Parameters
- `src`: The path to the image file.
- `alt`: Description of the image for accessibility.

#### Example
```html
<div class="img-container">
    <img class="img" src="https://example.com/image.jpg" alt="A beautiful landscape">
</div>
```

### Loading State

To display a loading state for an image, you can use the following code:
```css
.img-load {
    height:200px;
}
```
```html
<div class="img-container img-load">
    <img class="img" src="path_to_your_image.jpg" alt="Image Description">
</div>
```

In this example, the `.img-load` class sets a default height for the image container, which is useful for indicating that the image is loading.

#### Parameters
- `src`: The path to the image file.
- `alt`: Description of the image for accessibility.

#### Example
```html
<div class="img-container img-load">
    <img class="img" src="https://example.com/image.jpg" alt="A beautiful landscape">
</div>
```

Adjust the `src` attribute to point to the actual image file you want to use in your documentation.
