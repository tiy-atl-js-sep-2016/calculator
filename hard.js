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
};

var controls = document.getElementById("controls");
controls.addEventListener("click", processButton);

