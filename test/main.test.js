import { Convert } from "../scripts/convert";

describe('Convert Temp Celcius', () => {
  let convert;
  beforeEach(() => convert = new Convert("celcius", 1));
  it("to Celcius", () => expect(convert.convertToCelcius()).toBe(1));
  it("to Fahrenheit", () => expect(convert.convertToFahrenheit()).toBe(33.8));
  it("to Reamur", () => expect(convert.convertToReamur()).toBe(0.8));
})
describe("Convert Temp Fahrenheit", () => {
  let convert;
  beforeEach(() => (convert = new Convert("fahrenheit", 1)));
  it("to Celcius", () => expect(convert.convertToCelcius()).toBe(-17.22222222222222));
  it("to Fahrenheit", () => expect(convert.convertToFahrenheit()).toBe(1));
  it("to Reamur", () => expect(convert.convertToReamur()).toBe(-13.777777777777777));
});
describe("Convert Temp Reamur", () => {
  let convert;
  beforeEach(() => (convert = new Convert("reamur", 1)));
  it("to Celcius", () => expect(convert.convertToCelcius()).toBe(1.25));
  it("to Fahrenheit", () => expect(convert.convertToFahrenheit()).toBe(34.25));
  it("to Reamur", () => expect(convert.convertToReamur()).toBe(1));
});
