var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
// you can log multiple values at once like this 
console.log(playerName, playerHealth, playerAttack);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames[0]);

// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

var fight = function (enemyName) {

    while (playerHealth > 0 && enemyHealth > 0) {

        //ask player if they would like to fight or run
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        // if player choses to skip confirm and stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            //if yes(true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!'");
                //subtract money from player for skiping battle
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney)
                break;
            }
        }

        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");

            //award player for winning 
            playerMoney = playerMoney + 20;

            //leave while ()loop since enemy is dead
            break;
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;

        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            //leave while() loop if player is dead
            break;
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
};

var startGame = function () {
    //reset player stats
    playerHealth = 100;
    playerAttack = 40;
    playerMoney = 10;

    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            // let player know current round, remeber array start at 0 so ad 1 to get correct round number (i + 1)
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

            var pickedEnemyName = enemyNames[i];

            enemyHealth = 50;

            fight(pickedEnemyName);


            if (playerHealth > 0 && i < enemyNames.lenght - 1) {
                //ask if player wants to use store before next round
                var storeConfirm = window.confirm("The Fight is Over, visit the store before the next round?");

                //if yes take them to the store
                if (storeConfirm) {
                    shop();
                }
            }
        }
        else {
            window.alert("You Lose Sucka! GAME OVER!")
            break;
        }
    }
    //after the loop , Player is either out of health or enemies to fight so run endgame function
    endGame();

};

var endGame = function () {
    //if player is still alive, player wins
    if (playerHealth > 0) {
        window.alert("Great Job, You've survived the Game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("You've lost your robot in battle");
    }
    // ask the player if they want o play agin
    var playAgainConfirm = window.confirm("Would You like to play again?");

    if (playAgainConfirm) {
        //restart the game 
        startGame();
    }
    else {
        window.alert("Thank You for playing Robot Gladiators! Come Back Soon!");
    }
};

var shop = function () {
    var shopOptionPrompt = window.prompt(
        'would you like to refill your health, UPGRADE your attack, or LEAVE the store? Please enter one: "REFILL" , "UPGRADE" , or "LEAVE" to make a choice.'
    );
    //switch function rather than "if"  because it is only one variable with multiple options
    switch (shopOptionPrompt) {
        case "refill":
        case "REFILL":
            if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 Coins.");

                // increase health and decrease money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            }

            else {
                window.alert("Not Enough Coin!")
            }
            break;

        case "UPGRADE":
        case "upgrade":
            if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 Coins.");

                // increase attack and decrease money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            }

            break;

        case "LEAVE":
        case "leave":
            window.alert("Leaving the store.");

            // do nothing, so function will end
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");

            // call shop() again to force player to pick a valid option
            shop();
            break;
    }
};

//start the game when the page loads 
startGame();

