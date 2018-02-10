$(document).ready(function () {
    // setting initial variables
    var charOne = {
        name: "Luke",
        counterDmg: 5,
        maxHp: 100,
        currentDmg: undefined,
        initialDmg: 10,
        currentHp: undefined,
        isAttacker: false,
        isDefender: false,
    }
    var charTwo = {
        name: "Han",
        counterDmg: 5,
        maxHp: 100,
        currentDmg: undefined,
        initialDmg: 10,
        currentHp: undefined,
        isAttacker: false,
        isDefender: false,
    }
    var charThree = {
        name: "Leia",
        counterDmg: 5,
        maxHp: 100,
        currentDmg: undefined,
        initialDmg: 10,
        currentHp: undefined,
        isAttacker: false,
        isDefender: false,
    }
    var charFour = {
        name: "Darth",
        counterDmg: 5,
        maxHp: 100,
        currentDmg: undefined,
        initialDmg: 10,
        currentHp: undefined,
        isAttacker: false,
        isDefender: false,
    };
    var enemiesRemaining, mainChar, enemy;
    var characterSelected = false;
    var enemySelected = false;
    //function that resets inital character select positions, clears the battleArena, resets character object values with the charResetter function
    function gameReset() {
        enemiesRemaining = undefined;
        mainChar = undefined;
        characterSelected = false;
        $("#attacker").empty();
        $("#defender").empty();
        $(".character").show();
        charResetter(charOne, charTwo, charThree, charFour);
    };
    // functions adjust character object variables
    function charResetter(charGoesHere) {
        charGoesHere.currentHp = undefined;
        charGoesHere.currentDmg = undefined;
        charGoesHere.isAttacker = false;
        charGoesHere.isDefender = false;
        enemySelected = false;
    };

    function enemyCharSetup(charGoesHere) {
        charGoesHere.currentHp = charGoesHere.maxHp;
        charGoesHere.currentDmg = charGoesHere.counterDmg;
        charGoesHere.isDefender = true;
        enemySelected = true;
    };

    function mainCharSetup(charGoesHere) {
        charGoesHere.currentHp = charGoesHere.maxHp;
        charGoesHere.currentDmg = charGoesHere.initialDmg;
        charGoesHere.isAttacker = true;
        characterSelected = true;
    };
    $(".character").on("click", function () {
        if (characterSelected === true && enemySelected === false && ($(this).attr("id") === "luke")) {
            $(this).toggle();
            $("#defender").html('<img src="./assets/images/luke.jpg" style="height: 300px">');
            enemy = charOne;
            enemyCharSetup(enemy);
            $("h2.message").text("Defeat current enemey before selecting new enemy");
        } else if (characterSelected === false && enemySelected === false && ($(this).attr("id") === "luke")) {
            $(this).toggle();
            $("#attacker").html('<img src="./assets/images/luke.jpg" style="height: 300px">');
            mainChar = charOne;
            mainCharSetup(mainChar);
            $("h2.message").text("Select enemy");
            $("#versus").html('<img src="./assets/images/versus.png" style="height: 150px">');
        }
        if (characterSelected === true && enemySelected === false && ($(this).attr("id") === "han")) {
            $(this).toggle();
            $("#defender").html('<img src="./assets/images/han.jpg" style="height: 300px">');
            enemy = charTwo;
            enemyCharSetup(enemy);
            $("h2.message").text("Defeat current enemey before selecting new enemy");
        } else if (characterSelected === false && enemySelected === false && ($(this).attr("id") === "han")) {
            $(this).toggle();
            $("#attacker").html('<img src="./assets/images/han.jpg" style="height: 300px">');
            mainChar = charTwo;
            mainCharSetup(mainChar);
            $("h2.message").text("Select enemy");
            $("#versus").html('<img src="./assets/images/versus.png" style="height: 150px">');
        }
        if (characterSelected === true && enemySelected === false && ($(this).attr("id") === "leia")) {
            $(this).toggle();
            $("#defender").html('<img src="./assets/images/leia.jpg" style="height: 300px">');
            enemy = charThree;
            enemyCharSetup(enemy);
            $("h2.message").text("Defeat current enemey before selecting new enemy");
        } else if (characterSelected === false && enemySelected === false && ($(this).attr("id") === "leia")) {
            $(this).toggle();
            $("#attacker").html('<img src="./assets/images/leia.jpg" style="height: 300px">');
            mainChar = charThree;
            mainCharSetup(mainChar);
            $("h2.message").text("Select enemy");
            $("#versus").html('<img src="./assets/images/versus.png" style="height: 150px">');
        }
        if (characterSelected === true && enemySelected === false && ($(this).attr("id") === "darth")) {
            $(this).toggle();
            $("#defender").html('<img src="./assets/images/darth.jpg" style="height: 300px">');
            enemy = charFour;
            enemyCharSetup(enemy);
            $("h2.message").text("Defeat current enemey before selecting new enemy");
        } else if (characterSelected === false && enemySelected === false && ($(this).attr("id") === "darth")) {
            $(this).toggle();
            $("#attacker").html('<img src="./assets/images/darth.jpg" style="height: 300px">');
            mainChar = charFour;
            mainCharSetup(mainChar);
            $("h2.message").text("Select enemy");
            $("#versus").html('<img src="./assets/images/versus.png" style="height: 150px">');
        }
    });
});
//if (enemy.currentHp = 0){enemiesRemaining--; charResetter(enemy); $("h2.message").text("Select enemy");}
//if (enemiesRemaining = 0){} game ends in win
//if (mainChar.currentHp <= 0){} game ends in loss