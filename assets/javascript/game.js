$(document).ready(function () {
  // setting initial variables, randomizing them between a range! Every game will play out differently because of this, but it'll be harder to "figure out" the game
  var charOne = {
    name: "Luke",
    counterDmg: (Math.floor(Math.random() * (22 - 8 + 1)) + 8),
    maxHp: (Math.floor(Math.random() * (150 - 100 + 1)) + 100),
    initialDmg: (Math.floor(Math.random() * (13 - 8 + 1)) + 8),
    currentDmg: undefined,
    currentHp: undefined,
  };
  var charTwo = {
    name: "Han",
    counterDmg: (Math.floor(Math.random() * (22 - 8 + 1)) + 8),
    maxHp: (Math.floor(Math.random() * (150 - 100 + 1)) + 100),
    initialDmg: (Math.floor(Math.random() * (13 - 8 + 1)) + 8),
    currentDmg: undefined,
    currentHp: undefined,
  };
  var charThree = {
    name: "Leia",
    counterDmg: (Math.floor(Math.random() * (22 - 8 + 1)) + 8),
    maxHp: (Math.floor(Math.random() * (150 - 100 + 1)) + 100),
    initialDmg: (Math.floor(Math.random() * (13 - 8 + 1)) + 8),
    currentDmg: undefined,
    currentHp: undefined,
  };
  var charFour = {
    name: "Darth",
    counterDmg: (Math.floor(Math.random() * (22 - 8 + 1)) + 8),
    maxHp: (Math.floor(Math.random() * (150 - 100 + 1)) + 100),
    initialDmg: (Math.floor(Math.random() * (13 - 8 + 1)) + 8),
    currentDmg: undefined,
    currentHp: undefined,
  };
  var mainChar, enemy, enemiesRemaining;
  var enemiesInitial = 3;
  var enemiesFought = 0;
  var characterSelected = false;
  var enemySelected = false;

  $(".lukeHpDisplay").text("HP: " + charOne.maxHp);
  $(".hanHpDisplay").text("HP: " + charTwo.maxHp);
  $(".leiaHpDisplay").text("HP: " + charThree.maxHp);
  $(".darthHpDisplay").text("HP: " + charFour.maxHp);

  // function that resets inital character select positions, clears the battleArena, resets character object values with the charResetter function
  function gameReset() {
    enemiesInitial = 3;
    enemiesFought = 0;
    mainChar = undefined;
    enemy = undefined;
    enemiesRemaining = undefined;
    characterSelected = false;
    enemySelected = false;
    $("#mainCharText").html('<h3>Your Character</h3>');
    $("#mainCharImage").empty();
    $("#enemyText").html('<h3>Enemy</h3>');
    $("#enemyImage").empty();
    $(".enemyHp").hide();
    $(".mainCharHp").hide();
    $(".character").show();
    $(".lukeHpDisplay").show();
    $(".hanHpDisplay").show();
    $(".leiaHpDisplay").show();
    $(".darthHpDisplay").show();
    $(".lukeSelectHp").show();
    $(".hanSelectHp").show();
    $(".leiaSelectHp").show();
    $(".darthSelectHp").show();
    $("#enemy").show();
    $("#versus").empty();
    $(".message").text("SELECT YOUR CHARACTER");
    $("#combatLogAttack").hide();
    $("#combatLogDefend").hide();
    $("#combatLogContainer").hide();
    $("#combatLogAttack").html("<h4>Combat Log</h4>");
    $("#combatLogDefend").text("");
    $("#combatLogAttack").removeClass("border-top");
    $(".restart").hide();
    charResetter(charOne, charTwo, charThree, charFour);
  }
  // functions adjust character object variables
  function charResetter(charGoesHere) {
    charGoesHere.currentHp = undefined;
    charGoesHere.currentDmg = undefined;
    charGoesHere.counterDmg = (Math.floor(Math.random() * (22 - 8 + 1)) + 8);
    charGoesHere.maxHp = (Math.floor(Math.random() * (150 - 100 + 1)) + 100);
    charGoesHere.initialDmg = (Math.floor(Math.random() * (13 - 8 + 1)) + 8);
  }

  function enemyCharSetup(charGoesHere) {
    charGoesHere.currentHp = charGoesHere.maxHp;
    charGoesHere.currentDmg = charGoesHere.counterDmg;
    enemySelected = true;
    enemiesFought++;
    $(".enemyHp").show();
    $(".enemyHpDisplay").html("HP: " + enemy.currentHp);
  }

  function mainCharSetup(charGoesHere) {
    charGoesHere.currentHp = charGoesHere.maxHp;
    charGoesHere.currentDmg = charGoesHere.initialDmg;
    characterSelected = true;
    $("#combatLogAttack").toggle();
    $("#combatLogDefend").toggle();
    $("#combatLogContainer").toggle();
    $(".mainCharHp").toggle();
    $(".mainCharHpDisplay").html("HP: " + mainChar.currentHp);
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
      $("#enemyImage").html(
        '<img src="./assets/images/luke.jpg" style="height: 300px">'
      );
      $("#enemyText").empty();
      $("h2.message").text("Defeat current enemy before selecting new opponent");
      $("#combatLogAttack").html("<h4>Combat Log</h4>");
      $("#combatLogDefend").text("");
      $(".lukeHpDisplay").toggle();
      $(".lukeSelectHp").toggle();
      $("#enemy").show();
    } else if (
      characterSelected === false &&
      enemySelected === false &&
      $(this).attr("id") === "luke"
    ) {
      $(this).toggle();
      mainChar = charOne;
      mainCharSetup(mainChar);
      $(".lukeAttack").toggle();
      $("#mainCharImage").prepend(
        '<img src="./assets/images/luke.jpg" style="height: 300px">'
      );
      $("#mainCharText").empty();
      $("h2.message").text("SELECT OPPONENT");
      $("#versus").html(
        '<img src="./assets/images/versus.png" style="height: 100px">'
      );
      $(".lukeHpDisplay").toggle();
      $(".lukeSelectHp").toggle();
    }
    if (
      characterSelected === true &&
      enemySelected === false &&
      $(this).attr("id") === "han"
    ) {
      $(this).toggle();
      enemy = charTwo;
      enemyCharSetup(enemy);
      $("#enemyImage").prepend(
        '<img src="./assets/images/han.jpg" style="height: 300px">'
      );
      $("#enemyText").empty();
      $("h2.message").text("defeat current enemy before selecting new opponent");
      $("#combatLogAttack").html("<h4>Combat Log</h4>");
      $("#combatLogDefend").text("");
      $(".hanHpDisplay").toggle();
      $(".hanSelectHp").toggle();
      $("#enemy").show();
    } else if (
      characterSelected === false &&
      enemySelected === false &&
      $(this).attr("id") === "han"
    ) {
      $(this).toggle();
      mainChar = charTwo;
      mainCharSetup(mainChar);
      $(".hanAttack").toggle();
      $("#mainCharImage").prepend(
        '<img src="./assets/images/han.jpg" style="height: 300px">'
      );
      $("h2.message").text("SELECT OPPONENT");
      $("#mainCharText").empty();
      $("#versus").html(
        '<img src="./assets/images/versus.png" style="height: 100px">'
      );
      $(".hanHpDisplay").toggle();
      $(".hanSelectHp").toggle();
    }
    if (
      characterSelected === true &&
      enemySelected === false &&
      $(this).attr("id") === "leia"
    ) {
      $(this).toggle();
      enemy = charThree;
      enemyCharSetup(enemy);
      $("#enemyImage").prepend(
        '<img src="./assets/images/leia.jpg" style="height: 300px">'
      );
      $("#enemyText").empty();
      $("h2.message").text("defeat current enemy before selecting new opponent");
      $("#combatLogAttack").html("<h4>Combat Log</h4>");
      $("#combatLogDefend").text("");
      $(".leiaHpDisplay").toggle();
      $(".leiaSelectHp").toggle();
      $("#enemy").show();
    } else if (
      characterSelected === false &&
      enemySelected === false &&
      $(this).attr("id") === "leia"
    ) {
      $(this).toggle();
      mainChar = charThree;
      mainCharSetup(mainChar);
      $(".leiaAttack").toggle();
      $("#mainCharImage").prepend(
        '<img src="./assets/images/leia.jpg" style="height: 300px">'
      );
      $("h2.message").text("SELECT OPPONENT");
      $("#mainCharText").empty();
      $("#versus").html(
        '<img src="./assets/images/versus.png" style="height: 100px">'
      );
      $(".leiaHpDisplay").toggle();
      $(".leiaSelectHp").toggle();
    }
    if (
      characterSelected === true &&
      enemySelected === false &&
      $(this).attr("id") === "darth"
    ) {
      $(this).toggle();
      enemy = charFour;
      enemyCharSetup(enemy);
      $("#enemyImage").prepend(
        '<img src="./assets/images/darth.jpg" style="height: 300px">'
      );
      $("#enemyText").empty();
      $("h2.message").text("defeat current enemy before selecting new opponent");
      $("#combatLogAttack").html("<h4>Combat Log</h4>");
      $("#combatLogDefend").text("");
      $(".darthHpDisplay").toggle();
      $(".darthSelectHp").toggle();
      $("#enemy").show();
    } else if (
      characterSelected === false &&
      enemySelected === false &&
      $(this).attr("id") === "darth"
    ) {
      $(this).toggle();
      mainChar = charFour;
      mainCharSetup(mainChar);
      $(".darthAttack").toggle();
      $("#mainCharImage").prepend(
        '<img src="./assets/images/darth.jpg" style="height: 300px">'
      );
      $("h2.message").text("SELECT OPPONENT");
      $("#mainCharText").empty();
      $("#versus").html(
        '<img src="./assets/images/versus.png" style="height: 100px">'
      );
      $(".darthHpDisplay").toggle();
      $(".darthSelectHp").toggle();
    }
  });
  // attack button functionality
  $(".btn").on("click", function () {
    if (enemySelected === false) return;
    $(this).one(turnBorderOn());
    enemy.currentHp = enemy.currentHp - mainChar.currentDmg;
    mainChar.currentHp = mainChar.currentHp - enemy.currentDmg;
    mainChar.currentDmg = mainChar.currentDmg + mainChar.initialDmg;
    $(".mainCharHpDisplay").html("HP: " + mainChar.currentHp);
    $(".enemyHpDisplay").html("HP: " + enemy.currentHp);
    $("#combatLogAttack").text(
      mainChar.name + " hits " + enemy.name + " for " + mainChar.currentDmg
    );
    $("#combatLogDefend").text(
      enemy.name + " hits " + mainChar.name + " for " + enemy.currentDmg
    );
    // if the enemy drops below 0hp, remove them from battlearena and allow next enemy to be selected
    if (enemy.currentHp <= 0) {
      enemiesRemaining = enemiesInitial - enemiesFought;
      $("#enemyImage").empty();
      $(".enemyHp").hide();
      $("#enemy").hide();
      enemySelected = false;
      $("h2.message").text("SELECT OPPONENT");
      $("#combatLogAttack").removeClass("border-top");
      $("#combatLogAttack").html("<h4>Select next opponent</h4>");
      $("#combatLogDefend").text("");
    }
    // game end conditions, if there's no enemies remaining trigger game won
    if (enemy.currentHp <= 0 && enemiesRemaining === 0) {
      $("h2.message").text("YOU WIN! You've defeated all enemies!");
      $(".lukeAttack").hide();
      $(".hanAttack").hide();
      $(".leiaAttack").hide();
      $(".darthAttack").hide();
      $("#enemy").hide();
      $("#versus").empty();
      $("#combatLogAttack").removeClass("border-top");
      $("#combatLogAttack").html("<h4>You Win!</h4>");
      $("#combatLogDefend").text("");
      $(".restart").show();
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
      $("#versus").empty();
      $("#combatLogAttack").removeClass("border-top");
      $("#combatLogAttack").html("<h4>You Lose!</h4>");
      $("#combatLogDefend").text("");
      $(".restart").show();
      $(".restart").on("click", function () {
        gameReset();
      });
    }
  });
});