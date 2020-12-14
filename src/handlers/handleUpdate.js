'use strict';



/**
 * changing the value of the variable , the first variable @spacing change the border width value , the second @blur change blur value and the last variable @base change the color of the @spacing and h1 DOM elements .
 * @param {Event} event - triggered whenever a user change the value using the scroll button 
 */
         
   
    // set the style properties for each input using the name and value attributes and adding the suffix(px) 
       
    export function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }
