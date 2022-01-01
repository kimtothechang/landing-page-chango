const body = document.querySelector("body");
const modal = document.querySelector(".modal");
const btnSubs = document.querySelector(".btn-subs");
const btnLoveChnago = document.querySelector(".love-chango");

// modal.style.display = "none";

btnSubs.addEventListener("click", () => {
  modal.classList.toggle("show");
});

btnLoveChnago.addEventListener("click", (event) => {
  modal.classList.toggle("show");
});

const headerNav = document.querySelector(".menu-modal");
const btnMenu = document.querySelector(".menu-btn");
const btnBack = document.querySelector(".go-back");

btnMenu.addEventListener("click", () => {
  headerNav.classList.toggle("show");
});

btnBack.addEventListener("click", () => {
  headerNav.classList.toggle("show");
});

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  toTop.classList.add("show");
});

/* Jquery */

let $target = $(".to-top");
$target.on("click", function () {
  $("html, body").animate({ scrollTop: 0 }, 500);
  return false;
});
