// This is the data for holding which page we are
let pageNumber = 0;

// Have the content for these pages
const pages = [
  {
    copy: "a Brooklyn-based graphic designer",
    background: "#edc7a9",
    circle: "#3e78ed",
  },
  {
    copy: "Kanye West's biggest fan",
    background: "#a1fffe",
    circle: "#e34a47",
  },
  {
    copy: "looking for a job at the start of October",
    background: "#d3c7f3",
    circle: "#f7fe00",
  },
  {
    copy: "letting you download her pdf",
    background: "#faffb8",
    circle: "#b472e6",
  },
];

// Pick the relevant tags
const nextTag = document.querySelector("footer img.next");
const previousTag = document.querySelector("footer img.prev");
const outputTag = document.querySelector("h2");
const circleTag = document.querySelector("section div.circle");
const bodyTag = document.querySelector("body");
const randomTag = document.querySelector("footer img.random");

// Make a next function to increase the PageNumber
const next = function () {
  pageNumber = pageNumber + 1;

  if (pageNumber > pages.length - 1) {
    pageNumber = 0;
  }

  updateSection();
};

// Make a previous function to decrease the pageNumber
const previous = function () {
  pageNumber = pageNumber - 1;
  if (pageNumber < 0) {
    pageNumber = pages.length - 1;
  }

  updateSection();
};

// Make a rondom function to randomize the PageNumber
const random = function () {
  pageNumber = Math.floor(Math.random() * pages.length);
  updateSection();
};

// This will update the section's content and style
const updateSection = function () {
  outputTag.innerHTML = pages[pageNumber].copy;
  circleTag.style.backgroundColor = pages[pageNumber].circle;
  bodyTag.style.backgroundColor = pages[pageNumber].background;
};

// On click of nextTag, run this
nextTag.addEventListener("click", function () {
  next();
});

// On click of previousTag, run this
previousTag.addEventListener("click", function () {
  previous();
});

// On click of randomTag, run this
randomTag.addEventListener("click", function () {
  random();
});

// when a user press a key, check for arrow
//
document.addEventListener("keyup", function (event) {
  if (event.key == "ArrowRight") {
    next();
  }

  if (event.key == "ArrowLeft") {
    previous();
  }

  if (event.key == "ArrowDown") {
    random();
  }
});
