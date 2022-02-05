//Problem 1: Ana to Vori
function anaToVori(ana){
    let bori = ana / 16;
    /* if(typeof ana != Number){
        return 'please, input a valid number'
    } */
    return bori;    
}
const voriCount = anaToVori(50);
console.log(voriCount);

//Problem 2: Panda Cost
function pandaCost(item1, item2, item3){
    let singaraPrice = item1 * 7;
    let samusaPrice = item2 * 10;
    let gilapiPrice = item3 * 15;
    let totalPay = singaraPrice + samusaPrice + gilapiPrice;
    return totalPay;
}
const payToPanda = pandaCost(3, 5, 5);
console.log(payToPanda);

//Problem 3: Picnic Budget
function picnicBudget(participants){
    if(participants <=100){
        let perHeadPay = 5000;
        totalPay = participants * perHeadPay;
        return totalPay;
    }
    else if(participants > 100 && participants <=200){
        let first100PerHeadPay = 5000;
        first100totalPay = first100PerHeadPay * 100;
        let hundredPlusPerHeadPay = 4000;
        hundredPlustotalPay = hundredPlusPerHeadPay * (participants -100);
        totalPay = first100totalPay + hundredPlustotalPay;
        return totalPay;
    }
    else if(participants > 200){
        let first100PerHeadPay = 5000;
        first100totalPay = first100PerHeadPay * 100;
        let second100PerHeadPay = 4000;
        second100totalPay = second100PerHeadPay * 100;
        restPerHeadCost = 3000;
        totalPay =first100totalPay + second100totalPay + (3000 *(participants-200));
        return totalPay;
    }
}
const picnicBudgetTotal = picnicBudget(250);
console.log(picnicBudgetTotal);

//Problem 4: OddFriend
function oddFriend(friendName){
    let oddCharName;
    for(i = 0; i<friendName.length; i++){
        if((friendName[i].length) % 2 != 0){
            oddCharName = friendName[i];
            break;
        }
    }
    return oddCharName;
}
let myFriends = [
    'Abdul Wafi',
    'Ridwanul Islam',
    'Abbas Uddin',
    'Mohammad Sufian',
    'Kamrul Islam',
    'Mohammad Saifuddin'
]
const friends = oddFriend(myFriends);
console.log(friends);

/* const friends = oddFriend(myFriends);
console.log(friends);
function oddFriend(friendName){
    let oddCharName;
    for(i = 0; i<friendName.length; i++){
    }
}
const friends = oddFriend(myFriends);
console.log(friends); */

