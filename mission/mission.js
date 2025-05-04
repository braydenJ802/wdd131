let selectElement = document.querySelector("select");

let logo = document.querySelector("img");

// When there is a change from dark to light mode (or vice-versa)
selectElement.addEventListener("change", changeTheme);

function changeTheme() {
    let current = selectElement.value // "light" or "dark"
    let logoImg = document.querySelector("footer img");

    if (current == "dark") {
        // Give body the dark class
        document.body.classList.add("dark");
        // Add different image by changing src
        logoImg.setAttribute("src", "logo/byui-logo_white.png");
        
    } else {
        // Light
        // Take off the class
        document.body.classList.remove("dark");
        // Change the image back to the original one
        logoImg.setAttribute("src", "logo/byui-logo_blue.webp")
    }

}