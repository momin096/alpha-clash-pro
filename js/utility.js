function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}


function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}


function setCurrentAlphabet(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText  = value;
}


function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText ;
    return text;
}


function continueGame(){
    const alphabet = getARandomAlphabet();

    // const currentAlphabetElement = document.getElementById('current-alphabet');
    // currentAlphabetElement.innerText = alphabet;
    setCurrentAlphabet('current-alphabet', alphabet);

    // set background color 
    setBackgroundColorById(alphabet);

}


function getARandomAlphabet(){

    // Create an alphabet Array
    const alphabetString  = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    // get a random index 0 - 25
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
    
}



function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
    element.classList.add('text-white');
}
function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
    element.classList.remove('text-white');
}



function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;

}


function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;

}



