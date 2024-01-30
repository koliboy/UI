# Dialog Component:

A dialog component is a user interface element that presents a modal or popup overlay to capture user input, display information, or prompt for actions. It is typically used to create focused interactions without navigating away from the current page.

#### HTML Structure:

```html
<!-- Dialog Trigger Button -->
<button data="post-id-3" dg-defind="rest" dialog="trigger">Open Dialog</button>

<!-- Dialog Container -->
<div class="dialog" dg-defind="rest" d-title="Hello Title">
   <div>Content</div>
   <div>Content 2</div>
</div>
```

#### Explanation:

1. **Dialog Trigger Button (`<button>`):**
   - The button that triggers the opening of the dialog.
   - Attributes:
     - `data`: Additional data associated with the button.
     - `dg-defind`: A unique identifier for the associated dialog.
     - `dialog="trigger"`: Marks this element as the trigger for the dialog.

2. **Dialog Container (`<div class="dialog">`):**
   - The container for the dialog content.
   - Attributes:
     - `dg-defind`: A unique identifier for the dialog, linking it with the triggering button.
     - `d-title`: Sets the title of the dialog.
   - Content:
     - The content inside the dialog container, such as text, form elements, or other components.

### Usage:

1. **Dialog Trigger Button:**
   - Add a button with the `dialog="trigger"` attribute to mark it as the trigger for the dialog.
   - Set a unique identifier using `dg-defind` to link the button with its associated dialog.

    ```html
    <button data="post-id-3" dg-defind="rest" dialog="trigger">Open Dialog</button>
    ```

2. **Dialog Container:**
   - Create a container with the class "dialog" to hold the content of the dialog.
   - Set a unique identifier using `dg-defind` to link the dialog with its triggering button.
   - Use the `d-title` attribute to specify the title of the dialog.

    ```html
    <div class="dialog" dg-defind="rest" d-title="Hello Title">
       <div>Content</div>
       <div>Content 2</div>
    </div>
    ```

## Dialog Component with Options:

```html
<!-- Dialog Container with Options -->
<div class="dialog" dg-defind="rest" d-title="Hello Title" open="true" md-screen="full" dk-screen="full" placement="center" close-self="false">
    <!-- Content -->
        <div>Content</div>
        <div>Content 2</div>
    
    <!-- Custom Header -->
    <div  cnt-tag="header">My Custom Header</div>
    <!-- Custom Footer -->
    <div  cnt-tag="footer">My Custom Footer</div>
</div>
```

#### Options Explained:

1. **`open="true"`:**
   - Opens the dialog by default without waiting for a trigger.

2. **`md-screen="full"` and `dk-screen="full"`:**
   - Makes the dialog full-screen width on mobile and desktop screens.

3. **`placement="center"`:**
   - Defines the default placement of the dialog. Options include "top," "bottom," or the default "center."

4. **`close-self="false"`:**
   - Prevents the dialog from closing when clicking outside the viewport or the close button.

5. **Custom Header and Footer:**
   - Utilizes the `cnt-tag` attribute to create custom header and footer content within the dialog.

### Usage:

1. **Default Open Dialog:**
   - The `open="true"` attribute opens the dialog by default without needing an external trigger.

2. **Full-Screen Width:**
   - `md-screen="full"` and `dk-screen="full"` make the dialog full-screen width on mobile and desktop screens.

3. **Placement Options:**
   - Adjust the `placement` attribute to set the default placement of the dialog. Options include "top," "bottom," or the default "center."

4. **Preventing Dialog Closure:**
   - Set `close-self="false"` to prevent the dialog from closing when clicking outside the viewport or the close button.

5. **Custom Header and Footer:**
   - Use the `cnt-tag="header"` and `cnt-tag="footer"` attributes to add custom header and footer content.



## Custom Styles

```html
<!-- Dialog Container with Options and Custom Styles -->
<div class="dialog " dg-defind="rest" d-title="Hello Title" open="true"  placement="center" close-self="false">
    <!-- Content -->
       <div>Content</div>
        <div>Content 2</div>
    
    <!-- Custom Header -->
    <div cnt-tag="header">My Custom Header</div>
    <!-- Custom Footer -->
    <div  cnt-tag="footer">My Custom Footer</div>
</div>
```

