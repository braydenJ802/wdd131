import { smashFighters } from "../smashData.js";

let currentCostumeIndex = 0;
let currentFighter = null;


// Get fighter from URL parameters
function getCurrentFighter() {
    // Get the URL parameters (everything after "?")
    const urlParams = new URLSearchParams(window.location.search);

    // Extract specific parameters
    const fighterID = urlParams.get("id");

    if (fighterID) {
        // Find fighter where id matches
        return smashFighters.characters.find(fighter => fighter.id == fighterID);
    }

    return null; // No fighter found
}

// Get next/previous fighters for navigation
function getNavigationFighters(currentFighter) {
    const fighters = smashFighters.characters; // All fighters array

    // Find where the current fighter is in the array
    const currentIndex = fighters.findIndex(fighter => fighter.id === currentFighter.id);

    // Get previous fighter (or wrap to end if at beginning)
    const previousFighter = currentIndex > 0 ?
        fighters[currentIndex - 1] :    // Normal case
        fighters[fighters.length - 1]   // Wrap around

    console.log("Previous: " + previousFighter.name);

    // Get next fighter (or wrap to beginning if at end)
    const nextFighter = currentIndex < fighters.length - 1 ?
        fighters[currentIndex + 1] :   // Normal case
        fighters[0];                   // Wrap around

    console.log("Next: " + nextFighter.name);

    return { previousFighter, nextFighter };
}

// Template for the fighter navigation bar
function fighterNavTemplate(previousFighter, nextFighter) {
    //console.log(previousFighter.id);
    return `
    <li><a href="fighter.html?id=${previousFighter.id}">← ${previousFighter.name}</a></li>
    <li><a href="fighter.html?id=${nextFighter.id}">${nextFighter.name} →</a></li>
    `;
}

// Template for the main fighter content
function fighterPageTemplate(fighter) {
    console.log(`../images/fighter-portraits/${fighter.id}-${fighter.name}/chara_1_${fighter.image_name}_00.webp"`);

    let html = `
    <article class="fighter-header">
        <div class="fighter-portrait-container">
            <img class="fighter-portrait" 
            src="../images/fighter-portraits/${fighter.id}-${fighter.name}/chara_1_${fighter.image_name}_00.webp"
            alt="${fighter.name} portrait">
        </div>

        <div class="fighter-main">
            <div class="core-details">
                <h1 class="fighter-name">${fighter.name}</h1>
                <div class="fighter-stats">
                    
                    <!-- Tier -->
                    <div class="stat">
                        <label>Tier:</label>
                        <span class="tier-badge tier-${fighter.tier.toLowerCase().replace("+", "plus").replace("-", "minus")}">${fighter.tier}</span>
                    </div>
                
                    <!--Weight # and Weight Class-->
                    <div class="stat">
                        <label>Weight:</label>
                        <span class="weight">${fighter.weight} (${fighter.weight_class})</span>
                    </div>

                    <!--Series-->
                    <div class="stat">
                        <label>Series:</label>
                        <span>${fighter.series}</span>
                    </div>

                    <!-- Game origin -->
                    <div class="stat">
                        <label>Game Origin:</label>
                        <span>${fighter.game_origin}</span>
                    </div>
                </div>
            </div>`;
    
    if (fighter.echo_of) {
        html += `
        <div class="echo-info">
            <p><strong>Echo fighter of:</strong> ${fighter.echo_of}</p>
        </div>
        `;
    }

    else if (fighter.echo) {
        html += `
        <div class="echo-info">
            <p><strong>Has Echo Fighter:</strong> ${fighter.echo}</p>
        </div>
        `;
    }

    html += `
            <div class="fighter-description">
                <span>${fighter.description}</span>
            </div>

        </div>
    </article>
    
    <article class="fighter-breakdown">
        <div class="moves-grid">
            <!-- Neutral Special -->
            <div class="move">
                <div class="move-header">
                    <h3 class="move-type">Neutral Special</h3>
                    <img src="../images/fighter-portraits/${fighter.id}-${fighter.name}/Special Moves/neutral-special.webp" 
                    alt="${fighter.moveset.neutral_special.name}" 
                    class="move-image">
                </div>
                <div class="move-info">
                    <h4 class="move-name">${fighter.moveset.neutral_special.name}</h4>
                    <p class="move-description">${fighter.moveset.neutral_special.description}</p>
                </div>
            </div>
          
            <!-- Side Special -->
            <div class="move">
                <div class="move-header">
                    <h3 class="move-type">Side Special</h3>
                    <img src="../images/fighter-portraits/${fighter.id}-${fighter.name}/Special Moves/side-special.webp" 
                    alt="${fighter.moveset.side_special.name}" 
                    class="move-image">
                </div>
                <div class="move-info">
                    <h4 class="move-name">${fighter.moveset.side_special.name}</h4>
                    <p class="move-description">${fighter.moveset.side_special.description}</p>
                </div>
            </div>
          
            <!-- Up Special -->
            <div class="move">
                <div class="move-header">
                    <h3 class="move-type">Up Special</h3>
                    <img src="../images/fighter-portraits/${fighter.id}-${fighter.name}/Special Moves/up-special.webp" 
                    alt="${fighter.moveset.up_special.name}" 
                    class="move-image">
                </div>
                <div class="move-info">
                    <h4 class="move-name">${fighter.moveset.up_special.name}</h4>
                    <p class="move-description">${fighter.moveset.up_special.description}</p>
                </div>
            </div>
          
            <!-- Down Special -->
            <div class="move">
                <div class="move-header">
                    <h3 class="move-type">Down Special</h3>
                    <img src="../images/fighter-portraits/${fighter.id}-${fighter.name}/Special Moves/down-special.webp" 
                    alt="${fighter.moveset.down_special.name}" 
                    class="move-image">
                </div>
                <div class="move-info">
                    <h4 class="move-name">${fighter.moveset.down_special.name}</h4>
                    <p class="move-description">${fighter.moveset.down_special.description}</p>
                </div>
            </div>
        </div>
        
        <!-- Final Smash -->
        <div class="final-smash">
            <h2>Final Smash</h2>
            <div class="final-smash-content">
                <img src="../images/fighter-portraits/${fighter.id}-${fighter.name}/Special Moves/final-smash.webp"
                alt="${fighter.moveset.final_smash.name}"
                class="final-smash-image">
                <div class="final-smash-info">
                    <h3>${fighter.moveset.final_smash.name}</h3>
                    <p>${fighter.moveset.final_smash.description}</p>
                </div>
            </div>
        </div>

        <!-- Example Combo -->
        <div class="example-combo">
            <h2>Example Combo</h2>
            <p class="combo-example-text">${fighter.example_combo}</p>
        </div>
    </article>`;

    return html;
}

