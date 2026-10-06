// Automatically show the current year
document.getElementById("year").textContent =
    new Date().getFullYear();


// Show a small message
function showMessage() {

    const toast = document.getElementById("toast");

    toast.classList.add("show");

    setTimeout(function () {

        toast.classList.remove("show");

    }, 2500);
}


// Add a small animation when links are clicked
const links = document.querySelectorAll(".link-card");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        link.style.transform = "scale(0.98)";

        setTimeout(function() {

            link.style.transform = "";

        }, 150);

    });

});