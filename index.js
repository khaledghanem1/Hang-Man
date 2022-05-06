//Guess the person Im thinking of
<p>Guess the famous Person I'm thinking off</p>
//Document on key up
document.onkeyup =function(event){
    var userChoice;
}
// HTML telling them what to do
//<h1>Press any key to start</h1>

// Variables
   var  userChoice;
   var  listOfPeople = ["rihanna", "drake", "vandam"]
   var  computerguess; 
   var  Wins = 0;
   var  Losses = 0;
   var  GuessesLeft =15;


    // if the word is "rihanna" replace with -------.
    let text = "rihanna";
    let result = text.replace(/rihanna/g, "-------");

    // Array of all of the people first
    array=["rihanna", "drake", "vandam"]

    // Have the computer pick one of the people (math random)
    document.onkeyup = function(event) {
        var userChoice = event.key;
    computerGuess = listOfPeople[Math.floor(Math.random() * listOfPeople.length)];

    // Once the person is picked, .replace() or loop through and replace each letter with -
    for (let index = 0; index < listOfPeople.length; index++) {
        const element = listOfPeople[index];
        
    }    
// Check if the users guess is one of the letters in the name
if (userChoice === computerguess){
    console.log("user got one letter right")

}

// If its the letter, replace - with the letter

// If they win or lose, restart the game
    }
