//Print out 'pepperoni'
const pizza = {
    toppings: ['cheese', 'sauce', 'pepperoni'],
    crust: 'deep dish',
    serves: 2
};
const getToppings = pizza.toppings;
const givePepperoni = getToppings[2];
console.log(givePepperoni);

//Checking if a year a Leap year
//a)
function ifLeapYear(yearToCalculate){
    if(yearToCalculate % 4 == 0 && yearToCalculate % 100 != 0 || yearToCalculate % 100 && 400 == 0) {
        console.log(yearToCalculate + " " + 'is a leap year.');
    }else{
        console.log(yearToCalculate + " " + 'is not a leap year.');
    }
}
const myYear = 2100;
ifLeapYear(myYear);

//b)
function is2023LeapYear(year2023){
    if(year2023 % 4 == 0 && year2023 % 100 != 0 || year2023 % 100 && 400 == 0){
        return true;
    }
   return false;  
}
console.log(is2023LeapYear(2023));

//Checking is any number even or odd
function ifEvenOrOdd(anyNumber){
    if (anyNumber % 2 == 0){
        return true;
    } else if(anyNumber % 2 != 0){
        return false;
    }
}
const myAge = 35;
ifEvenOrOdd(myAge);
console.log(ifEvenOrOdd());

//Finding Minutes from Hours
function giveMinutes(hours){
    const minutes = hours * 60;
    return minutes;
}
const workHours = 5.5;
const workHoursToMinutes = giveMinutes(workHours);
console.log(workHoursToMinutes);