
//num1,operator,num2,current_operation, result
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

//function logic
function DigitButtonPressed(button){
    if (current_numbers[3]=0){
        current_numbers[0]+=button.textContent;
    }
    if (current_numbers[3]=1){
        current_numbers[1]+=button.textContent; 
    }
}

function operate(){

}


const digital_display=document.querySelector(".display_result")
function updateDisplay(){
}