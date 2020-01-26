    function clearCalc(){
        document.getElementById("display").value = 0
    }

    function number(number){
        var curNum = document.getElementById("display").value;
        document.getElementById("display").value = curNum + number
    }

