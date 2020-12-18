import { toggle} from '../handlers/toggle.js';

/**
 * add vent listener to speak button 
 */


const speakButton = document.querySelector('#speak'); 
speakButton.addEventListener('click', toggle);