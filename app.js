console.log("[app.js]: Attached and working properly!");

// ===== Object interaction references. =====
const projects = document.getElementById("projects");
const projectsModal = document.getElementById("projectsModal");


const challenges = document.getElementById("challenges");
const contact = document.getElementById("contact");

const touchLayer = document.getElementById("touchLayer");


// ===== Functions =====

let attachEventListeners = () => {
    console.log("Click listeners attached.");

    //The touch layer fade that comes in behind the modals.
    touchLayer.addEventListener("click", () => {
        console.log("Click registered on touchLayer");

        projectsModal.classList.toggle("showModal");
        touchLayer.classList.toggle("displayNone");
    });

    //Projects section - The card on the main page.
    projects.addEventListener("click", () => {
        console.log("Click registered on projects!");

        projectsModal.classList.toggle("showModal");
        touchLayer.classList.toggle("displayNone");
    });

    //Projects modal - the card that animates in.
    projectsModal.addEventListener("click", () => {
        console.log("Click registered on projects modal!");

        projectsModal.classList.toggle("showModal");
        touchLayer.classList.toggle("displayNone");
    });

    /*
    //Challenges section
    challenges.addEventListener("click", () => {
        console.log("Click registered on projects!");

        challenges.classList.toggle("grow");
    });

    //Contact section
    contact.addEventListener("click", () => {
        console.log("Click registered on projects!");

        contact.classList.toggle("grow");
    });
    */
};




//Verify load to avoid reference to 'null'
document.onload = attachEventListeners();
