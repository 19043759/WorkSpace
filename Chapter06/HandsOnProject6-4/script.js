/*    JavaScript 6th Edition
 *    Chapter 6
 *    Hands-on Project 6-3

 *    Author: Nathan Foglia
 *    Date:   April 15,2020

 *    Filename: script.js
 */



 function removeSelectDefault() {
    let selectBox = document.getElementById("size");
    selectBox.selectedIndex = -1;
    selectBox.style.boxShadow = "none";
  }

  function setUpPage() {
    removeSelectDefault();
    generatePlaceholder();
  }

  if(window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
  } else if(window.attachEvent) {
    window.attachEvent("onload", setUpPage);
  }

  function zeroPlaceholder() {
    let instrBox = document.getElementById("instructions");
    instrBox.style.color = "black";
    if (instrBox.value === instrBox.placeholder) {
      instrBox.value = "";
    }
  }
  
  /* Restore placeholder text if box contains no user entry */
  function checkPlaceholder() {
    let instrBox = document.getElementById("instructions");
    if(instrBox.value === "") {
      instrBox.style.color = "rgb(178, 184, 183)";
      instrBox.value = instrBox.placeholder;
    }
  }
  /* Add placeholder text for browsers that don't support placeholder attribute */
  function generatePlaceholder() {
    if (!Modernizr.input.placeholder) {
      let instrBox = document.getElementById("instructions");
      instrBox.value = instrBox.placeholder;
      instrBox.style.color = "rgb(178, 184, 183)";
      if (instrBox.addEventListener) {
        instrBox.addEventListener("focus", zeroPlaceholder, false);
        instrBox.addEventListener("blur", checkPlaceholder, false);
      } else if(instrBox.attachEvent) {
        instrBox.attachEvent("onfocus", zeroPlaceholder);
        instrBox.attachEvent("onblur", checkPlaceholder);
      }
    }
  }
