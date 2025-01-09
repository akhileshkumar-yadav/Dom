let string = "";
let button = document.querySelectorAll('button');
Array.from(button).forEach((button) => {
    button.addEventListener('click',(e) => {
       console.log(e.target.innerHTML);
        if(e.target.innerText == '='){
            string = eval(string);
            document.querySelector('input').value = string;
            }
            // ac button => clear the input field
        else if(e.target.innerText == 'AC'){
            string = "";
            document.querySelector('input').value = string;
        }
        // m+ button => add the value to the local storage
        else if(e.target.innerText == 'M+'){
            let num = parseInt(document.querySelector('input').value);
            localStorage.setItem('num',num);
            string += num;
            document.querySelector('input').value = string;
        }
        // m- button => subtract the value from the local storage
        else if(e.target.innerText == 'M-'){
            let num = parseInt(document.querySelector('input').value);
            localStorage.setItem('num',num);
            string -= num;
            document.querySelector('input').value = string;
        }
        // please check the below code
        else{
            string += e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})