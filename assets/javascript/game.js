


//creates the class Crystalgame where contais all of the game methods and properties
class crystalGame {

    // the contructor function starts all the variables and call for the secondary function 
    //to fill in the array with the 4 different numbers between 1 to 12 
    // and the number to match between 18 and 120
      constructor() {
    // creates an array (arrCrystals) , to hold the 4 random values for the crystals
        this.arrCrystals = [];
    // creates the variable to store the number to match
        this.numberToMatch = 0;
    // create the var currentNumber that will hold the sum of numbers clicked by the user
        this.currentNumber = 0;
    // creates the var to store how many times the player wins
        this.wins = 0;
    // creates the var to store how many times the player lost
        this.losses = 0;
    // call a function that randomizes 4 numbers for the crystals.click event
        this.randomizeNumersForCrystals();
    // randomizes a number for the player to  match
        this.randomizeNumerToMatch();
      }
    // this function controls the logic of the game 
    
      gameLogic() {
    // checks to see if the player current sum of numbers match the (number to much var)
        if (this.currentNumber === this.numberToMatch) {
    // if yes alerts to the player he won and  call out the reset() function with a "win"  argument
    //to
    // update the score , reset the numbers and start a new game
          alert("You Win!!!");
          this.reset("win");
        } else if (this.currentNumber > this.numberToMatch) {
    // if yes alerts to the player he won and  call out the reset() function with a "loss"  argument
    //to
    // update the score , reset the numbers and start a new game
          alert("You Lose!!!");
          this.reset("loss");
        }
      }
    // function to reset the game and update score 
      reset(outcome) {
        if (outcome === "loss") {
          this.losses++;
          this.arrCrystals = [];
          this.currentNumber = 0;
          $("#losses").text(this.losses);
          $("#currentsum").text(this.currentNumber);
          this.randomizeNumersForCrystals();
          this.randomizeNumerToMatch();
        } else if (outcome === "win") {
          this.wins++;
          this.arrCrystals = [];
          this.currentNumber = 0;
          $("#wins").text(this.wins);
          $("#currentsum").text(this.currentNumber);
          this.randomizeNumersForCrystals();
          this.randomizeNumerToMatch();
        }
      }
    // function to randomize the numbers for the crystals
    // used the while () with if to make sure 
    // the array does not contain repeated numbers
    // by checking the array with indexOf function 
    // if not found (returns -1 ) then add the number.
      randomizeNumersForCrystals() {
        while (this.arrCrystals.length < 4) {
          var curRndNumber = Math.floor(Math.random() * 12 + 1);
          if (this.arrCrystals.indexOf(curRndNumber) === -1) {
            this.arrCrystals.push(curRndNumber);
          }
        }
        console.log(this.arrCrystals);
      }
    //function to randomize the number to mach 
      randomizeNumerToMatch() {
        this.numberToMatch = Math.floor(Math.random() * (120 - 18) + 18);
        $("#number_to_match").text(this.numberToMatch);
      }
      // function that adds up the numbers in the crystals cicked by the player
      // requires a argument that is equivalent to the crystal number the player clicks 
      // from left to right in the html view
      //and then call out the logic function 
      //to check if the game is won or lost 
      // if neither just carries on.
      addToCurrentNumber(gemNumberClicked) {
        if (gemNumberClicked === 1) {
          this.currentNumber += this.arrCrystals[0];
          $("#currentsum").text(this.currentNumber);
        } else if (gemNumberClicked === 2) {
          this.currentNumber += this.arrCrystals[1];
          $("#currentsum").text(this.currentNumber);
        } else if (gemNumberClicked === 3) {
          this.currentNumber += this.arrCrystals[2];
          $("#currentsum").text(this.currentNumber);
        } else if (gemNumberClicked === 4) {
          this.currentNumber += this.arrCrystals[3];
          $("#currentsum").text(this.currentNumber);
        }
        this.gameLogic();
      }
    }
    
    $(document).ready(function() {
    
    // creates the var containing the new game class 
      var myGame = new crystalGame();
    // monitors the click event for the four crystals 
    // and call out the function  addToCurrentNumber() with the respective value
      $("#gem1").click(function() {
        myGame.addToCurrentNumber(1);
      });
      $("#gem2").click(function() {
        myGame.addToCurrentNumber(2);
      });
      $("#gem3").click(function() {
        myGame.addToCurrentNumber(3);
      });
      $("#gem4").click(function() {
        myGame.addToCurrentNumber(4);
      });
    });
    