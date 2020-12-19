<!-- BEGIN TITLE -->

# DOCS

<!-- END TITLE -->

<!-- BEGIN TOC -->

- [handlers](#handlers)
  - [populateVoice.js](#srchandlerspopulateVoicejs)
  - [setOption.js](#srchandlerssetOptionjs)
  - [setVoice.js](#srchandlerssetVoicejs)
  - [toggle.js](#srchandlerstogglejs)
- [listeners](#listeners)
  - [change.js](#srclistenerschangejs)
  - [changeOption.js](#srclistenerschangeOptionjs)
  - [speak.js](#srclistenersspeakjs)
  - [stop.js](#srclistenersstopjs)
  - [voiceChanged.js](#srclistenersvoiceChangedjs)
- [data.js](#srcdatajs)
- [init.js](#srcinitjs)

<!-- END TOC -->

<!-- BEGIN DOCS -->

---

# Handlers

Handler function define user interactions. They will:

- read user input from events and from the DOM
- read and modify program data variables
- process user data with logic functions
- update the DOM to show changes to the user
- log any important information for developers

---

### [./src/handlers/populateVoice.js](./src/handlers/populateVoice.js?study)

<a name="voices"></a>

## voices

Handler function populateVoices()
include all the voices in the select option

---

### [./src/handlers/setOption.js](./src/handlers/setOption.js?study)

---

### [./src/handlers/setVoice.js](./src/handlers/setVoice.js?study)

<a name="msg"></a>

## msg

handler function assign the @msg voice to the select voice

call the function toggle()

---

### [./src/handlers/toggle.js](./src/handlers/toggle.js?study)

<a name="msg"></a>

## msg

toggle function allows the user to stop the voice and start again

[TOP](#DOCS)

---

---

# Listeners

Event listeners are used to connect handler functions to user interactions with the DOM.

You can use the same handler in many different listeners, or add more than one listeners to the same DOM element.

---

### [./src/listeners/change.js](./src/listeners/change.js?study)

<a name="voicesDropdown"></a>

## voicesDropdown

add event listener to the select voice setVoice()

---

### [./src/listeners/changeOption.js](./src/listeners/changeOption.js?study)

<a name="options"></a>

## options

add event listener to the options [Rate] , [Pitch] and [text area ]

---

### [./src/listeners/speak.js](./src/listeners/speak.js?study)

<a name="speakButton"></a>

## speakButton

add vent listener to speak button

---

### [./src/listeners/stop.js](./src/listeners/stop.js?study)

<a name="stopButton"></a>

## stopButton

add vent listener to stop button

---

### [./src/listeners/voiceChanged.js](./src/listeners/voiceChanged.js?study)

[TOP](#DOCS)

---

---

## [./src/data.js](./src/data.js?study)

---

## [./src/init.js](./src/init.js?study)

<!-- END DOCS -->
