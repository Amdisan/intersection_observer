const body = document.querySelector("body");

let boxArrlength = 0;
let targetBox = null;

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function newBoxes() {
  let i = boxArrlength;
  let targetValue = boxArrlength + 5;

  if (targetBox) {
    observer.unobserve(targetBox);
  }

  while (i < targetValue) {
    i++;
    const newBox = document.createElement("div");
    newBox.classList.add("box");
    newBox.setAttribute("id", `box${i}`);
    newBox.style.backgroundColor = randomColor();
    newBox.style.border = "2px solid black";
    body.appendChild(newBox);
  }

  boxArrlength = document.querySelectorAll(".box").length;
  targetBox = document.querySelector(`#box${boxArrlength - 1}`);

  observer.observe(targetBox);
}

const options = {
  root: null,
  threshold: 0.1,
};

function callback(entries) {
  if (entries[0].isIntersecting) {
    newBoxes();
  }
}

const observer = new IntersectionObserver(callback, options);

newBoxes();
