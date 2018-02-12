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
    isDefender: false
  };
  var charTwo = {
    name: "Han",
    counterDmg: 5,
    maxHp: 100,
    currentDmg: undefined,
    initialDmg: 10,
    currentHp: undefined,
    isAttacker: false,
    isDefender: false
  };
  var charThree = {
    name: "Leia",
    counterDmg: 5,
    maxHp: 100,
    currentDmg: undefined,
    initialDmg: 10,
    currentHp: undefined,
    isAttacker: false,
    isDefender: false
  };
  var charFour = {
    name: "Darth",
    counterDmg: 5,
    maxHp: 100,
    currentDmg: undefined,
    initialDmg: 10,
    currentHp: undefined,
    isAttacker: false,
    isDefender: false
  };
  var mainChar, enemy, enemiesRemaining;
  var enemiesInitial = 3;
  var enemiesFought = 0;
  var characterSelected = false;
  var enemySelected = false;
  // function that resets inital character select positions, clears the battleArena, resets character object values with the charResetter function
  function gameReset() {
    enemiesInitial = 3;
    enemiesFought = 0;
    mainChar = undefined;
    enemy = undefined;
    enemiesRemaining = undefined;
    characterSelected = false;
    enemySelected = false;
    $("#mainChar").html("<h3>Your Character</h3>");
    $("#enemy").html("<h3>Enemy</h3>");
    $(".character").show();
    $("#versus").empty();
    $(".message").text("SELECT YOUR CHARACTER");
    $("#combatLogAttack").hide();
    $("#combatLogDefend").hide();
    $("#combatLogContainer").hide();
    $("#combatLogAttack").html("<h3>Combat Log</h3>");
    $("#combatLogDefend").text("");
    $("#combatLogAttack").removeClass("border-top");
    $(".restart").hide();
    charResetter(charOne, charTwo, charThree, charFour);
  }
  // functions adjust character object variables 
  function charResetter(charGoesHere) {
    charGoesHere.currentHp = undefined;
    charGoesHere.currentDmg = undefined;
    charGoesHere.isAttacker = false;
    charGoesHere.isDefender = false;
  }

  function enemyCharSetup(charGoesHere) {
    charGoesHere.currentHp = charGoesHere.maxHp;
    charGoesHere.currentDmg = charGoesHere.counterDmg;
    charGoesHere.isDefender = true;
    enemySelected = true;
    enemiesFought++;
  }

  function mainCharSetup(charGoesHere) {
    charGoesHere.currentHp = charGoesHere.maxHp;
    charGoesHere.currentDmg = charGoesHere.initialDmg;
    charGoesHere.isAttacker = true;
    characterSelected = true;
    $("#combatLogAttack").toggle();
    $("#combatLogDefend").toggle();
    $("#combatLogContainer").toggle();
  }
  // fixes style for the combat log
  function turnBorderOn() {
    $("#combatLogAttack").addClass("border-top");
  }
  // character/enemy select in one function
  $(".character").on("click", function () {
    if (
      characterSelected === true &&
      enemySelected === false &&
      $(this).attr("id") === "luke"
    ) {
      $(this).toggle();
      enemy = charOne;
      enemyCharSetup(enemy);
      $("#enemy").html(
        '<img src="./assets/images/luke.jpg" style="height: 300px">'
      );
      $("h2.message").text("Defeat current enemey before selecting new enemy");
    } else if (
      characterSelected === false &&
      enemySelected === false &&
      $(this).attr("id") === "luke"
    ) {
      $(this).toggle();
      mainChar = charOne;
      mainCharSetup(mainChar);
      $(".lukeAttack").toggle();
      $("#mainChar").html(
        '<img src="./assets/images/luke.jpg" style="height: 300px">'
      );
      $("h2.message").text("SELECT ENEMY");
      $("#versus").html(
        '<img src="./assets/images/versus.png" style="height: 150px">'
      );
    }
    if (
      characterSelected === true &&
      enemySelected === false &&
      $(this).attr("id") === "han"
    ) {
      $(this).toggle();
      enemy = charTwo;
      enemyCharSetup(enemy);
      $("#enemy").html(
        '<img src="./assets/images/han.jpg" style="height: 300px">'
      );
      $("h2.message").text("Defeat current enemey before selecting new enemy");
    } else if (
      characterSelected === false &&
      enemySelected === false &&
      $(this).attr("id") === "han"
    ) {
      $(this).toggle();
      mainChar = charTwo;
      mainCharSetup(mainChar);
      $(".hanAttack").toggle();
      $("#mainChar").html(
        '<img src="./assets/images/han.jpg" style="height: 300px">'
      );
      $("h2.message").text("SELECT ENEMY");
      $("#versus").html(
        '<img src="./assets/images/versus.png" style="height: 150px">'
      );
    }
    if (
      characterSelected === true &&
      enemySelected === false &&
      $(this).attr("id") === "leia"
    ) {
      $(this).toggle();
      enemy = charThree;
      enemyCharSetup(enemy);
      $("#enemy").html(
        '<img src="./assets/images/leia.jpg" style="height: 300px">'
      );
      $("h2.message").text("Defeat current enemey before selecting new enemy");
    } else if (
      characterSelected === false &&
      enemySelected === false &&
      $(this).attr("id") === "leia"
    ) {
      $(this).toggle();
      mainChar = charThree;
      mainCharSetup(mainChar);
      $(".leiaAttack").toggle();
      $("#mainChar").html(
        '<img src="./assets/images/leia.jpg" style="height: 300px">'
      );
      $("h2.message").text("SELECT ENEMY");
      $("#versus").html(
        '<img src="./assets/images/versus.png" style="height: 150px">'
      );
    }
    if (
      characterSelected === true &&
      enemySelected === false &&
      $(this).attr("id") === "darth"
    ) {
      $(this).toggle();
      enemy = charFour;
      enemyCharSetup(enemy);
      $("#enemy").html(
        '<img src="./assets/images/darth.jpg" style="height: 300px">'
      );
      $("h2.message").text("Defeat current enemey before selecting new enemy");
    } else if (
      characterSelected === false &&
      enemySelected === false &&
      $(this).attr("id") === "darth"
    ) {
      $(this).toggle();
      mainChar = charFour;
      mainCharSetup(mainChar);
      $(".darthAttack").toggle();
      $("#mainChar").html(
        '<img src="./assets/images/darth.jpg" style="height: 300px">'
      );
      $("h2.message").text("SELECT ENEMY");
      $("#versus").html(
        '<img src="./assets/images/versus.png" style="height: 150px">'
      );
    }
  });
  // attack functionality
  $(".btn").on("click", function () {
    $(this).one(turnBorderOn());
    if (enemySelected === false) return;
    enemy.currentHp = enemy.currentHp - mainChar.currentDmg;
    mainChar.currentHp = mainChar.currentHp - enemy.currentDmg;
    mainChar.currentDmg = mainChar.currentDmg + mainChar.initialDmg;
    $("#combatLogAttack").text(
      mainChar.name + " hits " + enemy.name + " for " + mainChar.currentDmg
    );
    $("#combatLogDefend").text(
      enemy.name + " hits " + mainChar.name + " for " + enemy.currentDmg
    );
    // if the enemy drops below 0hp, remove them from battlearena and allow next enemy to be selected
    if (enemy.currentHp <= 0) {
      enemiesRemaining = enemiesInitial - enemiesFought;
      $("#enemy").empty();
      enemySelected = false;
      $("h2.message").text("SELECT ENEMY");
    }
    // game end conditions, if there's no enemies remaining trigger game won
    if (enemy.currentHp <= 0 && enemiesRemaining === 0) {
      $("h2.message").text("YOU WIN! You've defeated all enemies!");
      $(".lukeAttack").hide();
      $(".hanAttack").hide();
      $(".leiaAttack").hide();
      $(".darthAttack").hide();
      $("#combatLogAttack").removeClass("border-top");
      $("#combatLogAttack").html("<h3>You Win!</h3>");
      $("#combatLogDefend").text("");
      $("#combatLogAttack").removeClass("border-top");
      $(".restart").toggle();
      $(".restart").on("click", function () {
        gameReset();
      });
    }
    // if your character's hp drops to 0 or below, trigger game loss
    if (mainChar.currentHp <= 0) {
      $("h2.message").text("YOU LOSE!");
      $(".lukeAttack").hide();
      $(".hanAttack").hide();
      $(".leiaAttack").hide();
      $(".darthAttack").hide();
      $("#combatLogAttack").removeClass("border-top");
      $("#combatLogAttack").html("<h3>You Lose!</h3>");
      $("#combatLogDefend").text("");
      $("#combatLogAttack").removeClass("border-top");
      $(".restart").toggle();
      $(".restart").on("click", function () {
        gameReset();
      });
    }
  });
});