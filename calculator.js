let num1=0;
let num2=0;
let operator="";

//populate digit logic
const digit_container=document.querySelector(".digits_grid")
for (let i=0;i<9;i++){
    const button=document.createElement("button")
    button.classList.add("digits_button")
    button.textContent=i;

    button.addEventListener("click",()=>{
        ButtonPressed(button);
    })
    digit_container.appendChild(button)
}

//function logic
function ButtonPressed(button){

}