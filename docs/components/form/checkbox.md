# Checkbox

# [View DEMO](https://koliboy.github.io/formui/docs/components/form/checkbox.html)

# [View Prieview](https://koliboy.github.io/formui/docs/components/form/checkbox.html)


## styled UI

| Properties | 	Descriptio | for | Default
|----------|----------|----------|---
| --background-color | background | checkbox  |mainCSS
| --ul-hover | background | toggle  |mainCSS
| --font-size | height,width | checkbox ,toggle |mainCSS
| --border-style | style of border | checkbox |mainCSS
| --border-radius | border-radius | checkbox |mainCSS
| --transition-time |  transition | checkbox,toggle |mainCSS
| --disabled-bacground |  if disbled background | checkbox |mainCSS
| --disabled-opacity |  if disbled opacity | checkbox,toggle |mainCSS
| --color-secondary |  checked background | checkbox |mainCSS
| --color-primary |  background- after checked | toggle |mainCSS

### Custom Styles
```html
<style>
    .custom {
        --color-secondary: gray;
        /*....................*/
    }
</style>

<input type="checkbox" id="scales" class="custom" name="scales" checked />
<label for="scales">Scales</label>
```


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
```

### `toggle` Attribute Documentation

The `toggle` attribute is a custom attribute added to an `<input>` element of type "checkbox" to enhance its appearance and behavior, creating a toggle switch. This custom attribute is used to indicate that the checkbox should be styled as a toggle switch.

#### Example Usage:

```html
<div>
  <input toggle type="checkbox" id="scales" class="a" name="scales" checked />
  <label for="scales">Scales</label>
</div>
```

In this example, the `<input>` element has the `toggle` attribute, which signifies that the checkbox should be visually presented as a toggle switch. The corresponding `<label>` is associated with the checkbox using the `for` attribute.

#### Styling:

The appearance and behavior of the toggle switch are defined in the accompanying CSS styles. The styles typically hide the default checkbox appearance and introduce a custom-designed toggle switch with a sliding indicator.

#### Important Notes:

- The `toggle` attribute is a custom attribute and does not have any built-in functionality. It is used as a marker for styling purposes.
- The visual representation of the toggle switch is determined by the accompanying CSS styles.

