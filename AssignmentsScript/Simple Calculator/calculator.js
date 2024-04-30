function AppendToDisplay(input){
    document.getElementById("display").value += input;
}

function ClearDisplay(){
    display.value="";
}

function Calculate(){
    display.value=eval(display.value);
}