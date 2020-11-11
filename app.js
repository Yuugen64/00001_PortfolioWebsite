console.log("[app.js]: Attached and working properly!");

// ===== Object interaction references. =====
const projects = document.getElementById("projects");
const projectsModal = document.getElementById("projectsModal");

const challenges = document.getElementById("challenges");
const challengesModal = document.getElementById("challengesModal");

const contact = document.getElementById("contact");
const contactModal = document.getElementById("contactModal");

const touchLayer = document.getElementById("touchLayer");


// ===== Functions =====

let attachEventListeners = () => {
    console.log("Click listeners attached.");

    //The touch layer fade that comes in behind the modals.
    touchLayer.addEventListener("click", () => {
        console.log("Click registered on touchLayer");

        //The class toggling logic for the modals to appear and disappear on mobile.
        if(projectsModal.classList.contains("showModal")){
            projectsModal.classList.toggle("showModal");
        } else if (challengesModal.classList.contains("showModal")) {
            challengesModal.classList.toggle("showModal");
        } else if (contactModal.classList.contains("showModal")){
            contactModal.classList.toggle("showModal");
        }

        

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

    

    //Challenges section - The card on the main page.
    challenges.addEventListener("click", () => {
        console.log("Click registered on projects!");

        challengesModal.classList.toggle("showModal");
        touchLayer.classList.toggle("displayNone");
    });

    //Challenges modal - the card that animates in.
    challengesModal.addEventListener("click", () => {
        console.log("Click registered on projects modal!");

        challengesModal.classList.toggle("showModal");
        touchLayer.classList.toggle("displayNone");
    });



    //Contact section - The card on the main page.
    contact.addEventListener("click", () => {
        console.log("Click registered on projects!");

        contactModal.classList.toggle("showModal");
        touchLayer.classList.toggle("displayNone");
    });

    //Contact modal - the card that animates in.
    contactModal.addEventListener("click", () => {
        console.log("Click registered on projects modal!");

        contactModal.classList.toggle("showModal");
        touchLayer.classList.toggle("displayNone");
    });
};




//Verify load to avoid reference to 'null'
document.onload = attachEventListeners();
