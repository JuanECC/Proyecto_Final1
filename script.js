const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    document.body.classList.toggle("dark-mode");

     if (document.body.classList.contains("light-mode")) {
        themeToggle.textContent = "Modo Oscuro";
    } else {
        themeToggle.textContent = "Modo Claro";
    }
});