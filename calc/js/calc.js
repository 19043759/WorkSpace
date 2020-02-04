    function clearCalc(){
        document.getElementById("display").innerHTML = 0
    }

    function number(number){
        var curNum = document.getElementById("display").innerHTML;
        document.getElementById("display").innerHTML = curNum + number
    }

