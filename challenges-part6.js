 //Problem 1
function anaToVori(ana){
    if(typeof ana !='number'){
        return 'Please, input a valid number';
    }
    // 1 vori is equal to 16 ana
    vori = ana / 16;
    return vori;    
}
const voriCount = anaToVori(52);
console.log(voriCount);

//Problem 2
function pandaCost(singara, samusa, gilapi){
    if(typeof (singara, samusa, gilapi) != 'number'){
        return 'Please, input valid numbers'
    }
    /* 
    singara per piece = 7;
    samusa per piece = 10;
    gilapi per piece = 15;
    */
     singaraPrice = singara * 7;
     samusaPrice = samusa * 10;
     gilapiPrice = gilapi * 15;
     totalPay = singaraPrice + samusaPrice + gilapiPrice;
     return totalPay;
}
const payToPanda = pandaCost(5, 10, 20);
console.log(payToPanda);

//Problem 3
function picnicBudget(participants){
    if(typeof participants != 'number'){
        return 'Please, give a number'
    }
    if(participants <=100){
        //Per head pay upto 100 = 5000;
        totalPay = 5000 * participants;
        return totalPay;
    }
    else if(participants > 100 && participants <=200){
        first100TotalPay =  5000 * 100;
        //Per head pay above 100 = 4000;
        second100TotalPay = 4000 * (participants -100);
        TotalPay = first100TotalPay + second100TotalPay; 
        return totalPay;
    }
    else if(participants > 200){
        first200TotalPay = (5000 * 100) + (4000 * 100);
        //Per head pay above 200 perticipants = 3000;
        totalPay =first200TotalPay + (3000 *(participants-200));
        return totalPay;
    }
}
const picnicBudgetTotal = picnicBudget(300);
console.log(picnicBudgetTotal);

//Problem 4
function oddFriend(friendName){
    // console.log(typeof friendName);
    let oddCharName; //will take the first odd-character name
    for(i = 0; i<friendName.length; i++){
        if((friendName[i].length) % 2 != 0){
            oddCharName = friendName[i];
            break; //stops code iteration if condition meets.
        }
    }
    return oddCharName;
}
let myFriends = [
    'Abdul Bari',
    'Ridwanul Islam',
    'Al Ameen',
    'Mohammad Sufian',
    'Abbas Uddin',
    'Kamrul Islam',
    'Mohammad Saifuddin'
]
const friends = oddFriend(myFriends);
console.log(friends);




