//generate random number between 0 and 20 then adds 40
var randomNumber = function (min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};


var getPlayerName = function () {
    var name = "";
    while (name === "" || name === null) {
        name = prompt("What is your robot's name?");
    }
    console.log("Your robot's name is" + name);
    return name;
};

var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10
};
var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];



// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less
//generate random number between 0 and 20 then adds 40
var randomNumber = function (min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};

var fight = function (enemy) {

    while (playerInfo.health > 0 && enemy.health > 0) {

        //ask player if they would like to fight or run
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        // if player choses to skip confirm and stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            //if yes(true), leave fight
            if (confirmSkip) {
                window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
                //subtract money from player for skiping battle
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log("playerInfo.money", playerInfo.money)
                break;
            }
        }

        // generate random damage value based on players attack power
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
        enemy.health = Math.max(0, enemy.health - damage);

        console.log(
            playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
        );

        // check enemy's health
        if (enemy.health <= 0) {
            window.alert(enemy.name + " has died!");

            //award player for winning 
            playerInfo.money = playerInfo.money + 20;

            //leave while ()loop since enemy is dead
            break;
        }
        else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }

        // remove player's health by subtracting the amount set in the enemy.attack variable
        var damage = randomNumber(enemy.attack - 3, enemy.attack);
        playerInfo.health = Math.max(0, playerInfo.health - damage);

        console.log(
            enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
        );

        // check player's health
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + " has died!");
            //leave while() loop if player is dead
            break;
        }
        else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        }
    }
};

//function to set player name


var getPlayerName = function () {
    var name = "";
    while (name === "" || name === null) {
        name = prompt("What is your robot's name?");
    }
    console.log("Your robot's name is" + name);
    return name;
};

//player info object and enemy names array 
var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function () {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    }
};
var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];
//Start Game 
var startGame = function () {
    //reset player stats
    playerInfo.reset();

    for (var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            // let player know current round, remeber array start at 0 so ad 1 to get correct round number (i + 1)
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));


            var pickedEnemyObj = enemyInfo[i];

            pickedEnemyObj.health = randomNumber(40, 60);

            fight(pickedEnemyObj);


            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
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
    if (playerInfo.health > 0) {
        window.alert("Great Job, You've survived the Game! You now have a score of " + playerInfo.money + ".");
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
            if (playerInfo.money >= 7) {
                window.alert("Refilling player's health by 20 for 7 Coins.");

                // increase health and decrease money
                playerInfo.health = playerInfo.health + 20;
                playerInfo.money = playerInfo.money - 7;
            }

            else {
                window.alert("Not Enough Coin!")
            }
            break;

        case "UPGRADE":
        case "upgrade":
            if (playerInfo.money >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 Coins.");

                // increase attack and decrease money
                playerInfo.attack = playerInfo.attack + 6;
                playerInfo.money = playerInfo.money - 7;
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

