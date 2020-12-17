'use strict';


/**
 * 
 */
         
   
   
let voices = [];
  const voicesDropdown = document.querySelector('[name="voice"]');

function populateVoices() {
    voices = this.getVoices();
    voicesDropdown.innerHTML = voices
      .filter(voice => voice.lang.includes('en'))
      .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
      .join('');
  };