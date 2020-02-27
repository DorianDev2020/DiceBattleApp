"use strict"
var POne;
var PTwo;
var PThree;
var PFour;
var PFive;
var PSix;
var PSeven;
var PEight;
var PNine;
var PTen;

var counter;

var playerArray = [player1, player2, player3, player4, player5, player6, player7, player8, player9, player10];

function startGame(){
    POne = {value: 0, name: "HighNoon Yasuo"};
    PTwo = {value: 0, name: "HighNoon Caitlyn"};
    PThree = {value: 0, name: "HighNoon Thresh"};
    PFour = {value: 0, name: "HighNoon Allistar"};
    PFive = {value: 0, name: "HighNoon Hecarim"};
    PSix = {value: 0, name: "Project: Yi"};
    PSeven = {value: 0, name: "Project: Vi"};
    PEight = {value: 0, name: "Project: Warwick"};
    PNine = {value: 0, name: "Project: Zed"};
    PTen = {value: 0, name: "Project: Jinx"};

    counter = 0;

for (let i = 0; i < playerArray.length; i++){
    document.getElementById(i).innerHTML = " ";
    document.getElementById("Rounds").innerHTML = " ";
    document.getElementById(i + "D").innerHTML = " ";
}


function playRound(){
if (counter === 5){
    let winner = finalRound(playerArray);
    counter++;
    alert("Game's Over, Partner! " + winner.name + " Won The Draw, Good Shooting. ");
}

else{
    if (counter < 6){
        fullRound(playerArray);
        counter++;
    }
}
document.getElementById("Rounds").innerHTML = "Round: " + counter;
}

function fullRound(array){
for (let i = 0; i < array.length; i++){
    if (array[i].value === -1){
        document.getElementById(i).innerHTML = " ";
        document.getElementById(i + "D").innerHTML = " ";
    }
    else{
        array[i].value = rollDice();
        if (array[i].value > 0 && i < 10)
        {
                document.getElementById(i).innerHTML = array[i].name;
                document.getElementById(i + "D").innerHTML = array[i].value;
                
        }
    }
}
let playersRemoved = comparePlayers(array);
}

function checkDiceRoll(roll){
if (roll > 0){
    return roll;
}
}

function rollDice(){
let player = Math.round((((Math.random() * 4) + 1) + ((Math.random() * 6) + 1) + ((Math.random() * 8) + 1) + ((Math.random() * 10) + 1) + ((Math.random() * 12) + 1) + ((Math.random() * 20) + 1)));
return player;
}

function lastRound(array){
array[0].value = lastRoundRolls();
array[1].value = lastRoundRolls();
if (array[0].value === array[1].value){
    lastRound(array);
}
let winner;
if (array[0].value > array[1].value){
    winner = array[0];
}
else if (array[0].value < array[1].value){
    winner = array[1];
}
return winner;
}

function comparePlayers(players){
players.sort(function(a, b) {return b.value-a.value});
if (counter > -1 && counter < 3){
    players[(players.length - ((counter * 2) + 1))].value = -1;
    players[(players.length - ((counter * 2) + 2))].value = -1;
}
else if (counter == 3){
    players[(players.length - ((counter * 2) + 1))].value = -1;
}
else if (counter == 4){
    players[(players.length - (counter * 2))].value = -1;
    document.getElementById(2).innerHTML = " ";
    document.getElementById(2 + "d").innerHTML = " ";
}
else {
    players[(players.length - (counter + 1))].value = -1;
}
return players;
}

function lastRoundRolls(){
let firstRand = Math.round(Math.random() * 20);
let secondRand = Math.round(Math.random() * 20);
let thirdRand = Math.round(Math.random() * 20);
let fourthRand = Math.round(Math.random() * 20);
let d20 = [firstRand, secondRand, thirdRand, fourthRand]
var d4 = Math.round(Math.random() * 3);
let final = d20[d4];
return final;}
}