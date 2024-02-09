

# Avatar 

#### Description:
The `<div>` elements with the `avatar` class represent user avatars, typically displayed alongside optional badge information.

#### Syntax:
```html
<div class="avatar"> 
    <img src="IMAGE_SOURCE_URL">
    <span class="badge">BADGE_CONTENT</span>
</div>
```
or 
```html
<div class="avatar"> 
    <img src="IMAGE_SOURCE_URL">
  </div>
```
or
<div class="avatar" style="border:none"> 
    <img src="IMAGE_SOURCE_URL">
    <span class="badge">BADGE_CONTENT</span>
</div>

or
```html
<div class="avatar" style="border:none"> 
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="SVG_PATH_DATA"/>
    </svg>
    <span class="badge">BADGE_CONTENT</span>
</div>
```

#### Attributes:
- `class="avatar"`: Specifies that the `<div>` element belongs to the `avatar` class for styling purposes.
- `style="border:none"`: Provides inline styling to remove the border around the avatar.

#### Child Elements:
1. `<img>`: Represents an image avatar.
   - **Attributes:**
     - `src`: Specifies the URL of the image.
2. `<svg>`: Represents an SVG avatar.
   - **Attributes:**
     - `xmlns`: Specifies the XML namespace for SVG.
     - `viewBox`: Defines the coordinate system and aspect ratio of the SVG viewport.
   - **Content:**
     - `<path>`: Defines the outline of the SVG icon using path data.
3. `<span class="badge">`: Represents an optional badge accompanying the avatar.
   - **Attributes:**
     - `class="badge"`: Specifies that the `<span>` element belongs to the `badge` class for styling purposes.
   - **Content:** The content of the badge, typically a numerical value or an icon.

#### Examples:
1. Image Avatar with Badge:
```html
<div class="avatar" style="border:none"> 
    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
    <span class="badge">99+</span>
</div>
```

2. SVG Avatar with Badge:
```html
<div class="avatar" style="border:none"> 
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M12 2C11.172 2 10.5 2.672 10.5 3.5L10.5 4.1953125C7.9131836 4.862095 6 7.2048001 6 10L6 15L18 15L18 10C18 7.2048001 16.086816 4.862095 13.5 4.1953125L13.5 3.5C13.5 2.672 12.828 2 12 2 z M 4 17L4 19L10.269531 19 A 2 2 0 0 0 10 20 A 2 2 0 0 0 12 22 A 2 2 0 0 0 14 20 A 2 2 0 0 0 13.728516 19L20 19L20 17L4 17 z"/>
    </svg>
    <span class="badge">99+</span>
</div>
```

#### Usage:
- Replace `IMAGE_SOURCE_URL` with the URL of the image for image avatars.
- Replace `SVG_PATH_DATA` with the path data for the SVG icon for SVG avatars.
- Optionally, customize the badge content within the `<span class="badge">` element.

#### Notes:
- The provided examples include variations with and without badge content, as well as different types of avatars (image and SVG).

---

Feel free to adjust the documentation according to your specific needs or to fit the conventions of your project. Let me know if you need further assistance!