```css
/* Custom Styles for Dialog */
.dialog .dialog-mdl {
    /* Customize module size and control height/width */
    max-width: 300px;
}

.dialog .dialog-content {
    /* Customize content appearance */
    background: pink;
}
```

#### CSS Styles Explained:

1. **`.dialog .dialog-mdl`:**
   - Targets the dialog with the class "dialog-mdl" to customize module size.
   - Adjusts the `max-width` property to control the maximum width of the dialog.

2. **`.dialog .dialog-content`:**
   - Targets the content inside the dialog with the class "dialog-content" to customize its appearance.
   - Sets the background color to pink as an example.


## Events 

### Using `$dialog` Function:

```javascript
// Open the dialog using $dialog function
$dialog(document.querySelector(".dialog")).open();

// Close the dialog using $dialog function
$dialog(document.querySelector(".dialog")).close();
```

### Adding Event Listeners to Dialog:

```javascript
// Get the dialog element
var dialog = document.querySelector(".dialog");

// Add an event listener for the "open" event
dialog.addEventListener("open", function () {
    console.log("Dialog opened!");
    // Additional actions when the dialog is opened
});

// Add an event listener for the "close" event
dialog.addEventListener("close", function () {
    console.log("Dialog closed!");
    // Additional actions when the dialog is closed
});
```

### Explanation:

1. **Using `$dialog` Function:**
   - `$dialog` is a custom function that facilitates opening and closing dialogs.
   - `open()` method opens the dialog.
   - `close()` method closes the dialog.

2. **Adding Event Listeners:**
   - Event listeners are added to the dialog element to listen for "open" and "close" events.
   - The callback functions inside event listeners execute when the respective events occur.
   - Additional actions or logic can be added within the callback functions.

### Usage:

1. **Using `$dialog` Function:**
   - Use `$dialog` function to programmatically open and close the dialog.

2. **Adding Event Listeners:**
   - Register event listeners on the dialog element.
   - Customize the callback functions to perform specific actions when the dialog is opened or closed.

## Data

```html
<article class="blog-post">
    <h1 class="post-title">id-1</h1>
    <button data="post-id-1" d-defind="rest" dialog="trigger">more...</button>
</article>

<article class="blog-post">
    <h1 class="post-title">id-2</h1>
    <button data="post-id-2" d-defind="rest" dialog="trigger">more...</button>
</article>

<article class="blog-post">
    <h1 class="post-title">id-3</h1>
    <button data="post-id-3" d-defind="rest" dialog="trigger">more...</button>
</article>
```

### Dialog Structure:

```html
<div class="dialog" dg-defind="rest" d-title="Hello Title" open="true" placement="center" close-self="false">
       <div class="post-delete"> Delete</div>
        <div> Share Post</div>
    
    <!-- Custom Header -->
    <div  cnt-tag="header">My Custom Header</div>
    <!-- Custom Footer -->
    <div cnt-tag="footer">My Custom Footer</div>
</div>
```

### Example Script:

```javascript
// Example script for handling a click event within the dialog
document.querySelector('.post-delete').addEventListener('click', function () {
    // Retrieve the post ID associated with the dialog
    var post_id = document.querySelector('.dialog').getAttribute('data');
    console.log('Delete post with ID:', post_id);
   
    
});
```

### Explanation:

- The script now uses `document.querySelectorAll` to select all buttons with `dialog="trigger"`.
- For each button, it adds a click event listener to open the associated dialog.
- The event listener retrieves the `data` attribute of the clicked button to identify the post ID.
- The script then opens the dialog with the corresponding post ID.
- The script also includes a click event listener within the dialog to handle the "post-delete" action and close the dialog afterward.


# AJAX **cnt-load**

It seems like you're trying to define additional options for a dialog, including options for loading content dynamically using HTTP requests. Let's break down the provided code and document the options:

