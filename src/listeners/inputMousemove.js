'use strict';

import {handleUpdate } from '../handlers/handleUpdate.js';

/**
 * @name user change
 * calls the Handler when a user scroll or change the value of variables 
 */
 // select all the input elements 
const inputs = document.querySelectorAll('.controls input');

inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));