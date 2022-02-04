                    // Multiplication-table of 13

/* function MultiplicationTable13(number1){
    for (let i = 1; i <= 10; i++){
        console.log(multiplicand + " " + '*' + " " + i + ' = ' + multiplicand*i);
     }
};
let multiplicand = 13;
MultiplicationTable13(multiplicand);
                
                    // Outputing fullname using function

function giveFullName (part1, part2){
    console.log('My full name is' + " " + part1 + " " + part2);
}

var myNam = {
    firstName: 'Nazrul',
    lastName: 'Islam'
};
giveFullName(myNam.firstName, myNam.lastName); */
                
                    // Determining the square of a number

//a) square of any number you input
/* function findSquare(yourNumber){
    let squareNumber = yourNumber * yourNumber;
    return squareNumber;
} 
let hisNumber = 100;
console.log(findSquare(hisNumber)); */

//b) square of the numbers in an array
/* var multipliedNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
function findSquare(){
   for(i = 0; i < multipliedNumber.length; i++){
       var squareResult = multipliedNumber[i];
       console.log(squareResult * squareResult);
   }
} 
findSquare(); */

                    // Convert names to lowrcase using function

//method 1 
/* function nameToLowerCase (yourName){
     if(yourName != yourName.toUpperCase()){
         let upperCaseName = yourName.toUpperCase();
         console.log('My name in upper-case: ', upperCaseName);
     }
     let lowerCaseName = yourName.toLowerCase();
     return lowerCaseName;
     
 }
 let myName = 'Nazrul Islam'
 console.log('My name in lower-case: ', nameToLowerCase(myName)); */ 
 
//Method 2
/* let myName = 'Nazrul Islam';
function nameToLowerC(name){
    if(name !=name.toUpperCase()){
        name = 'Upper-case name is:'  + ' ' + name.toUpperCase() + ', ' + 'lower-case name is: ' + name.toLowerCase();
    }
    return name;
} 
const name = nameToLowerC(myName);
console.log(name); */



