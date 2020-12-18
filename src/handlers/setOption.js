/**
 *  handler function assign the @msg name to a value 
 * --------------------------------------------------
 * 
 * call the function toggle 
 * 
*/
 






import { toggle}  from './toggle.js'

const msg = new SpeechSynthesisUtterance();



 export function setOption() {
    console.log(this.name, this.value);
    msg[this.name] = this.value;
    toggle();
  }