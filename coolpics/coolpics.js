// coolpics.js

function toggleMenu() {
    // Target the menu links
    const menuLinks = document.querySelector("ol");
    menuLinks.classList.toggle("hide-list");
}

function handleResize() {
    const menuLinks = document.querySelector("ol");
    if (window.innerWidth > 1300) {
        menuLinks.classList.remove("hide-list");
    } else {
        menuLinks.classList.add("hide-list");
    }
}


function openModal(event) {
    // Create the modal
    const modal = document.createElement("dialog");

    modal.innerHTML = `<img><button class="close-viewer">X</button>`;
    document.body.appendChild(modal);

    // Target the image in the modal
    const modalImage = document.querySelector("dialog img");
    
    // Find the image the user clicked
    const clickedImage = event.target.closest("img");
    const imageSrc = clickedImage.src;
    const imageAlt = clickedImage.alt;
    
    // Get the full image by adding "-full.jpeg" onto the end of the image file name
    const modalImageSrc = imageSrc.split("-")[0] + "-full.jpeg";

    // Set the modal image to this image source (file name)
    modalImage.setAttribute("src", modalImageSrc);
    // And set it's alternate description as well!
    modalImage.setAttribute("alt", imageAlt);

    // Attach listeners for closing here (since these elements now exist)
    // Close button event listener
    modal.querySelector("button").addEventListener("click", () => {
        modal.close();
        modal.remove();
    });

    // Close when clicking outside the image
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.close();
            modal.remove();
        }
    });

    // Display the modal
    modal.showModal();  
}


// - Window Resize -
handleResize();
window.addEventListener("resize", handleResize);

// - Menu -
// Target the menu button
const menuButton = document.querySelector("#menu").addEventListener("click", toggleMenu);

// - Modal -
// Target the gallery of images
const gallery = document.querySelector(".gallery").addEventListener("click", openModal);

