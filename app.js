const button = document.querySelector(".container-button");
const mainScreen = document.querySelector("#screen");
var resetScreen = false;
var count = false;
var tmpVal = '';
var operator = '';

button.addEventListener("click", (e) => {

    const buttonClick = e.target;
    const buttonValue = buttonClick.innerText;

    if(buttonValue == "C"){
      mainScreen.value= "";
    }
    else if (buttonValue == "<") {
      mainScreen.value = mainScreen.value.slice(0, -1);
    }
    else if (buttonValue == "=") {
      if(count == true){
        mainScreen.value = eval(tmpVal + operator + mainScreen.value);
        count = false;
      }
    }
    else if (buttonClick.classList.contains('operator')) {
      tmpVal = mainScreen.value;
      operator = buttonValue;
      resetScreen = true;
    }
    else{

        if (resetScreen == true) {
          mainScreen.value = buttonValue;
          resetScreen = false;
          count = true;
        }else{
          mainScreen.value = mainScreen.value + buttonValue;
        }
    }
    console.log(buttonValue);
});
