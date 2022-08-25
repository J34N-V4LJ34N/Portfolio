const menuBtn = document.querySelector(".menu-btn");
const dropdown = document.querySelector(".dropdown");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    dropdown.classList.remove("hidden");
    dropdown.classList.add("flex");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    dropdown.classList.add("hidden");
    dropdown.classList.remove("flex");
    menuOpen = false;
  }
});

fitText(document.querySelector("h1"), 0.38);
