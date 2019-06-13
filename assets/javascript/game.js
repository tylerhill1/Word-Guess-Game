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

    
    return currentWord;
}

var currentWord = newWord();
console.log(currentWord);
var displayedWord = []

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
    var correctLetterCounter = 0;
    // document.getElementById("currentWord").innerHTML = "";

    console.log(currentWord.length);
    for(i=0; i<currentWord.length; i++) {
        var correctLetter = currentWord.charAt(i);
        console.log("correct letter: " + correctLetter);
        console.log("letter: " + letter);
        
        // if(letter === correctLetter) {
        //     var test = i*2;
        //     console.log("test: " + test);
        //     var dashesWord = document.getElementById("currentWord").innerHTML;
        //     console.log(dashesWord);
        //     var letterInQuestion = dashesWord.charAt(test);
        //     console.log(letterInQuestion);

        //     var res = dashesWord.replace(letterInQuestion,letter);
        //     console.log(res);
        //     document.getElementById("currentWord").innerHTML = res;
        //     // word.replace(word.charAt(i*2),letter);
        //     // console.log(word);
        //     // document.getElementById("currentWord").innerHTML = word;
        //     correctLetterCounter++;
        // }

        if(letter === correctLetter) {
            spliceArray(i, letter);
        }
    }
    displayNewWord();
}