```html
<!-- dialog with Dynamic Content Loading Options -->

<div class="dialog" 
    cnt-load-get="/dialog-content.html" 
    htp-query='{"key": 1, "id": "$data"}'
    htp-s="call_fun_success"
    error-label="Something went wrong !!!"
    dg-defind="rest"
    d-title="Hello Title">
    
     <!-- Custom Header -->
    <div  cnt-tag="header">My Custom Header</div>
    <!-- Custom Footer -->
    <div cnt-tag="footer">My Custom Footer</div>
    
</div>

<script>
    // Function to handle HTTP success callback
    function call_fun_success(ul, status) {
        // 'ul' is the dialog element
        // 'status' is the HTTP status of the request
        // Your logic to handle success goes here
        ul.innerHTML = "Updated content"; // Example: Update content of the dialog
    }
</script>
```

#### Explanation:

1. **cnt-load-get:**
   - Defines the HTTP GET request URL for loading content dynamically.
   - Example: `cnt-load-get="/dialog-content.html"`

2. **htp-query:**
   - Specifies query parameters for the HTTP request.
   - Allows dynamic values using `$data` or function calls (e.g., `{"key":1,"id":"$data","name":"$Namefun()"}`).
   - Example: `htp-query='{"key":1,"id":"$data"}'`

3. **Function for Dynamic Value (`$Namefun()`):**
   - Provides an example of a function (`Namefun`) that can be called for dynamic values.
   - Example: `function Namefun(){ return "Ashok" }`

4. **Conditional Content-Type for POST Request:**
   - If `cnt-load-post` is used, the default Content-Type header is set to `application/json`.
   - The option to override this behavior is mentioned: `htp-headers` can be used to include additional headers.

5. **htp-headers:**
   - Specifies additional headers for the HTTP request.
   - Example: `htp-headers='{"Authorization": "Bearer YOUR_TOKEN"}'`

6. **htp-s:**
   - Defines a callback function (`call_fun_success`) to handle the HTTP request's success.
   - Example: `htp-s="call_fun_success"`

7. **htp-swap:**
   - Specifies the property to update with the fetched content. Default is `innerHTML`.
   - Example: `htp-swap="innerHTML"`

8. **htp-sync:**
   - Controls whether the dialog should synchronize with the server on every trigger click. Default is `false`.
   - Example: `htp-sync="true"`

9. **error-label:**
   - Sets the error label text if something goes wrong during the HTTP request.
   - Example: `error-label="something went wrong !!!"`


10. **Example Script:**
    - Provides an example script (`call_fun_success`) to handle the success callback.
    - Demonstrates updating the content of the dialog.

### `cnt-load-get`:

The `cnt-load-get` attribute is used to define the URL for an HTTP GET request that retrieves content dynamically to populate a dialog. This attribute plays a crucial role in fetching data from a server or an external source to update the dialog.

#### Example Usage:

```html
<!-- Example dialog with Dynamic Content Loading using GET -->
<div class="dialog" 
    cnt-load-get="/api/fetch-dialog-data"
    htp-query='{"key": 1, "id": "$data"}'
    htp-s="call_fun_success"
    error-label="Something went wrong !!!"
    dg-defind="rest"
    d-title="Hello Title">
    
     <!-- Custom Header -->
    <div cnt-tag="header">My Custom Header</div>
    <!-- Custom Footer -->
    <div cnt-tag="footer">My Custom Footer</div>
    
</div>
```

In this example:

- **cnt-load-get:**
  - Specifies the URL for the HTTP GET request.
  - Example: `cnt-load-get="/api/fetch-dialog-data"`

- **htp-query:**
  - Specifies query parameters for the HTTP GET request.
  - Example: `htp-query='{"key": 1, "id": "$data"}'`
  - Here, `$data` is a placeholder that gets replaced with the data associated with the dialog trigger.

- **htp-s:**
  - Defines a callback function (`call_fun_success`) to handle the success of the HTTP request.
  - Example: `htp-s="call_fun_success"`

- **error-label:**
  - Sets the error label text in case something goes wrong during the HTTP request.
  - Example: `error-label="Something went wrong!"`


### Usage Guidelines:

1. **Endpoint for GET Request (`cnt-load-get`):**
   - Specify the endpoint or URL for the HTTP GET request. This should be the server endpoint responsible for providing the data to populate the dialog.

