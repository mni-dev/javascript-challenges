//Convert Celsius to Fahrenheit
/*function temperatureToFahrenheit(celsius){
    const fahrenheit =(celsius * 9/5) + 32;
    return fahrenheit;
}
const givenCelsius = 3.7;
const celsiusToFahrenheit = temperatureToFahrenheit(givenCelsius);
console.log(celsiusToFahrenheit);*/

//Converting Fahrenheit to Celsius
/*function temperatureToCelsius(fahrenheit){
    const celsius = (fahrenheit -32) * (5/9);
    return celsius;
}
const givenFahrenheit = 50.4;
const fahrenheitToCelsius = temperatureToCelsius(givenFahrenheit);
console.log(fahrenheitToCelsius);*/

//Telling grade letters

/*function tellLetterGrade(marksObtained){
    if(marksObtained >= 90){
        console.log('Grade is A++');
    }else if(marksObtained > 79){
        console.log('Grade is A+');
    }
    else if(marksObtained > 69){
        console.log('Grade is A');
    }
    else if(marksObtained > 59){
        console.log('Grade is A-');
    }
    else if(marksObtained > 49){
        console.log('Grade is B+');
    }
    else if(marksObtained > 39){
        console.log('Grade is B');
    }
    else if(marksObtained > 33){
        console.log('Grade is B-');
    }
    else{
        console.log('Grade is F');
    }
}
const yourMarks = 63;
tellLetterGrade(yourMarks);*/

function showLetterGrade(studentName, studentMarks) {
    if (studentMarks >= 80 && studentMarks <= 100) {
        var nameAndGrade = studentName + ': Grade A+';
    }
    else if (studentMarks < 80 && studentMarks >= 70) {
        var nameAndGrade = studentName + ': Grade A';
    }
    else if (studentMarks < 70 && studentMarks >= 60) {
        var nameAndGrade = studentName + ': Grade A-';
    }
    else if (studentMarks < 60 && studentMarks >= 50) {
        var nameAndGrade = studentName + ': Grade B+';
    }
    else if (studentMarks < 50 && studentMarks >= 40) {
        var nameAndGrade = studentName + ': Grade B';
    }
    else if (studentMarks < 40 && studentMarks >= 33) {
        var nameAndGrade = studentName + ': Grade C';
    }
    else {
        var nameAndGrade = studentName + ': Grade F';
    }
    return nameAndGrade;
}
let tellName = 'Adil';
const examMarks = 79;
let result = showLetterGrade(tellName, examMarks)

//Finding out Simple Interest 
const principal = 5000;
const interestRate = 4 / 100;
const years = 5;
function interestAmount(baseAmount) {
    let totalBalance = baseAmount * (1 + (4 / 100 * 5));
    let profit = totalBalance - baseAmount;
    return profit;

}
console.log(interestAmount(principal));

