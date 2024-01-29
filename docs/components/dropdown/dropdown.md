# dropdown

A dropdown component is a user interface element commonly used in web development. It provides a compact way to present a list of options or actions to users, initially hidden and revealed upon interaction. Typically activated by clicking or hovering over a trigger element, the dropdown displays a menu that allows users to select from available choices. Dropdown components enhance navigation and user experience by organizing and simplifying access to various options, making them widely utilized in forms, navigation bars, and interactive interfaces on websites and applications.



#### HTML Structure:

```html
<button class="dropdown" d-event="click" data="post-id-2" d-defind="rest" dropdown="trigger">rest</button>

<ul class="dropdown-menu" overflow-x="nowrap" d-event="mouseover" d-defind="rest">
    <a href="#home">Home</a>
    <a>About</a>
    <a disabled>Services</a> <!-- Target disabled: This item is disabled and cannot be clicked. -->
    <a event="remove">Contact</a> <!-- Not closeable when clicked: This item will not close the dropdown when clicked. -->
    <button event="remove">Button</button>
</ul>
```

#### Explanation:

1. **Button Element (`<button>`):**
   - **Class:**
     - `dropdown`: Indicates that this button triggers a dropdown menu.
   - **Attributes:**
     - `d-event="click"`: Specifies that the dropdown is triggered on a click.
     - `data="post-id-2"`: Additional data associated with the button.
     - `d-defind="rest"`: A unique identifier for the associated dropdown menu.
     - `dropdown="trigger"`: Marks this element as the trigger for the dropdown.

2. **Dropdown Menu (`<ul class="dropdown-menu">`):**
   - **Attributes:**
     - `d-event="click"`: Specifies that the dropdown menu is triggered on a click.
     - `d-defind="rest"`: A unique identifier to link the dropdown menu with the triggering button.
   - **Dropdown Items:**
     - `<a>` tags represent individual items in the dropdown menu.
       - Example items: Home, About, Services, Contact.
     - `<button>`: A button element inside the dropdown menu.

#### Usage:

1. **Dropdown Trigger (`<button>`):**
   - Add the class `dropdown` to any button that should trigger a dropdown.
   - Set the `d-event` attribute to "click" to make the dropdown trigger on a click.
   - Use the `data` attribute for any additional data associated with the button.
   - Set a unique identifier using `d-defind` to link the button with its associated dropdown menu.
   - Add the `dropdown="trigger"` attribute to mark this element as the dropdown trigger.

2. **cnt-load-post:**
   - Specifies the HTTP POST request URL for loading content dynamically.
   - Example: `cnt-load-post="/dropdown-menu-edit-file"`
     
3. **Dropdown Menu (`<ul class="dropdown-menu">`):**
   - Place the `<ul>` element immediately after the triggering button.
   - Set the `d-event` attribute to "click" to make the dropdown menu triggered on a click.
   - Use `d-defind` with the same value as the triggering button to create a link between them.
   - Inside the `<ul>`, use `<a>` tags for individual dropdown items, and optionally, `<button>` elements.

 **Overflow Control:**
   - The `overflow-x="nowrap"` style is applied to control horizontal overflow within the dropdown menu.
   - This is useful when you want to keep the content in a single line without wrapping.
#### Usage:

1. **Disabled Item (`<a disabled>`):**
   - Use the `disabled` attribute on an `<a>` tag to create a disabled item.
   - The disabled item cannot be clicked or interacted with.

2. **Item Not Closeable When Clicked (`<a event="remove">` and `<button event="remove">`):**
   - Use the `event="remove"` attribute on an `<a>` or `<button>` tag to create an item that will not close the dropdown when clicked.
   - This can be useful for items that trigger additional actions without closing the dropdown.
  
#### Notes:

- The dropdown will now be triggered when the button is clicked.
- Adjust the `d-defind` values to match between the triggering button and its associated dropdown menu.

Feel free to ask if you have any more questions or if there's anything else I can help you with!


## Text with Left and Right Icons:

```html
<ul class="dropdown-menu" d-event="mouseover" d-defind="rest">
    <a>Home</a>
    <a>
        <left>
            <img src="/images/usa.png">
        </left> 
        <div>About</div>
        <right>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M6.5234375 3.1484375L5.4765625 4.8515625L17.09375 12L5.4765625 19.148438L6.5234375 20.851562L20.908203 12L6.5234375 3.1484375 z"/>
            </svg>
        </right>
    </a>
</ul>
```


#### Usage:

