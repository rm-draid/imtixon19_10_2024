// modal div
const modal = document.getElementById("hotelModal");

// Oтели so'zi
const hotelLink = document.querySelector("a.Oтели");

// yopiluvchi button
const closeBtn = document.querySelector(".modal .close");

// Oтели so'ziga bosilganda style ozgaradi ya'ni modal ochiladi
hotelLink.addEventListener("click", function (event) {
  event.preventDefault();
  modal.style.display = "flex";
});

// yopiluvchi button bosilganda style ozgaradi ya'ni modal yopiladi
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// mishka qayoda bosa modal yopiladi (modal oynadan tashqarida)
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Get the burger button, menu content, and close button
// Get the burger button, close button, menu content, and overlay
const burgerButton = document.querySelector(".burger_menu button");
const burgerMenuContent = document.getElementById("burgerMenuContent");
const closeButton = document.getElementById("closeButton");
const overlay = document.getElementById("overlay");

// Function to show menu and overlay
function showMenu() {
  burgerMenuContent.style.display = "block";
  overlay.style.display = "block";
}

// Function to hide menu and overlay
function hideMenu() {
  burgerMenuContent.style.display = "none";
  overlay.style.display = "none";
}

burgerButton.addEventListener("click", function () {
  if (
    burgerMenuContent.style.display === "none" ||
    burgerMenuContent.style.display === ""
  ) {
    showMenu();
  } else {
    hideMenu();
  }
});
closeButton.addEventListener("click", hideMenu);
window.addEventListener("click", function (event) {
  if (
    !burgerButton.contains(event.target) &&
    !burgerMenuContent.contains(event.target) &&
    !overlay.contains(event.target)
  ) {
    hideMenu();
  }
});
