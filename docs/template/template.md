# Template

I
t looks like you have a structure for a web page that includes a sidebar, header, and content area. Below is a breakdown and documentation template for the provided HTML template:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Page Title</title>
    <!-- Add your stylesheets, scripts, or other head elements here -->
</head>

<body class="theme fixed p0 over-x-adjust center">
    <!-- Sidebar -->
    <nav class="sidebar b-right" s-defind="menu">
        <!-- Sidebar Header -->
        <div class="padding-cnt bar-exp">Sidebar Header</div>

        <!-- Sidebar Content -->
        <div class="sidebar-content flex flex-col gap-l-f padding-cnt">
            Sidebar Content
        </div>

        <!-- Sidebar Footer -->
        <div class="padding-cnt" cnt-tag="footer">Sidebar Footer</div>
    </nav>

    <!-- Main Content Body -->
    <div class="body flex flex-col">
        <!-- Header -->
        <header class="padding-cnt" md-fix="true">
            <div class="h3">Header</div>
            <button sidebar="trigger" s-defind="menu">Open Sidebar</button>
        </header>

        <!-- Content Area -->
        <div class="home padding-cnt d-scroll">
            <h1>Heading of a Blog Post</h1>
            <!-- Add your main content here -->
        </div>
    </div>

    <!-- Add your scripts or other body elements here -->

</body>

</html>
```

### Documentation:

1. **Body Class (`<body>`):**
   - **Class:**
     - `theme`: Applies the overall theme styling.
     - `fixed`: Fixes the body content in place.
     - `p0`: Removes padding from the body.
     - `over-x-adjust`: Adjusts for potential overflow in the x-axis.
     - `center`: Centers the content horizontally.

2. **Sidebar (`<nav class="sidebar">`):**
   - **Attributes:**
     - `s-defind="menu"`: A unique identifier for the sidebar.
   - **Sidebar Header:**
     - `<div class="padding-cnt bar-exp">`: Contains content for the sidebar header.
   - **Sidebar Content:**
     - `<div class="sidebar-content flex flex-col gap-l-f padding-cnt">`: Container for the main sidebar content.
   - **Sidebar Footer:**
     - `<div class="padding-cnt" cnt-tag="footer">`: Contains content for the sidebar footer.

3. **Main Content Body (`<div class="body">`):**
   - **Header (`<header>`):**
     - `<div class="h3">`: Represents the header with an H3-level heading.
     - `<button sidebar="trigger" s-defind="menu">`: Button to open the sidebar using the unique identifier.

4. **Content Area (`<div class="home">`):**
   - `<h1>`: Heading for the main content area, e.g., a blog post heading.
   - Additional content goes here.
.
## Sidebar

### Sidebar Trigger Button:
```html
<!-- Sidebar Trigger Button -->
<button sidebar="trigger" s-defind="menu">Open Sidebar</button>
```

#### Usage:
- The button with `sidebar="trigger"` attribute is used to trigger the opening of the sidebar.
- `s-defind="menu"` is a unique identifier associated with the sidebar.

### Sidebar Structure:
```html
<!-- Sidebar Container -->
<nav class="sidebar b-right" s-defind="menu"> 
    <!-- Sidebar Header -->
    <div class="padding-cnt bar-exp">Sidebar Header</div>
    
    <!-- Sidebar Content -->
    <div class="sidebar-content flex flex-col gap-l-f padding-cnt">
        Sidebar Content
    </div>
    
    <!-- Sidebar Footer -->
    <div class="padding-cnt" cnt-tag="footer">Sidebar Footer</div>
</nav>
```

#### Explanation:
. **Sidebar Container (`<nav class="sidebar" s-defind="menu">`):**
   - The main container for the sidebar.
   - Identified by `s-defind="menu"`.


### Sidebar Options

#### 1. Placement Options:
- **`placement` (Desktop Only):** Specifies the placement of the sidebar on desktop screens.
  - Values: `left` (default), `right`
  
#### Examples:

##### Placement Left Example:
```html
<body class="theme">
    <nav class="sidebar" placement="left" s-defind="menu"></nav>
    <div class="body">
        <header></header>
        <div class="home"></div>
    </div>
</body>
```

##### Placement Right Example:
```html
<body class="theme">
    <div class="body">
        <header></header>
        <div class="home"></div>
    </div>
    <nav class="sidebar" placement="right" s-defind="menu"></nav>
</body>
```

#### 2. Open Behavior Options:
- **`open` (Desktop Only):** Controls the visibility of the sidebar on desktop screens.
  - Values: `always` (default), `always-exp`

##### Example - Open "Always" on Desktop:
```html
<nav class="sidebar" open="always" s-defind="menu">
    <!-- Content -->
</nav>
<button sidebar="trigger" s-defind="menu">Open and Close by Trigger</button>
```

##### Example - Open "Always Expanding" on Desktop:
```html
<nav class="sidebar" open="always-exp" s-defind="menu">
    <div class="bar-exp">Header</div>
    <div class="sidebar-content">
        <!-- Sidebar content with expanding menus -->
    </div>
</nav>
```

### Customizing Sidebar on Desktop:
```html
<style>
    .sidebar[d-dk] {
        width: 300px;
        /* Add other desktop-specific styles */
    }

    /* Custom styles when sidebar is open or expanding on desktop */
    .sidebar[d-dk][expand] {
        /* Apply styles when open="always-exp" or manually expanded */
    }
</style>
```

#### Explanation:
- Use the `placement` attribute to specify whether the sidebar should be on the left or right side on desktop screens.
- The `open` attribute controls the default visibility of the sidebar on desktop screens. If set to `always-exp`, it indicates that the sidebar should always show expanding menus.
- Customize the sidebar appearance using CSS, applying styles based on desktop conditions using the `[d-dk]` attribute and `[expand]` attribute.

### Customizing Sidebar on Mobile
Absolutely! You can further customize the sidebar on mobile by updating its background color. Here's an example:

```html
<style>
    /* Mobile-specific styles for the sidebar */
    .sidebar[d-mb] {
       /* Add other mobile-specific styles */
       --background-color, blue
    }
</style>
```

## header options 

Certainly! The `md-fix` attribute in the `<header>` element is used to control whether the header is fixed at the top of the viewport on mobile devices. Here's an example:
```html
    <header md-fix="true">
        <!-- Content of your header goes here -->
    </header>
```
    
    In this example, `md-fix="true"` indicates that the header should be fixed at the top on mobile devices. If you want the header to behave normally (not fixed) on mobile, you can omit the `md-fix` attribute or set it to `false`.
    

## themes
```html
<style>
    .theme.dark {
        --background-color: black;
        --color: white;
        --scrollbar-bg: black;
    }

</style>

<header>
    <div class="h3">Header</div>
    <button sidebar="trigger" s-defind="menu">Open Sidebar</button>
    <button theme="toggle" default="light">Toggle Theme</button>
</header>
```
