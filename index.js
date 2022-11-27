// Code your solutions in this file
function writeCards(stringArray, eventName){
    let newArray = [];
    for(let index = 0; index < stringArray.length; index ++){
        newArray.push(`Thank you, ${stringArray[index]}, for the wonderful ${eventName} gift!`)
    }
    return newArray;
}

function countDown(int){
    while(int >= 0){
        console.log(int);
        int -= 1;
    }
}