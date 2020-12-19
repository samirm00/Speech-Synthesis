import { setOption } from '../handlers/setOption.js';

/**
 * add event listener to the options [Rate] , [Pitch] and [text area ]
 */
const options = document.querySelectorAll('[type="range"], [name="text"]');

options.forEach(option => option.addEventListener('change', setOption));