var inputUttag = document.getElementById("inputUttag");
var buttonCalculate = document.getElementById("buttonCalculate");
var resualt = document.getElementById("resualt");

buttonCalculate.onclick = function () {
    var inputValue = parseFloat(inputUttag.value); // Convert input value to a number
    var resultValue = (inputValue / 0.4) - inputValue;

    resualt.textContent = resultValue + " kr";
}
