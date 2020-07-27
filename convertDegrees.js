//value of the degree in kelvin.
const kelvin = 250;
//value of the degree in celsius is kelvin less 273 degrees.
const celsius = kelvin -273;
//formula to convert celcius into fahrenheit
let fahrenheit = celsius * (9/5) + 32;
//Method used to round down Fahrenheit temperature.
fahrenheit = Math.floor(fahrenheit);
//convert the degree into newton
let newton = celsius * (33/100);
//round down the value of newton
newton = Math.floor(newton);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${newton} degrees in Newton`);
