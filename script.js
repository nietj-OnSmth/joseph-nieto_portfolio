let contactAddress ="jniet7115@gmail.com";

// show projects from the selected category
function filterProjects(type) {
    let projects = document.getElementsByClassName("project");
    let visibleCount = 0;
// A project loop to check each project that counts the visible ones
    for (let i = 0; i < projects.length; i++) {
        let projectType = projects[i].getAttribute("data-type");

        if (type === "all" || type === projectType) {
            projects[i].style.display = "block";
            visibleCount++;
        } else {
            projects[i].style.display = "none";
        }
    }
    // Marks the selected filter button
    let buttons = document.getElementsByClassName("filter-button");

    for (let i = 0; i < buttons.length; i++) {
        let buttonType = buttons[i].getAttribute("data-filter");

        if (type === buttonType) {
            buttons[i].setAttribute("aria-pressed", "true");
        } else {
            buttons[i].setAttribute("aria-pressed", "false");
        }
    }
    let projectWord = "projects";

    if (visibleCount === 1) {
        projectWord = "project";
    }

    if (type === "all") {
        document.getElementById("filter-message").textContent =
            "Showing all " + visibleCount + " projects.";
    } else {
        document.getElementById("filter-message").textContent =
            "Showing " + visibleCount + " " + type + " " + projectWord + ".";
    }
}
// Preparing the email by using a draft and form details
function sendEmail(event) {
    event.preventDefault();


if (contactAddress === "") {
    document.getElementById("form-message").textContent =
        "Contact email hasn't been added yet.";
    return;
}

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let message = document.getElementById("message").value;

if (name === "" || email === "" || message === "") {
    document.getElementById("form-message").textContent = "Please complete all three fields";
    return;
}
// Formats the subject and message for the email link
let subject = encodeURIComponent(
    "Portfolio message from " + name
);
let body = encodeURIComponent(
    message + "\n\nFrom: " + name + "\nReply to: " + email
);

document.getElementById("form-message").textContent =
    "Review and send the draft in your email app. " +
    "If it does not open, email " + contactAddress + " directly";
// Opening the draft in the visitors email they choose
window.location.href =
    "mailto:" + contactAddress +
    "?subject=" + subject +
    "&body=" + body;
}