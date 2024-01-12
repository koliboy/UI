# `$checkbox` Utility Object Documentation

The `$checkbox` utility object provides a set of methods for working with checkboxes, allowing you to manage and handle events for a list of checkboxes.

## Methods

### `$checkbox(elements)`

Creates a `$checkbox` object for the specified list of checkboxes.

#### Parameters

- `elements` (NodeList|Array|HTMLInputElement): The list of checkboxes or a single checkbox element.

#### Returns

- Object: The `$checkbox` object with utility methods.

### `checked()`

Gets an array of checked checkboxes from the list.

#### Returns

- Array: An array containing the checked checkboxes from the list.

### `change(caller)`

Adds a change event listener to each checkbox in the list.

#### Parameters

- `caller` (Function): The function to be called when a checkbox changes. The default is an empty function.

#### Returns

- Array: The list of checkboxes.

## Example Usage
```html
<fieldset>
  <legend>Choose your monster's features:</legend>

  <div>
    <input type="checkbox" id="scales" class="a" name="scales" checked />
    <label for="scales">Scales</label>
  </div>

  <div>
    <input type="checkbox" id="horns"  name="horns"  checked />
    <label for="horns">Horns</label>
  </div>
  <div>
    <input type="checkbox" id="horns" name="horns" />
    <label for="horns">Horns</label>
  </div>
  <div>
    <input type="checkbox"  id="error" name="coooo" />
    <label for="error">error</label>
  </div>
  <div> 
  
    <input type="checkbox" disabled="" id="guitar" name="guitar" />
    <label for="guitar">Guitar disabled</label>
  </div>
</fieldset>
```

```javascript
// Example usage:
var checkboxList = document.querySelectorAll('input');
var checkboxes = $checkbox(checkboxList);

checkboxes.change(function (changedCheckbox, allCheckboxes, event) {
    console.log('Checkbox changed:', changedCheckbox.checked);
    console.log('All checkboxes:', allCheckboxes);
});

var checkedCheckboxes = checkboxes.checked(); //Array elements
console.log('Checked checkboxes:', checkedCheckboxes);

//or  
var checkbox = $checkbox(document.querySelector('input'));

checkbox.change(function (changedCheckbox, allCheckboxes, event) {
    console.log('Checkbox changed:', changedCheckbox.checked);
    console.log('All checkboxes:', allCheckboxes);
});

var checkedCheckboxes = checkboxe.checked();  //Array elements 
console.log('Checked checkboxes:', checkedCheckboxes);
