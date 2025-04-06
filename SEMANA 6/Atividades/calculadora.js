document.addEventListener("DOMContentLoaded", function () {
  let app = document.getElementById("app");

  let calcContainer = document.createElement("div");
  calcContainer.classList.add("calculadora");

  let display = document.createElement("input");
  display.classList.add("display");
  display.setAttribute("readonly", true);
  display.value = "0";

  let buttons = [
    ["AC", "+/-", "%", "/"],
    ["7", "8", "9", "x"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ",", "="],
  ];

  let buttonContainer = document.createElement("div");
  buttonContainer.classList.add("botoes-container");

  buttons.forEach((row) => {
    row.forEach((text) => {
      let btn = document.createElement("button");
      btn.innerText = text;

      if (!isNaN(text) || text === ".") {
        btn.classList.add("numero");
      } else if (["/", "x", "-", "+", "="].includes(text)) {
        btn.classList.add("operador");
      } else {
        btn.classList.add("operador");
      }

      if (text === "0") {
        btn.classList.add("zero");
      }

      btn.addEventListener("click", () => handleInput(text));
      buttonContainer.appendChild(btn);
    });
  });

  calcContainer.appendChild(display);
  calcContainer.appendChild(buttonContainer);
  app.appendChild(calcContainer);

  let currentInput = "";
  let previousInput = "";
  let operator = "";

  function handleInput(value) {
    if (!isNaN(value) || value === ".") {
      if (display.value === "0" && value !== ".") {
        currentInput = value;
      } else {
        currentInput += value;
      }
      display.value = currentInput;
    } else if (["+", "-", "x", "/"].includes(value)) {
      if (currentInput === "") return;
      operator = value;
      previousInput = currentInput;
      currentInput = "";
      display.value = previousInput + " " + operator; // Mostra operador no display
    } else if (value === "=") {
      if (previousInput && operator) {
        let result = calculate(
          parseFloat(previousInput),
          parseFloat(currentInput),
          operator
        );
        display.value = result; // Agora exibe apenas o resultado
        currentInput = result.toString();
        previousInput = "";
        operator = "";
      }
    } else if (value === "AC") {
      currentInput = "";
      previousInput = "";
      operator = "";
      display.value = "0";
    } else if (value === "+/-") {
      currentInput = currentInput
        ? (parseFloat(currentInput) * -1).toString()
        : "";
      display.value = currentInput;
    } else if (value === "%") {
      currentInput = currentInput
        ? (parseFloat(currentInput) / 100).toString()
        : "";
      display.value = currentInput;
    }
  }

  function calculate(num1, num2, op) {
    switch (op) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "x":
        return num1 * num2;
      case "/":
        return num2 !== 0 ? num1 / num2 : "Erro";
    }
  }
});
