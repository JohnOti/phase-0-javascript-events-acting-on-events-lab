// Your code here
const dodger1 = document.getElementById("dodger");
function moveDodgerLeft() {
  const leftNumbers = dodger1.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger1.style.left = `${left - 1}px`;
  }
}
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});

function moveDodgerRight() {
  const rightNumbers = dodger1.style.left.replace("px", "");
  const left = parseInt(rightNumbers, 10);

  if (left > 0) {
    dodger1.style.left = `${left + 1}px`;
  }
}
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});
