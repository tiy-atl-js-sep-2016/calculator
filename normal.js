var sumInputs = function () {
  var input1 = document.getElementById("value-one");
  var input2 = document.getElementById("value-two");
  var sum = Number(input1.value) + Number(input2.value);

  return sum;
};

var getAnswer = function () { };


console.log("The code loaded");

var addClickEvent = function () {
  var button = document.getElementById("calculate-button");
  // button.addEventListener("click", getAnswer);
  button.addEventListener("click", function () {
    console.log("button got clicked");
  });
};
