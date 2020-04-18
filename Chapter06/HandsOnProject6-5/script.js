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

   /* run initial form configuration functions */
 function setUpPage(){
	 removeSelectDefault();
	 createEventListeners();
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
 // global variable 
 var formValidity = true;
 
  /* validate required fields */
  function validateRequired()
  {
    var inputElements = document.querySelectorAll("input[required]");
    var errorDiv = document.getElementById("errorMessage");
    var crustBoxes = document.getElementsByName("crust");
    var fieldsetValidity = true;
    var elementCount = inputElements.length;
    var currentElement;

    try{
      for (var i = 0; i < elementCount; i++){
        // validate all input elements in fieldset
        currentElement = inputElements[i];
        if (currentElement.value === ""){
          currentElement.style.background = "rgb(255,233,233)";
          requiredValidity = false;
        }

        else{
          currentElement.style.background = "white";
        }
      }

      currentElement = document.querySelectorAll("select")[0];

      // validate state select element
      if (currentElement.selectedIndex === -1){
        currentElement.style.border = "1px solid red";
        fieldsetValidity = false;
      }

      else{
         currentElement.style.border = "";
      }

     if (!crustBoxes[0].checked && !crustBoxes[1].checked){
       // verify that a crust is selected
       crustBoxes[0].style.outline = "1px solid red";
       crustBoxes[1].style.outline = "1px solid red";
       fieldsetValidity = false;
     }

     else{
       crustBoxes[0].style.outline = "";
       crustBoxes[1].style.outline = "";
     }

     if (fieldsetValidity === false){
       throw "Please complete all fields.";
     }

     else{
         errorDiv.style.display = "none";
         errorDiv.innerHTML = "";
     }

    }

    catch(msg){
      errorDiv.style.display = "block";
      errorDiv.innerHTML = msg;
      formValidity = false;
    }
  }
 
  /* validate form */
  function validateForm(evt)
  {
    if (evt.preventDefault){
      evt.preventDefault(); // prevent form from submitting
    }

    else{
       evt.returnValue = false; // prevent form from submitting in IE8
    }

    formValidity = true; // reset value for revalidation
    validateRequired();

    if (formValidity === true){
      document.getElementById("errorMessage").innerHTML = "";
      document.getElementById("errorMessage").style.display = "none";
      document.getElementsByTagName("form")[0].submit();
    }

    else{
       document.getElementById("errorMessage").innerHTML = "Please complete all selected fields.";
       document.getElementById("errorMessage").style.display = "block";
       scroll(0,0);
    }
  }