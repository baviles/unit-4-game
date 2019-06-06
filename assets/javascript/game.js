//Start game
// Create a random number to match.
$(document).ready(function () {
  var Random =0 
  

  ///player clicks on a crystal, generate random number.
  var number1 = 0;
  var number2 = 0;
  var number3 = 0;
  var number4 = 0;

  var total = 0;
  ///Total wins
  var total = 0;

  ///Total loses
  var losses = 0;
  var wins = 0;

  
  ///The game restarts whenever the player wins or loses

  function reset() {
    Random = Math.floor(Math.random() * 120 + 19);
    total = 0;
    console.log("Random");
    $(".matchScore").html(Random);
    number1 = Math.floor(Math.random() * 12 + 1);
    number2 = Math.floor(Math.random() * 12 + 1);
    number3 = Math.floor(Math.random() * 12 + 1);
    number4 = Math.floor(Math.random() * 12 + 1);
    $("#totalScore").html(total);
    $("#wins").html(wins);
    $("#lose").html(losses);
    

    // winner()
    // loser()
    // ifWins()
  }

  function winner() {
    alert("congrats, you won");
    wins++;
    $("#wins").html(wins);
    reset()
}
  function loser() {
    alert("you lost, OMG I'm so sorry");
    losses++;
    $("#lose").html(losses);
    reset();
    console.log(losses)
  }

  function ifWins() {
    if (total === Random) {
      winner();
    } else if (total > Random) {
      loser();
    }
    
  }


  $(".greencrystal").on("click", function () {
    total = total + number1;
    console.log("Green Crystal " + total);
    $("#totalScore").html(total);
    // if (total==Random){
    //   winner();
    // } else if(total>Random){
    // loser ();
    // }
    // reset()
    ifWins()

  })


  $(".bluecrystal").on("click", function () {
    total = total + number2;
    console.log("Blue Crystal=" + total);
    $("#totalScore").html(total);
    // if (total==Random){
    //   winner();
    // } else if(total>Random){
    // loser ();
    // }
    // reset()
    ifWins()


  })

  $(".redcrystal").on("click", function () {
    // var redcrystal = total
    total = total + number3;
    console.log("Red Crystal=" + total);
    $("#totalScore").html(total);
    // if (total==Random){
    //   winner();
    // } else if(total>Random){
    // loser ();
    // }
    // reset()
    ifWins()

  })

  $(".yellowcrystal").on("click", function () {
    total = total + number4;
    console.log("Yellow Crystal=" + total);
    $("#totalScore").html(total);
    // if (total==Random){
    //   winner();
    // } else if(total>Random){
    // loser ();
    // }
    // reset()
    ifWins()

  })

  reset()

});

// Jasons todo:
// first we need to condence the ifWins function
// Console log each individual number
// Pass functions in reset to make it work.

