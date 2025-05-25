const burgerBtn = document.querySelector(".burger");
const header = document.querySelector(".mobile-header-top");
const body = document.querySelector("body");

burgerBtn.addEventListener("click", function () {
  this.classList.toggle("btnActive");
  header.classList.toggle("mobileHeaderActive");
  body.classList.toggle("body-no-scroll");
});
