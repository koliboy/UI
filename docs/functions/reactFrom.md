Below is the documentation for the `$reactFrom` function:

### `$reactFrom(from, to)`

- **Description:** Calculates the position of one element relative to another.

- **Parameters:**
  - `from` (HTMLElement): The reference element from which the position is calculated.
  - `to` (HTMLElement): The target element to which the position is calculated.

- **Returns:**
  - Object: An object containing the relative position values of the `to` element with respect to the `from` element. The object has the following properties:
    - `top`: Distance from the top edge of the `from` element to the top edge of the `to` element.
    - `bottom`: Distance from the bottom edge of the `from` element to the bottom edge of the `to` element.
    - `left`: Distance from the left edge of the `from` element to the left edge of the `to` element.
    - `right`: Distance from the right edge of the `from` element to the right edge of the `to` element.
    - `x`: Horizontal distance from the left edge of the `from` element to the left edge of the `to` element.
    - `y`: Vertical distance from the top edge of the `from` element to the top edge of the `to` element.
    - `percenTop`: Percentage of the `to` element's top position relative to the `from` element's height.
    - `percenBottom`: Percentage of the `to` element's bottom position relative to the `from` element's height.
    - `percenLeft`: Percentage of the `to` element's left position relative to the `from` element's width.
    - `percenRight`: Percentage of the `to` element's right position relative to the `from` element's width.

- **Usage:**
  ```javascript
  const relativePosition = $reactFrom(parentElement, childElement);
  ```

- **Examples:**
  ```javascript
  const parent = document.querySelector('.parent-element');
  const child = document.querySelector('.child-element');
  const relativePosition = $reactFrom(parent, child);
  console.log('Relative position:', relativePosition);
  ```

- **Notes:**
  - This function calculates the position of the `to` element relative to the `from` element and returns an object containing various positional properties.
  - It is useful for determining the relative positioning of elements within a container or relative to each other.
