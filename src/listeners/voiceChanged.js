/**
 * Listener , call the function populateVoices()
 */




import {populateVoices} from '../handlers/populateVoice.js';

speechSynthesis.addEventListener('voiceschanged', populateVoices);