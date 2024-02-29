
# Carousel

The carousel component allows you to create a slideshow of content with various options for customization.

##  Options:

1. **c-slider-type**: (Default: "autom") Specifies the type of carousel behavior.
   - "play": Auto-plays the carousel.
   - "loop": Allows looping through slides continuously.
   - "contain": Contains the slides without sliding them automatically.

2. **c-slider-btn**: (Default: "bottom") Specifies the placement of navigation buttons.
   - "top": Places navigation buttons at the top of the carousel.
   - "bottom": Places navigation buttons at the bottom of the carousel.
   - "outer": Places navigation buttons outside the carousel frame.
   - "inner": Places navigation buttons inside the carousel frame.

3. **c-slider-btn-mb**: (Default: Disabled) Enables or disables navigation buttons on mobile devices.
   - Enabled: Shows navigation buttons on mobile devices.
   - Disabled: Hides navigation buttons on mobile devices.

4. **c-slider-tabs**: (Default: Disabled) Enables or disables slide indicators (dots or tabs).
   - Enabled: Shows slide indicators.
   - Disabled: Hides slide indicators.

5. **c-slider-delay**: (Default: None) Specifies the delay time for auto-play in "play" mode.

### Examples:

#### Default:
```html
<div class="carousel" c-slider-tabs="t">
  <div class="carousel-ctn">  
    <div class="x-item">
      <img class="img" src="">
    </div>
    <div class="x-item">
      <img class="img" src="">
    </div> 
  </div>
</div>
```

#### Loop:
```html
<div class="carousel" c-slider-type="loop" c-slider-tabs="t">
  <div class="carousel-ctn">  
    <div class="x-item">
      <img class="img" src="">
    </div>
    <div class="x-item">
      <img class="img" src="">
    </div> 
    <div class="x-item">
      <img class="img" src="">
    </div> 
    <div class="x-item">
      <img class="img" src="">
    </div> 
  </div>
</div>
```

#### Play:
```html
<div class="carousel" c-slider-type="play" c-slider-delay="5s" c-slider-tabs="t">
  <div class="carousel-ctn">  
    <div class="x-item">
      <img class="img" src="">
    </div>
    <div class="x-item">
      <img class="img" src="">
    </div> 
  </div>
</div>
```

#### Contain:
```html
<style>
   /* Adjust contain */
   .carousel-ctn .x-item {
      min-width: 50%;
   }
</style>

<div class="carousel" c-slider-type="contain">
  <div class="carousel-ctn">  
    <div class="x-item">
      <img class="img" src="">
    </div>
    <div class="x-item">
      <img class="img" src="">
    </div> 
  </div>
</div>
```

#### Other Example:
```html
<div class="carousel" c-slider-type="loop" c-slider-tabs="t">
  <div class="carousel-ctn">  
    <div class="x-item">
      <div>Slide 1</div>
    </div>
    <div class="x-item">
      <div>Slide 2</div>
    </div> 
    <div class="x-item">
      Slide 3
    </div> 
  </div>
</div>
```

This documentation provides a comprehensive overview of the carousel component, its options, and usage examples to help you integrate it effectively into your projects.
