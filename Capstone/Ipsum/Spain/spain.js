let generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", function () {
  let num = document.getElementById("num-input").value;
  generateIpsumSpain(num);
});

let get100WordsBtn = document.getElementById("get-100-words");
get100WordsBtn.addEventListener("click", function () {
  generateIpsumSpain(100);
});

let get250WordsBtn = document.getElementById("get-250-words");
get250WordsBtn.addEventListener("click", function () {
  generateIpsumSpain(250);
});

let get500WordsBtn = document.getElementById("get-500-words");
get500WordsBtn.addEventListener("click", function () {
  generateIpsumSpain(500);
});

let get1000WordsBtn = document.getElementById("get-1000-words");
get1000WordsBtn.addEventListener("click", function () {
  generateIpsumSpain(1000);
});

let get5000WordsBtn = document.getElementById("get-5000-words");
get5000WordsBtn.addEventListener("click", function () {
  generateIpsumSpain(5000);
});




function generateIpsumSpain(num) {
  let newArr = [];
  let words = spainIpsum.split(" ");
  for (let i = 0; i < num / 5; i++) {
    let randomIndex = Math.floor(Math.random() * 100);
    newArr.push(
      words[i + randomIndex],
      words[i + randomIndex + 1],
      words[i + randomIndex + 2],
      words[i + randomIndex + 3],
      words[i + randomIndex + 4]
    );
  }
  let spainIpsumJoin = "Spain Ipsum: " + newArr.join(" ");
  let display = document.getElementById("spain-ipsum");
  display.innerHTML = spainIpsumJoin
}
let spainIpsum = "Deja que te cuente una historia sobre un pollito. Su nombre es Pollito Tito. Él vive en un gallinero pequeño y normal en un barrio pequeño y normal. Pollito Tito no es alto ni bajo. No es gordo ni flaco. No es inteligente ni tonto. Es un pollito completamente normal. Una mañana completamente normal, Pollito Tito está desayunando en la cocina. Le gustan las tostadas con mantequilla y el café con crema. Está leyendo las noticias. Ve un artículo aterrador con un título aterrador. Dice: ¡EL CIELO SE ESTÁ CAYENDO! Pollito Tito está tan asustado que se le cae la tostada dentro del café. ¡Plop! Deja que te cuente una historia sobre un pollito. Su nombre es Pollito Tito. Él vive en un gallinero pequeño y normal en un barrio pequeño y normal. Pollito Tito no es alto ni bajo. No es gordo ni flaco. No es inteligente ni tonto. Es un pollito completamente normal. Una mañana completamente normal, Pollito Tito está desayunando en la cocina. Le gustan las tostadas con mantequilla y el café con crema. Está leyendo las noticias. Ve un artículo aterrador con un título aterrador. Dice: ¡EL CIELO SE ESTÁ CAYENDO! Pollito Tito está tan asustado que se le cae la tostada dentro del café. ¡Plop! Deja que te cuente una historia sobre un pollito. Su nombre es Pollito Tito. Él vive en un gallinero pequeño y normal en un barrio pequeño y normal. Pollito Tito no es alto ni bajo. No es gordo ni flaco. No es inteligente ni tonto. Es un pollito completamente normal. Una mañana completamente normal, Pollito Tito está desayunando en la cocina. Le gustan las tostadas con mantequilla y el café con crema. Está leyendo las noticias. Ve un artículo aterrador con un título aterrador. Dice: ¡EL CIELO SE ESTÁ CAYENDO! Pollito Tito está tan asustado que se le cae la tostada dentro del café. ¡Plop! Deja que te cuente una historia sobre un pollito. Su nombre es Pollito Tito. Él vive en un gallinero pequeño y normal en un barrio pequeño y normal. Pollito Tito no es alto ni bajo. No es gordo ni flaco. No es inteligente ni tonto. Es un pollito completamente normal. Una mañana completamente normal, Pollito Tito está desayunando en la cocina. Le gustan las tostadas con mantequilla y el café con crema. Está leyendo las noticias. Ve un artículo aterrador con un título aterrador. Dice: ¡EL CIELO SE ESTÁ CAYENDO! Pollito Tito está tan asustado que se le cae la tostada dentro del café. ¡Plop! Deja que te cuente una historia sobre un pollito. Su nombre es Pollito Tito. Él vive en un gallinero pequeño y normal en un barrio pequeño y normal. Pollito Tito no es alto ni bajo. No es gordo ni flaco. No es inteligente ni tonto. Es un pollito completamente normal. Una mañana completamente normal, Pollito Tito está desayunando en la cocina. Le gustan las tostadas con mantequilla y el café con crema. Está leyendo las noticias. Ve un artículo aterrador con un título aterrador. Dice: ¡EL CIELO SE ESTÁ CAYENDO! Pollito Tito está tan asustado que se le cae la tostada dentro del café. ¡Plop! Deja que te cuente una historia sobre un pollito. Su nombre es Pollito Tito. Él vive en un gallinero pequeño y normal en un barrio pequeño y normal. Pollito Tito no es alto ni bajo. No es gordo ni flaco. No es inteligente ni tonto. Es un pollito completamente normal. Una mañana completamente normal, Pollito Tito está desayunando en la cocina. Le gustan las tostadas con mantequilla y el café con crema. Está leyendo las noticias. Ve un artículo aterrador con un título aterrador. Dice: ¡EL CIELO SE ESTÁ CAYENDO! Pollito Tito está tan asustado que se le cae la tostada dentro del café. ¡Plop! ";



