# Dropdown Menu Documentation

## HTML Structure

The following HTML code represents a dropdown menu inside a `<div>` element:

```html
<div class="sitaram" required search-holder="check" form="select" placeholder="select pets" search>
    <o value="dog" selected>Dog</o>
    <o value="cat">Cat</o>
    <o value="hamster">Hamster</o>
</div>
```


## Options

- **Width:** `300px`
  - Specify the width of the dropdown using the `options-width` attribute.

- **Scrollbar:**
  - `scrollbar-hide`: Enable this option to hide the scrollbar in the dropdown.

- **Filter:**
  - Use the `filter` attribute to enable filtering of options in the dropdown.

## Additional Features

- **Multiple Selection:**
  - Enable multiple selection using the `multiple` attribute.

- **Disabled:**
  - Use the `disabled` attribute to disable the dropdown.

- **Required:**
  - Mark the dropdown as required with the `required` attribute.

- **Placeholder:**
  - Add a placeholder text using the `placeholder` attribute.

- **Search Holder:**
  - Customize the search placeholder using the `search-holder` attribute.

## Multiple Selection Configuration

- **Size:**
  - Customize the number of visible options in the dropdown when multiple selection is enabled using the `size` attribute. Example: `size="6"`.

---

**Usage Example:**

```html
<div options-width="300px" scrollbar-hide filter multiple size="6" disabled required placeholder="Select an option" search-holder="Type to search">
    <o value="dog" selected>Dog</o>
    <o value="cat">Cat</o>
    <o value="hamster">Hamster</o>
    <!-- Add more options as needed -->
</div>
```
