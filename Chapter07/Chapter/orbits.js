/* JavaScript 6th Edition
 * Chapter 7
 * Chapter case
 * 
 *  outer orbits
 *  Author: Nathan Foglia
 *  Date: Apr. 14, 2020
 * 
 * File name: orbits.js
 */

 "use strict";// interpret contents in JavaScript strict mode
 
 var dateObject = new Date();
 
 function displayCalendar () {
     var date;
     var dateToday = new Date();
     var dateOfWeek;
     var daysInMonth;
     var dateCells;
     var captionValue;
     var month;
     var year;
     var monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October","November", "December"];
    if (whichMonth === -1 ){
        dateObject.setMonth(dateObject.getMonth() - 1);
    }
    else if (whichMonth === 1){
        dateObject.setMonth(dateObject.getMonth() + 1);
    }
    month = dateObject.getMonth();
    year = dateObject.getFullYear();
    dateObject.setDate(1);
    dayOfWeek = dateObject.getDay();
    captionValue = monthArray[month] + "" + year;
    document.querySelector("#cal table caption").innerHTML = captionValue;

    // structure to determine the number of days
    if (month === 0 || month === 2 || month === 4 || month === 6 || month === 7 || month === 9 || month === 11) {

    }
} 