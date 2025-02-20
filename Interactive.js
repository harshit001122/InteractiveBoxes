document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.querySelector(".additional-content").style.display = "block";
      });
      card.addEventListener("mouseleave", () => {
        card.querySelector(".additional-content").style.display = "none";
      });
    });
  });