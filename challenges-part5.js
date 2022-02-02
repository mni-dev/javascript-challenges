//Chanllenge No:-(1) finding smallest number from array
const givenNum = [78, 45, 58, 94, 20, 68, 78, 11 , 36];
function smallestNum(theSmallest){
    let smallest = theSmallest[0];
    for(let i = 0; i < theSmallest.length; i++){
        const smallNum = theSmallest[i];
        if(smallest < smallNum){
            
        }
    }return smallNum;
}
const mySmallest = givenNum;
console.log(theSmallest(mySmallest));
//Chanllenge No:-(2) finding the smallest of thre numbers
/* function lowestNum(a, b, c){
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
console.log(lowestNum(45, 8, -9)); */

//Chanllenge No:-(3) finding the average of arraylist numbers using function
// const average = [40, 90, 30, 40, 50];
/* function findAverage(average){
    let sum = 0;
    for(let i = 0; i <average.length; i++){
        let averageNum = average[i];
        sum = sum + averageNum;
    }
    return sum / average.length;    
}
const arraylist = [40, 90, 30, 40, 50];
const arrayAvg = arraylist;
console.log(findAverage(arraylist)); */

//Chanllenge No:-(4) finding rectangle area with function

/* function rectangleArea (breadth, height){
    let area = breadth * height;
    return area;
}
const rectArea = rectangleArea(50, 10);
console.log('The area is ' + rectArea + ' meters.'); */