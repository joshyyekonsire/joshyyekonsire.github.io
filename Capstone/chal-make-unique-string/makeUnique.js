
function makeUnique(word){
    let myArr=[];
    word = word.split('');
    for (let i=0; i<word.length; i++){
        if (word[i] !== word[i-1] && word[i] !== ' '){
            myArr.push(word[i])
        }
    }
    let wordToString = myArr.join('');
    let littleWord = wordToString.toLowerCase();
    return littleWord;
}

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    let input = document.querySelector("#phrase-input").value;
    let result = makeUnique(input);
    document.querySelector("#result-display").innerHTML = result;
});



