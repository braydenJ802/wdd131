

function fighterPageNavBarTemplate() {
    
}

function fighterPageTemplate() {
    return `
    <article class="fighter-header">
            <img class="fighter-portrait" src="#"
            alt="">

            <div class="fighter-main">
                <div class="core-details">
                    <!--Name-->
                    <!--Weight #-->
                    <!--Weight Class-->
                    <!--Series-->
                </div>
                <div class="fighter-description">
                    <!--Description-->
                </div>
            </div>
        </article>
        <article class="fighter-breakdown">
            <div class="special-moves">



            </div>
            <div class="example-combo">



            </div>
            <div class="final-smash">



            </div>
        </article>
    `
}

function fighterNavTemplate() {
    return `
    <li><a href="#">Previous Fighter</a></li>
    <li><a href="#">Next Fighter</a></li>
    `
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
