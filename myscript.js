var inputText = document.querySelector("#input-txt");
var inputButton = document.querySelector("#input-btn");
var outputText = document.querySelector("#output-txt");




// function clickeventhandler()
function clickevenhandler() {
    console.log("clicked");
    console.log(inputText.value);
    
    // alert("welcome "+inputText.value);
    outputText.innerText=inputText.value;
    console.log(outputText);
    console.log(outputText.innerText);
    

}

inputButton.addEventListener("click",clickevenhandler );


