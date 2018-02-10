$(document).ready(function () {
    // setting initial variables
    var charOne = {
        name: "Luke",
        counterdmg: 5,
        maxHp: 100,
        currentDmg: undefined,
        initialDmg: 10,
        currentHp: undefined,
        isAttacker: false,
        isDefender: false,
        potentialEnemy: false,
    }
    var charTwo = {
        name: "Han",
        counterdmg: 5,
        maxHp: 100,
        currentDmg: undefined,
        initialDmg: 10,
        currentHp: undefined,
        isAttacker: false,
        isDefender: false,
        potentialEnemy: false,
    }
    var charThree = {
        name: "Finn",
        counterdmg: 5,
        maxHp: 100,
        currentDmg: undefined,
        initialDmg: 10,
        currentHp: undefined,
        isAttacker: false,
        isDefender: false,
        potentialEnemy: false,
    }
    var charFour = {
        name: "Poe",
        counterdmg: 5,
        maxHp: 100,
        currentDmg: undefined,
        initialDmg: 10,
        currentHp: undefined,
        isAttacker: false,
        isDefender: false,
        potentialEnemy: false,
    };
    var enemiesRemaining;

    //function that resets inital character select positions, clears the battleArena

    // function sets characters back to default variables
    function charResetter(charGoesHere) {
        charGoesHere.currentHp = undefined;
        charGoesHere.currentDmg = undefined;
        charGoesHere.isAttacker = false;
        charGoesHere.isDefender = false;
        charGoesHere.potentialEnemy = false;
    };
    // when a character is moved to battlearena, set their currentHp to their maxHp, and currentDmg to initialDmg, when a character dies, remove them from battlearena
    function battleArena() {};

});