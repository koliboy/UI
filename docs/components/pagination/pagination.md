
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

## URL Pattern with Same Page Window Option

The URL pattern attribute (`pn-pattern-a`) in conjunction with the same page window option (`pn-a-s-page`) provides a mechanism for dynamically updating the URL hash to reflect the current page state within a single-page application (SPA) context. This is particularly useful for preserving the application's state in the URL hash while navigating through different pages or sections.

### Usage

Include the `pn-pattern-a` and `pn-a-s-page` attributes within the pagination component to enable the same page window option.

### Example

```html
<div class="pagination"
     pn-j-label="Jump" 
     pn-current="1"  
     pn-tabs="7"  
     pn-total="100"
     pn-pattern-a="#example-page"
     pn-a-s-page="true">
</div>
```

In this example:
- The pagination component is configured to display 7 tabs at a time, with a total of 100 pages.
- The URL pattern is specified as `#example-page`.
- The same page window option is enabled (`pn-a-s-page="true"`).
- When a user interacts with the pagination component, the URL hash is updated to reflect the current page state, ensuring that the application's state is preserved within the URL hash.

### URL Construction

When a user clicks on a page link, the pagination component dynamically updates the URL hash to reflect the current page state. For instance:

- Clicking on page 1 would update the URL hash to `#example-page=1`.
- Clicking on page 2 would update the URL hash to `#example-page=2`.

This allows for seamless navigation within a single-page application while maintaining a clear representation of the current page state within the URL hash.


##  Disabled Page Jump Button

The pagination component allows users to navigate through a series of pages, typically used for breaking up long lists or sets of data into manageable segments. This version includes a disabled page jump button.

### Usage

To use the pagination component with a disabled page jump button, include the following HTML structure:

```html
<div class="pagination"
     dis-j="true"
     pn-current="1"  
     pn-tabs="3"  
     pn-total="50">
</div>
```

### Attributes
- **dis-j**: Specifies whether to disable the page jump button. When set to `true`, the page jump 


## Pagination Event

The pagination event allows you to capture changes or interactions with a pagination component, enabling you to respond to those events accordingly. This event can be useful for implementing dynamic behavior, such as fetching and displaying data corresponding to a specific page.

### Usage

To listen for pagination events, you can attach an event listener to the pagination component using JavaScript.

#### Example:

```javascript
document.querySelector(".pagination").addEventListener("change", function(event) {
    console.log(this.getAttribute("get-page"));
});
```

In this example:
- The `querySelector()` method is used to select the pagination component in the document.
- An event listener is attached to the pagination component, listening for the `"change"` event.
- When the `"change"` event occurs (e.g., when the user selects a different page), the specified function is executed.
- Inside the function, `this` refers to the pagination component that triggered the event.
- `getAttribute("get-page")` retrieves the value of the attribute named `"get-page"` from the pagination component.

```

### Notes

- Ensure that the pagination component has the appropriate attributes and structure to support the event handling logic.
- Customize the event listener function and event handling logic according to your application's requirements.
- Test your pagination functionality thoroughly to ensure it behaves as expected in different scenarios.

By leveraging pagination events, you can create dynamic and interactive pagination components that enhance the user experience in your web applications.
