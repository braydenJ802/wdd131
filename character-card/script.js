const character = {
      name: "Snortleblat",
      class: "Swamp Beast Diplomat",
      level: 5,
      health: 100,
      image: "https://andejuli.github.io/wdd131/character_card/snortleblat.webp",
      imageAlt: "A reptillian figure wearing wet garbs. It is standing in a swamp",
      attacked() {
        if (this.health >= 20) {
          this.health -= 20;
        }
      },
      levelUp() {
        this.level += 1;
        this.health += 20;
      }
    };

const characterName = document.querySelector(".name");
const characterClass = document.querySelector("#class");

// Capitalize the first letter in the name
characterName.textContent = character.name[0].toUpperCase() + character.name.slice(1);
// Capitalize every word in the class string
characterClass.textContent = character.class
  .split(" ")
  .map(word => word[0].toUpperCase() + word.slice(1))
  .join(" ");

const characterImg = document.querySelector(".image");
characterImg.src = character.image;
characterImg.alt = characterClass.imageAlt;

const characterLevel = document.querySelector("#level");
const characterHealth = document.querySelector("#health");

// Default level and health
characterLevel.textContent = character.level;
characterHealth.textContent = character.health;

// Target the buttons
const attackedButton = document.querySelector("#attacked");
const levelUpButton = document.querySelector("#levelUp");

const logAttack = document.querySelector(".log-attack");
const logLevelUp = document.querySelector(".log-levelUp");

// Listen for button presses
attackedButton.addEventListener("click", function() {
    character.attacked();
    characterHealth.textContent = character.health;

    if (character.health === 0) {
      attackedButton.classList.add("dead");
      attackedButton.disabled = true;
      setTimeout(() => {
        alert('Character Died');
      }, 500) // wait 500 ms before alert
    } else {
      // Make attack button flash red
      attackedButton.classList.add("attack-flash");
      logAttack.classList.add("log-attack");
      logAttack.textContent = "-20";
      setTimeout(() => {
        attackedButton.classList.remove("attack-flash");
        logAttack.textContent = "";
        logAttack.classList.remove("log-attack");
      }, 300); // 300 ms flash
    }
});
levelUpButton.addEventListener("click", function() {
    let pastHealth = character.health;

    // Level up
    character.levelUp();
    characterLevel.textContent = character.level;
    characterHealth.textContent = character.health;

    // Revive
    if (pastHealth === 0) { 
      levelUpButton.classList.add("revive-flash");
      attackedButton.classList.remove("dead");
      attackedButton.disabled = false;
      logLevelUp.classList.add("log-levelUp");
      logLevelUp.textContent = "Revive!";
      setTimeout(() => {
        levelUpButton.classList.remove("revive-flash")
        logLevelUp.textContent = "";
        logLevelUp.classList.remove("log-levelUp");
      }, 500); // 500 ms flash
    } else { 
      // Make Level Up button flash green
      levelUpButton.classList.add("levelUp-flash");
      logLevelUp.classList.add("log-levelUp");
      logLevelUp.textContent = "+20";
      setTimeout(() => {
        levelUpButton.classList.remove("levelUp-flash");
        logLevelUp.textContent = "";
        logLevelUp.classList.remove("log-levelUp");
      }, 300);
    }
});
