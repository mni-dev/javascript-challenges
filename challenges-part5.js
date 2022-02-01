//Chanllenge No:-(1) finding smallest number from array
/* const givenNum = [33, 55, 30, 50];
let smallNum = givenNum[0];
for (let i = 0; i <givenNum.length; i++){
    let arrayNum = givenNum[i];
    smallNum = givenNum [0];
    if(arrayNum < smallNum){
        smallNum = arrayNum;
    }
    // console.log(arrayNum);
    return smallNum;
}
console.log(smallNum); */
//Chanllenge No:-(2) finding the smallest of thre numbers
function lowestNum(a, b, c){
    if(a < b && a < c){
        return a;
    }
     else if(b < a && b < c){
         return b;
     }
     else{ 
         return c;
     }
}
console.log(lowestNum(45, 8, -9));

//Chanllenge No:-(3) finding the average of arraylist numbers using function
const average = [40, 90, 30, 40, 50];
function findAverage(){
    let sum = 0;
    for(let i = 0; i < average.length; i++){
        let averageNum = average[i];
        sum = sum + averageNum;
    }
    return sum / average.length;    
}
console.log(findAverage());

//Chanllenge No:-(4) finding rectangle area with function

function rectangleArea (breadth, height){
    let area = breadth * height;
    return area;
}
const rectArea = rectangleArea(50, 10);
console.log('The area is ' + rectArea + ' meters.');