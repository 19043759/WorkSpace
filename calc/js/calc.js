var a = [];
var clear = true;

function clearCalc(){
    document.getElementById("display").innerHTML = 0;
    a = [];
}

function continueMath() {
    math()
    a = [ a[1] ];
}

function number(number){
    if (!clear){
        continueMath();
        clear = true;
        
    } 
    var curNum = document.getElementById("display").innerHTML;


    if (curNum === "0") {
        document.getElementById("display").innerHTML = number;
    }
    else if (curNum === "0." || curNum !== "0"){
        document.getElementById("display").innerHTML = curNum + number;
    }
    
}
  

function decimal() {
    var addDecimal = document.getElementById("display").innerHTML;
    var isDecimal = addDecimal.indexOf(".");
    if (isDecimal == -1) {
        
        document.getElementById("display").innerHTML = addDecimal + ".";
    }
}
function math() {
    var total = 0;
    var firstNum = parseFloat(a[0]);
    var secondNum = parseFloat(a[2]);
    
    switch (a[1]){
        case '+':
            total = firstNum + secondNum;
            break;
        case '-':
            total = firstNum - secondNum;
            break;
        case '*':
            total = firstNum * secondNum;
            break;
        case '/':
            total = firstNum / secondNum;
            break;
    }

    document.getElementById("display").innerHTML = total;
    //clear = false;
    return total
}

function op (op) {

    if (op != '=' ){
        if(a[0]){
            if (a[2]){
                math();  
                a[0] = document.getElementById("display").innerHTML;
            }
            else {
                a[1] = op
            }
        }
        else {
            a[0] = document.getElementById("display").innerHTML;
            a[1] = op;

            //document.getElementById("display").innerHTML = 0;
        }
    } else {
        a[2] =  document.getElementById("display").innerHTML;
        math();
    }
}