function showError(message) {
  fighterContainer.innerHTML = `
    <div class="error-message">
      <h2>Fighter Not Found</h2>
      <p>${message}</p>
      <a href="../home/index.html" class="back-button">← Back to All Fighters</a>
    </div>
  `;
}

// Render functions
function renderFighterContent(fighter) {
    let html = fighterPageTemplate(fighter);
    fighterContainer.innerHTML += html;
}

function renderFighterNavBar(previousFighter, nextFighter) {
    let html = fighterNavTemplate(previousFighter, nextFighter);
    fighterNavBar.innerHTML += html;
}

// Main initialization function
function initializeFighterPage() {
  const fighter = getCurrentFighter();
  console.log(fighter);

  if (!fighter) {
    showError("No fighter specified or fighter not found");
    return;
  }

  // Store globally for costume changing
  currentFighter = fighter;

  // Update page title
  document.getElementById("page-title").textContent = `${fighter.name} - Fighter Details - Super Smash Bros Ultimate`;

  // Get fighters for navigation
  const { previousFighter, nextFighter } = getNavigationFighters(fighter);
  //console.log(previousFighter);
  //console.log(nextFighter);

  // Render content
  renderFighterContent(fighter);
  renderFighterNavBar(previousFighter, nextFighter);
}

function setupCostumeChanger() {
    const fighterPortrait = document.querySelector(".fighter-portrait");

    if (fighterPortrait) {
        fighterPortrait.addEventListener("click", changeCostume);
        // Add a cursor pointer to show it's clickable
        fighterPortrait.style.cursor = "pointer";
        fighterPortrait.title = "Click to change costume";
    }
}

function changeCostume() {
    // Increment the costume index (0-7, then wrap to 0)
    currentCostumeIndex = (currentCostumeIndex + 1) % 8;

    // Format the number with leading zero (00, 01, 02, etc.)
    const costumeNumber = currentCostumeIndex.toString().padStart(2, '0');

    // Update the image source
    const fighterPortrait = document.querySelector(".fighter-portrait");
    fighterPortrait.src = `../images/fighter-portraits/${currentFighter.id}-${currentFighter.name}/chara_1_${currentFighter.image_name}_${costumeNumber}.webp`;

    console.log(`Changed to costume ${costumeNumber}`);
}

// Get elements
const fighterContainer = document.querySelector(".fighter-container");
const fighterNavBar = document.querySelector(".fighter-page-nav-bar");

// Initialize when page loads
initializeFighterPage();

// Costumes/Alternates
setupCostumeChanger();