'use strict';

import { setVoice } from '../handlers/populate.js';

/**
 * 
 */
  
const voicesDropdown = document.querySelector('[name="voice"]'); 

voicesDropdown.addEventListener('change', setVoice);