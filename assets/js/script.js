const buttonOne = document.querySelector("#crash-btn-1");
const buttonTwo = document.querySelector("#ride-btn-2");
const buttonThree = document.querySelector("#middle-btn-3");
const buttonFour = document.querySelector("#high-btn-4");
const buttonFive = document.querySelector("#floor-btn-5");
const buttonSix = document.querySelector("#hat-btn-6");
const buttonSeven = document.querySelector("#snare-btn-7");
const buttonEight = document.querySelector("#bass-btn-8");
const buttonNine = document.querySelector("#backing-track")

const listenerFunctionCrash = (event) => {
    event.target.blur()
    const crash = new Audio();
    crash.src = "./assets/audio/crash.wav";
    crash.play();
};

buttonOne.addEventListener("click", (event) => listenerFunctionCrash(event));

const listenerFunctionRide = (event) => {
    event.target.blur()
    const ride = new Audio();
    ride.src = "./assets/audio/ride.wav";
    ride.play();
};

buttonTwo.addEventListener("click", (event) => listenerFunctionRide(event));

const listenerFunctionHigh = (event) => {
    event.target.blur()
    const high = new Audio();
    high.src = "./assets/audio/high-tom.wav";
    high.play();
};

buttonFour.addEventListener("click", (event) => listenerFunctionHigh(event));

const listenerFunctionFloor = (event) => {
    event.target.blur()
    const floor = new Audio();
    floor.src = "./assets/audio/floor-tom.wav";
    floor.play();
};

buttonFive.addEventListener("click", (event) => listenerFunctionFloor(event));

const listenerFunctionHat = (event) => {
    event.target.blur()
    const hat = new Audio();
    hat.src = "./assets/audio/hi-hat.wav";
    hat.play();
};

buttonSix.addEventListener("click", (event) => listenerFunctionHat(event));

const listenerFunctionSnare = (event) => {
    event.target.blur()
    const snare = new Audio();
    snare.src = "./assets/audio/snare.wav";
    snare.play();
};

buttonSeven.addEventListener("click", (event) => listenerFunctionSnare(event));

const listenerFunctionBass = (event) => {
    event.target.blur()
    const bass = new Audio();
    bass.src = "./assets/audio/bass-drum.wav";
    bass.play();
};

buttonEight.addEventListener("click", (event) => listenerFunctionBass(event));

const listenerFunctionMedium = (event) => {
    event.target.blur()
    const medium = new Audio();
    medium.src = "./assets/audio/medium-tom.wav";
    medium.play();
};

buttonThree.addEventListener("click", (event) => listenerFunctionMedium(event));

const listenerFunctionBacking = (event) => {
    event.target.blur()
    const backingTrack = new Audio();
    backingTrack.src = "./assets/audio/backingtrack.mp3";
    backingTrack.play();
    event.target.disabled = true
};

buttonNine.addEventListener("click", (event) => listenerFunctionBacking(event));

function playAssociateSoundKeydown(event) {
    if (event.code === 'KeyQ') {
        listenerFunctionCrash(event)
    } else if (event.code === 'KeyP') {
        listenerFunctionRide(event)
    } else if (event.code === 'KeyF') {
        listenerFunctionMedium(event)
    } else if (event.code === 'KeyJ') {
        listenerFunctionHigh(event)
    } else if (event.code === 'KeyC') {
        listenerFunctionFloor(event)
    } else if (event.code === 'KeyN') {
        listenerFunctionSnare(event)
    } else if (event.code === 'KeyM') {
        listenerFunctionHat(event)
    } else if (event.code === 'Space') {
        listenerFunctionBass(event)
    }
}

// in global scope create and event listener waiting for key down. 
// after keydown play keydown function
window.addEventListener("keydown", (event) => playAssociateSoundKeydown(event))
const drumPieceBtns = document.querySelectorAll('.drum-piece-btn')

const showKeysBtn = document.getElementById('show-and-hide').addEventListener('click', function () {
    drumPieceBtns.forEach(btn => {
        btn.classList.toggle('show-keys-option-active')
    })
})