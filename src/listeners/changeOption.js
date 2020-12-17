'use strict';

import {setOption } from '../handlers/option.js';

/**
 * 
 */
  
const options = document.querySelectorAll('[type="range"], [name="text"]');
msg.text = document.querySelector('[name="text"]').value;

options.forEach(option => option.addEventListener('change', setOption));