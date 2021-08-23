import { Convert } from "./convert.js";

// const convertToReamur = require("./celcius");
const EMPTY_STRING = "";
// all event
const EVENT_CHANGE = "change";
const EVENT_KEY_UP = "keyup";
const EVENT_SUBMIT = "submit";
// all selector
const elementSelect = document.querySelectorAll("select");
const elementInput = document.querySelectorAll(".inputTemp");
const btnChangeColor = document.querySelectorAll("#btnChangeColor");
const valueBackground = document.getElementById("valueBackground");
const valueBody = document.querySelector("body");
// const date = document.getElementById("date");
const time = document.getElementById("time");

const setDate = (params) =>{
  const date = new Date();
  const monthArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const getMinutes = date.getMinutes();
  const minutes = getMinutes < 10 ? `0${getMinutes}` : getMinutes; 
  return params === "date" ? 
      `${date.getDate()} ${monthArray[date.getMonth()]} ${date.getFullYear()}`
    : `${date.getHours()} : ${minutes} : ${date.getSeconds()}`; 
}

const convertTemperatur = (inputForm, value) => {
  const temp1 = elementSelect[0].value;
  const temp2 = elementSelect[1].value;
  const convert = new Convert(temp1, value);
  const temperatur = {
    fahrenheit: convert.convertToFahrenheit(),
    celcius: convert.convertToCelcius(),
    reamur: convert.convertToReamur(),
  };

  if (inputForm === "inputForm1") {
    elementInput[1].value = temperatur[temp2].toString().replace(".",",");
  }
};

// keyup, change, submit
const chooseEvent = (eventValue, e) => {
  if (eventValue === EVENT_KEY_UP) {
    convertTemperatur(e.target.id, e.target.value);
  } else if (eventValue === EVENT_CHANGE) {
    elementInput[0].value = EMPTY_STRING;
    elementInput[1].value = EMPTY_STRING;
  } else if (eventValue === EVENT_SUBMIT) {
    e.preventDefault();
    valueBody.style.backgroundColor = valueBackground.value;
  }
};

const addEvent = function (element, eventValue) {
  const elementLength = element.length;
  for (let index = 0; index < elementLength; index++) {
    element[index].addEventListener(eventValue, (e) =>
      chooseEvent(eventValue, e)
    );
  }
};

setInterval(() => {
  date.innerHTML = setDate("date");
  time.innerHTML = setDate("time");
}, 1000);
addEvent(elementSelect, EVENT_CHANGE);
addEvent(elementInput, EVENT_KEY_UP);
addEvent(btnChangeColor, EVENT_SUBMIT);
