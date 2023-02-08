const exampleBtn = document.getElementsByClassName("exampleBtn");


for(let i = 0; i < exampleBtn.length; i++) {
    exampleBtn[i].addEventListener("click", ()=> console.log('exampleBtn HIT'));
}