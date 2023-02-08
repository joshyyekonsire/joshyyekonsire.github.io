const gonIpsum =
"Let's Travel Around And See The Whole World Together, Just You And Me. I'm Glad You're Here With Me. No, I'm Really Glad I Met You In The First Place. There's Only One Reason I Can Focus Everything I've Got On Hitting The Ball. It's Because I Know Killua's The One Holding It. I'll Introduce Him To Killua. I'll Tell Him He's My Best Friend In The World! No Matter Where We Go, We're Part Of The Gang. You should enjoy the little detours to the fullest. Because that's where you'll find the things more important than what you want. Qualification isn't something we have to talk about. The ones who are not okay with their success can go through training until they are. Let's Travel Around And See The Whole World Together, Just You And Me. I'm Glad You're Here With Me. No, I'm Really Glad I Met You In The First Place. There's Only One Reason I Can Focus Everything I've Got On Hitting The Ball. It's Because I Know Killua's The One Holding It. I'll Introduce Him To Killua. I'll Tell Him He's My Best Friend In The World! No Matter Where We Go, We're Part Of The Gang. You should enjoy the little detours to the fullest. Because that's where you'll find the things more important than what you want. Qualification isn't something we have to talk about. The ones who are not okay with their success can go through training until they are.";


let generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", function () {
  let num = document.getElementById("num-input").value;
  generateIpsumGon(num);
});

let get100WordsBtn = document.getElementById("get-100-words");
get100WordsBtn.addEventListener("click", function () {
    generateIpsumGon(100);
});

let get250WordsBtn = document.getElementById("get-250-words");
get250WordsBtn.addEventListener("click", function () {
    generateIpsumGon(250);
});

let get500WordsBtn = document.getElementById("get-500-words");
get500WordsBtn.addEventListener("click", function () {
    generateIpsumGon(500);
});

let get1000WordsBtn = document.getElementById("get-1000-words");
get1000WordsBtn.addEventListener("click", function () {
    generateIpsumGon(1000);
});

let get5000WordsBtn = document.getElementById("get-5000-words");
get5000WordsBtn.addEventListener("click", function () {
    generateIpsumGon(5000);
});


function generateIpsumGon(num) {
    let newArr = [];
    let words = gonIpsum.split(" ");
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
    let ipsumGonJoin = "Gon Ipsum: " + newArr.join(" ");
    let display = document.getElementById("gon-ipsum");
    display.innerHTML = ipsumGonJoin;
  }









