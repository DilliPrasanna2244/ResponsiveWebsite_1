    function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById("themeIcon");

    if (body.classList.contains("dark-theme")) {
        body.classList.remove("dark-theme");
        body.classList.add("light-theme");
        localStorage.setItem("theme", "light");
        themeIcon.classList.replace("bi-moon", "bi-sun"); // Change Moon to Sun
    } else {
        body.classList.remove("light-theme");
        body.classList.add("dark-theme");
        localStorage.setItem("theme", "dark");
        themeIcon.classList.replace("bi-sun", "bi-moon"); // Change Sun to Moon
    }
}

document.getElementById("themeToggle").addEventListener("click", toggleTheme);

// Apply saved theme on page load
(function () {
    const savedTheme = localStorage.getItem("theme") || "dark";
    const body = document.body;
    const themeIcon = document.getElementById("themeIcon");

    if (savedTheme === "light") {
        body.classList.add("light-theme");
        themeIcon.classList.replace("bi-moon", "bi-sun");
    } else {
        body.classList.add("dark-theme");
        themeIcon.classList.replace("bi-sun", "bi-moon");
    }
})();


// Enable Bootstrap tooltips
document.addEventListener("DOMContentLoaded", function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

