var words = [
    "rowing",
    "curling",
    "tennis",
    "gymnastics",
    "badmitton",
    "basketball",
    "volleyball",
    "fencing",
    "rugby",
    "cycling",
    "weightlifting",
    "luge",
    "skeleton",
]
var lengthOfGame = words.length;
var tracker = 0;
var wins = 0;
var incorrectGuessesRemaining = 6;
var incorrectGuesses = [];

var correctLetterCounter;

console.log(words);

function newWord() {
    var min = 0;
    var max = words.length - 1;
    
    // generates random number
    function generateRandomInteger (min , max) {
        return Math.floor(min + Math.random()*(max + 1 - min))
    }

    // pulls the element with that index from the array
    var number = generateRandomInteger(min, max);
    var currentWord = words[number];
    words.splice(number, 1);
    console.log("new array: " + words);
    console.log(currentWord);

    correctLetterCounter = 0;
    return currentWord;
}

var currentWord = newWord();
console.log(currentWord);
var displayedWord = [];

function displayNewWord() {
    document.getElementById("currentWord").innerHTML = "";
    for(i=0; i<currentWord.length; i++) {
        document.getElementById("currentWord").innerHTML = document.getElementById("currentWord").innerHTML + displayedWord[i];   
    }
    return finalWord = document.getElementById("currentWord").innerHTML;
}
function displayWord() {
    // display the _ _ _ ... according to the number of letters in the word
    for (i=0; i<currentWord.length; i++) {
        displayedWord.push("_ ");
    }
    
    return finalWord = displayNewWord();
}

displayWord();

console.log("This is the current word: " + finalWord)

function spliceArray(x, y) {
    displayedWord.splice(x, 1, y);
  }

// letter checking function
document.onkeyup = function(event) {
    
    var letter = event.key.toLowerCase();
    if (letter != "a" && letter != "b" && letter != "c" && letter != "d" && letter != "e" && letter != "f" && letter != "g" && letter != "h" && letter != "i" && letter != "j" && letter != "k" && letter != "l" && letter != "m" && letter != "n" && letter != "o" && letter != "p" && letter != "q" && letter != "r" && letter != "s" && letter != "t" && letter != "u" && letter != "v" && letter != "w" && letter != "x" && letter != "y" && letter != "z") {
        return;
    }
    var j = 0;
    var k = 0;
    console.log("Does this work? " + currentWord);

    for(i=0; i<currentWord.length; i++) {
        
        if(letter === currentWord.charAt(i)) {
            k++;
        }
        
    }

    if(k===0) {
        for(i=0; i<incorrectGuesses.length; i++) {
            if(letter === incorrectGuesses[i]) {
                console.log("TEST");
                return;
            }
        }
        incorrectGuessesRemaining--;
        document.getElementById("guesses").innerHTML = incorrectGuessesRemaining;
        incorrectGuesses.push(letter);

        var check = document.getElementById("guessedLetters").innerHTML;
        if(check === "") {
            document.getElementById("guessedLetters").innerHTML = letter;
        }
        else {
            document.getElementById("guessedLetters").innerHTML = document.getElementById("guessedLetters").innerHTML + ", " + letter;
        }

        if(incorrectGuessesRemaining==0) {
            incorrectGuesses = [];
            document.getElementById("guessedLetters").innerHTML = "";
            incorrectGuessesRemaining = 6;
            document.getElementById("guesses").innerHTML = incorrectGuessesRemaining;
            displayedWord = [];
            if(words.length>0) {
                currentWord = newWord();
                // var currentWord = newWord();
                displayWord();
                // console.log(currentWord);
                return;
            }
            else {
                document.getElementById("currentWord").innerHTML = "There are no more words. Thank you for playing!";
                return;
            }
        }
    }
    
    for(i=0; i<displayedWord.length; i++) {
        
        if((letter + " ") === displayedWord[i]) {
            j++;
        }
        
    }
    console.log(currentWord.length);
    
    if (j === 0) {

        for(i=0; i<currentWord.length; i++) {
        var correctLetter = currentWord.charAt(i);
        console.log("correct letter: " + correctLetter);
        console.log("letter: " + letter);

        if(letter === correctLetter) {
            spliceArray(i, letter + " ");
            correctLetterCounter++;
        }
    }
    console.log("correct letters:" + correctLetterCounter);
    console.log(wins);
    displayNewWord();
    }

    console.log("displayed word length: " + displayedWord.length)

    if(correctLetterCounter === displayedWord.length) {
        if(words.length>0) {
            incorrectGuesses = [];
            document.getElementById("guessedLetters").innerHTML = "";
            incorrectGuessesRemaining = 6;
            document.getElementById("guesses").innerHTML = incorrectGuessesRemaining;
            displayedWord = [];
        currentWord = newWord();
        // var currentWord = newWord();
        displayWord();
        // console.log(currentWord);
        wins++;
        console.log(wins);
        document.getElementById("wins").innerHTML = wins;

        }
        else {
            document.getElementById("currentWord").innerHTML = "There are no more words. Thank you for playing!";
        }
        }
}

function playAudio(url) {
    var a = new Audio(url);
    a.play();
    document.getElementById("btn1").disabled = true; 
  }

