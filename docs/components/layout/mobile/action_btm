# mobile-action-bottom-bar

It appears that you have implemented a mobile bottom bar component using the **$action_btm**{.w-right}  function and have a button that triggers the display of this bottom bar. Below is a documentation template for your code:


<style markdown="1">

       iframe.mobile {      
           border-radius: 40px;     
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);   
            border: 8px solid #000; 
             height: 500px;  
             width:250px ;
             
       } 
       iframe.dekstop {      
           border-radius: 5px;     
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);   
            border: 4px solid #000; 
             height: 300px; 
             width:100%; 
             border-bottom: 10px solid #000; 
       }
       
    </style>
    
<div   markdown="1" style="margin-bottom:30px;display:flex; border:none; justify-content: center;">
<iframe
  class="mobile"  
  src="https://docs.gilob.in/test/formui/index.html">
</iframe>  
</div>

**desktop view default**

<div   markdown="1" style="margin-bottom:30px;display:flex;flex-direction: column; border:none; justify-content: center;">
<iframe  
  class="dekstop"
  src="https://docs.gilob.in/test/formui/desktop.html">
</iframe>  

</div>


### formate

```html
<mobile  form="bottom-bar"> Content </mobile>
```
**! Show the mobile component for screens <= 768px**{.w-right}  
 
**Options**{.w-btn}


>overflow

- **Type**: Boolean

- **Default**: **true**

Specifies whether overflow is allowed or not. If not explicitly set, the default value is **true**{.w-btn}.

>max-height

- **Type**: Percentage
- **Default**: **50%**

Specifies the maximum height for the mobile component, represented as a percentage. If not explicitly set, the default value is **50%**{.w-btn}.


```html
<mobile  form="bottom-bar" max-height="80%"> Content </mobile>
```



### Example

**html**
```html
<button>Filter</button>

<div class='filter' style="display:none">

  <mobile from="bottom-bar">
      <h1>Beautiful UI List</h1>
      <ul>
        <!-- List items go here -->
      </ul>
    
  </mobile>

</div>
```

**js**

```javascript

var elment = document.querySelector("mobile")

var mobile_action = $action_btm(elment);

//Trigger the bottom bar on button click

document.querySelector('button').onclick = function () {
  document.querySelector(".filter").style.display = "block";
  mobile_action.show();
};

// Close the bottom bar when onclose event is triggered
mobile_action.onclose(function () {
  this.close(function () {
    // Additional code to run on close
     document.querySelector(".filter").style.display = "none";
    // or hide the element in another way
  });
  
  //or this.close()
});

```

class
{.c-frmt}
```php
$action_btm(element)
```


- **Type:** Function
- **Description:** Initializes properties and methods for a mobile bottom bar element.
- **Return:**  Element. 

### properties
class
{.c-frmt}
```
action_btm.show
action_btm.onclose
action_btm.close
```


### show
class
{.c-frmt}
```php
show() 
```

- **Description:** Displays the mobile bottom bar.
- **Return:** null.

```javascript
  mobile_action.show()
```


### onclose
class
{.c-frmt}

```
onclose(caller)
```

- **Description:** Sets up a callback function to be executed when the mobile bottom bar is closed.
- **Return:** null.

  **Parameters** 

  - **caller**: The callback function to be executed on close.

 
```javascript
  mobile_action.onclose(function() {
    // Your code here
  });
```

### close

class
{.c-frmt}
```
close(caller=optional)
```


- **Description:** Closes the mobile bottom bar and executes a callback function.
- **Return:** null.
- 
  **Parameters**

- **caller**: The callback function to be executed on close.

 

```javascript
  mobile_action.close(function() {
    // Your code here
  });
  
  //or 
   mobile_action.close()
```




