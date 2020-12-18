import {populateVoices} from '../handlers/populateVoice.js';


/**
 * Listener , call the function populateVoices()
 */




speechSynthesis.addEventListener('voiceschanged', populateVoices);