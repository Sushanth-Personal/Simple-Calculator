let text = "";
let resultClicked = false;
let operandClicked=false;

function numberButton(button, data) {
  button.addEventListener("click", (event) => {
    operandClicked=false;
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
    if(operandClicked!=true){
        
    resultClicked = false;
    text = text + data;
    console.log(text);
    selectID("expression").textContent = text;
    }
    else{
        selectID("delete").click();
        text=text+data;
        selectID("expression").textContent=text;
    }
    operandClicked=true;
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
numberButton(selectID("dec"), ".");

selectID("delete").addEventListener("click", ()=>{
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
