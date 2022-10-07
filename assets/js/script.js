const buttonOne = document.querySelector("#crash-btn-1");
const buttonTwo = document.querySelector("#ride-btn-2");
const buttonThree = document.querySelector("#middle-btn-3");
const buttonFour = document.querySelector("#high-btn-4");
const buttonFive = document.querySelector("#floor-btn-5");
const buttonSix = document.querySelector("#hat-btn-6");
const buttonSeven = document.querySelector("#snare-btn-7");
const buttonEight = document.querySelector("#bass-btn-8");


const listenerFunctionCrash = () => {
    const crash = new Audio();
    crash.src = "./assets/audio/crash.wav";
    crash.play();
};

buttonOne.addEventListener("click", listenerFunctionCrash);

const listenerFunctionRide = () => {
    const ride = new Audio();
    ride.src = "./assets/audio/ride.wav";
    ride.play();
};

buttonTwo.addEventListener("click", listenerFunctionRide);


const listenerFunctionHigh = () => {
    const high = new Audio();
    high.src = "./assets/audio/high-tom.wav";
    high.play();
};

buttonFour.addEventListener("click", listenerFunctionHigh);

const listenerFunctionFloor = () => {
    const floor = new Audio();
    floor.src = "./assets/audio/floor-tom.wav";
    floor.play();
};

buttonFive.addEventListener("click", listenerFunctionFloor);

const listenerFunctionHat = () => {
    const hat = new Audio();
    hat.src = "./assets/audio/hi-hat.wav";
    hat.play();
};

buttonSix.addEventListener("click", listenerFunctionHat);

const listenerFunctionSnare = () => {
    const snare = new Audio();
    snare.src = "./assets/audio/snare.wav";
    snare.play();
};

buttonSeven.addEventListener("click", listenerFunctionSnare);

const listenerFunctionBass = () => {
    const bass = new Audio();
    bass.src = "./assets/audio/bass-drum.wav";
    bass.play();
};

buttonEight.addEventListener("click", listenerFunctionBass);

const listenerFunctionMedium = () => {
    const medium = new Audio();
    medium.src = "./assets/audio/medium-tom.wav";
    medium.play();
};

buttonThree.addEventListener("click", listenerFunctionMedium);

console.log(new Number())