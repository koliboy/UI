

# $alert Component 

## Overview

The `$alert` component is a custom alert system designed to provide developers with a simple yet powerful way to display various types of alerts in web applications. It offers flexibility in customization, allowing developers to create alerts with different messages, styles, and behaviors.

## Purpose

- Display informative messages to users.
- Notify users about successful operations, errors, warnings, or other important events.
- Enhance user experience by providing feedback in response to user actions.

## Usage

To use the `$alert` component, developers can call the `$alert` function with the desired parameters. Below is the syntax for invoking the function:

```javascript
$alert(message, prompt, options);
```

### Parameters

1. `message` (String): The text message to be display in the alert.
2. `prompt` (String): Type of alert. Possible values are "success", "error", "primary", or "warning".
3. `options` (Object, optional): An object containing additional customization options for the alert. Possible options include:
   - `display` (String): Duration for which the alert should be display (e.g., "5s" for 5 seconds).
   - `placement` (String): Position of the alert on the screen. Possible values are "top" or "bottom".
   - `sleep` (Boolean): If set to true, the alert won't close automatically.

## Examples

### Example 1: Displaying Different Types of Alerts

```javascript
$alert("Operation successful!", "success");
$alert("An error occurred!", "error", { display: "5s" });
$alert("Welcome to our website!", "primary", { display: "5s" });
$alert("Warning: This action is irreversible!", "warning", { display: "7s" });
```

In this example, we invoke the `$alert` function with different messages and types of alerts. Each alert has a specific display duration specified in the options.

### Example 2: Customizing Alert Placement

```javascript
$alert("New message received!", "primary", { placement: "top" });
```

This example demonstrates how to specify the placement of the alert. In this case, the alert will be display at the top of the screen.

## Example 1: Displaying HTML Content in Alerts

```javascript
$alert("<h1>Welcome to our website!</h1>", "primary");
```

In this example, we invoke the `$alert` function with HTML content ("<h1>Welcome to our website!</h1>") as the message parameter. The alert will be display with the specified HTML content.



## Conclusion

The `$alert` component provides developers with a versatile tool for displaying alerts in web applications. By leveraging its customizable options and straightforward syntax, developers can create visually appealing and informative alerts to enhance user interaction and feedback.

---

This documentation provides an overview of the `$alert` component, its purpose, usage instructions, parameters, and examples demonstrating its functionality.

## Events

The `$alert` component dispatches custom events to provide hooks for handling alert lifecycle events.

1. `display`: Dispatched when an alert is display.
2. `close`: Dispatched when an alert is closed.

Developers can listen for these events and perform actions based on the alert's lifecycle.

### Example:

```javascript
const myalert = $alert("Operation successful!", "success", { display: "3s" });

// Listening for the 'display' event on myalert
myalert.addEventListener("display", function() {
    console.log("Alert display!");
});

// Listening for the 'close' event on myalert
myalert.addEventListener("close", function() {
    console.log("Alert closed!");
});
```

