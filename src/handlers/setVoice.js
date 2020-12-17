'use strict';
import {  toggle } from '../handlers/toggle.js';
/**
 * 
 */
         
   

const msg = new SpeechSynthesisUtterance();
let voices = [];




function setVoice() {
    msg.voice = voices.find(voice => voice.name === this.value);
    toggle();
  }