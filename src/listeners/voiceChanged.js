'use strict';

import {populateVoices  } from '../handlers/populate.js';

/**
 * 
 */
  
const msg = new SpeechSynthesisUtterance();

speechSynthesis.addEventListener('voiceschanged', populateVoices);