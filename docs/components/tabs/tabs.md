# Tabs 

## Introduction
Tabs are a common UI pattern used to organize and present content in a structured manner. They allow users to switch between different sections of content within the same space, improving navigation and user experience. This documentation provides examples of implementing tabs using HTML, CSS, and JavaScript.

## Examples

### 1. Basic Tabbed Interface
```html
<!-- HTML -->
<div class="flex gap-l-f padding-cnt tabs">
    <button tab-t=".target" tab-d class="button tab">Photos</button>
    <button tab-t=".target2" class="button tab">Music</button>
    <button tab-t=".target3" class="button tab">Videos</button>
</div>

<div class="target gallery h1 gap-l">
    Content-Photos
</div>
<div class="target2 gallery h1 gap-l">
    Content-Music
</div>
<div class="target3 gallery h1 gap-l">
    Content-Videos
</div>
```
```css
/* CSS */
<style>
    .gallery {
        display: none;
        text-align: center;
    }

    .gallery[tab-active] {
        display: block;
    }
</style>
```

### 2. `URL Pattern Example`
```html
<!-- HTML -->
<div class="flex gap-l-f padding-cnt tabs" tabs-url="hash">
    <a href="#home" tab-t=".photos" tab-d class="button tab">Photos</a>
    <a href="#music" tab-t=".music" class="button tab">Music</a>
    <a href="#setting" tab-t=".video" class="button tab">Videos</a>
</div>

<div class="photos gallery h1 gap-l">
    Content-Photos
</div>
<div class="music gallery h1 gap-l">
    Content-Music
</div>
<div class="video gallery h1 gap-l">
    Content-Videos
</div>
```
```css
/* CSS */
<style>
    .gallery {
        display: none;
        text-align: center;
    }

    .gallery[tab-active] {
        display: block;
    }
</style>
```

### 3. `Tab by Scroll to Element Focus`
```html
<!-- HTML -->
<div class="flex gap-l-f padding-cnt tabs">
    <button tab-t=".focus" tab-f-t=".a" tab-d class="button tab">A</button>
    <button tab-t=".focus" tab-f-t=".b" class="button tab">B</button>
    <button tab-t=".focus" tab-f-t=".c" class="button tab">C</button>
</div>

<div class="focus border g g-gap" style="height: 300px; overflow: auto;">
    <div class="a" style="height: 400px">AAAAAA</div>
    <div class="b" style="height: 400px;">BBBBB</div>
    <div class="c" style="height: 400px;">CCCCC</div>
</div>
```

### 4. `Unset UI or Customize`
```html
<!-- HTML -->
<div class="tabs" tabs-ui="unset">
    <div tab-t=".target-el" tab-d class="tab my-tabs">Home</div>
    <div tab-t=".target-el" class="tab my-tabs">About</div>
</div>
```
```css
/* CSS */
<style>
    .my-tabs {
        background: gray;
    }

    .my-tabs[tab-active] {
        background: green;
    }
</style>
```

### 5. `Event Handling`
```html
<!-- HTML -->
<div class="event-test flex gap-l-f padding-cnt tabs">
    <button tab-label="photos" tab-d class="button tab">Photos</button>
    <button tab-label="musics" class="button tab">Music</button>
    <button tab-label="videos" tab-t=".this-target" class="button tab">Videos</button>
</div>
```
```javascript
// JavaScript
<script>
    document.querySelector('.event-test').addEventListener("change", function(event) {
        console.log(event.label);
    });
</script>
```

## Conclusion
Tabs are a versatile UI component that can enhance the usability and organization of your web applications. By following the examples provided in this documentation, you can easily implement tabs in your projects.

---

This version includes CSS styles for the gallery, ensuring consistent presentation across all examples. Let me know if there's anything else you'd like to add or modify!
