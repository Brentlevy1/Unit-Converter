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

    resultsLengthEL.innerHTML = `
                                <p id="resultsLength"> ${userNumberInputEL.value} meters = ${lengthResultFeet.toFixed(3)} feet | ${userNumberInputEL.value} feet = ${lengthResultMeter.toFixed(3)} meters</p> 
                                `;
    resultsVolumeEL.innerHTML = `
                                <p id="resultsLength"> ${userNumberInputEL.value} liters = ${volumeResultGallon.toFixed(3)} Gallons | ${userNumberInputEL.value} Gallons = ${volumeResultLiter.toFixed(3)} liters</p> 
                                `;
    resultsMassEL.innerHTML = `
                                <p id="resultsLength"> ${userNumberInputEL.value} Kilos = ${volumeResultPound.toFixed(3)} Pounds | ${userNumberInputEL.value} Kilos = ${volumeResultKilo.toFixed(3)} Pounds</p> 
                                `;
    //console.log(userNumberInputEL.value, meterBase)
}


convertBtn.addEventListener("click", function () {
    convertCalculate(userNumberInputEL.value);
});

resetBtn.addEventListener("click", function () {
    resultsLengthEL.innerHTML = `
        <p id="resultsLength">meters = feet | feet = meters</p> 
    `;
    resultsVolumeEL.innerHTML = `
        <p id="resultsVolume"> liters = Gallons | Gallons = liters</p> 
    `;
    resultsMassEL.innerHTML = `
        <p id="resultsMass"> kilos = pounds | pounds = kilos</p>
    `;
    userNumberInputEL.value = "";
});




//console.log(userNumberEL)