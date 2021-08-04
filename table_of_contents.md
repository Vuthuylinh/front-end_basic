### Code Academy account
https://www.codecademy.com/courses/learn-jquery/lessons/jquery-setup/exercises/jquery-methods

---
# jQuery Introduction
- jQuery, a JavaScript library that makes it easy to add dynamic behavior to HTML elements.

- Example:
  ```js
    $('.login-button').on('click',()=>{   // not correct if have space between arrow and curly bracket
        $('.login-form').toggle();
    });

  ```
### jQuery methods
  -  jQuery methods to add dynamic behavior, such as `.hide()`, `.show()`, .`fadeIn()`, .`fadeOut()` etc., to HTML elements.
  -  What jQuery methods should I be familiar with?
#### effect methods:
- .animate()
- .delay()
- These methods instantly hide or show elements on a web page:
    * .hide()
    * .show()
    * .toggle() - do both hide and show
- These methods make elements disappear or appear over a given period of time.
    * .fadeIn()
    * .fadeOut()  //If no argument is given, the default animation duration is 400 milliseconds.;
       $('.fade-image').fadeOut(5000) => fade out in 5secs
    * .fadeToggle() // Do both `fadeIn` and `fadeOut`
- These methods make elements slide up or down into place over a given period of time.
    * .slideUp()
    * .slideDown()
    * .slideToggle()

#### event methods:

#### DOM manipulation methods:
- .addClass()/.toggleClass()
- .after()/.before()
- .append()/.prepend()
- .remove()
- .val()

### Web structure
 - head: loading style
 - body:
    * html structure
    * behavior with script

### jQuery CDN
- A CDN is a collection of servers that can deliver content.
- - Need to load the jQuery library before the main.js file
```js
  <script
  src="https://code.jquery.com/jquery-3.2.1.min.js"
  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  crossorigin="anonymous">
  </script>
```
- The integrity and crossorigin properties in the example ensure the file is delivered without any third-party manipulation.

### .ready()
- .ready() method waits until the HTML page’s DOM is ready to manipulate.
- You should wrap all JavaScript behavior inside of the .ready() method.
```js
    $(document).ready(() => {
   });
```
### Target elements by id and class.
1. Target by class  `$('.someClass').handlerMethod();`
2. Target by id: `$('#someId').hide();`
3. Are there other ways I can target elements besides by class and by id?
    - class
    - id
    - attribute
    - child
    - descendant
    - group
    - chained
    - universal
### jQuery Objects
 - Example: `const $jQueryObject = $('.someClass');`
 - Notice our variable name, $jQueryObject, starts with the ($) character

---
## jQuery - Event Handlers
- The jQuery `.on()` method adds event handlers to jQuery objects.
- The jQuery `.addClass` method:  zoom photos in when someone hovers over them.
- The jQuery `.removeClass` method: zoom photos out ..
- An event handler has 2 parts:
  - event listener: a method that listens for a specified event occur (click,change,focus, hover,mouseenter/mouseleave)
  - callback function: executes when something triggers the event listenner
- Syntax:
```js
$('.example-class').on('click', () => {
    // Execute code here when .example-class is clicked
});

Example:
$('#login').on('click', () => {
  $loginForm.show();
})
```
#### Event listeners / Event Methods
- mouseenter : listen to mouse `enter` - when a user enters
- mouseleave : when a user’s mouse leaves
- change
- click
- focus
- hover
- keydown
- keyup
- keypress
- on()
- ready()
  ...
##### Chain event handler
 Example:
 ```js
 $('.product-photo').on('mouseenter',()=>{
    $('.product-photo').addClass('photo-active')
  }).on('mouseleave',()=>{
      $('.product-photo').removeClass('photo-active')
    })
 ```
##### `event.currentTarget`
- only use it inside a callback function.
- only the current element got targeted will get effect
- Example:
```js
 $('.product-photo').on('mouseenter', event => {
    $(event.currentTarget).addClass('photo-active')
  }).on('mouseleave', event => {
    $(event.currentTarget).removeClass('photo-active')
  })
```
## Style Methods
1. `.css() `
     - adjust 1 feature: ` $('.example-class').css('color', '#FFFFFF')`;
     - manage a list of features wrap in an object with value-key:
     - Syntax:
      ```js
      $('.example-class').css({
          color: '#FFFFFF',
          backgroundColor: '#000000',
          fontSize: '20px'
        })
      ```
2. `.animate()`
   - The jQuery `.animate()` method enhances the visual possibilities by making CSS value changes over a period of time.
   - `.animate()` has 2 parameters:
        * css object
        * duration(optional): string ('fast', 'slow'...) or number (500 - 500 miliseconds); default: 400
   - `Names` of CSS properties in the JavaScript object don’t have spaces or dashes and are camelCased.
   - Syntax:
    ```js
      $('.example-class').animate({
        height: '100px',
        width: '100px',
        borderWidth: '10px'
      }, 500);
    ```
3. `.addClass()` :will add a CSS class to an element
   - Syntax: `$('.example-class').addClass('active')`;
   - The argument passed to addClass `does not have a period` preceding it
4. `.removeClass()`:will remove a CSS class
   - Syntax: `$('.example-class').removeClass('active');`
5. `.toggleClass()` will:
   - adds a class if an element does not already have it,
   - and removes it if an element does already have it.
   - Syntax: `$('.example-class').toggleClass('active');`

### DOM Traversing
1. Children:
  - Syntax:
    `$('.targetClassName).children('.parentClassName).`
2. Parent:
    ```js
      $('.choice').on('click', event => {
        $(event.currentTarget).parent().hide();
      });
    ```
    In the example above, the .parent() method targets the parent element of '.choice' elements and removes it from the DOM.

3. Siblings:
   ```js
    $('.choice').on('click', event => {
      // Remove the 'selected' class from any siblings
      $(this).siblings().removeClass('selected');
      // Adds 'selected' class to that element only.
      $(event.currentTarget).addClass('selected');
    });
   ```
  - In the code above, the .siblings() method targets elements adjacent to the clicked '.choice' and removes the 'selected' class from any previously clicked '.choice's. Then the 'selected' class is added only to the clicked '.choice'.

4. `.closest()` travels up the DOM tree from the current element to target the closest element with a given selector.
5. `.next()` to target the element immediately following the selected element.
6. `.prev()` to target the element that is immediately preceding the selected element.
7. `.find()` to target descendant elements by some selector, ie- class, id, tag etc.
8. In addition to these methods, there are even more, including `.prevUntil()`, `.nextUntil()` and others. To get an idea, check out Mozilla Developer Network reference for jQuery Traversing.
