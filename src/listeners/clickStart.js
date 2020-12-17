'use strict';

import {  toggle } from '../handlers/toggle.js';

/**
 * 
 */
  

const speakButton = document.querySelector('#speak');

msg.text = document.querySelector('[name="text"]').value;


speakButton.addEventListener('click', toggle);