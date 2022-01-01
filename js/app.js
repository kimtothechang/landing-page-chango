// 구독 버튼 클릭 시 모달창 보여주기
const body = document.querySelector("body");
const modal = document.querySelector(".modal");
const btnSubs = document.querySelector(".btn-subs");
const btnLoveChnago = document.querySelector(".love-chango");

btnLoveChnago.addEventListener("click", (event) => {
  modal.classList.toggle("show");
});

// 이메일 유효성 검사

const emailInput = document.querySelector(".email");

const checkEmail = () => {
  let emailValue = emailInput.value;
  let exptext =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  if (emailValue.match(exptext) != null) {
    modal.classList.toggle("show");
  } else {
    alert("올바른 이메일 형식을 입력하시오.");
  }
};

// 모바일 화면 메뉴 버튼 클릭 시 메뉴 모달창 보여주기

const headerNav = document.querySelector(".menu-modal");
const btnMenu = document.querySelector(".menu-btn");
const btnBack = document.querySelector(".go-back");

btnMenu.addEventListener("click", () => {
  headerNav.classList.toggle("show");
});

btnBack.addEventListener("click", () => {
  headerNav.classList.toggle("show");
});

// 스크롤 시 맨 위로 버튼 보여주기

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  toTop.classList.add("show");
});

// 스크롤 시 맨 위로 서서히 올라가기

let $target = $(".to-top");
$target.on("click", function () {
  $("html, body").animate({ scrollTop: 0 }, 500);
  return false;
});
