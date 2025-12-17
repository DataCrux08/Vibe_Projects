const display = document.getElementById("display");

function Append(input){
    display.value += input;
}

function ClearDisplay(){
    display.value = "";
}

function calculate(){
    try {
        display.value = Function('return (' + display.value + ')')();
    }
    catch (e) {
<<<<<<< HEAD
=======
        display.value = "Error";
>>>>>>> 32a4362 (Fixed the input error and also the timeout function)
        setTimeout(ClearDisplay,1500);
    }
}
