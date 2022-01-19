function hoverBlock(itemhover, itemblock, iconitem) {
  const itemHover = document.querySelector(itemhover);
  const itemBlock = document.querySelector(itemblock);
  const iconItem = document.querySelector(iconitem);

  const myFunction = () => {
    itemBlock.classList.add("hoverAnm");
    iconItem.classList.add("iconAnm");
  };
  const myThirdFunction = () => {
    itemBlock.classList.remove("hoverAnm");
    iconItem.classList.remove("iconAnm");
  };
  itemHover.addEventListener("mouseover", myFunction);
  itemHover.addEventListener("mouseout", myThirdFunction);
}

hoverBlock(
  "header #navbar ul li.one",
  "header #navbar ul li.one .list",
  "header #navbar ul li.one i"
);

hoverBlock(
  "header #navbar ul li.two",
  "header #navbar ul li.two .list",
  "header #navbar ul li.two i"
);
function hoverBlockTwo(itemhover) {
  const itemHover = document.querySelector(itemhover);
  const itemBlock = document.querySelector(".aboutitem");
  const iconItem = itemHover.querySelector("i");

  const myFunction = () => {
    itemBlock.classList.add("hoverAnm");
    iconItem.classList.add("iconAnm");
  };
  const myThirdFunction = () => {
    itemBlock.classList.remove("hoverAnm");
    iconItem.classList.remove("iconAnm");
  };
  itemHover.addEventListener("mouseover", myFunction);
  itemHover.addEventListener("mouseout", myThirdFunction);
}

hoverBlockTwo("header #navbar ul li.two .list p.one");
hoverBlockTwo("header #navbar ul li.two .list p.two");

// Nav fixed code

const barsIcon = document.querySelector("header #navbar .bars");
const navMobile = document.querySelector("header #navbar .navbar-mobile");
const bg = document.querySelector("header .bg");
const timesIcon = document.querySelector(
  "header #navbar .navbar-mobile ul li.logo-times i"
);

barsIcon.addEventListener("click", () => {
  navMobile.classList.add("block");
  bg.classList.add("block");
});
timesIcon.addEventListener("click", () => {
  navMobile.classList.remove("block");
  bg.classList.remove("block");
});
bg.addEventListener("click", () => {
  navMobile.classList.remove("block");
  bg.classList.remove("block");
});

function mobile(demo, listDemo) {
  const demos = document.querySelector(demo);
  const listDemos = document.querySelector(listDemo);

  demos.addEventListener("click", () => {
    listDemos.classList.toggle("height");
  });
}

mobile("#demos", ".list-demos");
mobile("#pages", ".list-demos.two");

// Filter Projects

const filterBtn = document.querySelector(".filter-btns"),
  spans = [...document.querySelectorAll("#works .projects-container")],
  items = [...document.querySelectorAll("#works .projects-container .item")];

filterBtn.addEventListener("click", (e) => {
  const filter = e.target.closest("span");
  if (!filter) return;
  const id = filter.dataset.id;
  spans.forEach((span) => span.classList.remove("active"));
  filter.classList.add("active");
  items.forEach((item) => {
    item.classList.add("hide");
    item.classList.remove("active");
    const targetId = item.dataset.id;
    if (targetId === id) {
      item.classList.remove("hide");
      item.classList.add("active");
    } else if (id === "all") {
      item.classList.remove("hide");
      item.classList.add("active");
    }
  });
});

// year

function nowTime(item) {
  document.querySelector(item).textContent = new Date().getFullYear();
}
nowTime("footer h4 span");

// Fix Nav

const navBar = document.querySelector("nav#navbar");
const navHeight = navBar.getBoundingClientRect().height;

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    navBar.classList.add("fix-nav");
  } else {
    navBar.classList.remove("fix-nav");
  }
});

// color control

const changeIcon = document.querySelector(".version .change i");
const version = document.querySelector(".version");
const light = document.querySelector(".color-control .light");
const dark = document.querySelector(".color-control .dark");
const body = document.querySelector("body");

changeIcon.addEventListener("click", () => {
  version.classList.toggle("active");
  changeIcon.classList.toggle("active");
});
window.addEventListener("scroll", () => {
  version.classList.remove("active");
  changeIcon.classList.remove("active");
});

light.addEventListener("click", () => {
  light.classList.add("active");
  dark.classList.remove("active");
  body.classList.remove("dark");
});
dark.addEventListener("click", () => {
  dark.classList.add("active");
  light.classList.remove("active");
  body.classList.add("dark");
});
