let rowNum = 1;
//Counts the number of rows in the table

let pickers = [];

let number = pickers.length;

let groups = [];

let persons = [];

let groupPick;

let personPick;

let x;

let trashCan1 = [];
//This is where all of the chosen people go. 

let trashCan2 = [];
//This is where all of the chosen people go.

let pickNum = 0;

let personPick1;

let personPick2;

function toggle1() {
    let table1 = document.getElementById("table1");
    if (table1.style.display === "none") {
      table1.style.display = "block";
    } else {
      table1.style.display = "none";
    }
}

function checkPerson1(group) {
    return group == personPick1;
}

function checkPerson2(group) {
    return group == personPick2;
}

function checkGroup(group) {
    return group == x.elements[0].value;
}
//This will later be used to check to see if a group has been created

function addPerson() {
    document.getElementById("table1").innerHTML += "<tr id = row" + rowNum + "></tr>";
    //Creates a new row for the next person

    x = document.getElementById("form");
    //Assigns the contents of the form to the variable 'x'

    groupPick = x.elements[0].value;

    personPick = x.elements[1].value;

    if (groups.some(checkGroup) == false) {//Checks to see if the group has already been used
        groups.push([x.elements[0].value],);
        //Adds the group to the 'groups' array
        console.log("Groups = " + groups);
        pickers.push([],);
    }

     if (rowNum == 1) {
        pickers[0].push(personPick);
    }//Automatically adds the person to the group if there is only one group

    else {
        for (let i = 0; i < groups.length; i++) {
            if (groupPick == groups[i]) {
                pickers[i].push(personPick);
            }
        }
    }//Checks the groups to find a match, then puts the person into the correct place in the 'pickers' array

    console.log("Pickers = " + pickers);

    let text = "";
    
    for (let i = 0; i < x.length ; i++) {  
        text += "<td>" + x.elements[i].value + "</td>";
        //Adds a <td> tag for the group and person
    }

    document.getElementById('row' + rowNum).innerHTML = text;
    //Adds a new row to the table with the contents of the input fields

    document.getElementById("group").value = "";
    //Clears the 'group' input field

    document.getElementById("person").value = "";
    //Clears the 'person' input field

    rowNum++;
}

let count = 0;

function assign() {

    toggle1();

    document.getElementById("newTable").innerHTML += "<table id = table2 class = \"table table-striped table-hover table-responsive table-bordered\"></table>";
    document.getElementById("table2").innerHTML += "<tr><th>Group</th><th>Person</th><th>To Whom They Gift</th></tr>";

    for (let i = 0; i < pickers.length; i++) {
        count += pickers[i].length;
    }

    while (pickNum < count) {

        let groupPick1 = pickers[Math.floor(Math.random() * pickers.length)];
        //Chooses a random group
        
        let groupPick2 = pickers[Math.floor(Math.random() * pickers.length)];
        //Chooses a random groupconsole.log(groupPick2);
        
        if (groupPick1 !== groupPick2) {
            personPick1 = groupPick1[Math.floor(Math.random() * groupPick1.length)];
            //Picks a random person from the first chosen group
            
            personPick2 = groupPick2[Math.floor(Math.random() * groupPick2.length)];
            //Picks a random person from the second chosen group

            if (pickNum == 0) {
                trashCan1.push(personPick1);
                trashCan2.push(personPick2);
                document.getElementById("table2").innerHTML += "<tr id = tRow" + pickNum + "></tr>";
                document.getElementById("tRow" + pickNum).innerHTML += "<td>" + groupPick1 + "</td>" + "<td>" + personPick1 + "</td>" + "<td>" + personPick2 + "</td>";
                pickNum++; 
            }
            
            else if (trashCan1.some(checkPerson1) == false && trashCan2.some(checkPerson2) == false) {
                trashCan1.push(personPick1);
                trashCan2.push(personPick2);
                document.getElementById("table2").innerHTML += "<tr id = tRow" + pickNum + "></tr>";
                document.getElementById("tRow" + pickNum).innerHTML += "<td>" + groupPick1 + "</td>" + "<td>" + personPick1 + "</td>" + "<td>" + personPick2 + "</td>";
                pickNum++;   
            }
            
        }
}

    let remove = document.getElementById("assign");
    remove.remove();

}