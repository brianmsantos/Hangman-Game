//var should be nouns 
//create more functions
//functions should be verbs/actions
//function declaration up to 3-4 params best practice 
//function functionName(params){
//return "stuff"
//}

//start game 

function gameStart(params) {

}

//make the game board

//create an array of words to be used 
var foods = ["Burrito", "Burgers", "Ramen", "Chicken Wings"];

var answerArray = [];

for (var i = 0; i < foods.length; i++) {
    answerArray[i] = "_";
}

var remainingGuesses = 9;

//generate a random word DONE
function random(arr) {
    var randomNumber = Math.floor(Math.random() * arr.length);
    return arr[randomNumber]
}
console.log(random(foods))
console.log(random(foods))
console.log(random(["dogs", "trees", 8, 12, 7]))

//set lives or guesses left 

function lives(param) {

}

//user inputs, clicks on key events


//check the input to see if it is in the hangman word