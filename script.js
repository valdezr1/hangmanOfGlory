const randomWordArr = ["snowflake", "santa", "reindeer", "fruitcake", "eggnog", "presents", "jolly", "mistletoe" ]

let randomWord = randomWordArr[Math.floor(Math.random() * randomWordArr.length)]

let str;
let count = 0;
let answerArr = [];
let guessArr = [];
let goodGuess = false;
let end = false;

function initialize(){
  for(let i = 0; i < randomWord.length; i++){
    answerArr[i] = "_"
  }

  str = answerArr.join(" ");
  document.getElementById("answer").innerHTML = str;
}

function userGuess(){
  if(end == true){
    return;
  }
  let guess = document.getElementById("guess").value;
  if (guess.length > 0){
    if(guess.length > 1){
      if(guess === randomWord){
        document.getElementById("gameOver").innerHTML = "Answer: " + randomWord +" | You Win!";
      }
      else{
        document.getElementById("gameOver").innerHTML = "Answer: " + randomWord +" | Good game, but better luck next time";
      }
      end = true;
      return;
    }
    for(let i = 0; i <randomWord.length; i++){
      if(randomWord[i] === guess){
        answerArr[i] = guess;
        goodGuess = true;
      }
    }
    if(goodGuess === false){
      guessArr[count] = guess;
      count++
    }
    goodGuess = false;
    document.getElementById("counter").innerHTML = "Number of Bad Guesses: " + count;
    document.getElementById("wrongGuesses").innerHTML = guessArr.join(" ");
    document.getElementById("answer").innerHTML = answerArr.join(" ");
    if(count > randomWord.length){
      document.getElementById("gameOver").innerHTML = "Answer: " + randomWord +" | Good game, but better luck next time";
      end = true;
    }
  }
}