1. **Text with Left and Right Icons (`<a>`):**
   - Use the `<a>` tag for each dropdown item.
   - Customize the content within `<left>`, `<div>`, and `<right>` to achieve the desired layout.
   - The `<img>` tag inside `<left>` is for displaying an image/icon on the left.
   - The `<div>` tag contains the text for the item.
   - The `<svg>` tag inside `<right>` is for displaying an SVG icon on the right.


## Submenu Container :

```html
<ul class="dropdown-menu" d-event="mouseover" d-defind="rest">
    <a>Home</a>
    <div class="dropdown-sub">
        <a dropdown="trigger">
            <div>Account</div>
        </a>
        <ul class="dropdown-menu">
            <a>Tree</a>
            <div class="dropdown-sub">
                <a dropdown="trigger">
                    <div>Account</div>
                </a>
                <ul class="dropdown-menu">
                    <a>Tree</a>
                </ul>
            </div>
        </ul>
    </div>
</ul>

```

#### Explanation:

1. **Submenu Container (`<div class="dropdown-sub">`):**
   - Represents a container for a submenu item.
   - Contains a trigger (`<a dropdown="trigger">`) and content (`<div>`).

2. **Submenu Trigger (`<a dropdown="trigger">`):**
   - Represents the trigger for the submenu.
   - Allows users to interact with the submenu.

3. **Submenu Content (`<div>`):**
   - Represents the content of the submenu item.
   - Can include text or other elements.

4. **Nested Submenu (`<div class="dropdown-sub">` within submenu):**
   - Allows for the creation of nested submenus.
   - Follows the same structure as the top-level submenu.

5. **Nested Submenu Trigger (`<a dropdown="trigger">` within nested submenu):**
   - Acts as the trigger for the nested submenu.

6. **Nested Submenu Content (`<div>` within nested submenu):**
   - Represents the content of the nested submenu item.

7. **Nested Submenu Items (`<ul class="dropdown-menu">` within nested submenu):**
   - Represents the dropdown menu associated with the nested submenu.
   - Contains items, such as `<a>`, that users can interact with.

#### Usage:

1. **Creating a Submenu:**
   - Use `<div class="dropdown-sub">` to create a container for a submenu item.
   - Include a trigger (`<a dropdown="trigger">`) and content (`<div>`) inside the submenu item.

2. **Nested Submenus:**
   - To create nested submenus, place another `<div class="dropdown-sub">` within the submenu.
   - Continue nesting as needed.

3. **Submenu Trigger:**
   - Use `<a dropdown="trigger">` as the trigger for the submenu.
   - This element is clickable and opens the associated submenu.

4. **Submenu Content:**
   - Use `<div>` to represent the content of the submenu item.
   - This can include text or other elements.

5. **Nested Submenu Trigger and Content:**
   - Follow the same structure for nested submenus, including a trigger and content.

6. **Nested Submenu Items:**
   - Include `<ul class="dropdown-menu">` within the nested submenu to represent the dropdown menu.
   - Add items, such as `<a>`, inside the nested submenu.


## Data:

```html
<!-- Example blog posts with dropdown components -->
<article class="blog-post">
    <h1 class="post-title">id-1</h1>
    <button class="dropdown" data="post-id-1" d-defind="rest" dropdown="trigger">more...</button>
</article>

<article class="blog-post">
    <h1 class="post-title">id-2</h1>
    <button class="dropdown" data="post-id-2" d-defind="rest" dropdown="trigger">more...</button>
</article>

<article class="blog-post">
    <h1 class="post-title">id-3</h1>
    <button class="dropdown" data="post-id-3" d-defind="rest" dropdown="trigger">more...</button>
</article>

<!-- Dropdown menu with options -->
<ul class="dropdown-menu each_id" d-event="mouseover" d-defind="rest">
    <a>
        <div class="post-delete">Delete Post</div>
    </a>
    <a>
        <div class="post-share">Share Post</div>
    </a>
</ul>

<script>
    // Example script for handling a click event within the dropdown menu
    document.querySelector(".post-delete").addEventListener("click", function () {
        // Retrieve the post ID associated with the dropdown menu
        var post_id = document.querySelector(".each_id").getAttribute("data");
        console.log("Delete post with ID:", post_id);
        // Perform the desired actions with the post ID
    });
</script>
```

#### Explanation:

1. **Blog Post Structure:**
   - Each blog post is represented by an `<article>` element containing a post title (`<h1>`) and a dropdown button.

