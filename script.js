const seeMoreButton = document.getElementById("see-more-button");
const backButton = document.getElementById("back-button");

seeMoreButton.addEventListener("click", () => {
  const card = document.getElementById("card-inner");

  card.classList.toggle("rotate-card");
});

backButton.addEventListener("click", () => {
  const card = document.getElementById("card-inner");

  card.classList.remove("rotate-card");
});
