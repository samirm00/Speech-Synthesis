/**
 * toggle function allows the user to stop the voice and start again 
 */



const msg = new SpeechSynthesisUtterance();
msg.text = document.querySelector('[name="text"]').value;

export function toggle(startOver = true) {
    speechSynthesis.cancel();
    if (startOver) {
      speechSynthesis.speak(msg);
    }
  }