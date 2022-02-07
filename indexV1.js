let pickers = [
    
    [" Grammy", " David"],
    [" Uncle Brian", " Aunt Carissa", " Emily", " Daniel", " Josiah", " Alyssa"],
    [" Mom", " Isaac", " Riley", " Abby", " Elise"],
    [" Uncle Ryan", " Aunt Sarah", " Deanna", " Russel"],
    [" Katie", " Stanley", " Kayden"]

];

let count = 0;
let number = pickers.length;
let i = 0;

while (number > i) {
    count += pickers[i].length;
    i++;
}
//Poor man's For Loop

let trashCan1 = [];
//This is where all of the chosen people go. 

let trashCan2 = [];
//This is where all of the chosen people go.

let pickNum = 0;

let personPick1;

let personPick2;

function checkPerson1(group) {
    return group == personPick1;
}

function checkPerson2(group) {
    return group == personPick2;
}

while (pickNum < count) {

    let groupPick1 = pickers[Math.floor(Math.random() * pickers.length)];
    //Chooses a random group
    
    let groupPick2 = pickers[Math.floor(Math.random() * pickers.length)];
    //Chooses a random group
    
    if (groupPick1 !== groupPick2) {
        personPick1 = groupPick1[Math.floor(Math.random() * groupPick1.length)];
        //Picks a random person from the first chosen group
        
        personPick2 = groupPick2[Math.floor(Math.random() * groupPick2.length)];
        //Picks a random person from the second chosen group

        if (pickNum == 0) {
            trashCan1.push(personPick1);
            trashCan2.push(personPick2);
            pickNum++; 
        }
        
        else if (trashCan1.some(checkPerson1) == false && trashCan2.some(checkPerson2) == false) {
            trashCan1.push(personPick1);
            trashCan2.push(personPick2);
            pickNum++;   
        }
        
    }
}