2. **Dropdown Component:**
   - The dropdown component is represented by a `<button>` element with the class "dropdown."
   - It includes the `data` attribute to store additional information, such as the post ID (`data="post-id-1"`).
   - The `d-defind` attribute provides a unique identifier for the associated dropdown menu.
   - The `dropdown="trigger"` attribute marks the button as the trigger for the dropdown menu.

3. **Dropdown Menu:**
   - The dropdown menu (`<ul class="dropdown-menu each_id">`) contains options like "Delete Post" and "Share Post."

4. **Dropdown Menu Script:**
   - The script listens for a click event on the "Delete Post" option within the dropdown.
   - It retrieves the post ID associated with the dropdown menu using `getAttribute("data")`.
   - The post ID is then logged to the console, and you can perform desired actions with the post ID.

#### Usage:

1. **Dropdown Trigger Button:**
   - Clicking on the "more..." button triggers the dropdown menu.

2. **Dropdown Menu Options:**
   - The dropdown menu provides options like "Delete Post" and "Share Post."

3. **Script Handling:**
   - The script demonstrates handling a click event within the dropdown menu, extracting the associated post ID.

## Events

```html
<!-- Trigger Button -->
<button class="dropdown" data="post-id-1" d-defind="rest" dropdown="trigger">more...</button>

<!-- Dropdown Menu -->
<ul class="dropdown-menu" d-event="mouseover" d-defind="rest">
    <a>
        <div class="post-delete">Delete Post</div>
    </a>
    <a>
        <div class="post-share">Share Post</div>
    </a>
</ul>


<script>
    // Function to open the dropdown menu
    function openDropdownMenu() {
        // Your logic to open the dropdown menu goes here
        console.log("Dropdown menu opened!");
    }

    // Function to close the dropdown menu
    function closeDropdownMenu() {
        // Your logic to close the dropdown menu goes here
        console.log("Dropdown menu closed!");
    }

    // Event listener for custom "open" event
    document.querySelector('.dropdown-menu').addEventListener("open", openDropdownMenu);

    // Event listener for custom "close" event
    document.querySelector('.dropdown-menu').addEventListener("close", closeDropdownMenu);

    
</script>
```

#### Explanation:

1. **"open" Event:**
   - The `openDropdownMenu` function represents the logic to be executed when the dropdown menu is opened.
   - The event listener is set up to listen for the custom "open" event on the `.dropdown-menu` element.

2. **"close" Event:**
   - The `closeDropdownMenu` function represents the logic to be executed when the dropdown menu is closed.
   - The event listener is set up to listen for the custom "close" event on the `.dropdown-menu` element.


# AJAX "cnt-load"

It seems like you're trying to define additional options for a dropdown menu, including options for loading content dynamically using HTTP requests. Let's break down the provided code and document the options:

```html
<!-- Dropdown Menu with Dynamic Content Loading Options -->

<ul class="dropdown-menu"
    cnt-load-get="/dropdown-menu-edit-file"
    htp-query='{"key":1,"id":"$data"}'
    htp-s="call_fun_success"
    error-label="something went wrong !!!"
    overflow-x="nowrap"
    d-defind="trigger">
</ul>

<script>
    // Function to handle HTTP success callback
    function call_fun_success(ul, status) {
        // 'ul' is the dropdown menu element
        // 'status' is the HTTP status of the request
        // Your logic to handle success goes here
        ul.innerHTML = "Updated content"; // Example: Update content of the dropdown
    }
</script>
```

#### Explanation:

1. **cnt-load-get:**
   - Defines the HTTP GET request URL for loading content dynamically.
   - Example: `cnt-load-get="/dropdown-menu-edit-file"`

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
   - Controls whether the dropdown menu should synchronize with the server on every trigger click. Default is `false`.
   - Example: `htp-sync="true"`

9. **error-label:**
   - Sets the error label text if something goes wrong during the HTTP request.
   - Example: `error-label="something went wrong !!!"`


10. **Example Script:**
    - Provides an example script (`call_fun_success`) to handle the success callback.
    - Demonstrates updating the content of the dropdown menu.

### `cnt-load-get`:

The `cnt-load-get` attribute is used to define the URL for an HTTP GET request that retrieves content dynamically to populate a dropdown menu. This attribute plays a crucial role in fetching data from a server or an external source to update the dropdown menu.

#### Example Usage:

