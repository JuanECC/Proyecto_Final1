document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");

    if (!themeToggle) return;

    themeToggle.textContent = document.body.classList.contains("dark-mode") ? "Modo Claro" : "Modo Oscuro";

    themeToggle.addEventListener("click", () => {
        const body = document.body;

        if (body.classList.contains("dark-mode")) {
            body.classList.remove("dark-mode");
            body.classList.add("light-mode");
            themeToggle.textContent = "Modo Oscuro";
        } else {
            body.classList.remove("light-mode");
            body.classList.add("dark-mode");
            themeToggle.textContent = "Modo Claro";
        }
    });
});
