# Select Component Documentation

## Attributes

- **Options Width:** `300px`
  - Set the width of the select dropdown using the `options-width` attribute.

- **Scrollbar Hide:**
  - Use the `scrollbar-hide` attribute to hide the scrollbar in the dropdown.

- **Filter:**
  - Enable option filtering with the `filter` attribute.

- **Multiple Selection:**
  - Allow multiple selection using the `multiple` attribute.

- **Size (Multiple Selection):**
  - Specify the number of visible options when multiple selection is enabled. Example: `size="6"`.

- **Disabled:**
  - Disable the select dropdown using the `disabled` attribute.

- **Required:**
  - Mark the select as required with the `required` attribute.

- **Placeholder:**
  - Provide a placeholder text using the `placeholder` attribute.

- **Search Holder:**
  - Customize the search placeholder with the `search-holder` attribute.

## Example Usage

```html
<select options-width="300px" scrollbar-hide filter multiple size="6" disabled required placeholder="Select an option" search-holder="Type to search">
    <option value="dog" selected>Dog</option>
    <option value="cat">Cat</option>
    <option value="hamster">Hamster</option>
    <!-- Add more options as needed -->
</select>
