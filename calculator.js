let display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function clearDisplay() {
  display.value = "";
}

function deleteLastValue() {
  display.value = display.value.slice(0, -1);
}

document.addEventListener("keydown", function (event) {
  const key = event.key;

  if (!isNaN(key) || "+-*/.".includes(key)) {
    appendToDisplay(key);
  }

  if (key === "Enter" || key === "=") {
    calculate();
  }

  if (key === "Delete" || key === "Escape") {
    clearDisplay();
  }

  if (key === "Backspace") {
    deleteLastValue();
  }
});
