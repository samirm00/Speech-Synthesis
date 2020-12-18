import { toggle} from './toggle.js'

/**
 * handler function assign the @msg voice to the select voice 
 * 
 * call the function toggle() 
 */




const msg = new SpeechSynthesisUtterance();
console.log(msg);

msg.text = document.querySelector('[name="text"]').value;
console.log(voices);


export function setVoice() {
    msg.voice = voices.find(voice => voice.name === this.value);
    toggle();
  } 
