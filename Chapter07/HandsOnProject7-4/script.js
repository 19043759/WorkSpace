/*
     JavaScript 6th Edition
      Chapter 7
      Hands-on Project 7-4

      Author: Nathan Foglia   
      Date:   April 14, 2020

      Filename: script.js
*/
"use strict";
var delivInfo = {};
var delivSummary = document.getElementById("deliverTo");
 
function processDeliveryInfo(){
    var prop
    delivInfo.name = document.getElementById("nameinput").value;
    delivInfo.addr = document.getElementById("addrinput").value;
    delivInfo.city = document.getElementById("cityinput").value;
    delivInfo.email = document.getElementById("emailinput").value;
    delivInfo.phone = document.getElementById("phoneinput").value;

    for (prop in delivInfo){
        delivSummary.innerHTML += "<p>" + delivInfo[prop] + "</p>";
    }
}


function previewOrder() {
    processDeliveryInfo();
    document.querySelector("section").style.display = "block";
    delivSummary.style.display = 'block';
}

function callpreview(){
    var submitButton = document.getElementById("previewBtn");
      if (submitButton.addEventListener){
         submitButton.addEventListener("click", previewOrder, false);
      }
      else if (submitButton.attachEvent){
         submitButton.attachEvent("onclick", previewOrder);
      }
}

callpreview();
