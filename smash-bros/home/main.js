import { smashFighters } from "../smashData.js";


function searchFighters(event) {
  // Prevent form from submitting and reloading the page
  event.preventDefault();

  let fighterQuery = document.querySelector("#fighterSearch").value.trim();

  if (fighterQuery !== "") {
    // Check if we have any non-default filters active
    let hasActiveFilters = !areFiltersAtDefault();
    
    if (hasActiveFilters) {
      // Check if searching would have results with current filters
      let currentResults = getFilteredFighters(fighterQuery);
      
      if (currentResults.length === 0) {
        //console.log("No results found, resetting filters");
        // RESET filters - no results found with current filters
        resetFiltersToDefault();
      }
    }
  }

  updateFighterDisplay();
}

function areFiltersAtDefault() {
  let selectedTier = document.querySelector("#tierFilter").value;
  let selectedWeightClass = document.querySelector("#weightFilter").value;
  let selectedSeries = document.querySelector("#seriesFilter").value;
  
  //console.log("Current filters:", selectedTier, selectedWeightClass, selectedSeries);
  
  return selectedTier === "All Tiers" && 
         selectedWeightClass === "All Weights" && 
         selectedSeries === "All Series";
}

function resetFiltersToDefault() {
  document.querySelector("#tierFilter").value = "All Tiers";
  document.querySelector("#weightFilter").value = "All Weights";
  document.querySelector("#seriesFilter").value = "All Series";
}

function getNameMatch(fighter, query) {
  // Name/echo search logic
  if (fighter.echo_of) {
    return fighter.name.toLowerCase().includes(query.toLowerCase()) ||
      fighter.echo_of.toLowerCase().includes(query.toLowerCase());
  } else if (fighter.echo) {
    return fighter.name.toLowerCase().includes(query.toLowerCase()) ||
    fighter.echo.toLowerCase().includes(query.toLowerCase());
  } else {
    return fighter.name.toLowerCase().includes(query.toLowerCase());
  }
}

function getFilteredFighters(searchQuery = "") {
  // Get current filter settings
  let selectedTier = document.querySelector("#tierFilter").value;
  let selectedWeightClass = document.querySelector("#weightFilter").value;
  let selectedSeries = document.querySelector("#seriesFilter").value;

  return smashFighters.characters.filter(function(fighter) {
    let matchesName = getNameMatch(fighter, searchQuery);
    let matchesTier = selectedTier === "All Tiers" || fighter.tier === selectedTier;
    let matchesWeightClass = selectedWeightClass === "All Weights" || fighter.weight_class === selectedWeightClass;
    let matchesSeries = selectedSeries === "All Series" || fighter.series === selectedSeries;
    
    // Must match ALL conditions
    return matchesName && matchesTier && matchesWeightClass && matchesSeries;
  });
}

function applyFilters() {
  updateFighterDisplay();
}

function updateFighterDisplay() {
  // Search Bar
  let fighterQuery = document.querySelector("#fighterSearch").value;

  // Filters
  let filteredFighters = getFilteredFighters(fighterQuery);

  function prioritizeSearchedFighter(a, b, searchQuery) {
  // If searching specifically for an echo fighter, prioritize it
    if (searchQuery && a.name.toLowerCase() === searchQuery.toLowerCase()) {
      return -1; // Put 'a' first (searched fighter goes first)
    }
    else if (searchQuery && b.name.toLowerCase() === searchQuery.toLowerCase()) {
      return 1; // Put 'b' first (searched fighter goes first)
    }
    return 0;
  }

  function compareFighterID(a, b) {
    return a.id - b.id;
  }

  function sortFighters(a, b, searchQuery) {
    let priorityEchoSearch = prioritizeSearchedFighter(a, b, searchQuery);
    if (priorityEchoSearch !== 0) {
      return priorityEchoSearch;
    }

    // If no priority (no echoes), sort by ID
    return compareFighterID(a, b);
  }

  // Sort the filtered results
  let sortedFighters = filteredFighters.sort((a, b) => sortFighters(a, b, fighterQuery));
  console.log(sortedFighters);

  // - Display -
  // Clear out any previous content
  fightersContainer.textContent = "";

  // Check if no results found
  if (sortedFighters.length === 0) {
    fightersContainer.innerHTML = `
    <p class="no-results">No fighters found matching your search.</p>`; // No results
    return;
  }

  // Output onto the screen
  sortedFighters.forEach(function(fighter) {
    renderFighterPortrait(fighter); // Display fighters
  });
}

function fighterTemplate(fighter) {
  
  let html = `
  <div class="fighter-card">
    <!-- Link to fighter page -->
    <a href="../fighter/fighter.html?id=${fighter.id}" class="fighter-link">
      <div class="fighter-portrait-container">  
        <img class="fighter-portrait"
        src="../images/fighter-portraits/${fighter.id}-${fighter.name}/chara_0_${fighter.image_name}_00.webp"
        alt=${fighter.name}
        >
      
        <div class="fighter-details">
          <div class="fighter-name">${fighter.name}</div>
          <div class="fighter-rank">${fighter.tier}</div>
      </div>`;
  
  // If the fighter has a clone
  if (fighter.echo) {
    html += `
    <div class="has-echo-fighter"><p><strong>Echo: ${fighter.echo}</strong></p></div>`;
  } else if (fighter.echo_of) { // or is a clone
    html += `
    <div class="echo-fighter-of"><p><strong>Echo of: ${fighter.echo_of}</strong></p></div>`;
  }

  html +=
  `
      </div>
    </a>
      </div>
    </a>
  </div>`;

  return html;
}

function renderFighterPortrait(fighter) {
  let html = fighterTemplate(fighter);
  fightersContainer.innerHTML += html;
}

// Initialize the display
let fightersContainer = document.querySelector(".fighters-container");
smashFighters.characters.forEach(function(fighter) {
  renderFighterPortrait(fighter);
});

// Event Listeners
let tierFilter = document.querySelector("#tierFilter");
let weightFilter = document.querySelector("#weightFilter");
let seriesFilter = document.querySelector("#seriesFilter");

tierFilter.addEventListener("change", applyFilters);
weightFilter.addEventListener("change", applyFilters);
seriesFilter.addEventListener("change", applyFilters);

let fighterSearchForm = document.querySelector(".search-form");
fighterSearchForm.addEventListener("submit", searchFighters);

// Also listen for search input (in addition to form submit)
let searchInput = document.querySelector("#fighterSearch");
searchInput.addEventListener("input", updateFighterDisplay); // Updates as you type