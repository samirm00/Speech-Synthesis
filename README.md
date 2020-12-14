# CSS-Variables 

> A simple website allows the user to change the border with of a picture also the user is able to change the blurriness of the picture and change the color of the border and some text in the page title 

## Table of contents
* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

The web site is created by `Wes Bos`, his code is written in a single `HTML` file. The main goal is learning how to separate the code into different files, in the repository the single `HTML` file has been divided in to `HTML`,`CSS` and five `JS` files.

## Screenshots
![Example screenshot](img/screenShot.png)

## Technologies
* JavaScript
* HTML
* CSS
* VSC code


## Setup
open index.html in your browser and enjoy! playing the drum 

## Code Examples

```js
/**
 * changing the value of the variable , the first variable @spacing change the border width value , the second @blur change blur value and the last variable @base change the color of the @spacing and h1 DOM elements .
 * @param {Event} event - triggered whenever a user change the value using the scroll button 
 */
         
   
    // set the style properties for each input using the name and value attributes and adding the suffix(px) 
       
    export function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
```


## Features
List of features ready and TODOs for future development

* 
* 
* 

To-do list:

* 
* 

## Status
Project is: _in progress_

## Inspiration
The project is created by `Wes Bos`

## Contact
Refracted  by [@samirm00] 