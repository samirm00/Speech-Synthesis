
/**
 * Handler function populateVoices()
 * include all the voices in the select option
 *  
 */





let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');

export function populateVoices() {

    voices = this.getVoices();
    voicesDropdown.innerHTML = voices
     
      .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
      .join('');
  };