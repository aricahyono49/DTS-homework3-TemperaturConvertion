import Convert from "./Convert.js";


const EVENT_CHANGE = "change"; 
const EVENT_KEY_UP = "keyup"; 

const elementSelect = document.querySelectorAll("select");
const elementInput = document.querySelectorAll("input");


const setValue = (inputForm, value) => {
  const temp1 = elementSelect[0].value;
  const temp2 = elementSelect[1].value;
  
  const t = {
    inputForm1: convertTemperatur(temp1, temp2, value),
    inputForm2: convertTemperatur(temp2, temp1, value),
  };

  const o = {
    inputForm1: elementInput[1],
    inputForm2: elementInput[0],
  };
  o[inputForm].value = t[inputForm];
};

const convertTemperatur = (temp1, temp2, value) => {
  const convert = new Convert(temp1, value);
  const temperatur = {
    fahrenheit: convert.convertToFahrenheit(),
    celcius: convert.convertToCelcius(),
    reamur: convert.convertToReamur(),
  };
  return temperatur[temp2];
};


const addEvent = function (element, event) {
const elementLength = element.length;
  for (let index = 0; index < elementLength ; index++) {
    element[index].addEventListener(event, function (e) {
    if (event === EVENT_KEY_UP) {
      setValue(e.target.id, e.target.value);
    }
    });
  }
};

addEvent(elementSelect, EVENT_CHANGE);
addEvent(elementInput, EVENT_KEY_UP);






