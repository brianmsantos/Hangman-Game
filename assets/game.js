//create an array words to use, favorite foods 
var foods = ["Burrito", "Burgers", "Ramen", "Chicken Wings"];

// //create random food from array
// var randomNumber = Math.random() * foods.length;

// //spit out from list into one food 
// var food = random(foods)
//Choose random word from list of words in the array. 
//var randomFood = foods[Math.floor(Math.random() * foods.length)]


function random(arr) {
    var randomNumber = Math.floor(Math.random() * arr.length);
    return arr[randomNumber]

}

console.log(random(foods))
console.log(random(foods))
console.log(random(["dogs", "trees", 8, 12, 7]))


//Once generator has chosen the random word then it will load the word 
//and provide the number of spots as a hint to the user. 



//Once generator has chosen the random word then it will load the word 
//and provide the number of spots as a hint to the user. 
//id="word-blanks" is where this will be stored 
//letters will load into blank spots and user guesses will decease by 1 --



//Click a letter to start, once the letter is chosen it will either 
//generate it in the spot where it belongs or it will make the guess counter decrease. 
//Should this be using the innerHTML?



//Make sure that once a letter is used it cannot be used again and count against you as a guess. 



//You should be able to guess the word by typing it out.