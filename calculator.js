
//num1,num2,result,current_operation, operator
//current operations => 0 (first number)=> 1 (second number) => 2 (equal number)
let current_numbers=["","","",0,0]
//populate digit logic
const digit_container=document.querySelector(".digits_grid")
for (let i=1;i<10;i++){
    const button=document.createElement("button")
    button.classList.add("digits_button")
    button.textContent=i;

    button.addEventListener("click",()=>{
        DigitButtonPressed(button);
    })
    digit_container.appendChild(button)
}
//populate operation logic
const operation_container=document.querySelector(".operator")
const buttons=operation_container.querySelectorAll(".operate_button")

buttons.forEach(button=>{
    button.addEventListener("click", () => {
        operate(button);  
});
});

const zero_button=document.querySelector(".zero_button")
zero_button.addEventListener("click",()=>{
    DigitButtonPressed(zero_button);
})

//function logic
function DigitButtonPressed(button){
    // If previous result was just calculated, reset everything
    if (current_numbers[3]==2){
        current_numbers=["","","",0,0]
    }

    // Decide whether to append to the first or second number
    if (current_numbers[3]==0){
        current_numbers[0]+=button.textContent;
    }
    if (current_numbers[3]==1){
        current_numbers[1]+=button.textContent; 
    }

    // Prevent invalid "00" entry
    if (current_numbers[1]=="00"){
        current_numbers[1]="0";
    }
    updateDisplayResult();
}

function operate(button) {
  switch (button.textContent) {
    case "CE":
      current_numbers = ["", "", "", 0, 0]; //reset
      break;
    case "=":
      if (current_numbers[3] >= 1) {
        current_numbers[3] = 2;
        calculate(); //set calculation
      }
      updateDisplayResult();
      break;
    case "-":
    case "+":
    case "*":
    case "×":
    case "÷":
      if (current_numbers[3] != 1) {
        current_numbers[3]=1;
      }
      let op = button.textContent;
      if (op === "×") op = "*";
      if (op === "÷") op = "/";
      current_numbers[4] = op;
      break;
    default:
      break;
  }
  updateDisplayOperations();
}

function calculate(string){
  const num1 = parseInt(current_numbers[0]);
  const num2 = parseInt(current_numbers[1]);
  const operator = current_numbers[4];

  if (isNaN(num1) || isNaN(2)) {
    current_numbers[2] = "Error";
    return;
  }

  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 != 0) {
        result = (num1 / num2).toFixed(2);
      } else {
        result = "0 is not permissible for division!😡 ";
      }
      break;
  }
  current_numbers[2] = result;
  return;
}

const digital_display = document.querySelector(".display_operations");

function updateDisplayOperations() {
  let number_to_display = "0";
  const [num1, num2, , , operator] = current_numbers;
  if (num1 && operator && num2) {
    number_to_display = `${num1} ${operator} ${num2}`;
  } else if (num1 && operator) {
    number_to_display = `${num1} ${operator}`;
  } else {
    number_to_display = "0";
  }
  digital_display.textContent = number_to_display;
}

const digital_result=document.querySelector(".display_result")
function updateDisplayResult(){
    current_integer_type=current_numbers[3];
    digital_result.textContent=current_numbers[current_integer_type];
}

//const calculator_body=document.querySelector(".calculator_body")
document.addEventListener("keydown",(event)=>{
    keyboardUpdate(event);
});

function keyboardUpdate(event){
    const key=event.key;
    console.log("button press!")
    //Digits
    if (!isNaN(key) && key !==" "){
        DigitButtonPressed({textContent:key})
    }

    //Operations
    if (["+","-","*","/","Enter","="].includes(key)){
        const fakeButton={textContent:key==="Enter"? "=":key}
        operate(fakeButton)
    }
    //Clear
    if (key==="c"||key==="C"||key==="Escape"){
        operate({textContent:"CE"})
    }
}