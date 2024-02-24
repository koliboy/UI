# $cmd
The $cmd function is a custom command handler designed to simplify the process of defining and executing commands based on keyboard events in JavaScript. It allows developers to specify key combinations and conditions under which a command should be executed.

## `$cmd(key, conditions, prevent, callback)`

The `$cmd` function is a custom command handler designed to listen for keyboard events and execute a callback function under specific conditions.

### Parameters:

- `key`: A string representing the key that triggers the callback function.
- `conditions`: A string specifying one or more conditions that must be met for the callback to execute. Conditions are separated by commas and can include any combination of the following:
  - `ctrlKey`: The Ctrl key must be pressed.
  - `shiftKey`: The Shift key must be pressed.
  - `altKey`: The Alt key must be pressed.
- `prevent`: A boolean indicating whether to prevent the default behavior of the keyboard event when the conditions are met (`true` to prevent, `false` to allow the default behavior).
- `callback`: A function to be executed when the specified key and conditions are met. The callback function receives the event object as its argument.

### Usage:

```javascript
$cmd(key, conditions, prevent, callback)
```

### Example:

```javascript
// Example usage of $cmd
$cmd("s", "ctrlKey", true, function(event) {
    // Execute this function when Ctrl + S is pressed
    console.log("Ctrl + S pressed");
});

// or 
$cmd("s", "ctrlKey,shiftKey", false, function(event) {
    // Execute this function when Ctrl,shift + S is pressed
    console.log("Ctrl + S pressed");
});
```

In this example:
- The callback function logs a message to the console when the user presses Ctrl + S.
- The `prevent` parameter is set to `true`, preventing the default behavior of the keyboard event.

### Notes:

- If `conditions` are not specified, the callback function will be executed when the specified key is pressed, regardless of any modifier keys.
- Conditions are case-sensitive (`ctrlKey`, not `CtrlKey`).
- The `prevent` parameter is optional and defaults to `false` if not explicitly provided.

---

This documentation should help users understand how to use the `$cmd` function effectively in their JavaScript code. If you have any further questions or need additional clarification, feel free to ask!
