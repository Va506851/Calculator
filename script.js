const input = document.getElementById('inputbox');
const buttons = document.querySelectorAll('button')
console.log(buttons)

let string = " "
let arr= Array.from(buttons);
console.log(arr);
arr.forEach((button)=>{
    button.addEventListener('click',()=>{
        if(button.innerHTML == "="){
            if (string.trim() === "") {
                alert("Please enter a number before pressing '='");
            } else {
                string = eval(string);
                input.value = string;
            }
        }
        
        else if(button.innerHTML == 'AC'){
             input.value = ""  ;
              string = " "
        }
        else if(button.innerHTML == 'DEL'){
            string = string.slice(0, -1);
            input.value = string;
        }
        else{
            string += button.innerHTML;
            if(string.length > 15){
                alert("Maximum 15 digits allowed");
                string = string.slice(0, 15)
            }
            input.value = string;
        }
    })
})