2. **Query Parameters (`htp-query`):**
   - If the server expects additional parameters, use the `htp-query` attribute to define them.
   - Utilize placeholders like `$data` to dynamically insert values associated with the dialog trigger.

3. **Success Handling (`htp-s`):**
   - Define a callback function to handle the success of the HTTP request. This function can manipulate the content of the dialog based on the received data.

4. **Error Label (`error-label`):**
   - Provide a user-friendly error message in case the HTTP request encounters an issue.


### Summary:

The `cnt-load-get` attribute is a key component for dynamically loading content into a dialog through an HTTP GET request. It allows you to fetch data from a specified endpoint and integrate it seamlessly into the dialog, enhancing the user experience by providing up-to-date and relevant information. Adjust the URL and query parameters as needed for your specific use case.

### `cnt-load-post`:

The `cnt-load-post` attribute is used to define the URL for an HTTP POST request that retrieves content dynamically to populate a dialog. This attribute is crucial when you need to send data to the server, such as form data, to fetch specific information based on the provided parameters.

#### Example Usage:

```html
<!-- Example dialog with Dynamic Content Loading using POST -->
<div class="dialog" 
    cnt-load-get="/dialog-content.html" 
    htp-query='{"key": 1, "id": "$data"}'
    htp-s="call_fun_success"
    error-label="Something went wrong !!!"
    dg-defind="rest"
    d-title="Hello Title">
</div>
```

In this example:

- **cnt-load-post:**
  - Specifies the URL for the HTTP POST request.
  - Example: `cnt-load-post="/api/fetch-dialog-data"`

- **htp-query:**
  - Specifies query parameters for the HTTP POST request.
  - Example: `htp-query='{"key": 1, "id": "$data"}'`
  - Here, `$data` is a placeholder that gets replaced with the data associated with the dialog trigger.

- **htp-s:**
  - Defines a callback function (`call_fun_success`) to handle the success of the HTTP request.
  - Example: `htp-s="call_fun_success"`

- **error-label:**
  - Sets the error label text in case something goes wrong during the HTTP request.
  - Example: `error-label="Something went wrong!"`



### Usage Guidelines:

1. **Endpoint for POST Request (`cnt-load-post`):**
   - Specify the endpoint or URL for the HTTP POST request. This should be the server endpoint responsible for processing the POST data and providing the necessary information to populate the dialog.

2. **Query Parameters (`htp-query`):**
   - If the server expects additional parameters, use the `htp-query` attribute to define them.
   - Utilize placeholders like `$data` to dynamically insert values associated with the dialog trigger.

3. **Success Handling (`htp-s`):**
   - Define a callback function to handle the success of the HTTP request. This function can manipulate the content of the dialog based on the received data.

4. **Error Label (`error-label`):**
   - Provide a user-friendly error message in case the HTTP request encounters an issue.



### Summary:

The `cnt-load-post` attribute is essential when you need to send data to the server via an HTTP POST request to dynamically load content into a dialog. It facilitates communication with the server, allowing you to provide specific parameters and retrieve relevant information. Adjust the URL, query parameters, and other attributes as needed for your specific use case.

### htp-query:

The `htp-query` attribute is used to define the query parameters for the HTTP request made to load content dynamically. It accepts a JSON object as its value, where keys represent parameter names, and values can be static, dynamic, or derived from function calls.

#### Examples:

1. **Static Values:**
   - You can use static values for query parameters that remain constant.

    ```html
    htp-query='{"key": 1, "type": "user"}'
    ```

2. **Dynamic Values (`$data`):**
   - The `$data` placeholder allows you to dynamically insert the value associated with the dialog trigger. It's especially useful when each dialog item corresponds to a unique data value.

    ```html
    htp-query='{"id": "$data", "action": "details"}'
    ```

3. **Function Calls:**
   - You can call functions to dynamically generate values for query parameters.

    ```html
    htp-query='{"id": "$data", "name": "$Namefun()"}'
    ```

   - Here, the `Namefun` function is invoked to dynamically retrieve a value for the "name" parameter.

    ```javascript
    function Namefun() {
        return "Ashok";
    }
    ```

