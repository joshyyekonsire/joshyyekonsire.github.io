const irohIpsum =
  "Sometimes life is like this dark tunnel. You can't always see the light at the end of the tunnel, but if you just keep moving... you will come to a better place. When you're in your darkest place, you give yourself hope and that's inner strength. Sometimes the best way to solve your own problems is to help someone else. Protection and power are overrated. I think you are very wise to choose happiness and love. Life happens wherever you are, whether you make it or not. Failure is only the opportunity to begin again. Only this time, more wisely. Good times become good memories, but bad times become good lessons. Are you so busy fighting you cannot see your own ship has set sail? It's time for you to look inward, and start asking yourself the big questions. Who are you? And what do you want? In the darkest times, hope is something you give yourself. That is the meaning of inner strength. Sometimes the best way to solve your own problems is to help someone else. Sometimes the best way to solve your own problems is to help someone else. Sometimes the best way to solve your own problems is to help someone else. In the darkest times, hope is something you give yourself. That is the meaning of inner strength. It's time for you to look inward, and start asking yourself the big questions. Who are you? And what do you want? Are you so busy fighting you cannot see your own ship has set sail? Good times become good memories, but bad times become good lessons. Failure is only the opportunity to begin again. Only this time, more wisely.";



let generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", function () {
  let num = document.getElementById("num-input").value;
  generateIpsumIroh(num);
});

let get100WordsBtn = document.getElementById("get-100-words");
get100WordsBtn.addEventListener("click", function () {
  generateIpsumIroh(100);
});

let get250WordsBtn = document.getElementById("get-250-words");
get250WordsBtn.addEventListener("click", function () {
  generateIpsumIroh(250);
});

let get500WordsBtn = document.getElementById("get-500-words");
get500WordsBtn.addEventListener("click", function () {
  generateIpsumIroh(500);
});

let get1000WordsBtn = document.getElementById("get-1000-words");
get1000WordsBtn.addEventListener("click", function () {
  generateIpsumIroh(1000);
});

let get5000WordsBtn = document.getElementById("get-5000-words");
get5000WordsBtn.addEventListener("click", function () {
  generateIpsumIroh(5000);
});


function generateIpsumIroh(num) {
    let newArr = [];
    let words = irohIpsum.split(" ");
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
    let irohIpsumJoin = "Iroh Ipsum: " + newArr.join(" ");
    let display = document.getElementById("iroh-ipsum");
    display.innerHTML = irohIpsumJoin;
  }










