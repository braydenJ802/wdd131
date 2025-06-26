// sorting.js
const hikes = [
  {
    name: "Bechler Falls",
    stub: "bechler_falls",
    imgSrc:
      "https://wdd131.netlify.app/examples/hikes/images/bechler-falls.jpg",
    imgAlt: "Image of Bechler Falls",
    distance: "3 miles",
    tags: ["Yellowstone", "Waterfall"],
    difficulty: 1,
    description:
      "Beautiful short hike in Yellowstone along the Bechler river to Bechler Falls",
    directions:
      "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead.",
    trailhead: [44.14457, -110.99781]
  },
  {
    name: "Teton Canyon",
    stub: "teton_canyon",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/teton-canyon.jpg",
    imgAlt: "Image of Bechler Falls",
    distance: "3 miles",
    tags: ["Tetons"],
    difficulty: 1,
    description: "Beautiful short (or long) hike through Teton Canyon.",
    directions:
      "Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Staline Raod for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead.",
    trailhead: [43.75567, -110.91521]
  },
  {
    name: "Denanda Falls",
    stub: "denanda_falls",
    imgSrc:
      "https://wdd131.netlify.app/examples/hikes/images/denanda-falls.jpg",
    imgAlt: "Image of Bechler Falls",
    distance: "7 miles",
    tags: ["Yellowstone", "Waterfall"],
    difficulty: 2,
    description: "Beautiful hike through Bechler meadows to Denanda Falls",
    directions:
      "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead.",
    trailhead: [44.14974, -111.04564]
  },
  {
    name: "Coffee Pot Rapids",
    stub: "coffee_pot",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/coffee-pot.jpg",
    imgAlt: "Image of Bechler Falls",
    distance: "2.2 miles",
    tags: [],
    difficulty: 1,
    description:
      "Beautiful hike along the Henry's Fork of the Snake River to a set of rapids.",
    directions:
      "Take Highway 20 north to Island Park. Continue almost to Mack's in. From Highway 20, turn west on Flatrock Road for 1 mile then turn off on Coffee Pot Road and travel one-half mile to the campground entrance road. There is a parking lot right outside the campground.",
    trailhead: [44.49035, -111.36619]
  },
  {
    name: "Menan Butte",
    stub: "menan_butte",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/menan-butte.jpg",
    imgAlt: "Image of Menan Butte",
    distance: "3.4 miles",
    tags: ["View"],
    difficulty: 2,
    description:
      "A steep climb to one of the largest volcanic tuff cones in the world. 3.4 miles is the full loop around the crater, can be shortened.",
    directions:
      "Take Highway 33 West out of Rexburg for about 8 miles. Turn left onto E Butte Road, the right onto Twin Butte road after about a mile. Follow that road for about 3 miles. You will see the parking lot/trailhead on the left.",
    trailhead: [43.78555, -111.98996]
  }
];


// ----------------------------------------------------
// Sorting

// const simpleList = ["oranges", "grapes", "lemons", "apples", "Bananas", "watermelons", "coconuts", "broccoli", "mango"];

// // This incorrectly places "Bananas" at the top 
// let simpleSort = simpleList.sort();
// console.log(simpleSort);

// let lowerList = simpleList.map(function(fruit){
//     return fruit.toLowerCase();
// })

// // This is correct, because we first lowered every item in the list, then sorted it
// let simpleLowerSort = lowerList.sort();
// console.log(simpleLowerSort);



// function compareFn(a, b){
//     if (a < b) {
//         return -1;
//     }
//     else if (a > b) {
//         return 1;
//     }
//     // a must be equal to b
//     return 0;
// }

// const anotherSort = lowerList.sort(compareFn);
// console.log(anotherSort);

// nums = [10, 12, 9, 8, 1];

// let sortNums = nums.sort(compareFn);
// console.log(sortNums);


// // Filtering

// let query = "an";

// function searchList(item) {
//     return item.toLowerCase().includes(query.toLowerCase());
// }

// let filterList = simpleList.filter(searchList);
// let lowerFilterList = filterList.map(fruit => fruit.toLowerCase());
// console.log(lowerFilterList);

// -----------------------------------------

// Hikes (similar to recipes part 2)

// let hikeQuery = "fall";

// let filteredHikes = hikes.filter(function(hike){
//     return hike.name.toLowerCase().includes(hikeQuery.toLowerCase())
//     || hike.description.toLowerCase().includes(hikeQuery.toLowerCase())
//     || hike.tags.find(tag => tag.toLowerCase().includes(hikeQuery.toLowerCase()));
// });

// console.log(filteredHikes);

// function compareHikeDistances(a, b){
//     if (a.distance < b.distance) {
//         return -1;
//     }
//     else if (a.distance > b.distance) {
//         return 1;
//     }
//     // a must be equal to b
//     return 0;
// }

// let sortedHikes = filteredHikes.sort(compareHikeDistances);
// console.log(sortedHikes);


// Using search bar

function search() {

  let hikeQuery = document.querySelector("#search").value;

  let filteredHikes = hikes.filter(function(hike) {
      return hike.name.toLowerCase().includes(hikeQuery.toLowerCase())
      || hike.description.toLowerCase().includes(hikeQuery.toLowerCase())
      || hike.tags.find(tag => tag.toLowerCase().includes(hikeQuery.toLowerCase()));
  });

  //console.log(filteredHikes);

  function compareHikeDistances(a, b) {
      if (a.distance < b.distance) {
          return -1;
      }
      else if (a.distance > b.distance) {
          return 1;
      }
      // a must be equal to b
      return 0;
  };

  let sortedHikes = filteredHikes.sort(compareHikeDistances);
  //console.log(sortedHikes);

  // Clear out any previous content
  hikeContainer.textContent = "";

  // Output onto screen
  sortedHikes.forEach(function(hike) {
    renderHikes(hike);
  });
};

function getRandomItem(arr) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
};

function difficultyTemplate(difficulty) {

    // begin building an html string using the difficultys HTML written earlier as a model.

    let html = `<span

      class="difficulty"

      role="img"

      aria-label="difficulty: ${difficulty} out of 5"

    >Difficulty: `

    for (let i = 1; i <= 5; i++) {

      if (i <= difficulty) {

        html += `<span aria-hidden="true" class="icon-boot"> 🥾</span>`

      } else {

        html += `<span aria-hidden="true" class="icon-empty">▫️</span>`

      }    

    }

    html += `</span>`

    return html

};

function tagTemplate(tags) {
  return tags.map((tag)=> `<button>${tag}</button>`).join(" ");
};

function hikeTemplate(hike) {
  return `
  <div class="hike-content">
    <div class="hike-card">
      <h2>${hike.name}</h2>
      <div class="hike tags">
        ${tagTemplate(hike.tags)}
      </div>
      <div class="hike-difficulty">
        ${difficultyTemplate(hike.difficulty)}
      </div>
      <p>${hike.description}</p>
    </div>
  </div>
  `
};

function renderHikes(hike) {
  let html = hikeTemplate(hike);
  hikeContainer.innerHTML += html;
};


let hikeContainer = document.querySelector("#hike-container");
renderHikes(getRandomItem(hikes));

let hikeSearchButton = document.querySelector("button");

hikeSearchButton.addEventListener("click", search);






