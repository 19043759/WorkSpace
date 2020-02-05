function clearCalc(){
    document.getElementById("display").innerHTML = 0
}

function number(number){
    var curNum = document.getElementById("display").innerHTML;
    if (curNum == 0) {
        document.getElementById("display").innerHTML = number
    }
    else{
        document.getElementById("display").innerHTML = curNum + number
    }

}
function decimal() {
    var addDecimal = document.getElementById("display").innerHTML;
    var isDecimal = addDecimal.indexOf(".");
    if (isDecimal != true) 
        document.getElementById("display").innerHTML = addDecimal + "."
}