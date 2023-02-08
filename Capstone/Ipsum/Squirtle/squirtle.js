let generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", function () {
  let num = document.getElementById("num-input").value;
  generateIpsumSquirtle(num);
});

let get100WordsBtn = document.getElementById("get-100-words");
get100WordsBtn.addEventListener("click", function () {
  generateIpsumSquirtle(100);
});

let get250WordsBtn = document.getElementById("get-250-words");
get250WordsBtn.addEventListener("click", function () {
  generateIpsumSquirtle(250);
});

let get500WordsBtn = document.getElementById("get-500-words");
get500WordsBtn.addEventListener("click", function () {
  generateIpsumSquirtle(500);
});

let get1000WordsBtn = document.getElementById("get-1000-words");
get1000WordsBtn.addEventListener("click", function () {
  generateIpsumSquirtle(1000);
});

let get5000WordsBtn = document.getElementById("get-5000-words");
get5000WordsBtn.addEventListener("click", function () {
  generateIpsumSquirtle(5000);
});




function generateIpsumSquirtle(num) {
  let newArr = [];
  let words = squirtleIpsum.split(" ");
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
  let squirtleIpsumJoin = "Squirtle Ipsum: " + newArr.join(" ");
  let display = document.getElementById("squirtle-ipsum");
  display.innerHTML = squirtleIpsumJoin;
}

