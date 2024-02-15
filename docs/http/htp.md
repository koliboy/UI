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
     htp-get="/content.php"
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

#### Attributes

- `htp-get` or `htp-post`: Specifies the URL from which data will be fetched (`htp-get`) or posted (`htp-post`) using the AJAX request.
- `htp-query`: Specifies additional query parameters to be sent with the AJAX request in JSON format.
- `htp-data`: Placeholder element within the specified element where the fetched content will be inserted.

#### Functionality

1. **AJAX Request**: The function initiates an AJAX request to the URL specified in the `htp-get` attribute.
2. **Query Parameters**: Additional query parameters specified in the `htp-query` attribute are included in the request.
3. **Data Insertion**: Upon receiving a successful response from the server, the content is inserted into the placeholder element specified by the `htp-data` attribute.
4. **Dynamic Loading**: The function allows for dynamic loading of content without needing to reload the entire webpage.

### Note

- Ensure proper error handling and security measures are implemented to mitigate potential security risks, such as Cross-Site Scripting (XSS) attacks, when using dynamic content loading.
- The `$htp` function operates on individual elements, so it should be called separately for each element requiring dynamic content loading.
