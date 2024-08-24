const btnsElement = document.querySelectorAll("button")
const inputElement = document.getElementById("result")

for(let i = 0; i < btnsElement.length; i++){
    btnsElement[i].addEventListener("click",()=>{
        const btnValue = btnsElement[i].textContent
        if(btnValue === "C"){
            clearResult()
        }
        else if(btnValue === "="){
            calculateResult()
        }else{
            appendValue(btnValue)
        }
    })
}
function clearResult(){
    inputElement.value = ""
}
function calculateResult(){
    inputElement.value = eval(inputElement.value)    
}
function appendValue(btnValue){
    inputElement.value += btnValue
}

