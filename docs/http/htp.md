# `$htp` 

The `$htp` function is a custom JavaScript function designed to handle AJAX (Asynchronous JavaScript and XML) requests for dynamic content loading. It simplifies the process of fetching data from a server and updating specified HTML elements with the response content.

#### Syntax

```javascript
$htp.call(element);
```

- `element`: The DOM element on which the `$htp` function is called. This element should have attributes specifying the details of the AJAX request, such as the URL (`htp-get`) and additional query parameters (`htp-query`).

#### Example Usage

```html
<div class="content"
     htp-get="/content.html"
     htp-query='{"key":1,"id":"20"}'>
  <div htp-data="">
    <!-- Placeholder for AJAX Content -->
  </div>
</div>

<script>
  // Call the $htp function on an element with the class "content"
  $htp.call(document.querySelector(".content"));
</script>
```

#### Example Usage (POST Request)

```html
<div class="post"
      htp-post="/submit.php"
      htp-query='{"key":1,"id":"20"}'>
  <!-- Form inputs and elements -->
</div>
```

## `htp-options`

The `htp-options` attribute provides a comprehensive set of options for configuring AJAX requests made using the `$htp` function in JavaScript. These options allow developers to customize various aspects of the HTTP request, including request method, headers, success callback, error handling, and more.

#### List of `htp-options`

1. **htp-method**: Specifies the HTTP method for the request (`GET`, `POST`, etc.).
2. **htp-t**: Specifies the target element where fetched content will be inserted.
3. **htp-query**: Specifies query parameters for the request.
4. **htp-headers**: Specifies custom headers for the request.
5. **htp-s**: Specifies the success callback function to handle the HTTP request's successful response.
6. **htp-swap**: Specifies the property to update with the fetched content (e.g., `innerHTML`, `append`).
7. **htp-swap-s**: Specifies the method for inserting fetched content (`after`, `before`, etc.).
8. **htp-status**: Defines the expected status code for successful responses.
9. **htp-sync**: Controls the synchronization behavior of HTTP requests triggered by `htp-call`.
10. **htp-ldr**: Specifies a loading indicator or error message while the request is in progress or in case of failure.

#### Example Usage

```html
<div 
  htp-get="/api/data"
  htp-method="GET"
  htp-t=".target"
  htp-query='{"category": "books", "page": 1}'
  htp-headers='{"Authorization": "Bearer YOUR_TOKEN"}'
  htp-s="handleSuccess"
  htp-swap="append"
  htp-swap-s="after"
  htp-status="200"
  htp-sync="true"
  htp-ldr=".loading-indicator"
></div>
```

#### Explanation

- The `htp-get` attribute specifies the URL for the AJAX request.
- The `htp-method` attribute sets the HTTP method to `GET`.
- The `htp-t` attribute designates the target element for inserting fetched content.
- The `htp-query` attribute defines query parameters for the request.
- The `htp-headers` attribute includes custom headers in the request.
- The `htp-s` attribute assigns a success callback function to handle successful responses.
- The `htp-swap` attribute determines how the fetched content is updated (`append` in this case).
- The `htp-swap-s` attribute specifies the method for inserting the fetched content (`after`).
- The `htp-status` attribute sets the expected status code for successful responses.
- The `htp-sync` attribute controls the synchronization behavior of subsequent requests (`true` for synchronous behavior).
- The `htp-ldr` attribute specifies a loading indicator or error message.

#### Best Practices

- Use meaningful values for each option to ensure clarity and maintainability of code.
- Test different combinations of options to verify proper functionality in various scenarios.
- Handle errors gracefully by providing appropriate error messages or fallback content.

