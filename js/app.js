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
