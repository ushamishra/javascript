
function add() {

    const x = document.getElementById("firstfield").valueAsNumber;
    const y = document.getElementById("secondfield").valueAsNumber;


    const sum = x + y;

    const resultDiv = document.getElementById("result");

    resultDiv.style.display = "block"

    

    document.getElementById("result").innerHTML = "<h2>Result :"+sum +"</h2>";


}


