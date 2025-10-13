const frases = ["Alex José Fonseca Saúde"];

const textElement = document.getElementById("text");

let frasesIndex = 0;
let letterIndex = 0;
function typeText(){
    if(frasesIndex < frases.length){
    if (letterIndex < frases[frasesIndex].length){
        textElement.textContent += frases[frasesIndex].charAt(letterIndex);
        letterIndex++;
        setTimeout(typeText, 50);
    }else{
        setTimeout(apagarText, 1000);
    }
}
    else{
        setTimeout(()=>{
            apagarText();
        },1000);
    }
}
function apagarText(){
    if(letterIndex > 0){
        textElement.textContent = frases[frasesIndex].substring(0,letterIndex - 1);
        letterIndex--;
        setTimeout(apagarText,30);
    }else{
        frasesIndex++;
        if(frasesIndex >= frases.length){
            frasesIndex = 0;
        }
        setTimeout(typeText,500);
    }
}
typeText();

