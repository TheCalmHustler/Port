// =========================
// Typing Animation
// =========================

const roles = [
"AI & ML Graduate", "Python Developer", "Frontend Developer", "Software Developer", "SQL Developer",
];

const typing = document.getElementById("typing");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {

    const current = roles[roleIndex];

    if (!deleting) {
        typing.textContent = current.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === current.length) {
            deleting = true;
            setTimeout(type, 1500); // Wait after typing
            return;
        }

    } else {

        typing.textContent = current.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }
        }
    }

    setTimeout(type, deleting ? 50 : 100);
}

type();