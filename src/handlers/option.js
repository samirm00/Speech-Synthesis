'use strict';
import {  toggle } from '../handlers/toggle.js';

/**
 * 
 */
         
const msg = new SpeechSynthesisUtterance();
   
function setOption() {
    console.log(this.name, this.value);
    msg[this.name] = this.value;
    toggle();
  }