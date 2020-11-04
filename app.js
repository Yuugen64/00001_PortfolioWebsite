console.log("[app.js]: Attached and working properly!");

// ===== Object interaction references. =====
const projects = document.getElementById("projects");
const challenges = document.getElementById("challenges");
const contact = document.getElementById("contact");




// ===== Functions =====

let attachEventListeners = () => {
    console.log("Click listeners attached.");

    //Projects section
    projects.addEventListener("click", () => {
        console.log("Click registered on projects!");

        projects.classList.toggle("grow");
    });

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
};





document.onload = attachEventListeners();
