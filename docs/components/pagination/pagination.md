
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

## URL Pattern

The URL pattern attribute (`pn-pattern-a`) allows you to specify a pattern for generating page links dynamically. This is particularly useful in scenarios where you need to construct URLs for pagination purposes, such as fetching different pages of data from a server.

### Usage

Specify the URL pattern using the `pn-pattern-a` attribute within the pagination component.

### Example

Suppose you have a website where you want to paginate through a list of items, and the URL structure for fetching each page of items follows a specific pattern. Here's how you can use the URL pattern attribute:

```html
<div class="pagination"
     pn-j-label="Jump" 
     pn-current="1"  
     pn-tabs="7"  
     pn-total="100"
     pn-pattern-a="/page-query?page">
</div>
```

In this example:
- The pagination component is set up to display 7 tabs at a time, with a total of 100 pages.
- The URL pattern is specified as `/page-query?page`.
- When a user interacts with the pagination component, the page number will be appended to the specified URL pattern to construct the complete URL for fetching the corresponding page of items.

### URL Construction

When a user clicks on a page link, the pagination component dynamically constructs the URL by appending the page number to the specified URL pattern. For instance:

- Clicking on page 1 would result in the URL: `/page-query?page=1`
- Clicking on page 3 would result in the URL: `/page-query?page=3`

This allows for seamless navigation between different pages of content while maintaining a consistent URL structure.

### Notes

- Ensure that the URL pattern aligns with the routing structure of your application or website.
- Customize the URL pattern according to your specific requirements, such as incorporating additional query parameters or route segments.

This URL pattern functionality provides flexibility in generating page links dynamically based on a specified pattern, facilitating efficient pagination within your web application or website.
