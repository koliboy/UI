# Pop-Title
The `Pop-Title` component refers to a pop-up element that displays additional content or information when triggered by user interaction.

### Options

#### pop-t
- Attribute: `pop-t`
- Description: Specifies the title or message to be displayed in the pop-up.
- Example: `pop-t="Click to show more contents !!!"`

#### pop-t-d
- Attribute: `pop-t-d`
- Description: Specifies the delay time before the pop-up appears after the triggering event. The delay time can be specified in milliseconds (e.g., `500ms`) or seconds (e.g., `1s`).
- Default: `400ms`
- Example: `pop-t-d="1s"`

### Example Usage

```html
<button class="button" pop-t="Click to show more contents !!!">Click</button>
<button class="button" pop-t="click me !!!" pop-t-d="1s">Click2</button>
```

In these examples, buttons with the class `button` are defined. They have `pop-t` attributes set to display different messages in the pop-ups. The second button also has a `pop-t-d` attribute set to `"1s"`, which means the pop-up will appear after a delay of 1 second. If `pop-t-d` is not specified, the default delay of `400ms` will be applied.
