<!-- BEGIN TITLE -->

# DOCS

<!-- END TITLE -->

<!-- BEGIN TOC -->

- [handlers](#handlers)
  - [option.js](#srchandlersoptionjs)
  - [populate.js](#srchandlerspopulatejs)
  - [setVoice.js](#srchandlerssetVoicejs)
  - [toggle.js](#srchandlerstogglejs)
- [listeners](#listeners)
  - [change.js](#srclistenerschangejs)
  - [changeOption.js](#srclistenerschangeOptionjs)
  - [clickStart.js](#srclistenersclickStartjs)
  - [clickStop.js](#srclistenersclickStopjs)
  - [voiceChanged.js](#srclistenersvoiceChangedjs)
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

### [./src/handlers/option.js](./src/handlers/option.js?study)

<a name="msg"></a>

## msg

---

### [./src/handlers/populate.js](./src/handlers/populate.js?study)

<a name="voices"></a>

## voices

---

### [./src/handlers/setVoice.js](./src/handlers/setVoice.js?study)

<a name="msg"></a>

## msg

---

### [./src/handlers/toggle.js](./src/handlers/toggle.js?study)

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

---

### [./src/listeners/changeOption.js](./src/listeners/changeOption.js?study)

<a name="options"></a>

## options

---

### [./src/listeners/clickStart.js](./src/listeners/clickStart.js?study)

---

### [./src/listeners/clickStop.js](./src/listeners/clickStop.js?study)

---

### [./src/listeners/voiceChanged.js](./src/listeners/voiceChanged.js?study)

<a name="msg"></a>

## msg

[TOP](#DOCS)

---

---

## [./src/init.js](./src/init.js?study)

<!-- END DOCS -->
