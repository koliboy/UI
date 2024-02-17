# bindEvent
The bindEvent variable facilitates the selection of elements within the document that possess specific scroll-related attributes. It is responsible for establishing event listeners tailored to the behavior of these elements, enabling the binding of custom  events.

### Usage

```html
<div class="example" b-event="event-name"></div>
```

## `scrolling Events`

- **endscroll**: Triggered when the scrolling behavior of an element reaches a specific threshold towards the bottom.
- **endscroll-x**: Triggered when the scrolling behavior of an element reaches a specific threshold towards the right (horizontal scrolling).
- **topscroll**: Triggered when the scrolling behavior of an element reaches a specific threshold towards the top.
- **scrolltop**: Triggered when the scrolling behavior of an element reaches a specific threshold from the top.
- **topscroll-x**: Triggered when the scrolling behavior of an element reaches a specific threshold towards the left (horizontal scrolling).
- **scroll-x-top**: Triggered when the scrolling behavior of an element reaches a specific threshold towards the right (horizontal scrolling).
- **rect-parent**: Triggered when the parent element of a specified child element scrolls.


Here's a comprehensive documentation for all the custom scroll events (`endscroll`, `endscroll-x`, `topscroll`, `scrolltop`, `topscroll-x`, `scroll-x-top`) with examples:

## b-hold 

The `b-hold` attribute is a custom attribute used to specify a threshold value for triggering scroll events on HTML elements. It provides control over when a particular scroll event should be activated based on the remaining scrollable distance within the element.

### Usage

The `b-hold` attribute is typically used alongside custom scroll events (`b-event`) to determine the threshold for triggering those events.

```html
<div class="example" b-event="endscroll" style="height: 300px; overflow: auto;" b-hold="50">
    <h1>End scroll Event</h1>
</div>
```

In this example, the `b-hold` attribute is set to `50`, indicating that the "endscroll" event will be triggered when the remaining scrollable distance within the element is 50 pixels or less.

### Example

```html
<div class="example" b-event="endscroll" style="height: 300px; overflow: auto;" b-hold="0">
    <h1>End scroll Event</h1>
</div>
```


### `endscroll`

The `endscroll` event is triggered when the scrolling behavior of an element reaches a specific threshold towards the bottom.

#### Usage

The `endscroll` event is dispatched when the remaining scrollable distance in an element becomes less than or equal to a specified threshold, known as the "hold" value.

#### Example

```html
<div class="example" b-event="endscroll" style="height:300px;overflow:auto;" b-hold="50">
    <h1>End scroll Event</h1>
</div>
<script>
    // Example of handling endscroll event
    document.querySelector(".example").addEventListener("endscroll", function() {
        console.log("End scroll event triggered!");
    });
</script>
```

### `endscroll-x`

The `endscroll-x` event is triggered when the scrolling behavior of an element reaches a specific threshold towards the right (horizontal scrolling).

#### Usage

Similar to `endscroll`, `endscroll-x` is dispatched when the remaining scrollable distance in an element horizontally becomes less than or equal to a specified threshold.

#### Example

```html
<div class="example" b-event="endscroll-x" style="width:300px;overflow:auto;" b-hold="50">
    <h1>End scroll-x Event</h1>
</div>
<script>
    // Example of handling endscroll-x event
    document.querySelector(".example").addEventListener("endscroll-x", function() {
        console.log("End scroll-x event triggered!");
    });
</script>
```

### `topscroll`

The `topscroll` event is triggered when the scrolling behavior of an element reaches a specific threshold towards the top.

#### Usage

Dispatched when the scroll position of an element is within a specified threshold from the top.

#### Example

```html
<div class="example" b-event="topscroll" style="height:300px;overflow:auto;" b-hold="50">
    <h1>Top scroll Event</h1>
</div>
<script>
    // Example of handling topscroll event
    document.querySelector(".example").addEventListener("topscroll", function() {
        console.log("Top scroll event triggered!");
    });
</script>
```

### `scrolltop`

The `scrolltop` event is triggered when the scrolling behavior of an element reaches a specific threshold from the top.

#### Usage

Similar to `topscroll`, `scrolltop` is dispatched when the scroll position of an element exceeds a specified threshold from the top.

#### Example

```html
<div class="example" b-event="scrolltop" style="height:300px;overflow:auto;" b-hold="50">
    <h1>Scroll top Event</h1>
</div>
<script>
    // Example of handling scrolltop event
    document.querySelector(".example").addEventListener("scrolltop", function() {
        console.log("Scroll top event triggered!");
    });
</script>
```

### `topscroll-x`

The `topscroll-x` event is triggered when the scrolling behavior of an element reaches a specific threshold towards the left (horizontal scrolling).

#### Usage

Similar to `topscroll`, but for horizontal scrolling. Dispatched when the scroll position of an element is within a specified threshold from the left.

#### Example

```html
<div class="example" b-event="topscroll-x" style="width:300px;overflow:auto;" b-hold="50">
    <h1>Top scroll-x Event</h1>
</div>
<script>
    // Example of handling topscroll-x event
    document.querySelector(".example").addEventListener("topscroll-x", function() {
        console.log("Top scroll-x event triggered!");
    });
</script>
```

### `scroll-x-top`

The `scroll-x-top` event is triggered when the scrolling behavior of an element reaches a specific threshold towards the right (horizontal scrolling).

#### Usage

Similar to `scrolltop`, but for horizontal scrolling. Dispatched when the scroll position of an element exceeds a specified threshold from the left.

#### Example

```html
<div class="example" b-event="scroll-x-top" style="width:300px;overflow:auto;" b-hold="50">
    <h1>Scroll-x top Event</h1>
</div>
<script>
    // Example of handling scroll-x-top event
    document.querySelector(".example").addEventListener("scroll-x-top", function() {
        console.log("Scroll-x top event triggered!");
    });
</script>
```
