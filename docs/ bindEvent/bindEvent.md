# bindEvent
The bindEvent variable facilitates the selection of elements within the document that possess specific scroll-related attributes. It is responsible for establishing event listeners tailored to the behavior of these elements, enabling the binding of custom scroll events.

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

### `rect-parent`

The `rect-parent` attribute is a custom attribute used to specify that a parent element is responsible for triggering scroll events on its child elements. This attribute facilitates the creation of scroll-based interactions where child elements react to the scroll behavior of their parent.

#### Purpose

The main purpose of the `rect-parent` attribute is to establish a relationship between a parent element and its child elements for scroll event handling. When applied to a parent element, it allows developers to define how child elements should behave or change based on the parent's scroll position.

#### Usage

The `rect-parent` attribute is applied to the parent element to indicate that it will be responsible for triggering scroll events on its child elements.

```html
<div class="parent-element" b-event="rect-parent" style="height: 300px; overflow: auto;">
    <div class="child-element" b-event-rect="scroll">
        <!-- Child content here -->
    </div>
</div>
```
### Example


```html
<div class="parent-element" b-event="rect-parent" style="height: 300px; overflow: auto;">
    <div class="child">
        Child
    </div>
    <div class="child my-react" b-event-rect="scroll">
        <!-- Scroll react -->
        This reacts when scrolling parent-element
    </div>
    <div class="child">
        Child
    </div>
    <div class="child">
        Child
    </div>
    <div class="child">
        Child
    </div>
    <div class="child">
        Child
    </div>
    <div class="child">
        Child
    </div>
</div>

<script>
    document.querySelector(".my-react").addEventListener("scroll-rect", function(event) {
        // Access the bounding rectangle information using event.getRect()
        var getRect = event.getRect();
        
        // Example: Set the width of the element based on the percentage of its top position
        this.style.width = getRect.percenTop + "%";

        /*or
        if(getRect.percenTop > 50){
            // Do something
        }
        */

        // Log the bounding rectangle information to the console
        console.log(getRect);
    });
</script>
```

In this code:

- The `scroll-rect` event listener is attached to the `.my-react` element.
- Inside the event listener, `event.getRect()` is used to obtain the bounding rectangle information of the element.
- The `width` of the `.my-react` element is adjusted based on the percentage of its top position.
- You can add additional logic inside the event listener to perform actions based on the scroll position or other properties of the bounding rectangle.

Please note that this code assumes the presence of a function `event.getRect()` that correctly returns the bounding rectangle information. If such a function is not available, you'll need to implement it or use an alternative method to obtain the bounding rectangle information.


##  `scrolling-react`

The `b-event-rect` attribute is a custom attribute used to specify the type of scroll event that should be triggered on a child element when its parent element scrolls. This attribute facilitates the creation of scroll-based interactions for child elements based on the scrolling activity of their parent elements.

#### Purpose

The primary purpose of the `b-event-rect` attribute is to define how a child element should react to the scroll behavior of its parent element. By specifying the type of scroll event, developers can trigger animations, effects, or other actions on the child element in response to the parent's scroll position.

#### Usage

The `b-event-rect` attribute is applied to child elements within a parent element that has the `rect-parent` attribute. It indicates the type of scroll event that should be triggered on the child element when the parent element scrolls.

```html
<div class="parent-element" b-event="rect-parent" style="height: 300px; overflow: auto;">
    <div class="child-element" b-event-rect="scroll">
        <!-- Child content here -->
    </div>
</div>
```

In this example, the `.child-element` has the `b-event-rect="scroll"` attribute, indicating that a scroll event should be triggered on this element when its parent element (`.parent-element`) scrolls.

#### Example

```html
<div class="parent-element" b-event="rect-parent" style="height: 300px; overflow: auto;">
    <div class="child-element" b-event-rect="scroll">
        <!-- Child content here -->
    </div>
</div>
```

In this example, when the `.parent-element` is scrolled, a scroll event will be triggered on the `.child-element` due to the presence of the `b-event-rect="scroll"` attribute.

#### JavaScript Usage

To handle the scroll event triggered by the `b-event-rect` attribute in JavaScript, you can use `addEventListener` as follows:

```javascript
document.querySelector(".child-element").addEventListener("scroll-rect", function(event) {
    // Your event handling logic here
    console.log("Scroll event triggered on child-element:", event);
});
```

This code snippet attaches an event listener to the `.child-element` to handle the `scroll-rect` event, which is triggered when the parent element scrolls.

#### Notes

- The `b-event-rect` attribute provides flexibility in defining scroll-based interactions for child elements.
- It allows developers to create dynamic and responsive effects based on the scroll behavior of the parent element.

#### Compatibility

The `b-event-rect` attribute is custom and may not be recognized by all browsers. Its functionality is typically implemented using JavaScript event listeners and calculations.

---
