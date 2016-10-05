var calcState = {
  left: "",
  right: "",
  operator: ""
};

var processButton = function (event) {
  var target = event.target;
  var buttonType = target.dataset.type;

  if (buttonType === "operator") { processOperator(target); }
  if (buttonType === "number")   { processNumber(target); }
  if (buttonType === "clear")    { processClear(target); }
  if (buttonType === "equal")    { processEqual(target); }

  updateDisplay();
};

var updateDisplay = function () {
  var display = document.getElementById("display");
  display.textContent = calcState.left + " " + calcState.operator + " " + calcState.right;
};

var updateCalc = function (newLeft) {
  calcState = { left: newLeft, right: "", operator: "" };
};

var processClear = function () {
  calcState = { left: "", right: "", operator: "" };
};

var processOperator = function (element) {
  calcState.operator = element.textContent;
};

var processNumber = function (element) {
  if (calcState.operator === "") {
    calcState.left += element.textContent;
  } else {
    calcState.right += element.textContent;
  }
};

var processEqual = function (element) {
  var operation = calcState.operator;
  var left = Number(calcState.left);
  var right = Number(calcState.right);

  if (operation === "+") { updateCalc(left + right); }
  if (operation === "-") { updateCalc(left - right); }
  if (operation === "*") { updateCalc(left * right); }
  if (operation === "/") { updateCalc(left / right); }
};

var controls = document.getElementById("controls");
controls.addEventListener("click", processButton);

