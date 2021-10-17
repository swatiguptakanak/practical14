var num = 0;
function displayValue() {
  document.getElementById("value").innerText = `${num}`;
}
displayValue();
var inc = document.getElementById("inc");
inc.addEventListener("click", function () {
  num = num + 1;
  displayValue();
  if (num != 0) {
    dec.disabled = false;
  }
});
var dec = document.getElementById("dec");
dec.addEventListener("click", function () {
  if (num == 0) {
    dec.disabled = true;
  } else {
    num = num - 1;
  }
  displayValue();
});