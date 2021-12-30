const body = document.querySelector("body");
const modal = document.querySelector(".modal");
const btnSubs = document.querySelector(".btn-subs");
const btnLoveChnago = document.querySelector(".love-chango");

btnSubs.addEventListener("click", () => {
  let winX = window.pageXOffset;
  let winY = window.pageYOffset;
  modal.classList.toggle("show");
  console.log(winX, winY);
  modal.style.top = `${winY}px`;

  if (modal.classList.contains("show")) {
    // body.style.overflow = "hidden";
  }
});

btnLoveChnago.addEventListener("click", (event) => {
  if (event.target === btnLoveChnago) {
    modal.classList.toggle("show");

    if (!modal.classList.contains("show")) {
      // body.style.overflow = "auto";
    }
  }
});