```html
<!-- Example Dropdown Menu with Dynamic Content Loading using GET -->
<ul class="dropdown-menu"
    cnt-load-get="/api/fetch-dropdown-data"
    htp-query='{"key": 1, "id": "$data"}'
    htp-s="call_fun_success"
    error-label="Something went wrong!"
    overflow-x="nowrap"
    d-defind="trigger">
</ul>
```

In this example:

- **cnt-load-get:**
  - Specifies the URL for the HTTP GET request.
  - Example: `cnt-load-get="/api/fetch-dropdown-data"`

- **htp-query:**
  - Specifies query parameters for the HTTP GET request.
  - Example: `htp-query='{"key": 1, "id": "$data"}'`
  - Here, `$data` is a placeholder that gets replaced with the data associated with the dropdown trigger.

- **htp-s:**
  - Defines a callback function (`call_fun_success`) to handle the success of the HTTP request.
  - Example: `htp-s="call_fun_success"`

- **error-label:**
  - Sets the error label text in case something goes wrong during the HTTP request.
  - Example: `error-label="Something went wrong!"`


### Usage Guidelines:

1. **Endpoint for GET Request (`cnt-load-get`):**
   - Specify the endpoint or URL for the HTTP GET request. This should be the server endpoint responsible for providing the data to populate the dropdown menu.

2. **Query Parameters (`htp-query`):**
   - If the server expects additional parameters, use the `htp-query` attribute to define them.
   - Utilize placeholders like `$data` to dynamically insert values associated with the dropdown trigger.

3. **Success Handling (`htp-s`):**
   - Define a callback function to handle the success of the HTTP request. This function can manipulate the content of the dropdown menu based on the received data.

4. **Error Label (`error-label`):**
   - Provide a user-friendly error message in case the HTTP request encounters an issue.


### Summary:

The `cnt-load-get` attribute is a key component for dynamically loading content into a dropdown menu through an HTTP GET request. It allows you to fetch data from a specified endpoint and integrate it seamlessly into the dropdown menu, enhancing the user experience by providing up-to-date and relevant information. Adjust the URL and query parameters as needed for your specific use case.

### `cnt-load-post`:

The `cnt-load-post` attribute is used to define the URL for an HTTP POST request that retrieves content dynamically to populate a dropdown menu. This attribute is crucial when you need to send data to the server, such as form data, to fetch specific information based on the provided parameters.

#### Example Usage:

```html
<!-- Example Dropdown Menu with Dynamic Content Loading using POST -->
<ul class="dropdown-menu"
    cnt-load-post="/api/fetch-dropdown-data"
    htp-query='{"key": 1, "id": "$data"}'
    htp-s="call_fun_success"
    error-label="Something went wrong!"
    overflow-x="nowrap"
    d-defind="trigger">
</ul>
```

In this example:

- **cnt-load-post:**
  - Specifies the URL for the HTTP POST request.
  - Example: `cnt-load-post="/api/fetch-dropdown-data"`

- **htp-query:**
  - Specifies query parameters for the HTTP POST request.
  - Example: `htp-query='{"key": 1, "id": "$data"}'`
  - Here, `$data` is a placeholder that gets replaced with the data associated with the dropdown trigger.

- **htp-s:**
  - Defines a callback function (`call_fun_success`) to handle the success of the HTTP request.
  - Example: `htp-s="call_fun_success"`

- **error-label:**
  - Sets the error label text in case something goes wrong during the HTTP request.
  - Example: `error-label="Something went wrong!"`



### Usage Guidelines:

1. **Endpoint for POST Request (`cnt-load-post`):**
   - Specify the endpoint or URL for the HTTP POST request. This should be the server endpoint responsible for processing the POST data and providing the necessary information to populate the dropdown menu.

2. **Query Parameters (`htp-query`):**
   - If the server expects additional parameters, use the `htp-query` attribute to define them.
   - Utilize placeholders like `$data` to dynamically insert values associated with the dropdown trigger.

3. **Success Handling (`htp-s`):**
   - Define a callback function to handle the success of the HTTP request. This function can manipulate the content of the dropdown menu based on the received data.

4. **Error Label (`error-label`):**
   - Provide a user-friendly error message in case the HTTP request encounters an issue.



### Summary:

The `cnt-load-post` attribute is essential when you need to send data to the server via an HTTP POST request to dynamically load content into a dropdown menu. It facilitates communication with the server, allowing you to provide specific parameters and retrieve relevant information. Adjust the URL, query parameters, and other attributes as needed for your specific use case.

### htp-query:

The `htp-query` attribute is used to define the query parameters for the HTTP request made to load content dynamically. It accepts a JSON object as its value, where keys represent parameter names, and values can be static, dynamic, or derived from function calls.

