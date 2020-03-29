const MENU = document.getElementById("menu");
const SUBMIT_BUTTON = document.getElementById("submit-btn");
const CLOSE_BUTTON = document.getElementById("close-btn");
const FORM = document.getElementById("form");
const ACTIVE_IMAGE = document.getElementById("images-row");
const VERTICAL_TURNOFF = document.getElementById("vertical-phone");
const HORIZONTAL_TURNOFF = document.getElementById("horizontal-phone");
const LEFT_BUTTON = document.getElementById("carousel-left-btn");
const RIGHT_BUTTON = document.getElementById("carousel-right-btn");

document.addEventListener("scroll", onscroll);

function onscroll(event) {
  const curPos = window.scrollY;
  const divs = document.querySelectorAll("main>div");
  const links = document.querySelectorAll("#menu a");

  divs.forEach(el => {
    if (
      el.offsetTop <= curPos + 100 &&
      el.offsetTop + el.offsetHeight > curPos + 100
    ) {
      links.forEach(a => {
        a.classList.remove("active");
        if (el.getAttribute("id") === a.getAttribute("href").substring(1)) {
          a.classList.add("active");
        }
      });
    }
  });
}

const BURGER_MENU = document.querySelector("#burger-menu");
const NAVIGATION = document.querySelector("body > header > nav");
const HEADER = document.querySelector("body > header");

let rotated = false;
let opened = false;
BURGER_MENU.addEventListener("click", () => {
  let deg = rotated ? 0 : 90;
  BURGER_MENU.style.transform = `rotate(${deg}deg)`;
  if (opened) {
    NAVIGATION.classList.add("menu-none");
    document.querySelector("#logo").classList.remove("to-left");
    HEADER.classList.remove("shadow");
  } else {
    NAVIGATION.classList.remove("menu-none");
    document.querySelector("#logo").classList.add("to-left");
    HEADER.classList.add("shadow");
  }
  rotated = !rotated;
  opened = !opened;
});

VERTICAL_TURNOFF.addEventListener("click", () => {
  if (document.querySelector("#vertical-black").classList.contains("hidden")) {
    document.querySelector("#vertical-black").classList.remove("hidden");
  } else {
    document.querySelector("#vertical-black").classList.add("hidden");
  }
});
HORIZONTAL_TURNOFF.addEventListener("click", () => {
  if (
    document.querySelector("#horizontal-black").classList.contains("hidden")
  ) {
    document.querySelector("#horizontal-black").classList.remove("hidden");
  } else {
    document.querySelector("#horizontal-black").classList.add("hidden");
  }
});

const IMGS = document.querySelectorAll(".portfolio-img");

IMGS.forEach(img => {
  img.addEventListener("click", event => {
    document.querySelectorAll(".portfolio-img").forEach(i => {
      i.classList.remove("portfolio-img-active");
      event.target.classList.add("portfolio-img-active");
    });
  });
});

FORM.addEventListener("submit", event => {
  event.preventDefault();
  const subject = document.getElementById("subject").value.toString();
  const description = document.getElementById("description").value.toString();
  const subjectMessage = document.getElementById("result-subject");
  const descMessage = document.getElementById("result-description");
  subject != ""
    ? (subjectMessage.innerText = subject)
    : (subjectMessage.innerText = "No subject");
  description != ""
    ? (descMessage.innerText = description)
    : (descMessage.innerText = "No description");
  document.getElementById("message-block").classList.remove("hidden");
});

CLOSE_BUTTON.addEventListener("click", () => {
  document.getElementById("result-subject").innerText = "";
  document.getElementById("result-description").innerText = "";
  document.getElementById("message-block").classList.add("hidden");
  FORM.reset();
});

const PORTFOLIO_MENU = document.querySelector(".buttons");
const PORTFOLIO_BUTTONS = document.querySelectorAll(".buttons button");
const PORTFOLIO_IMAGES_ROW = document.querySelector(".portfolio-row");

PORTFOLIO_MENU.addEventListener("click", event => {
  if (
    event.target.classList.contains("portfolio-btn-active") ||
    event.target.classList.contains("buttons")
  )
    return;
  PORTFOLIO_BUTTONS.forEach(button =>
    button.classList.remove("portfolio-btn-active")
  );
  event.target.classList.add("portfolio-btn-active");
  const PORTFOLIO_IMAGES = document.querySelectorAll(".portfolio-col");
  PORTFOLIO_IMAGES_ROW.insertBefore(
    PORTFOLIO_IMAGES[PORTFOLIO_IMAGES.length - 1],
    PORTFOLIO_IMAGES[0]
  );
});

LEFT_BUTTON.addEventListener("click", () => {
  const CAROUSEL_SLIDES = document.getElementById("carousel-slides").children;
  const CURRENT_SLIDE = document.querySelector(".carousel-slide-active");
  let PREVIOUS_SLIDE = CURRENT_SLIDE.previousElementSibling;
  if (!CURRENT_SLIDE.previousElementSibling) {
    PREVIOUS_SLIDE = CAROUSEL_SLIDES[CAROUSEL_SLIDES.length - 1];
  }
  CURRENT_SLIDE.classList.remove("carousel-slide-active");
  PREVIOUS_SLIDE.classList.add("carousel-slide-active");
});

RIGHT_BUTTON.addEventListener("click", () => {
  const CAROUSEL_SLIDES = document.getElementById("carousel-slides").children;
  const CURRENT_SLIDE = document.querySelector(".carousel-slide-active");
  let NEXT_SLIDE = CURRENT_SLIDE.nextElementSibling;
  if (!CURRENT_SLIDE.nextElementSibling) {
    NEXT_SLIDE = CAROUSEL_SLIDES[0];
  }
  CURRENT_SLIDE.classList.remove("carousel-slide-active");
  NEXT_SLIDE.classList.add("carousel-slide-active");
});
