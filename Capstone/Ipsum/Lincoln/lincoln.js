const lincolnIpsum =
"Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal. Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this. But, in a larger sense, we can not dedicate  we can not consecrate  we can not hallow  this ground. The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here. It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us  that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion  that we here highly resolve that these dead shall not have died in vain  that this nation, under God, shall have a new birth of freedom  and that government of the people, by the people, for the people, shall not perish from the earth.";


let generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", function () {
  let num = document.getElementById("num-input").value;
  generateIpsumLincoln(num);
});

let get100WordsBtn = document.getElementById("get-100-words");
get100WordsBtn.addEventListener("click", function () {
  generateIpsumLincoln(100);
});

let get250WordsBtn = document.getElementById("get-250-words");
get250WordsBtn.addEventListener("click", function () {
  generateIpsumLincoln(250);
});

let get500WordsBtn = document.getElementById("get-500-words");
get500WordsBtn.addEventListener("click", function () {
  generateIpsumLincoln(500);
});

let get1000WordsBtn = document.getElementById("get-1000-words");
get1000WordsBtn.addEventListener("click", function () {
  generateIpsumLincoln(1000);
});

let get5000WordsBtn = document.getElementById("get-5000-words");
get5000WordsBtn.addEventListener("click", function () {
  generateIpsumLincoln(5000);
});


function generateIpsumLincoln(num) {
    let newArr = [];
    let words = lincolnIpsum.split(" ");
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
    let lincolnIpsumJoin = "Lincoln Ipsum: " + newArr.join(" ");
    let display = document.getElementById("lincoln-ipsum");
    display.innerHTML = lincolnIpsumJoin;
  }










