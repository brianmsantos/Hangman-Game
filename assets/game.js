let words = ["tamales", "burgers", "fries", "tacos", "pizza"];
let answers = [];
let numBlanks = 0;
let chosenWord = "";
let blanksAndSuccesses = [];
let lettersInChosenWord = [];
let wrongGuesses = [];

// Game counters
let winCount = 0;
let lossCount = 0;
let guessesLeft = 9;

// functions
function gameStart() {
    chosenWord = words[Math.floor(Math.random() * words.length)];
    lettersInChosenWord = chosenWord.split("");
    numBlanks = lettersInChosenWord.length;

    // Reset
    guessesLeft = 9;
    wrongGuesses = [];
    blanksAndSuccesses = [];
    // pop blanks and successes with right number of blanks
    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push("_");
    }
    // Change HTML to reflect 
    document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ")
    document.getElementById("guesses-left").innerHTML = guessesLeft;
    document.getElementById("win-counter").innerHTML = winCount;
    document.getElementById("loss-counter").innerHTML = lossCount;

    // Testing
    console.log(chosenWord);
    console.log(lettersInChosenWord);
    console.log(numBlanks);
    console.log(blanksAndSuccesses);

    function checkLetters(letter) {
        // check to see if letter exists 
        let isLetterInWord = false;
        for (let i = 0; i < numBlanks; i++) {
            if (selectedWord[i] == letter) {
                isLetterInWord = true;
            }
        }
        // check where in word letter exists, then pop out blanks and scueesses array.
        if (isLetterInWord) {
            for (let i = 0; i < numBlanks; i++) {
                if (selectedWord[i] = letter) {
                    blanksAndSuccesses[i] = letter;
                }
            }
        }
        // letter not found in word
        else {
            wrongGuesses.push(letter);
            guessesLeft--
        }
        // testing
        console.log(blanksAndSuccesses);
    }

}

function roundComplete() {
    console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left" + guessesLeft);
}

// This is when the game starts 
gameStart()

// onclick functions 
document.onkeyup = function(event) {
    let letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();
    // Testing
    console.log(letterGuessed);
}