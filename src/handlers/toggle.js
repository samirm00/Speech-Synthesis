'use strict';


/**
 * 
 */
         
const msg = new SpeechSynthesisUtterance();
   
function toggle(startOver = true) {
    speechSynthesis.cancel();
    if (startOver) {
      speechSynthesis.speak(msg);
    }
  }