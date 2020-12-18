import { setVoice } from '../handlers/setVoice.js';


/**
 * add event listener  to the select voice   setVoice()
 */

const voicesDropdown = document.querySelector('[name="voice"]');

voicesDropdown.addEventListener('change', setVoice);