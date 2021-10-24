
let screen = document.getElementById('screen');
button = document.querySelectorAll('button');
let screenValue = '';

for(item of button){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        
        if(buttonText=='X'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }

        else if(buttonText=='C'){
            screenValue = "";
            screen.value = screenValue;
        }

        else if(buttonText == '='){
            screen.value = eval(screenValue);
            screenValue = screen.value;
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}

