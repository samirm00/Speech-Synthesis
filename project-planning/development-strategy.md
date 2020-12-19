# Speech-Synthesis

A simple web site allows the user to enter something and then the input will convert to voice , it allows the user to select different accents , change the voice speed rate and the pitch (voice deepness).

---

## User Story Dependencies

![Story Dependency Diagram](../img/userStories.png)

---

## WIREFRAME

[figma](https://www.figma.com/file/hwFTV0V7lMYXf6zFiM1r9r/Speech-Synthesis?node-id=0%3A1)

---

## 0.Setup

- fork the `javaScript-30-starter` template 
- use the template to create a new repo `Speech-Synthesis`
- create a project board `Speech-Synthesis-project-board`
- create milestones and issues.

---

## X. Initialize the web page 

> how much work do you think this step will take?  medium

> **As user I want to open `Speech-Synthesis` web site to know more and use `Speech-Synthesis`.**

- When I open the web site `Speech-Synthesis`, I see 

- A green blueish background.

- A box in the cerner of the page with bacl title`The Voiceinator 500`
with yellow background.
- A select with arrow and `grey background 

- A word `Rate` with scroll button under it. 
- A word `Pitch` with scroll button under it. 
- A text area says `Hello! I love JavaScript 👍` with backround like `select arrow`

- A button `Speak` with yellow background like `title`
- A button `Stop` with yellow background like `title`
...

### REPO

- This user story is developed on branch `1-initialize`.
- This branch is merged to `master` branch after the acceptance criteria have been checked off.

### Concern A

- `index.html`   

    * add a `div` element with class  'voiceinator' to the `body`
    *  add  `h1` element as a child 
    *  add  `select ` element with id 'voices as a child  
    *   add  `option` element as a grand child 
    *   add  2 `label` element as a child 
    *   add 2  `input` element as a child 
    *   add  `textarea` element as a child 
    *  add  2`button` element as a child one with id 'stop' and the other with id 'speak'

### Concern B

- `main.css`:

   * `html` add general style font size and box sizing  
   * `body` add general style  margin , padding , font family , display,background color and size
   *  add style to the parent `div`
   * add style to `h1` margin,padding,background,font size,family, background and text shadow
   * add style to `textarea`  height 
   * add style to `button`  background,border,font family and size , cursor and position

## X. Select the accent 

> how much work do you think this step will take?  medium

> **As I user I want what are the options in `select`**

 When I click on select arrow i see three options 

 - Google US English  (en-US)

 - Google UK English Female (en-GB)

 - Google UK English Male (en-GB)
...

### REPO

- This user story is developed on branch `2-select`.
- This branch is merged to `master` branch after the acceptance criteria have been checked off.

### Concern A

-  ` populate.js` :

   *  create a file `populate.js` and a function `populateVoices()`
   *  declare an array `voices` and assign it to an empty array 
   *  select `select` DOM emennt using `querySelector`
   *  make the` voices` as a current target 
   *  add it using `innerHTML`
   *  filter ` voices` to include English only 
   *  map the `voices` to include voice name and language then join them
   *  export the function `populateVoices()`

### Concern B

- `voicesChanged.js` :

  * add event listener to when 'voiceschanged' call the function `populateVoices()`


## X. Voice rate 

> how much work do you think this step will take?  medium


> **As I user I want to know what is `Rate` doing**

when I scroll the `Rate button` the sound velocity increases ( speak faster)

...

### REPO

- This user story is developed on branch `3-rate`.
- This branch is merged to `master` branch after the acceptance criteria have been checked off.

### Concern A

- `setVoice.js` :

    *  developed on branch `3-rate` 
    *  create a file `setVoice.js`
    *  add function `setVoice()`
    *  for the voice find the name and assign it to the current targent value 
    *  export the function `setVoice()`
### Concern B

- `change.js`
   
    *  add event listener to when 'change' call the function `setVoice()`

## X. Voice Pitch

> how much work do you think this step will take?  medium

> **As I user I want to know what is `Pitch` doing**

when I scroll the `Pitch` the sound deepness  decreases  ( the voice become thiner )

...

### REPO

- This user story is developed on branch `4-pitch`.
- This branch is merged to `master` branch after the acceptance criteria have been checked off.

### Concern A

- `option.js` :

    * create a file  `option.js`
    * add function `setOption()
    *  set the message name to the current value 
    * call the `toggle()`
    * export the function ``setOption()
### Concern B

-  `changeOptions.js`


    * add event listener to when 'change' call the function `setOption()`


## X. Text area

> **As I user I want to know if I can add text to  `textarea`**

when I click on the `textarea` 

- I can type the text I want and I can hear the text I typed

...

### REPO

- This user story is developed on branch `master`.
- This branch is merged to `master` branch after the acceptance criteria have been checked off.


## X. Play

> **As I user I want to know what is `Play` button doing**

when I click on  `Play` button 

- My text convert  to a voice 

...

### REPO

- This user story is developed on branch `5-play`.
- This branch is merged to `master` branch after the acceptance criteria have been checked off.

### Concern A

- `clickStart.js`

     * add event listener to when 'click' call the function ` toggle()`


## X. Stop


> **As I user I want to know what is `Stop` button doing**

when I click on  `Stop` button 

- The voice stops 
...

### REPO

- This user story is developed on branch `6-stop`.
- This branch is merged to `master` branch after the acceptance criteria have been checked off.



### Concern A

-  `clickStop.js`

   * add event listener to when 'click' the stop button call the function ` toggle(false)`