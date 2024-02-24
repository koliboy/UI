# HTML Structure with `cmd` 

The HTML structure includes elements with custom attributes (`cmd-k`, `cmd-if`, `cmd-p`, `cmd-event`) used to define custom commands and their behavior.

### Attributes:

- `cmd-k`: Specifies the key that triggers the command.
- `cmd-if`: Specifies the conditions under which the command is triggered. Multiple conditions can be specified using commas (`,`). Available conditions:
  - `ctrlKey`: The Ctrl key must be pressed.
  - `shiftKey`: The Shift key must be pressed.
  - `altKey`: The Alt key must be pressed.
- `cmd-p`: Specifies whether to prevent the default behavior of the event when the command is triggered (`true` to prevent, `false` to allow).
- `cmd-event`: Specifies the event that triggers the command. Default is `click`.

### Example:

```html
<div class="button cmd" cmd-k="k" cmd-if="ctrlKey" cmd-p="true" cmd-event="click">
    Command Handler
</div>

 <div  class="button cmd2" cmd-k="K" cmd-if="ctrlKey,shiftKey"  cmd-event="click">
           Command Handal 
       </div>   
  
  <input class="upload" type="file" cmd-k="o" cmd-if="ctrlKey"   cdm-p="true" cmd-event="click">

<div  class="button cmd2" cmd-k="n" cmd-if="ctrlKey,altkey"  cmd-event="click">
           Command Handal 
       </div> 
```

In this example:
- The `<div>` element has the class `button` and `cmd`.
- Pressing the `Ctrl + K` key combination triggers the command.
- The condition `ctrlKey` ensures that the Ctrl key must be pressed for the command to be triggered.
- `cmd-p` is set to `true`, indicating that the default behavior of the event should be prevented.
- The command is triggered on the `click` event by default.

### Notes:

- Ensure that the custom attributes are properly set and correspond to the functionality defined in the associated JavaScript code.
- Customize the attributes according to specific key combinations and event requirements.



This documentation provides guidance on how to use the HTML structure with `cmd` attributes to define custom commands and their behavior. If you have any further questions or need additional clarification, feel free to ask!
