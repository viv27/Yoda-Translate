var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");
var btnTranslate = document.querySelector("#btn-translate");

var serverURL = "https://api.funtranslations.com/translate/yoda.json";

btnTranslate.addEventListener("click",()=>{
    var inputText = txtInput.value;
    var translationURL = serverURL + "?" +"text="+inputText;

    fetch(translationURL)
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            txtOutput.innerHTML = translatedText;
        })
        .catch(error =>{
            console.log("ERROR OCCURED",error);
            alert("Something wrong with the server! Try again in some time.");
        })



    console.log("clicked")
    
})