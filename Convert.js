class Convert {
  constructor(temp, tempValue) {
    this.tempValue = tempValue;
    this.temp      = temp;
  }
  convertToFahrenheit() {
    const convert = {
      fahrenheit: this.tempValue,
      celcius: (9 / 5) * this.tempValue + 32,
      reamur: (9 / 4) * this.tempValue + 32,
    };
    return convert[this.temp];
  }
  convertToCelcius() {
    const convert = {
      fahrenheit: (5 / 9) * (this.tempValue - 32),
      celcius: this.tempValue,
      reamur: (5 / 4) * this.tempValue,
    };
    return convert[this.temp];
  }
  convertToReamur() {
    const convert = {
      fahrenheit: (4 / 9) * (this.tempValue - 32),
      celcius: (4 / 5) * this.tempValue,
      reamur: this.tempValue,
    };
    return convert[this.temp];
  }
}

export default Convert;