#### Examples:

1. **Static Values:**
   - You can use static values for query parameters that remain constant.

    ```html
    htp-query='{"key": 1, "type": "user"}'
    ```

2. **Dynamic Values (`$data`):**
   - The `$data` placeholder allows you to dynamically insert the value associated with the dropdown trigger. It's especially useful when each dropdown item corresponds to a unique data value.

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

- **Dynamic Values (`$data`):** Utilize `$data` when you want the query parameter to be specific to the data associated with the dropdown trigger. This is often useful when each dropdown item represents a unique entity, and you want to fetch details related to that entity.

- **Function Calls:** If you need more complex or dynamic values for query parameters, you can call functions. These functions can perform calculations, retrieve values from external sources, or apply any custom logic.

#### Example with Multiple Types of Parameters:

```html
htp-query='{"id": "$data", "type": "user", "status": "active", "name": "$Namefun()"}'
```

In this example, the query parameters include a dynamic value (`$data`), static values ("type" and "status"), and the result of calling a function (`$Namefun()`).

### Summary:

The `htp-query` attribute provides flexibility in constructing HTTP requests by allowing a mix of static values, dynamic values based on the dropdown trigger (`$data`), and function calls. This flexibility ensures that you can tailor your requests to retrieve the specific data needed for each dropdown item. Adjust the query parameters according to your application's requirements.


### `htp-swap` Attribute:

The `htp-swap` attribute is used to specify how the content received from the server should be integrated into the existing dropdown menu. This attribute does not directly support options like "prepend," "after," or "before." Instead, it defines the property or attribute of the dropdown menu element that will be updated with the fetched content.

#### Options:

1. **innerHTML (Default):**
   - Updates the inner HTML of the dropdown menu with the fetched content.

    ```html
    htp-swap="innerHTML"
    ```

2. **textContent:**
   - Updates the text content of the dropdown menu.

    ```html
    htp-swap="textContent"
    ```

3. **childAppend:**
   - Appends the fetched content as a child element to the dropdown menu.

    ```html
    htp-swap="childAppend"
    ```

#### Example:

```html
<ul class="dropdown-menu"
    cnt-load-get="/dropdown-menu-edit-file"
    htp-query='{"key":1,"id":"$data"}'
    htp-s="childAppend"
    error-label="something went wrong !!!"
    overflow-x="nowrap"
    d-defind="trigger">
</ul>
```

In this example, the `htp-swap` attribute is set to "childAppend," indicating that the fetched content will be appended as a child element to the existing dropdown menu.

### JavaScript Integration:

While the `htp-swap` attribute defines the type of update, you may need to use JavaScript to manipulate the DOM based on specific insertion points or positions, like "prepend," "after," or "before," as demonstrated in the previous examples.


### `htp-sync`:

The `htp-sync` attribute is used to control the synchronization behavior of HTTP requests triggered by a dropdown menu. It determines whether subsequent requests should wait for the completion of the ongoing request before initiating a new one.

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
<!-- Example Dropdown Menu with htp-sync Attribute -->
<ul class="dropdown-menu"
    cnt-load-get="/api/fetch-dropdown-data"
    htp-query='{"key": 1, "id": "$data"}'
    htp-s="call_fun_success"
    htp-sync="true"
    error-label="Something went wrong!"
    overflow-x="nowrap"
    d-defind="trigger">
</ul>
```

In this example:

- **htp-sync:**
  - Specifies whether subsequent HTTP requests triggered by the dropdown menu should be synchronized.
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
The `htp-headers` attribute allows you to include custom HTTP headers in the request triggered by the dropdown menu.

#### Example Usage:

```html
<!-- Example Dropdown Menu with htp-headers Attribute -->
<ul class="dropdown-menu"
    cnt-load-get="/api/fetch-dropdown-data"
    htp-query='{"key": 1, "id": "$data"}'
    htp-s="call_fun_success"
    htp-headers='{"Authorization": "Bearer Token123", "Custom-Header": "Value"}'
    error-label="Something went wrong!"
    overflow-x="nowrap"
    d-defind="trigger">
</ul>
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

The `htp-headers` attribute is useful when you need to include custom HTTP headers in the request triggered by a dropdown menu. This is common when dealing with APIs that require authentication tokens or additional information in the headers for successful communication. Specify the headers as a JSON object, and include the necessary information to ensure that the server processes the request correctly. Adjust the headers based on the specific requirements of your server and API.
