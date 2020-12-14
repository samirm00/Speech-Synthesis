<!-- BEGIN TITLE -->

# DOCS

<!-- END TITLE -->

<!-- BEGIN TOC -->

- [handlers](#handlers)
  - [handleUpdate.js](#srchandlershandleUpdatejs)
- [listeners](#listeners)
  - [inputChange.js](#srclistenersinputChangejs)
  - [inputMousemove.js](#srclistenersinputMousemovejs)
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

### [./src/handlers/handleUpdate.js](./src/handlers/handleUpdate.js?study)

<a name="artifyHandler"></a>

## handleUpdate

creates a mirror-image rendering of the user input and displays the growing artwork

| Param | Type               | Description                                                |
| ----- | ------------------ | ---------------------------------------------------------- |
| event | <code>change</code> | triggered whenever a user scroll the button or click      |

[TOP](#DOCS)

---

---

# Listeners

Event listeners are used to connect handler functions to user interactions with the DOM.

You can use the same handler in many different listeners, or add more than one listeners to the same DOM element.

---

### [./src/listeners/inputChange.js](./src/listeners/inputChange.js?study)

<a name="change value
calls handler that changes the value "></a>

## change value

calls handler that changes the spacing or blur or color

---

### [./src/listeners/inputMousemove.js](./src/listeners/inputMousemove.js?study)

<a name="scroll by mouse
calls the function handleUpdate when the mouse is moved"></a>

## mouse movement

calls the function handleUpdate when the mouse is moved

[TOP](#DOCS)

---

---

## [./src/init.js](./src/init.js?study)

<!-- END DOCS -->
