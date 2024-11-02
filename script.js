document.querySelectorAll(".job h3").forEach((jobTitle) => {
    jobTitle.addEventListener("click", function () {
        const details = this.nextElementSibling;
        if (details.style.display === "none") {
            details.style.display = "block";
        } else {
            details.style.display = "none";
        }
    });
});
