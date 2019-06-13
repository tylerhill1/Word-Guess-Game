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
]

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
    console.log(currentWord);

    // display the _ _ _ ... according to the number of letters in the word
    for (i=0; i<currentWord.length; i++) {
        document.getElementById("currentWord").innerHTML = document.getElementById("currentWord").innerHTML + "_ "
    }

    return currentWord;
}

var currentWord = newWord();
console.log("This is the current word: " + currentWord)

// letter checking function
document.onkeyup = function(event) {

    var letter = event.key.toLowerCase();
    var correctLetterCounter = 0;

}