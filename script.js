let contactAddress ="jniet7115@gmail.com";

function filterProjects(type) {
    let projects = document.getElementsByClassName("project");

    for (let i = 0; i < projects.length; i++) {
        let projectsType = projects[i].getAttribute("data-type");

        if (type == "all" || type == projectsType) {
            projects[i].style.display = "block";
        } else {
            projects[i].style.display = "none";
        }
    }
    document.getElementByID("filter-message").textContent =
        "Showing " + type + " projects.";
}

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

let subject = encodeURIComponent(
    "Portfolio message from " + name
);
let body = encodeURIComponent(
    message + "\n\nFrom: " + name + "\nReply to: " + email
);

document.getElementById("form-message").textContent =
    "Opening your email app. Review and send the draft there. ";

window.location.href =
    "mailto:" + contactAddress +
    "?subject=" + subject +
    "&body=" + body;
}