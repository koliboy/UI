# htp-load

The `htp-load` attribute is an extension of the $htp library that allows you to specify events that trigger the fetching of data from a specified URL. Here's how it works:

### Syntax:
```html
<div
    htp-get="/hello.html"
    htp-load="[event]"
    htp-load-t="[target]"
    htp-swap="[swap-method]">
</div>
```

- `htp-get`: Specifies the URL from which to fetch data.
- `htp-load`: Specifies the event that triggers the data fetch. It can be set to `"void"` (no event trigger), `"click"`, or any other valid HTML event like `"mouseover"`, `"keydown"`, etc.
- `htp-load-t`: Specifies the target element where the fetched data will be inserted. It can be set to `"self"` to indicate the current element or any valid CSS selector targeting another element.
- `htp-swap`: Specifies the method used to insert the fetched data into the target element. Common values include `"append"`, `"prepend"`, `"after"`, and `"before"`. 

### Example Usage:

1. **Fetch Data on Page Load:**
```html
<div
    htp-get="/hello.html"
    htp-load="void"
    htp-load-t="self"
    htp-swap="append">
</div>
```

2. **Fetch Data on Click Event:**
```html
<div 
    htp-get="/hello.html"
    htp-load="click"
    htp-load-t="self"
    htp-swap="append">
  Click me to fetch data
</div>
```

3. **Fetch Data on Click Event and Replace Content in Target Element:**
```html
<div class="target"
    htp-get="/hello.html"
    htp-swap="append"
    htp-sync="true">
  Click show button to load Content
</div>
```

4. **Fetch Data on Click Event and Replace Content in Another Target Element:**
```html
<div class="button"
    htp-load="click"
    htp-load-t=".target">
    Click
</div>
```

## End Scroll Load
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>End Scroll Load with Additional Content Example</title>
<style>
    /* Styles for loading indicator, error message, and dynamic content */
    .loading {
        display: none; /* Initially hidden */
        /* Add styles for loading indicator */
    }
    .page-error {
        display: none; /* Initially hidden */
        /* Add styles for error message */
    }
    .dynamic {
        /* Add styles for dynamic content */
    }
    /* Display loading indicator when htp-on attribute is present */
    .content[htp-on] .loading {
        display: block; /* Show loading indicator when htp-on attribute is present */
    }
    /* Hide dynamic content and error message by default */
    .content[htp-on] .dynamic,
    .content[htp-fail] .dynamic {
        display: none;
    }
    .page-error {
        display: none;
    }
    /* Display error message if loading fails */
    .content[htp-fail] .page-error {
        display: block;
    }
    /* Hide loading indicator when loading is done or fails */
    .content[htp-done] .loading, 
    .content[htp-fail] .loading {
        display: none;
    }
</style>
</head>
<body>
<div 
    class="content"
    htp-get="/pages.py"
    htp-query='{"key":1,"id":"$end"}'  
    b-event="endscroll"  
    b-hold="200"    
    htp-load="endscroll" 
    htp-load-t="self" 
    htp-swap="append"  
    htp-sync="true"
    >
    <!-- Loading indicator -->
    <div class="loading" loader="icon">Loading...</div>
    <!-- Error message -->
    <div class="page-error" style="color: red;">Page can't load. Please try again!</div>
    <!-- Dynamic content -->
    <div class="dynamic" htp-data="">
        <!-- Existing content -->
        <div class="g g-gap">
            <div class="flex test h1 gap-l-f center center-tb padding-cnt">1</div>
            <div class="flex test h1 gap-l-f center center-tb padding-cnt">2</div>
            <div htp-load-end="3" class="flex test h1 gap-l-f center center-tb padding-cnt">3</div>
            <div htp-load-end="4" class="flex test h1 gap-l-f center center-tb padding-cnt">4</div>
            <div htp-load-end="5" class="flex test h1 gap-l-f center center-tb padding-cnt">5</div>
            <div htp-load-end="6" class="flex test h1 gap-l-f center center-tb padding-cnt">6</div>
        </div>
    </div>
</div>

<!-- JavaScript for handling htp-load events -->
<script>
    document.querySelector(".content").addEventListener("htp-load", function() {
        console.log("Loading content...");
    });

    document.querySelector(".content").addEventListener("htp-loaded", function() {
        console.log("Content loaded.");
    });
</script>
</body>
</html>


```



In these examples, the data from the specified URL (`/hello.html`) will be fetched when the corresponding event occurs, and the fetched content will be inserted into the target element according to the specified swap method.
