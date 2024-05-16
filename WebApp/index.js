console.log("Main page loaded");

var applyButton = document.querySelector("#apply");

var paragraph1 = document.querySelector("#paragraph1");

var input = document.querySelector("#input");


applyButton.addEventListener("click", function (e) {
  console.log("Buttons clicked" , input.value)

	paragraph1.textContent = input.value;
});




var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function (e) {
  console.log("second Button clicked")
  paragraph1.textContent = "Cserelj ki";
  input.value = "";

});



resetButton.addEventListener("mouseover", function (e) {
  console.log("second button hover",e)
});

// selecting the elements for which we want to add a tooltip
const tooltip = document.getElementById("tooltip-text");
const tooltip2 = document.getElementById("tooltip-text2");

// change display to 'block' on mouseover
resetButton.addEventListener('mouseover', () => {
  tooltip.style.display = 'block';
}, false);

// change display to 'none' on mouseleave
resetButton.addEventListener('mouseleave', () => {
  tooltip.style.display = 'none';
}, false);

applyButton.addEventListener('mouseover', () => {
  tooltip2.style.display = 'block';
}, false);

// change display to 'none' on mouseleave
applyButton.addEventListener('mouseleave', () => {
  tooltip2.style.display = 'none';
}, false);

