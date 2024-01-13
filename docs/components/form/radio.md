# Radio

# [View DEMO](https://koliboy.github.io/formui/docs/components/form/radio.html)

# [View Prieview](https://koliboy.github.io/formui/docs/components/form/radio.html)

# styled UI

| Properties | 	Descriptio | for | Default
|----------|----------|----------|---
| --background-color | background-color | radio | mainCSS 
|--disabled-bacground |background-color | radio | mainCSS
|--font-size |wight,height | radio | mainCSS 
|--border-color |color | radio | mainCSS 
|--border-style |border-style | radio | mainCSS
|--transition-time |transition | radio | mainCSS
|--disabled-opacity | opacity | radio | mainCSS
|--color-primary | after checked border-color | radio | mainCSS

### Custom Styles
```html
<style>
    #red {
        --color-primary: red;
        /*....................*/
    }
</style>

<input type="radio" id="red" name="colors" value="red" />
<label for="red">Red</label>
```






Certainly! It seems you're looking for documentation and more examples for the `$radio` object and its `change` method. Let's write some documentation and provide additional examples:

### $radio Object

The `$radio` object is designed to simplify working with radio buttons in a document. It provides a `change` method to easily attach a change event listener to all radio buttons with a specified name.

#### Properties:

- `$radio.names`: An array containing all radio buttons with the specified name.

#### Methods:

##### `$radio.change(callback)`

- **Parameters:**
  - `callback`: A function to be executed when any of the radio buttons with the specified name undergoes a change.
    - **Parameters:**
      - `selectedRadio`: The radio button that triggered the change.
      - `allRadios`: An array containing all radio buttons with the specified name.
      - `event`: The change event object.

- **Returns:**
  - Returns the array of radio buttons with the specified name.

### Example Usage:
```html
<fieldset>
  <legend>Select color:</legend>

  <div>

    <input type="radio" name="colors" value="red" />
    <label for="huey">Red</label>
  </div>

  <div>
    <input type="radio" name="colors" value="green" checked />
    <label for="dewey">Green</label>
  </div>
  <div>
    <input type="radio" name="colors" value="blue" checked />
    <label for="dewey">Blue</label>
  </div>

</fieldset>
```

```javascript
// Create a $radio object for radio buttons with the name 'color'
var radioGroup = $radio('colors');

// Attach a change event listener
radioGroup.change(function (selectedRadio, allRadios, event) {
    console.log('Selected radio:', selectedRadio.value);
    console.log('All radios:', allRadios);
    console.log('Event:', event);
});

// Another example: Change the background color based on the selected radio
this.$radio('colors').change(function (selectedRadio) {
    document.body.style.backgroundColor = selectedRadio.value;
});


// all colores nodeList 
  console.log('All drones:', radioGroup.names);
```

In this example documentation, I've added more details about the `$radio` object, including its properties and the `change` method. The example usage demonstrates attaching a general event listener and another example that changes the background color based on the selected radio button. Feel free to modify the documentation and examples based on your specific use case.
