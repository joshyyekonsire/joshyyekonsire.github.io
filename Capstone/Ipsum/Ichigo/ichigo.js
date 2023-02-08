const ichigoIpsum =
"Are you any different!? You sacrificed yourself to save me that time!! At that time were you thinking about complicated stuff like this is my Shinigami duty!? That's not what sacrificing yourself is!! At the very least... I'm different!! I haven't accepted any commitment... If things get bad I might run away... since I'm not a good enough person to be able to sacrifice my life for total strangers. But... unfortunately I'm also not trash that can live happily without paying back his debts! Big brothers... you know why they're born first? To protect the little ones that come after them!! What kind of brother says that he'll KILL his own sister?! Even a MONSTER shouldn't say that!! At first, I thought I want to protect Mom. The ones to protect increased with the birth of my sisters. I kept going to a dojo for the sake of protecting them. I got a bit stronger. The ones I thought I wanted to protect became more and more I'm not superman, so I can't say anything big like I'll protect everyone on earth. I'm not a modest guy who will say it's enough if I can protect as many people as my two hands can handle either. I want to protect a mountain-load of people. If you didn't tell me until now, you must have had your reasons. And that's your problem, not mine. I wouldn't know how to start. I can't think of any way of asking that wouldn't mean traipsing all over your feelings and staining them with dirt. So I'll wait. Until you decide someday that you want to tell me, until you decide it's time for me to know. Until that time comes, you don't have to say a thing";



let generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", function () {
  let num = document.getElementById("num-input").value;
  generateIpsumIchigo(num);
});

let get100WordsBtn = document.getElementById("get-100-words");
get100WordsBtn.addEventListener("click", function () {
  generateIpsumIchigo(100);
});

let get250WordsBtn = document.getElementById("get-250-words");
get250WordsBtn.addEventListener("click", function () {
  generateIpsumIchigo(250);
});

let get500WordsBtn = document.getElementById("get-500-words");
get500WordsBtn.addEventListener("click", function () {
    generateIpsumIchigo(500);
});

let get1000WordsBtn = document.getElementById("get-1000-words");
get1000WordsBtn.addEventListener("click", function () {
    generateIpsumIchigo(1000);
});

let get5000WordsBtn = document.getElementById("get-5000-words");
get5000WordsBtn.addEventListener("click", function () {
    generateIpsumIchigo(5000);
});


function generateIpsumIchigo(num) {
    let newArr = [];
    let words = ichigoIpsum.split(" ");
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
    let ipsumIchigoJoin = "Ichigo Ipsum: " + newArr.join(" ");
    let display = document.getElementById("ichigo-ipsum");
    display.innerHTML = ipsumIchigoJoin;
  }









