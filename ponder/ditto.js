const ditto = {
id: 132,
name: "ditto",
type: "normal",
abilities: ["limber", "imposter"],
base_experience: 101,
height: 3,
weight: 40,
stats: {
    hp: 48,
    attack: 48,
    defense: 48,
    special_attack: 48,
    special_defense: 48,
    speed: 48
    },
sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
transform: function(){
return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png"
}
};

function getRandomItem(arr) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
};


const pokemonName = document.querySelector("#name");
const ability = document.querySelector("#ability");
pokemonName.textContent = ditto.name[0].toUpperCase() + ditto.name.slice(1);
ability.textContent = getRandomItem(ditto.abilities)

// Default Sprite
let pokemonImg = document.querySelector("#ditto");
pokemonImg.src = ditto.sprite;
pokemonImg.alt = "Ditto";

let shiny = false;
SpriteSrc = pokemonImg.addEventListener("click", function(){
    if (!shiny)
    {
        shiny = true;
        pokemonImg.src = ditto.transform();
        pokemonImg.alt = "Shiny Ditto";
    }
    else {
        // transform back
        shiny = false;
        pokemonImg.src = ditto.sprite;
        pokemonImg.alt = "Ditto"; 
    }
});


