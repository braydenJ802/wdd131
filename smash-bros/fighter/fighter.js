import { smashFighters } from "../smashData.js";


// Template for the fighter navigation bar
function fighterNavTemplate(previousFighter, nextFighter) {
    return `
    <li><a href="fighter.html?id=${previousFighter.id}">← ${previousFighter.name}</a></li>
    <li><a href="fighter.html?id=${nextFighter.id}">${nextFighter.name} →</a></li>
    `;
}

// Template for the main fighter content
function fighterPageTemplate(fighter) {
    let html = `
    <article class="fighter-header">
        <div class="fighter-portrait-container">
            <img class="fighter-portrait" 
            src="../images/fighter-portraits/${fighter.id}-${fighter.name}/chara_1_${fighter.name.toLowerCase()}_00.webp"
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
                <!--Description-->
            </div>

        </div>
    </article>
    
    <article class="fighter-breakdown">
        <div class="special-moves">
            <h2>Special Moves</h2>
            <div class="moves-grid">
                <div class="move">
                    <label>Neutral Special:</label>
                    <span>${fighter.moveset.neutral_special}</span>
                </div>
                <div class="move">
                    <label>Side Special:</label>
                    <span>${fighter.moveset.side_special}</span>
                </div>
                <div class="move">
                    <label>Up Special:</label>
                    <span>${fighter.moveset.up_special}</span>
                </div>
                <div class="move">
                    <label>Down Special:</label>
                    <span>${fighter.moveset.down_special}</span>
                </div>
            </div>
        </div>

        <div class="example-combo">
            <h2>Example Combo</h2>
            <p class="combo-example">${fighter.example_combo}</p>
        </div>

        <div class="final-smash">
            <div class="final-smash">
            <h2>Final Smash</h2>
            <p class="final-smash-name">${fighter.moveset.final_smash}</p>
        </div>

    </article>`;

    return html;
}



function renderFighterContent(fighter) {
    let html = fighterPageTemplate();
    fighterContainer.innerHTML += html;
}

function renderFighterNavBar() {
    let html = fighterNavTemplate();
    fighterNavBar.innerHTML += html;
}

let fighterContainer = document.querySelector(".fighter-container");

let fighterNavBar = document.querySelector(".fighter-page-nav-bar");
