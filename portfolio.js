// This script creates the animated typing text in the home section.
// It changes the text automatically, like a simple text animation effect.
var Typed = new Typed(".text", {
    strings: ["frontend Developer", "Graphics Designer", "Freelancer"],
    typespeed: 100,
    backspeed: 100,
    backdelay: 1000,
    loop: true
});

// Contact form logic:
// 1. Validate the form fields.
// 2. Open the same Google Form link on submit so replies go to the sheet.
// 3. Reset the form after opening the page.
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("portfolio-contact-form");
    if (!form) return;

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!form.reportValidity()) {
            return;
        }

        const formLink = "https://forms.gle/cnhRdAdPGFZPLZ16A";
        const name = form.elements.name.value.trim();
        const email = form.elements.email.value.trim();
        const subject = form.elements.subject.value.trim();
        const message = form.elements.message.value.trim();

        const finalLink = new URL(formLink);
        if (name) finalLink.searchParams.set("name", name);
        if (email) finalLink.searchParams.set("email", email);
        if (subject) finalLink.searchParams.set("subject", subject);
        if (message) finalLink.searchParams.set("message", message);

        window.open(finalLink.toString(), "_blank");
        form.reset();
    });
});