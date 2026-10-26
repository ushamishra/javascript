
function add() {

    const x = document.getElementById("firstfield").valueAsNumber;
    const y = document.getElementById("secondfield").valueAsNumber;


    const sum = x + y;

    const resultDiv = document.getElementById("result");

    resultDiv.style.display = "block"


    resultDiv.innerHTML = "<h2> Result :"+sum +"</h2>";

}


function substract() {

    const x = document.getElementById("firstfield").valueAsNumber;
    const y = document.getElementById("secondfield").valueAsNumber;

     const diff = x - y;

    const resultDiv = document.getElementById("result");

    resultDiv.style.display = "block"


    resultDiv.innerHTML = "<h2> Result :"+diff +"</h2>";

}

function division() {

    const x = document.getElementById("firstfield").valueAsNumber;
    const y = document.getElementById("secondfield").valueAsNumber;

     const quotient = x / y;

    const resultDiv = document.getElementById("result");

    resultDiv.style.display = "block"


    resultDiv.innerHTML = "<h2> Result :"+quotient +"</h2>";

}

function multiplication() {

    const x = document.getElementById("firstfield").valueAsNumber;
    const y = document.getElementById("secondfield").valueAsNumber; 

    const product = x * y;

    const resultDiv = document.getElementById("result");

    resultDiv.style.display = "block"


    resultDiv.innerHTML = "<h2> Result :"+product +"</h2>";

}


function module() {

    const x = document.getElementById("firstfield").valueAsNumber;
    const y = document.getElementById("secondfield").valueAsNumber;
    
    const mod = x % y;

    const resultDiv = document.getElementById("result");        

    resultDiv.style.display = "block"

     resultDiv.innerHTML = "<h2> Result :"+mod +"</h2>";

}

