Below is the documentation for the `$sizeDekstop`, `$sizeMobile`, and `$getDeviceType` functions:

### `$sizeDekstop()`

- **Description:** Checks if the window width is greater than 768 pixels, indicating a desktop-sized viewport.

- **Returns:** 
  - Boolean: `true` if the viewport width is greater than 768 pixels, `false` otherwise.

- **Usage:**
  ```javascript
  if ($sizeDekstop()) {
      // Perform actions for desktop
  }
  ```

- **Examples:**
  ```javascript
  if ($sizeDekstop()) {
      console.log("Desktop viewport detected.");
  } else {
      console.log("Mobile viewport detected.");
  }
  ```

### `$sizeMobile()`

- **Description:** Checks if the window width is less than or equal to 768 pixels, indicating a mobile-sized viewport.

- **Returns:** 
  - Boolean: `true` if the viewport width is less than or equal to 768 pixels, `false` otherwise.

- **Usage:**
  ```javascript
  if ($sizeMobile()) {
      // Perform actions for mobile
  }
  ```

- **Examples:**
  ```javascript
  if ($sizeMobile()) {
      console.log("Mobile viewport detected.");
  } else {
      console.log("Desktop viewport detected.");
  }
  ```

### `$getDeviceType()`

- **Description:** Detects the type of device (Mobile or Desktop) based on the user agent string.

- **Returns:** 
  - String: `'Mobile'` if the device is a mobile device, `'Desktop'` if it's a desktop device.

- **Usage:**
  ```javascript
  const deviceType = $getDeviceType();
  console.log('Device type:', deviceType);
  ```

- **Examples:**
  ```javascript
  const deviceType = $getDeviceType();
  if (deviceType === 'Mobile') {
      console.log("Mobile device detected.");
  } else {
      console.log("Desktop device detected.");
  }
  ```

These examples demonstrate how to use the functions to detect the viewport size and device type and perform actions accordingly.
