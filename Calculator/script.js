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
        display.value = "Error";
    }
}
