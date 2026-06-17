//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)


//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

module.exports = {
    // tot_temperature_in_fahrenheit,
    // tot_temperature_in_celsius,
    // avg_temperature_in_fahrenheit,
    // avg_temperature_in_celsius
};
const day1Temp = 32;
const day2Temp = 25;
const day3Temp = 70;
const day4Temp = 18;
const day5Temp = 80;
const day6Temp = 15;
const day7Temp = 72;
const day8Temp = 28;
const day9Temp = 68;
const day10Temp = 20;
const day11Temp = 75;
const day12Temp = 23;
const day13Temp = 82;
const day14Temp = 30;
const day15Temp = 65;
const day16Temp = 22;
const day17Temp = 77;
const day18Temp = 26;
const day19Temp = 78;
const day20Temp = 24;
const day21Temp = 73;
const day22Temp = 21;
const day23Temp = 79;
const day24Temp = 27;
const day25Temp = 71;
const day26Temp = 19;
const day27Temp = 74;
const day28Temp = 17;
const day29Temp = 76;
const day30Temp = 29;

let tot_temperature_in_fahrenheit = 
    day1Temp + 
    (day2Temp * 9 / 5 + 32) + 
    day3Temp + 
    (day4Temp * 9 / 5 + 32) + 
    day5Temp + 
    (day6Temp * 9 / 5 + 32) + 
    day7Temp + 
    (day8Temp * 9 / 5 + 32) + 
    day9Temp + 
    (day10Temp * 9 / 5 + 32) + 
    day11Temp + 
    (day12Temp * 9 / 5 + 32) + 
    day13Temp + 
    (day14Temp * 9 / 5 + 32) + 
    day15Temp + 
    (day16Temp * 9 / 5 + 32) + 
    day17Temp + 
    (day18Temp * 9 / 5 + 32) + 
    day19Temp + 
    (day20Temp * 9 / 5 + 32) + 
    day21Temp + 
    (day22Temp * 9 / 5 + 32) + 
    day23Temp + 
    (day24Temp * 9 / 5 + 32) + 
    day25Temp + 
    (day26Temp * 9 / 5 + 32) + 
    day27Temp + 
    (day28Temp * 9 / 5 + 32) + 
    day29Temp + 
    (day30Temp * 9 / 5 + 32);

    let tot_temperature_in_celsius = 
    ((day1Temp - 32) * 5 / 9) +
    day2Temp  + 
    ((day3Temp - 32) * 5 / 9) +  
    day4Temp +
    ((day5Temp - 32) * 5 / 9) + 
    day6Temp +
    ((day7Temp - 32) * 5 / 9) +
    day8Temp +
    ((day9Temp - 32) * 5 / 9) +
    day10Temp + 
    ((day11Temp - 32) * 5 / 9) +
    day12Temp +
    ((day13Temp - 32) * 5 / 9) +
    day14Temp + 
    ((day15Temp  - 32) * 5 / 9) +
    day16Temp +
    ((day17Temp - 32) * 5 / 9) +
    day18Temp +
    ((day19Temp - 32) * 5 / 9) +
    day20Temp + 
    ((day21Temp - 32) * 5 / 9) +
    day22Temp + 
    ((day23Temp - 32) * 5 / 9) +
    day24Temp + 
    ((day25Temp - 32) * 5 / 9) +
    day26Temp + 
    ((day27Temp - 32) * 5 / 9)  +
    day28Temp + 
    ((day29Temp - 32) * 5 / 9) +
    day30Temp;
    
    let avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30;
    let avg_temperature_in_celsius = tot_temperature_in_celsius / 30;

    console.log(avg_temperature_in_celsius);
    console.log(avg_temperature_in_fahrenheit);
