var inputText = document.querySelector("#input-txt");
var inputButton = document.querySelector("#input-btn");
var outputText = document.querySelector("#output-txt");
var serverURL ="http://127.0.0.1:5500/index.html";

function getTranslationURL(text) {
    return serverURL + "?"+ "text" + text
}


// function clickeventhandler()
function clickevenhandler() {
    // console.log("clicked");
    // console.log(inputText.value);
    
    // alert("welcome "+inputText.value);
    // outputText.innerText=inputText.value;
    // console.log(outputText);
    // console.log(outputText.innerText);
    ouputText = input-txt.value;
    fetch(getTranslationURL(inputText))
        .then(response =>response.json())
        .then(json => console.log(json))

}

inputButton.addEventListener("click",clickevenhandler );


