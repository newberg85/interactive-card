# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![](./screenshot.jpg)

<div style="display:flex; width:100%">
<img src="images/desktop-version.png" width="60%">
<img src="images/mobile-version.png" width="40%">
</div>



### Links

- Solution URL: [solution](https://github.com/newberg85/interactive-card)
- Live Site URL: [site](https://interactive-card-amber.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Interactions and javascript concepts


### What I learned

Screen zoom is disabled.
```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
```
The input number button is removed.
```css
input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
    
}
input[type=number] { 
   -moz-appearance: textfield;
   appearance: textfield;
}
```
adds a gradient border on input click.
```css
input:focus {
    background: linear-gradient(white, white) padding-box,
    linear-gradient(to right, hsl(249, 99%, 64%), hsl(278, 94%, 30%)) border-box;
    border-radius: 8px;
    border: 1px solid transparent;
}
```
This function only accepts numbers and limits the amount of digits passed in the input.
```js
function onlyNumbers(event) {
    var charCode = event ? event.charCode || event.keyCode : null;
    if (charCode === 8 || charCode === 9) {
        return true;
    }
    if (charCode < 48 || charCode > 57) {
        return false;
    }
}

function limitDigitsCard(event) {
    var max = 18;
    var card = document.getElementById('number');
    card.value = card.value.slice(0, max);
    onlyNumbers(event); // Passa o evento como parâmetro
}
```
With this function, the value passed in the input is updated in the field added automatically.
```js
function showName() {
    var name = document.getElementById("nome").value;
    document.getElementById("showName").textContent = name;
}
```

## Author

- Github - [Wandemberg](https://github.com/newberg85)
- Frontend Mentor - [@newberg85](https://www.frontendmentor.io/profile/newberg85)
- Instagram - [@new.berg85](https://www.instagram.com/new.berg85/)
- Behance - [Wandemberg](https://www.behance.net/bergviana)



