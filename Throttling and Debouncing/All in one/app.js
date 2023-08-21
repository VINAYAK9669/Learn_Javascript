// create the variable of the required elements
const normalCount = document.querySelector(".normal__count span");
const throttleCount = document.querySelector(".throttle__count span");
const debounceCount = document.querySelector(".Debounce__count span");

// Create count varibles for each functions
let normalCounter = 0;
let throttleCounter = 0;
let throttleCheck = true;
let debounceCounter = 0;
let timer;

function mousemoveHandler() {
  normalFunction();
  throttleFunction();
  debounceFunction();
}
function normalFunction() {
  normalCounter += 1;
  normalCount.innerHTML = normalCounter;
}

function throttleFunction() {
  if (throttleCheck) {
    throttleCounter++;
    throttleCount.innerHTML = throttleCounter;
    throttleCheck = false;
    setTimeout(() => {
      throttleCheck = true;
    }, 500);
  }
}

function debounceFunction() {
  window.clearTimeout(timer);
  timer = setTimeout(() => {
    debounceCounter++;
    debounceCount.innerHTML = debounceCounter;
  }, 500);
}