#### Usage Guidelines:

- **Static Parameters:** Use static values when the query parameter remains the same for every request.

- **Dynamic Values (`$data`):** Utilize `$data` when you want the query parameter to be specific to the data associated with the dialog trigger. This is often useful when each dialog item represents a unique entity, and you want to fetch details related to that entity.

- **Function Calls:** If you need more complex or dynamic values for query parameters, you can call functions. These functions can perform calculations, retrieve values from external sources, or apply any custom logic.

#### Example with Multiple Types of Parameters:

```html
htp-query='{"id": "$data", "type": "user", "status": "active", "name": "$Namefun()"}'
```

In this example, the query parameters include a dynamic value (`$data`), static values ("type" and "status"), and the result of calling a function (`$Namefun()`).

### Summary:

The `htp-query` attribute provides flexibility in constructing HTTP requests by allowing a mix of static values, dynamic values based on the dialog trigger (`$data`), and function calls. This flexibility ensures that you can tailor your requests to retrieve the specific data needed for each dialog item. Adjust the query parameters according to your application's requirements.


### `htp-swap` Attribute:

The `htp-swap` attribute is used to specify how the content received from the server should be integrated into the existing dialog. This attribute does not directly support options like "prepend," "after," or "before." Instead, it defines the property or attribute of the dialog element that will be updated with the fetched content.

#### Options:

1. **innerHTML (Default):**
   - Updates the inner HTML of the dialog with the fetched content.

    ```html
    htp-swap="innerHTML"
    ```

2. **textContent:**
   - Updates the text content of the dialog.

    ```html
    htp-swap="textContent"
    ```

3. **childAppend:**
   - Appends the fetched content as a child element to the dialog.

    ```html
    htp-swap="childAppend"
    ```

#### Example:

```html
<div class="dialog" 
    cnt-load-get="/api/fetch-dialog-data"
    htp-query='{"key": 1, "id": "$data"}'
    htp-s="call_fun_success"
    error-label="Something went wrong !!!"
    dg-defind="rest"
    d-title="Hello Title">
    
</div>
```

In this example, the `htp-swap` attribute is set to "childAppend," indicating that the fetched content will be appended as a child element to the existing dialog.

### JavaScript Integration:

While the `htp-swap` attribute defines the type of update, you may need to use JavaScript to manipulate the DOM based on specific insertion points or positions, like "prepend," "after," or "before," as demonstrated in the previous examples.


### `htp-sync`:

The `htp-sync` attribute is used to control the synchronization behavior of HTTP requests triggered by a dialog. It determines whether subsequent requests should wait for the completion of the ongoing request before initiating a new one.

#### Options:

- **"true" (Default):**
  - Subsequent requests wait for the completion of the ongoing request before initiating a new one.

    ```html
    htp-sync="true"
    ```

- **"false":**
  - Subsequent requests are not synchronized and can be initiated independently of the ongoing request.

    ```html
    htp-sync="false"
    ```

#### Example Usage:

```html
<!-- Example dialog with htp-sync Attribute -->

<div class="dialog" 
    cnt-load-get="/api/fetch-dialog-data"
    htp-query='{"key": 1, "id": "$data"}'
    htp-s="call_fun_success"
    error-label="Something went wrong !!!"
    dg-defind="rest"
    htp-sync="true"
    d-title="Hello Title">
    
</div>
```

In this example:

- **htp-sync:**
  - Specifies whether subsequent HTTP requests triggered by the dialog should be synchronized.
  - Example: `htp-sync="true"`

### Usage Guidelines:

1. **"true" (Default):**
   - Use this option when you want to ensure that subsequent requests wait for the completion of the ongoing request before initiating a new one.
   - This is useful when you want to avoid potential conflicts or unexpected behavior due to multiple concurrent requests.

    ```html
    htp-sync="true"
    ```

2. **"false":**
   - Use this option when you want subsequent requests to be independent of the ongoing request. Each trigger click initiates a new request, regardless of the status of the ongoing request.
   - This can be useful in scenarios where you want to allow users to quickly switch between different options without waiting for the completion of previous requests.

    ```html
    htp-sync="false"
    ```


