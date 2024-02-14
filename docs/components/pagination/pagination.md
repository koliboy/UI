
## Pagination 

### Overview

The pagination component allows users to navigate through a series of pages, typically used for breaking up long lists or sets of data into manageable segments.

### Usage

To use the pagination component, include the following HTML structure:

```html
<div class="pagination"
pn-j-label="Jump"
pn-current="1"
pn-tabs="3"
pn-total="50">
</div>
```

### Attributes

- **class**: `pagination`: Specifies the class name for styling the pagination component.
- **pn-j-label**: Specifies the label for the jump functionality, indicating the purpose of the input field for direct page navigation.
- **pn-current**: Specifies the current active page.
- **pn-tabs**: Specifies the number of tabs (or pages) to display at a time.
- **pn-total**: Specifies the total number of pages available.

### Example

```html
<div class="pagination"
pn-j-label="Go Page"
pn-current="33"
pn-tabs="10"
pn-total="500">
</div>
```

In this example:
- The pagination component has a class of `pagination` for styling purposes.
- The label for the jump functionality is set to "Go Page".
- The current active page is 33.
- 10 tabs (or pages) are displayed at a time.
- There are a total of 500 pages.

### Notes

- Ensure to include appropriate CSS styles for the pagination component to render correctly.
- Customize the component attributes according to your specific requirements, such as the total number of pages and the number of tabs to display at a time.

---

This documentation provides an overview of the pagination component, its usage, attributes, an example, and additional notes for customization.
