let text = "";
let resultClicked = false;
let operandClicked = false;

function numberButton(button, data) {
  button.addEventListener("click", (event) => {
    operandClicked = false;
    if (resultClicked == true) {
      text = "";
      resultClicked = false;
    }
    text = text + data;

    selectID("expression").textContent = text;
  });
}

function operandButton(button, data) {
  button.addEventListener("click", (event) => {
    if (operandClicked != true) {
      resultClicked = false;
      text = text + data;
      selectID("expression").textContent = text;
    } else {
      selectID("delete").click();
      text = text + data;
      selectID("expression").textContent = text;
    }
    operandClicked = true;
  });
}

function selectID(id) {
  return document.getElementById(id);
}

numberButton(selectID("1"), 1);
numberButton(selectID("2"), 2);
numberButton(selectID("3"), 3);
numberButton(selectID("4"), 4);
numberButton(selectID("5"), 5);
numberButton(selectID("6"), 6);
numberButton(selectID("7"), 7);
numberButton(selectID("8"), 8);
numberButton(selectID("9"), 9);
numberButton(selectID("0"), 0);
operandButton(selectID("mul"), "x");
operandButton(selectID("add"), "+");
operandButton(selectID("sub"), "-");
operandButton(selectID("divide"), "/");
operandButton(selectID("dec"), ".");

selectID("delete").addEventListener("click", () => {
  text = selectID("expression").textContent;
  text = text.slice(0, -1);
  document.getElementById("expression").textContent = text;
});

selectID("result").addEventListener("click", () => {
  resultClicked = true;
  expression = document.getElementById("expression").textContent;
  expression = expression.replace(/x/g, "*");
  text = eval(expression);
  result = parseFloat(text);
  result = parseFloat(result.toFixed(3));
  text = result;
  selectID("expression").textContent = result;
});

selectID("reset").addEventListener("click", () => {
  selectID("expression").textContent = "0";
  text = "";
});

document.addEventListener("keydown", (event) => {
  const key = event.key;
  switch (key) {
    case "1":
      selectID("1").click();
      break;
    case "2":
      selectID("2").click();
      break;
    case "3":
      selectID("3").click();
      break;
    case "4":
      selectID("4").click();
      break;
    case "5":
      selectID("5").click();
      break;
    case "6":
      selectID("6").click();
      break;
    case "7":
      selectID("7").click();
      break;
    case "8":
      selectID("8").click();
      break;
    case "9":
      selectID("9").click();
      break;
    case "0":
      selectID("0").click();
      break;
    case "+":
      selectID("add").click();
      break;
    case "-":
      selectID("sub").click();
      break;
    case "/":
      selectID("divide").click();
      break;
    case "*":
      selectID("mul").click();
      break;
    case "x":
      selectID("mul").click();
      break;
    case ".":
      selectID("dec").click();
      break;
    case "=":
      selectID("result").click();
      break;
    case "Enter":
      selectID("result").click();
      break;
    case "Backspace":
      selectID("delete").click();
      break;
    case "Delete":
      selectID("delete").click();
      break;
  }
});