### `htp-headers`:
The `htp-headers` attribute allows you to include custom HTTP headers in the request triggered by the dialog.

#### Example Usage:

```html
<!-- Example dialog with htp-headers Attribute -->

<div class="dialog" 
    cnt-load-get="/api/fetch-dialog-data"
    htp-query='{"key": 1, "id": "$data"}'
    htp-s="call_fun_success"
    htp-headers='{"Authorization": "Bearer Token123", "Custom-Header": "Value"}'
    error-label="Something went wrong !!!"
    dg-defind="rest"
    d-title="Hello Title">
    
</div>
```

In this example:

- **htp-headers:**
  - Specifies custom HTTP headers to be included in the request.
  - Example: `htp-headers='{"Authorization": "Bearer Token123", "Custom-Header": "Value"}'`

### Usage Guidelines:

1. **Custom Headers (`htp-headers`):**
   - Use the `htp-headers` attribute to include custom HTTP headers in the request.
   - Specify headers as a JSON object, where each key-value pair represents a header and its value.

    ```html
    htp-headers='{"Authorization": "Bearer Token123", "Custom-Header": "Value"}'
    ```

2. **Authorization Headers:**
   - If your server requires authentication, you can include an "Authorization" header with an authentication token.

    ```html
    htp-headers='{"Authorization": "Bearer Token123"}'
    ```

3. **Custom Headers:**
   - Include any additional custom headers that your server may require for processing the request.

    ```html
    htp-headers='{"Custom-Header": "Value"}'
    ```

4. **Multiple Headers:**
   - You can include multiple headers by separating them with commas within the JSON object.

    ```html
    htp-headers='{"Header1": "Value1", "Header2": "Value2"}'
    ```

### Summary:

The `htp-headers` attribute is useful when you need to include custom HTTP headers in the request triggered by a dialog. This is common when dealing with APIs that require authentication tokens or additional information in the headers for successful communication. Specify the headers as a JSON object, and include the necessary information to ensure that the server processes the request correctly. Adjust the headers based on the specific requirements of your server and API.


### Cross-Origin Note for `cnt-load-get` and `cnt-load-post` (HTTP Requests)
When using the `cnt-load-get` and `cnt-load-post` attributes to make HTTP requests for dynamically loading content into a dialog, it's essential to consider Cross-Origin Resource Sharing (CORS) implications. CORS restrictions are in place to enhance security by preventing unauthorized access to resources on a different domain. Here are important considerations when dealing with CORS in the context of these attributes:

#### 1. **Same-Origin Policy:**
   - The Same-Origin Policy restricts web pages from making requests to a different domain than the one that served the web page.
   - AJAX requests initiated by `cnt-load-get` and `cnt-load-post` to a different origin may be subject to CORS restrictions.

#### 2. **CORS Headers:**
   - To enable cross-origin requests, the server must include appropriate CORS headers in its responses.
   - Ensure that the server from which you are fetching data includes the necessary CORS headers, such as `Access-Control-Allow-Origin`.

#### 3. **Server-Side Configuration:**
   - Make sure the server is configured to respond with the required CORS headers, allowing requests from the domain where your web page is hosted.

#### 4. **Handling CORS Issues:**
   - If you encounter CORS-related issues, check the browser console for error messages. Common errors include `Access to XMLHttpRequest` and `Cross-Origin Request Blocked`.
   - Adjust server-side configurations or use appropriate techniques (e.g., JSONP, proxy servers) to address CORS restrictions.



#### 5. **Credentials and Cookies:**
   - If your requests include credentials (like cookies), be aware that CORS rules become stricter.
   - Set the `withCredentials` property to `true` when making AJAX requests if cookies need to be sent.

#### Important Note:
   - Always prioritize security and consider the potential risks associated with allowing cross-origin requests.
   - Whitelist specific origins in the server's CORS configuration rather than using the wildcard `*` if possible.

Understanding and addressing CORS considerations are crucial to ensure the proper functioning and security of HTTP requests made by the `cnt-load-get` and `cnt-load-post` attributes in dynamically loading content for dialogs.