let squirtleIpsum =
"Squirtle! Squirtle Squirt! Squirtle! Tackle Squirtle! Squirtle Squirt! Squirtle! Tail Whip Squirtle! Squirtle Squirt! Squirtle! Water Gun Squirtle! Squirtle Squirt! Squirtle! Withdraw Squirtle! Squirtle Squirt! Squirtle! Rapid Spin Squirtle! Squirtle Squirt! Squirtle! Bite Squirtle! Squirtle Squirt! Squirtle! Water Pulse Squirtle! Squirtle Squirt! Squirtle! Protect Squirtle! Squirtle Squirt! Squirtle! Rain Dance Squirtle! Squirtle Squirt! Squirtle! Aqua Tail Squirtle! Squirtle Squirt! Squirtle! Shell Smash Squirtle! Squirtle Squirt! Squirtle! Iron Defense Squirtle! Squirtle Squirt! Squirtle! Hydro Pump Squirtle! Squirtle Squirt! Squirtle! bubbles Squirtle! Squirtle Squirt! Squirtle! Dig BUBBLES Squirtle! Squirtle Squirt! Squirtle! Tackle Squirtle! Squirtle Squirt! Squirtle! Tail Whip Squirtle! Squirtle Squirt! Squirtle! Water Gun Squirtle! Squirtle Squirt! Squirtle! Withdraw Squirtle! Squirtle Squirt! Squirtle! Rapid Spin Squirtle! Squirtle Squirt! Squirtle! Bite Squirtle! Squirtle Squirt! Squirtle! Water Pulse Squirtle! Squirtle Squirt! Squirtle! Protect Squirtle! Squirtle Squirt! Squirtle! Rain Dance Squirtle! Squirtle Squirt! Squirtle! Aqua Tail Squirtle! Squirtle Squirt! Squirtle! Shell Smash Squirtle! Squirtle Squirt! Squirtle! Iron Defense Squirtle! Squirtle Squirt! Squirtle! Hydro Pump Squirtle! Squirtle Squirt! Squirtle! bubbles Squirtle! Squirtle Squirt! Squirtle! Dig BUBBLES Squirtle! Squirtle Squirt! Squirtle! Tackle Squirtle! Squirtle Squirt! Squirtle! Tail Whip Squirtle! Squirtle Squirt! Squirtle! Water Gun Squirtle! Squirtle Squirt! Squirtle! Withdraw Squirtle! Squirtle Squirt! Squirtle! Rapid Spin Squirtle! Squirtle Squirt! Squirtle! Bite Squirtle! Squirtle Squirt! Squirtle! Water Pulse Squirtle! Squirtle Squirt! Squirtle! Protect Squirtle! Squirtle Squirt! Squirtle! Rain Dance Squirtle! Squirtle Squirt! Squirtle! Aqua Tail Squirtle! Squirtle Squirt! Squirtle! Shell Smash Squirtle! Squirtle Squirt! Squirtle! Iron Defense Squirtle! Squirtle Squirt! Squirtle! Hydro Pump Squirtle! Squirtle Squirt! Squirtle! bubbles Squirtle! Squirtle Squirt! Squirtle! Dig BUBBLES Squirtle! Squirtle Squirt! Squirtle! Tackle Squirtle! Squirtle Squirt! Squirtle! Tail Whip Squirtle! Squirtle Squirt! Squirtle! Water Gun Squirtle! Squirtle Squirt! Squirtle! Withdraw Squirtle! Squirtle Squirt! Squirtle! Rapid Spin Squirtle! Squirtle Squirt! Squirtle! Bite Squirtle! Squirtle Squirt! Squirtle! Water Pulse Squirtle! Squirtle Squirt! Squirtle! Protect Squirtle! Squirtle Squirt! Squirtle! Rain Dance Squirtle! Squirtle Squirt! Squirtle! Aqua Tail Squirtle! Squirtle Squirt! Squirtle! Shell Smash Squirtle! Squirtle Squirt! Squirtle! Iron Defense Squirtle! Squirtle Squirt! Squirtle! Hydro Pump Squirtle! Squirtle Squirt! Squirtle! bubbles Squirtle! Squirtle Squirt! Squirtle! Dig BUBBLES Squirtle! Squirtle Squirt! Squirtle! Tackle Squirtle! Squirtle Squirt! Squirtle! Tail Whip Squirtle! Squirtle Squirt! Squirtle! Water Gun Squirtle! Squirtle Squirt! Squirtle! Withdraw Squirtle! Squirtle Squirt! Squirtle! Rapid Spin Squirtle! Squirtle Squirt! Squirtle! Bite Squirtle! Squirtle Squirt! Squirtle! Water Pulse Squirtle! Squirtle Squirt! Squirtle! Protect Squirtle! Squirtle Squirt! Squirtle! Rain Dance Squirtle! Squirtle Squirt! Squirtle! Aqua Tail Squirtle! Squirtle Squirt! Squirtle! Shell Smash Squirtle! Squirtle Squirt! Squirtle! Iron Defense Squirtle! Squirtle Squirt! Squirtle! Hydro Pump Squirtle! Squirtle Squirt! Squirtle! bubbles Squirtle! Squirtle Squirt! Squirtle! Dig BUBBLES Squirtle! Squirtle Squirt! Squirtle! Tackle Squirtle! Squirtle Squirt! Squirtle! Tail Whip Squirtle! Squirtle Squirt! Squirtle! Water Gun Squirtle! Squirtle Squirt! Squirtle! Withdraw Squirtle! Squirtle Squirt! Squirtle! Rapid Spin Squirtle! Squirtle Squirt! Squirtle! Bite Squirtle! Squirtle Squirt! Squirtle! Water Pulse Squirtle! Squirtle Squirt! Squirtle! Protect Squirtle! Squirtle Squirt! Squirtle! Rain Dance Squirtle! Squirtle Squirt! Squirtle! Aqua Tail Squirtle! Squirtle Squirt! Squirtle! Shell Smash Squirtle! Squirtle Squirt! Squirtle! Iron Defense Squirtle! Squirtle Squirt! Squirtle! Hydro Pump Squirtle! Squirtle Squirt! Squirtle! bubbles Squirtle! Squirtle Squirt! Squirtle! Dig BUBBLES Squirtle! Squirtle Squirt! Squirtle! Tackle Squirtle! Squirtle Squirt! Squirtle! Tail Whip Squirtle! Squirtle Squirt! Squirtle! Water Gun Squirtle! Squirtle Squirt! Squirtle! Withdraw Squirtle! Squirtle Squirt! Squirtle! Rapid Spin Squirtle! Squirtle Squirt! Squirtle! Bite Squirtle! Squirtle Squirt! Squirtle! Water Pulse Squirtle! Squirtle Squirt! Squirtle! Protect Squirtle! Squirtle Squirt! Squirtle! Rain Dance Squirtle! Squirtle Squirt! Squirtle! Aqua Tail Squirtle! Squirtle Squirt! Squirtle! Shell Smash Squirtle! Squirtle Squirt! Squirtle! Iron Defense Squirtle! Squirtle Squirt! Squirtle! Hydro Pump Squirtle! Squirtle Squirt! Squirtle! bubbles Squirtle! Squirtle Squirt! Squirtle! Dig BUBBLES Squirtle! Squirtle Squirt! Squirtle! Tackle Squirtle! Squirtle Squirt! Squirtle! Tail Whip Squirtle! Squirtle Squirt! Squirtle! Water Gun Squirtle! Squirtle Squirt! Squirtle! Withdraw Squirtle! Squirtle Squirt! Squirtle! Rapid Spin Squirtle! Squirtle Squirt! Squirtle! Bite Squirtle! Squirtle Squirt! Squirtle! Water Pulse Squirtle! Squirtle Squirt! Squirtle! Protect Squirtle! Squirtle Squirt! Squirtle! Rain Dance Squirtle! Squirtle Squirt! Squirtle! Aqua Tail Squirtle! Squirtle Squirt! Squirtle! Shell Smash Squirtle! Squirtle Squirt! Squirtle! Iron Defense Squirtle! Squirtle Squirt! Squirtle! Hydro Pump Squirtle! Squirtle Squirt! Squirtle! bubbles Squirtle! Squirtle Squirt! Squirtle! Dig BUBBLES Squirtle! Squirtle Squirt! Squirtle! Tackle Squirtle! Squirtle Squirt! Squirtle! Tail Whip Squirtle! Squirtle Squirt! Squirtle! Water Gun Squirtle! Squirtle Squirt! Squirtle! Withdraw Squirtle! Squirtle Squirt! Squirtle! Rapid Spin Squirtle! Squirtle Squirt! Squirtle! Bite Squirtle! Squirtle Squirt! Squirtle! Water Pulse Squirtle! Squirtle Squirt! Squirtle! Protect Squirtle! Squirtle Squirt! Squirtle! Rain Dance Squirtle! Squirtle Squirt! Squirtle! Aqua Tail Squirtle! Squirtle Squirt! Squirtle! Shell Smash Squirtle! Squirtle Squirt! Squirtle! Iron Defense Squirtle! Squirtle Squirt! Squirtle! Hydro Pump Squirtle! Squirtle Squirt! Squirtle! bubbles Squirtle! Squirtle Squirt! Squirtle! Dig BUBBLES Squirtle! Squirtle Squirt! Squirtle! Tackle Squirtle!";



