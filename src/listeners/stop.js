import { toggle} from '../handlers/toggle.js';


/**
 * add vent listener to stop button 
 */

const stopButton = document.querySelector('#stop');

stopButton.addEventListener('click', () => toggle(false));