                    // Determining the grades using while loop and if conditional

var marks = [95, 66, 80, 59, 47, 77];
var studenNames = ['Alia', 'Dalia', 'Salia', 'Malia', 'Lilia', 'Jalaiya'];
var i = 0;
while (i <= 5) {
    if (marks[i] >= 90 && marks[i] <= 100) {
        console.log(studenNames[i] + ' got A+');
    } else if (marks[i] >= 80) {
        console.log(studenNames[i] + ' got A');
    }
    else if (marks[i] >= 70) {
        console.log(studenNames[i] + ' got B');
    }
    else if (marks[i] >= 60) {
        console.log(studenNames[i] + ' got C');
    }
    else if (marks[i] >= 50) {
        console.log(studenNames[i] + ' got D');
    }
    else {
        console.log(studenNames[i] + ' Fail');
    }
    i++;
}


                        // Traffic-light signals 

/* var signal = ['red', 'yellow', 'green'];
var i = 0;
while (i <= 2){
    if(signal[i] == 'red'){
        console.log('Stop your vehicle or there might be a danger.');
    }
    else if (signal[i] == 'yellow'){
        console.log('You should wait for a while.');
    }
    else if (signal[i] == 'green'){
        console.log('Drive and chill.');
    }
    i++;
}


                        //Loggin out Daily work 10 times with Loops 
//a) using for loop
let dailyTasks = [
    'Unlock module at 8 o\'clock',
    'Watch and practise videos together',
    'Take notes as you watch videos',
    'Practise entire module when finished'
];
let amUnableToUnderstand = true;
let joinSupportSession = 'yet have confusion!, please join support session.';
for (i = 1; i <= 10; i++){
    console.log('My daily tasks are: ', dailyTasks);
    if(amUnableToUnderstand == true){
        console.log(joinSupportSession);
    }
}

//b) using while loop
let dailyTasks = [
    'Unlock module at 8 o\'clock',
    'Watch and practise videos together',
    'Take notes as you watch videos',
    'Practise entire module when finished'
];
let amUnableToUnderstand = true;
let joinSupportSession = 'yet have confusion!, please join support session.';
let i = 1;
while(i <= 10){
    console.log('My daily tasks are: ', dailyTasks);
    if(amUnableToUnderstand == true){
        console.log(joinSupportSession);
    }
    i++;
} */