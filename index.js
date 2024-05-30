/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert");
const resetBtn = document.getElementById("reset");
const meterBase = 3.281;
const literBase = 0.264;
const kiloBase = 2.204;



let userNumberInputEL = document.getElementById("userNumberInput");
let userNumberEL = document.getElementsByClassName("userNumber");
let resultsLengthEL = document.getElementById("resultsLength");
let resultsVolumeEL = document.getElementById("resultsVolume");
let resultsMassEL = document.getElementById("resultsMass");

function convertCalculate(userNumber) {

    lengthResultFeet = userNumber * meterBase;
    lengthResultMeter = userNumber / meterBase;
    volumeResultGallon = userNumber * literBase;
    volumeResultLiter = userNumber / literBase;
    volumeResultPound = userNumber * kiloBase;
    volumeResultKilo = userNumber / kiloBase;

    resultsLengthEL.innerHTML = `${userNumberInputEL.value} meters = ${lengthResultFeet.toFixed(3)} feet | ${userNumberInputEL.value} feet = ${lengthResultMeter.toFixed(3)} meters `;
    resultsVolumeEL.innerHTML = `${userNumberInputEL.value} liters = ${volumeResultGallon.toFixed(3)} Gallons | ${userNumberInputEL.value} Gallons = ${volumeResultLiter.toFixed(3)} liters `;
    resultsMassEL.innerHTML = `${userNumberInputEL.value} Kilos = ${volumeResultPound.toFixed(3)} Pounds | ${userNumberInputEL.value} Kilos = ${volumeResultKilo.toFixed(3)} Pounds `;

    //console.log(userNumberInputEL.value, meterBase)
}


convertBtn.addEventListener("click", function () {
    convertCalculate(userNumberInputEL.value);
});

resetBtn.addEventListener("click", function () {
    resultsLengthEL.innerHTML = ` meters = feet | feet = meters  `;
    resultsVolumeEL.innerHTML = `  liters = Gallons | Gallons = liters  `;
    resultsMassEL.innerHTML = `   kilos = pounds | pounds = kilos `;
    userNumberInputEL.value = "";
});




//console.log(userNumberEL)