    function clearCalc(){
        document.getElementById("number").value = 0
    }

    function number(number){
        var curNum = document.getElementById("number").value;
        document.getElementById("number").value = curNum + number
    }

