# Pop-Title

The `Pop-Title` component refers to a pop-up element that displays additional content or information when triggered by hovering over an element.

### Options

#### pop-t
- Attribute: `pop-t`
- Description: Specifies the title or message to be displayed in the pop-up.
- Example: `pop-t="Click to show more contents !!!"`

#### pop-t-d
- Attribute: `pop-t-d`
- Description: Specifies the delay time before the pop-up appears after hovering over the element. The delay time can be specified in milliseconds (e.g., `500ms`) or seconds (e.g., `1s`).
- Default: `400ms`
- Example: `pop-t-d="1s"`

### Example Usage

```html
<button class="button" pop-t="Click to show more contents !!!">Click</button>
<button class="button" pop-t="click me !!!" pop-t-d="1s">Click2</button>
```

In these examples, buttons with the class `button` are defined. When the user hovers over these buttons, a pop-up with the specified message (`pop-t`) will appear. The second button has an additional attribute `pop-t-d` set to `"1s"`, which means the pop-up will appear after a delay of 1 second when hovered over. If `pop-t-d` is not specified, the default delay of `400ms` will be applied.
