document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector(".wy-nav-side");
  const content = document.querySelector(".wy-nav-content-wrap");
  const grid = document.querySelector(".grid");

  const button = document.createElement("button");
  button.innerHTML = "☰";
  button.className = "menu-toggle";

  document.body.appendChild(button);

  button.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    content.classList.toggle("shifted");

    if (grid) {
      grid.classList.toggle("shifted");
    }

    document.querySelectorAll(".card").forEach(card => {
      card.classList.toggle("shifted");
    });
  });
});