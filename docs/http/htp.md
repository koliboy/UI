# `$htp` 

The `$htp` function is a custom JavaScript function designed to handle AJAX (Asynchronous JavaScript and XML) requests for dynamic content loading. It simplifies the process of fetching data from a server and updating specified HTML elements with the response content.

#### Syntax

```javascript
$htp.call(element,options);
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


### `htp-get` and `htp-post`

The `htp-get` and `htp-post` attributes are used in HTML elements to specify the URL for AJAX requests and the HTTP method to be used (GET or POST). These attributes are commonly used in conjunction with JavaScript functions such as `$htp.call()` to initiate AJAX requests and retrieve data from or send data to a server.

#### `htp-get` Attribute

The `htp-get` attribute is used to specify the URL for making HTTP GET requests. When an element with `htp-get` is activated (e.g., clicked), the JavaScript function associated with it (e.g., `$htp.call()`) will initiate a GET request to the specified URL.

##### Example Usage:

```html
<div htp-get="/api/data">Click me to fetch data</div>
```
```js
document.querySelector("div").addEventListener("click",function(){
 $htp.call(this);
});
```

#### `htp-post` Attribute

The `htp-post` attribute is used to specify the URL for making HTTP POST requests. Similarly to `htp-get`, when an element with `htp-post` is activated, it triggers a JavaScript function to initiate a POST request to the specified URL.

##### Example Usage:

```html
<div  htp-post="/api/data"
htp-query='{"key":1,"id":"20"}'
>Click me to fetch data</div>
```
```js
document.querySelector("div").addEventListener("click",function(){
 $htp.call(this);
});
```

#### Usage Notes:

- Use `htp-get` for requests where you want to retrieve data from the server.
- Use `htp-post` for requests where you want to send data to the server, typically used with form submissions.
- These attributes are often used in combination with JavaScript functions to handle the AJAX requests and responses, such as `$htp.call()`.

## Dynamic Values

In HTML, dynamic values can be injected into attributes using placeholders. These placeholders are then replaced with actual values using JavaScript before initiating AJAX requests. Here's an example demonstrating the usage of dynamic values:

```html
<div
  class="content"
  htp-get="/api/data"
  htp-query='{"key":1,"id":"$id","user_name":"$name","total":"$total_number()"}'
>
  <!-- Dynamic Values -->
  <!-- $id: 12, $name: "barinty", $total_number(): 80 -->
</div>
<script>
  var id = 12;
  var name = "barinty";
  function total_number() {
    return 50 + 30;
  }
  $htp.call(document.querySelector(".content"), {
    id: id,
    /.............../ 
  });
</script>
```

#### Explanation:

- In the `htp-query` attribute, placeholders like `$id`, `$name`, and `$total_number()` are used to represent dynamic values.
- JavaScript variables (`id` and `name`) and a function (`total_number()`) are defined to provide actual values for these placeholders.
- The `$htp.call()` function is invoked with the target element (`.content`) and an object containing the values for dynamic placeholders (`id` and `name`).
- Before making the AJAX request, the placeholders in `htp-query` are replaced with their corresponding values.

This approach allows for flexible and dynamic generation of AJAX requests with varying parameters based on the context or user input.
