## Custom Theme Switcher Documentation

### Introduction

The Custom Theme Switcher is a JavaScript script that enables users to switch between light and dark themes on a webpage. It provides a toggle button and allows for theme changes triggered by user interactions or programmatically.

### Features

1. **Toggle Button**
   - A button with the attribute `theme="toggle"` is provided for users to switch between light and dark themes.

2. **Default Theme**
   - The default theme is set to "light" unless specified otherwise using the `default` attribute on the toggle button.

3. **Theme Application to Elements**
   - The script applies the selected theme to elements with the class "theme."
   - Elements can have specific styling for both light and dark themes.


5. **Event Handling**
   - The script triggers a callback function when the theme changes, providing the current theme as an argument to the callback.

### Usage

1. **Toggle Button**
   - Add a button with the attribute `theme="toggle"` to enable theme switching.

   ```html
   <button theme="toggle" default="light">Toggle Theme</button>
   ```

2. **Theme Application to Elements**
   - Apply the "theme" class to elements that should be affected by the theme switch.

   ```html
   <div class='theme'>
     <h>This is a paragraph</h>
     <article>
       Something written here
     </article>
   </div>
   ```

3. **Programmatic Theme Change**
   - Use `$theme.themeSet("dark")` to programmatically change the theme.

   ```javascript
   $theme.themeSet("dark");
   ```
   ### `themeSet` Method

The `themeSet` method is used to programmatically set the theme of the webpage. It accepts the following options:

1. **"dark"**
   - Set the theme to dark mode.

   ```javascript
   $theme.themeSet("dark");
   ```

2. **"light"**
   - Set the theme to light mode.

   ```javascript
   $theme.themeSet("light");
   ```

3. **"default"**
   - Reset the theme to its default state. This removes any user-selected theme and may result in the application of the system's default theme or the default theme specified on the toggle button.

   ```javascript
   $theme.themeSet("default");
   ```

4. **Theme Change Callback**
   - Register a callback function using `$theme.change` to be notified when the theme changes.

   ```javascript
   $theme.change(function (currentTheme) {
     console.log("Current theme:", currentTheme);
   });
   ```

### Notes

- The `currentTheme` value can be a string (`"dark"`, `"light"`), `undefined` (if no theme is set), or `false` (if there's an issue).


### Notes

- Ensure that the appropriate styles for light and dark themes are defined in the `<style>` section of the document.

```css
<style>
  .dark {
    background: black;
    color: white;
  }
  /* ... other styles ... */
</style>
```

### Conclusion

The Custom Theme Switcher script provides a flexible solution for implementing theme switching on webpages. It is designed to be easy to integrate and customize based on specific styling requirements.

---

Feel free to adjust the documentation to better suit your needs or provide more details based on your implementation!
