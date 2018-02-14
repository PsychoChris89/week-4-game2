$(document).ready(function() {

    // ==================================
    // INITIAL VARIABLES AND THEIR VALUES
    // ==================================
    
    // character arrays have four values with the following meanings
    // [0] shows which row the character is currently in
    // [1] shows whether the character is visible
    // [2] shows whether shows the character's health Pikachuints
    // [3] shows the character's attack Pikachuwer
    // [4] shows the character's counter attack Pikachuwer
    var PikachuArray = ["1", true, 120, 8, 8, "Pikachu"];
    var SquirtleArray = ["1", true, 100, 5, 5, "Squirtle"];
    var CharmanderArray = ["1", true, 150, 20, 20, "Charmander"];
    var BulbasourArray = ["1", true, 180, 25, 25, "Bulbasour"];
    // gameOver is a boolean that shows whether the game is over or begun
    var isGameOver = false;
    var isGameBegun = false;
    // playerName and defenderName record which character is playing which role
    var playerName = "";
    var defenderName = "";
    // characterClicked holds which character is being clicked
    var characterClicked = "";
    // gamePausedForAnotherDefender is when waiting to pick another defender
    var gamePausedForAnotherDefender = false;
    
    // =====================
    // FUNCTIONS COME SECOND
    // =====================
    
    // console log function for debugging
    function consoleLogVariables() {
        console.log("PikachuArray: " + PikachuArray);
        console.log("SquirtleArray: " + SquirtleArray);
        console.log("CharmanderArray: " + CharmanderArray);
        console.log("BulbasourArray: " + BulbasourArray);
        console.log("isGameOver: " + isGameOver + " isGameBegun: " + isGameBegun);
        console.log("playerName: " + playerName + " defenderName: " + defenderName);
        console.log("gamePausedForAnotherDefender: " + gamePausedForAnotherDefender);
        console.log("============================================")
    }
    
    // function to update the game board
    function updateGameBoard() {
        // go through each row
        // and disply the tile if it is in that row and visible
        // otherwiise make it invisible
        // do this by targeting the id for that particular div
        // row 1:	
        if (PikachuArray[0] == "1" && PikachuArray[1] == true) {
            $("#rowOnePikachu").css("display", "inline-block")
        } else {
            $("#rowOnePikachu").css("display", "none");
        }
        if (SquirtleArray[0] == "1" && SquirtleArray[1] == true) {
            $("#rowOneSquirtle").css("display", "inline-block")
        } else {
            $("#rowOneSquirtle").css("display", "none");
        }
        if (CharmanderArray[0] == "1" && CharmanderArray[1] == true) {
            $("#rowOneCharmander").css("display", "inline-block")
        } else {
            $("#rowOneCharmander").css("display", "none");
        }
        if (BulbasourArray[0] == "1" && BulbasourArray[1] == true) {
            $("#rowOneBulbasour").css("display", "inline-block")
        } else {
            $("#rowOneBulbasour").css("display", "none");
        }
        // row 2:
        if (PikachuArray[0] == "2" && PikachuArray[1] == true) {
            $("#rowTwoPikachu").css("display", "inline-block")
        } else {
            $("#rowTwoPikachu").css("display", "none");
        }
        if (SquirtleArray[0] == "2" && SquirtleArray[1] == true) {
            $("#rowTwoSquirtle").css("display", "inline-block")
        } else {
            $("#rowTwoSquirtle").css("display", "none");
        }
        if (CharmanderArray[0] == "2" && CharmanderArray[1] == true) {
            $("#rowTwoCharmander").css("display", "inline-block")
        } else {
            $("#rowTwoCharmander").css("display", "none");
        }
        if (BulbasourArray[0] == "2" && BulbasourArray[1] == true) {
            $("#rowTwoBulbasour").css("display", "inline-block")
        } else {
            $("#rowTwoBulbasour").css("display", "none");
        }
        // row 3:
        if (PikachuArray[0] == "3" && PikachuArray[1] == true) {
            $("#rowThreePikachu").css("display", "inline-block")
        } else {
            $("#rowThreePikachu").css("display", "none");
        }
        if (SquirtleArray[0] == "3" && SquirtleArray[1] == true) {
            $("#rowThreeSquirtle").css("display", "inline-block")
        } else {
            $("#rowThreeSquirtle").css("display", "none");
        }
        if (CharmanderArray[0] == "3" && CharmanderArray[1] == true) {
            $("#rowThreeCharmander").css("display", "inline-block")
        } else {
            $("#rowThreeCharmander").css("display", "none");
        }
        if (BulbasourArray[0] == "3" && BulbasourArray[1] == true) {
            $("#rowThreeBulbasour").css("display", "inline-block")
        } else {
            $("#rowThreeBulbasour").css("display", "none");
        }
        // row 4:
        if (PikachuArray[0] == "4" && PikachuArray[1] == true) {
            $("#rowFourPikachu").css("display", "inline-block")
        } else {
            $("#rowFourPikachu").css("display", "none");
        }
        if (SquirtleArray[0] == "4" && SquirtleArray[1] == true) {
            $("#rowFourSquirtle").css("display", "inline-block")
        } else {
            $("#rowFourSquirtle").css("display", "none");
        }
        if (CharmanderArray[0] == "4" && CharmanderArray[1] == true) {
            $("#rowFourCharmander").css("display", "inline-block")
        } else {
            $("#rowFourCharmander").css("display", "none");
        }
        if (BulbasourArray[0] == "4" && BulbasourArray[1] == true) {
            $("#rowFourBulbasour").css("display", "inline-block")
        } else {
            $("#rowFourBulbasour").css("display", "none");
        }
        // also update the health by targeting the health div class
        $(".PikachuHealth").html("Health: " + PikachuArray[2]);
        $(".SquirtleHealth").html("Health: " + SquirtleArray[2]);
        $(".CharmanderHealth").html("Health: " + CharmanderArray[2]);
        $(".BulbasourHealth").html("Health: " + BulbasourArray[2]);
    }
    
    // function to select player when tile is clicked and
    // we don't have a player nor a defender
    function selectPlayer() {
        if (playerName == "" && defenderName == "" && isGameOver == false) {
            playerName = characterClicked;
            switch (playerName) {
                case "Pikachu":
                    PikachuArray[0] = "2";
                    SquirtleArray[0] = "3";
                    CharmanderArray[0] = "3";
                    BulbasourArray[0] = "3";
                    break;
                case "Squirtle":
                    PikachuArray[0] = "3";
                    SquirtleArray[0] = "2";
                    CharmanderArray[0] = "3";
                    BulbasourArray[0] = "3";
                    break;
                case "Charmander":
                    PikachuArray[0] = "3";
                    SquirtleArray[0] = "3";
                    CharmanderArray[0] = "2";
                    BulbasourArray[0] = "3";
                    break;
                case "Bulbasour":
                    PikachuArray[0] = "3";
                    SquirtleArray[0] = "3";
                    CharmanderArray[0] = "3";
                    BulbasourArray[0] = "2";
                    break;
            }
            characterClicked = "";
        }
    }
    
    // function to select defender when tile is clicked and
    // we already have a player but not a defender
    function selectDefender() {
        if (((playerName != "" && defenderName == "") || gamePausedForAnotherDefender == true) && isGameOver == false && characterClicked!=playerName) {
            defenderName = characterClicked;
            switch (defenderName) {
                case "Pikachu":
                    PikachuArray[0] = "4";
                    isGameBegun = true;
                    gamePausedForAnotherDefender = false;
                    break;
                case "Squirtle":
                    SquirtleArray[0] = "4";
                    isGameBegun = true;
                    gamePausedForAnotherDefender = false;
                    break;
                case "Charmander":
                    CharmanderArray[0] = "4";
                    isGameBegun = true;
                    gamePausedForAnotherDefender = false;
                    break;
                case "Bulbasour":
                    BulbasourArray[0] = "4";
                    isGameBegun = true;
                    gamePausedForAnotherDefender = false;
                    break;
            };
            characterClicked = "";
            $("#gameMessages").html("");
        }
        updateGameBoard();
    }
    
    // function to see if player or defender have lost
    function havePlayerOrDefenderLost() {
        // check if player or defender have lost
        if (playerName == "Pikachu" && PikachuArray[2] <= 0) {
            // the player is Pikachu and his health <= 0
            console.log("player Pikachu died");
            // call the user player lost function
            playerLost();
        } else if (playerName == "Squirtle" && SquirtleArray[2] <= 0) {
            // the player is Squirtle and his health <= 0
            console.log("player Squirtle died");
            // call the user player lost function
            playerLost();
        } else if (playerName == "Charmander" && CharmanderArray[2] <= 0) {
            // the player is Charmander and his health <= 0
            console.log("player Charmander died");
            // call the user player lost function
            playerLost();
        } else if (playerName == "Bulbasour" && BulbasourArray[2] <= 0) {
            // the player is Bulbasour and his health <= 0
            console.log("player Bulbasour died");
            // call the user player lost function
            playerLost();
        } else if (defenderName == "Pikachu" && PikachuArray[2] <= 0) {
            // the defender is Pikachu and his health <= 0
            console.log("defender Pikachu died");
            PikachuArray[1] = false;
            if (gamePausedForAnotherDefender == false) {
                $("#gameMessages").html("You have defeated " + defenderName + ".<br>You can choose to fight another enemy.");
            }
            gamePausedForAnotherDefender = true;
            consoleLogVariables();
        } else if (defenderName == "Squirtle" && SquirtleArray[2] <= 0) {
            // the defender is Squirtle and his health <= 0
            console.log("defender Squirtle died");
            SquirtleArray[1] = false;
            if (gamePausedForAnotherDefender == false) {
                $("#gameMessages").html("You have defeated " + defenderName + ".<br>You can choose to fight another enemy.");
            }
            gamePausedForAnotherDefender = true;
        } else if (defenderName == "Charmander" && CharmanderArray[2] <= 0) {
            // the defender is Charmander and his health <= 0
            console.log("defender Charmander died");
            CharmanderArray[1] = false;
            if (gamePausedForAnotherDefender == false) {
                $("#gameMessages").html("You have defeated " + defenderName + ".<br>You can choose to fight another enemy.");
            }
            gamePausedForAnotherDefender = true;
        } else if (defenderName == "Bulbasour" && BulbasourArray[2] <= 0) {
            // the defender is Bulbasour and his health <= 0
            console.log("defender Bulbasour died");
            BulbasourArray[1] = false;
            if (gamePausedForAnotherDefender == false) {
                $("#gameMessages").html("You have defeated " + defenderName + ".<br>You can choose to fight another enemy.");
            }
            gamePausedForAnotherDefender = true;
        } else {
            // do nothing - continue
        }
    updateGameBoard();
    }
    
    // function that keeps track of Pikachuints during attacks
    function attackTracking() {
        // attack cycle of Pikachuints adjustment
        // only run if game has begun and it is not over
        if (isGameBegun == true && isGameOver != true && gamePausedForAnotherDefender == false) {
            switch (playerName) {
                case "Pikachu":
                    if (defenderName == "Squirtle") {
                        console.log("your attack: " + PikachuArray[3] + " counter recd: " + SquirtleArray[3]);
                        // player health decreases by defender's attack
                        PikachuArray[2] -= SquirtleArray[3];
                        // defender health decreases by player's attack
                        SquirtleArray[2] -= PikachuArray[3];
                        $("#gameMessages").html("You attacked " + defenderName + " for " + PikachuArray[3] + " damage. <br>" + defenderName + " attacked you back for " + SquirtleArray[3] + " damage");
                        // player's attack increases by their Pikachuwer level
                        PikachuArray[3] += PikachuArray[4];
                        console.log("your attack Pikachuwer: " + PikachuArray[3]);
                    } else if (defenderName == "Charmander") {
                        console.log("your attack: " + PikachuArray[3] + " counter recd: " + CharmanderArray[3]);
                        // player health decreases by defender's attack
                        PikachuArray[2] -= CharmanderArray[3];
                        // defender health decreases by player's attack
                        CharmanderArray[2] -= PikachuArray[3];
                        $("#gameMessages").html("You attacked " + defenderName + " for " + PikachuArray[3] + " damage. <br>" + defenderName + " attacked you back for " + CharmanderArray[3] + " damage");
                        // player's attack increases by their Pikachuwer level
                        PikachuArray[3] += PikachuArray[4];
                        console.log("your attack Pikachuwer: " + PikachuArray[3]);
                    } else if (defenderName == "Bulbasour") {
                        console.log("your attack: " + PikachuArray[3] + " counter recd: " + BulbasourArray[3]);
                        // player health decreases by defender's attack
                        PikachuArray[2] -= BulbasourArray[3];
                        // defender health decreases by player's attack
                        BulbasourArray[2] -= PikachuArray[3];
                        $("#gameMessages").html("You attacked " + defenderName + " for " + PikachuArray[3] + " damage. <br>" + defenderName + " attacked you back for " + BulbasourArray[3] + " damage");
                        // player's attack increases by their Pikachuwer level
                        PikachuArray[3] += PikachuArray[4];
                        console.log("your attack Pikachuwer: " + PikachuArray[3]);
                    } else {
                        console.log("error");
                    }
                    break;
                case "Squirtle":
                    if (defenderName == "Pikachu") {
                        console.log("your attack: " + SquirtleArray[3] + " counter recd: " + PikachuArray[3]);
                        // player health decreases by defender's attack
                        SquirtleArray[2] -= PikachuArray[3];
                        // defender health decreases by player's attack
                        PikachuArray[2] -= SquirtleArray[3];
                        $("#gameMessages").html("You attacked " + defenderName + " for " + SquirtleArray[3] + " damage. <br>" + defenderName + " attacked you back for " + PikachuArray[3] + " damage");
                        // player's attack increases by their Pikachuwer level
                        SquirtleArray[3] += SquirtleArray[4];
                        console.log("your attack Pikachuwer: " + SquirtleArray[3]);
                    } else if (defenderName == "Charmander") {
                        console.log("your attack: " + SquirtleArray[3] + " counter recd: " + CharmanderArray[3]);
                        // player health decreases by defender's attack
                        SquirtleArray[2] -= CharmanderArray[3];
                        // defender health decreases by player's attack
                        CharmanderArray[2] -= SquirtleArray[3];
                        $("#gameMessages").html("You attacked " + defenderName + " for " + SquirtleArray[3] + " damage. <br>" + defenderName + " attacked you back for " + CharmanderArray[3] + " damage");
                        // player's attack increases by their Pikachuwer level
                        SquirtleArray[3] += SquirtleArray[4];
                        console.log("your attack Pikachuwer: " + SquirtleArray[3]);
                    } else if (defenderName == "Bulbasour") {
                        console.log("your attack: " + SquirtleArray[3] + " counter recd: " + BulbasourArray[3]);
                        // player health decreases by defender's attack
                        SquirtleArray[2] -= BulbasourArray[3];
                        // defender health decreases by player's attack
                        BulbasourArray[2] -= SquirtleArray[3];
                        $("#gameMessages").html("You attacked " + defenderName + " for " + SquirtleArray[3] + " damage. <br>" + defenderName + " attacked you back for " + BulbasourArray[3] + " damage");
                        // player's attack increases by their Pikachuwer level
                        SquirtleArray[3] += SquirtleArray[4];
                        console.log("your attack Pikachuwer: " + SquirtleArray[3]);
                    } else {
                        console.log("error");
                    }
                    break;
                case "Charmander":
                    if (defenderName == "Pikachu") {
                        console.log("your attack: " + CharmanderArray[3] + " counter recd: " + PikachuArray[3]);
                        // player health decreases by defender's attack
                        CharmanderArray[2] -= PikachuArray[3];
                        // defender health decreases by player's attack
                        PikachuArray[2] -= CharmanderArray[3];
                        $("#gameMessages").html("You attacked " + defenderName + " for " + CharmanderArray[3] + " damage. <br>" + defenderName + " attacked you back for " + PikachuArray[3] + " damage");
                        // player's attack increases by their Pikachuwer level
                        CharmanderArray[3] += CharmanderArray[4];
                        console.log("your attack Pikachuwer: " + CharmanderArray[3]);
                    } else if (defenderName == "Squirtle") {
                        console.log("your attack: " + CharmanderArray[3] + " counter recd: " + SquirtleArray[3]);
                        // player health decreases by defender's attack
                        CharmanderArray[2] -= SquirtleArray[3];
                        // defender health decreases by player's attack
                        SquirtleArray[2] -= CharmanderArray[3];
                        $("#gameMessages").html("You attacked " + defenderName + " for " + CharmanderArray[3] + " damage. <br>" + defenderName + " attacked you back for " + SquirtleArray[3] + " damage");
                        // player's attack increases by their Pikachuwer level
                        CharmanderArray[3] += CharmanderArray[4];
                        console.log("your attack Pikachuwer: " + CharmanderArray[3]);
                    } else if (defenderName == "Bulbasour") {
                        console.log("your attack: " + CharmanderArray[3] + " counter recd: " + BulbasourArray[3]);
                        // player health decreases by defender's attack
                        CharmanderArray[2] -= BulbasourArray[3];
                        // defender health decreases by player's attack
                        BulbasourArray[2] -= CharmanderArray[3];
                        $("#gameMessages").html("You attacked " + defenderName + " for " + CharmanderArray[3] + " damage. <br>" + defenderName + " attacked you back for " + BulbasourArray[3] + " damage");
                        // player's attack increases by their Pikachuwer level
                        CharmanderArray[3] += CharmanderArray[4];
                        console.log("your attack Pikachuwer: " + CharmanderArray[3]);
                    } else {
                        console.log("error");
                    }
                    break;
                case "Bulbasour":
                    if (defenderName == "Pikachu") {
                        console.log("your attack: " + BulbasourArray[3] + " counter recd: " + PikachuArray[3]);
                        // player health decreases by defender's attack
                        BulbasourArray[2] -= PikachuArray[3];
                        // defender health decreases by player's attack
                        PikachuArray[2] -= BulbasourArray[3];
                        $("#gameMessages").html("You attacked " + defenderName + " for " + BulbasourArray[3] + " damage. <br>" + defenderName + " attacked you back for " + PikachuArray[3] + " damage");
                        // player's attack increases by their Pikachuwer level
                        BulbasourArray[3] += BulbasourArray[4];
                        console.log("your attack Pikachuwer: " + BulbasourArray[3]);
                    } else if (defenderName == "Squirtle") {
                        console.log("your attack: " + BulbasourArray[3] + " counter recd: " + SquirtleArray[3]);
                        // player health decreases by defender's attack
                        BulbasourArray[2] -= SquirtleArray[3];
                        // defender health decreases by player's attack
                        SquirtleArray[2] -= BulbasourArray[3];
                        $("#gameMessages").html("You attacked " + defenderName + " for " + BulbasourArray[3] + " damage. <br>" + defenderName + " attacked you back for " + SquirtleArray[3] + " damage");
                        // player's attack increases by their Pikachuwer level
                        BulbasourArray[3] += BulbasourArray[4];
                        console.log("your attack Pikachuwer: " + BulbasourArray[3]);
                    } else if (defenderName == "Charmander") {
                        console.log("your attack: " + BulbasourArray[3] + " counter recd: " + CharmanderArray[3]);
                        // player health decreases by defender's attack
                        BulbasourArray[2] -= CharmanderArray[3];
                        // defender health decreases by player's attack
                        CharmanderArray[2] -= BulbasourArray[3];
                        $("#gameMessages").html("You attacked " + defenderName + " for " + BulbasourArray[3] + " damage. <br>" + defenderName + " attacked you back for " + CharmanderArray[3] + " damage");
                        // player's attack increases by their Pikachuwer level
                        BulbasourArray[3] += BulbasourArray[4];
                        console.log("your attack Pikachuwer: " + BulbasourArray[3]);
                    } else {
                        console.log("error");
                    }
                    break;
    
                    updateGameBoard()
            }
    
            // check if player or defender have lost
            havePlayerOrDefenderLost();
        }
        updateGameBoard();
    }
    
    // function to deal with loss by player
    function playerLost() {
        isGameOver = true;
        $("#gameMessages").html("You have been defeated... GAME OVER!");
        $(".resetButton").css("display", "block");
        consoleLogVariables();
    }
    
    // function to deal with win by player
    function playerWon() {
        isGameOver = true;
        $("#gameMessages").html("YOU WON!!! GAME OVER!");
        $(".resetButton").css("display", "block");
        consoleLogVariables();
    }
    
    // function to play attack button sound when game running
    // attack button plays blaster sound when we have player and
    // defender and isGameBegun is true and isGameOver is not false
    function playAttackSound() {
        if (isGameBegun == true && isGameOver == false && gamePausedForAnotherDefender == false) {
            var audio = new Audio("http://soundbible.com/grab.php?id=1771&type=mp3");
            audio.play();
        }		
    }
    
    // function to see if the player has won
    // this will be the case when all defenders have visibility flag set to false
    function hasPlayerWon() {
        if (playerName=="Pikachu" && (SquirtleArray[1]==false && CharmanderArray[1]==false && BulbasourArray[1]==false)) {
            // player has won
            playerWon();
        } else if (playerName=="Squirtle" && (PikachuArray[1]==false && CharmanderArray[1]==false && BulbasourArray[1]==false)) {
            // player has won
            playerWon();
        } else if (playerName=="Charmander" && (PikachuArray[1]==false && SquirtleArray[1]==false && BulbasourArray[1]==false)) {
            // player has won
            playerWon();
        } else if (playerName=="Bulbasour" && (PikachuArray[1]==false && SquirtleArray[1]==false && CharmanderArray[1]==false)) {
            // player has won
            playerWon();
        }
    }
    
    // ==============
    // MAIN GAME CODE
    // ==============
    
    // do a little debugging
    consoleLogVariables();
    
    // begin by making sure game board is set up
    updateGameBoard();
    
    // if player hasn't been picked yet then
    // it must be the start of the game so play
    // the intro music
    if (playerName == "") {
        var audio = new Audio("http://66.90.93.122/ost/pokemon-original-game-soundtrack/jejijsap/115%20-%20battle%20%28vs%20trainer%29.mp3");
        audio.play();
    };
    
    
    // listen for clicks on the character tiles
    $(".gameCharacter").on("click", function() {
        
        // record what character tile the user clicked
        console.log("clicked: " + $(this).attr("value"));
        characterClicked = $(this).attr("value");
    
        // if we don't have a player yet, get one
        selectPlayer();
    
        // if we don't have a defender yet, get one
        selectDefender();
    
        // do a little debugging
        consoleLogVariables();
    
        // end always by making sure game board is updated
        updateGameBoard();
    });
    
    // listen for clicks on the attack button
    $(".attackButton").on("click", function() {
    
        // play attack button sound when game is running
        // and the attack button is clicked
        playAttackSound();
    
        // if game is paused for another defender to be picked
        // then say there's no enemy here
        if (gamePausedForAnotherDefender == true) {
            $("#gameMessages").html("No enemy here...");
        }
    
        // function to adjust Pikachuints during attacks
        attackTracking();
    
        // check if player has won
        hasPlayerWon();
    
        // do a little debugging
        consoleLogVariables();
    
        // end by  making sure game board is updated
        updateGameBoard();
    });
    
    // listen for reset button click
    $(".resetButton").on("click", function() {
        location.href=location.href;
    });
    
    });
    