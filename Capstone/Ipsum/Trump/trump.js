let generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", function () {
  let num = document.getElementById("num-input").value;
  generateIpsumTrump(num);
});

let get100WordsBtn = document.getElementById("get-100-words");
get100WordsBtn.addEventListener("click", function () {
  generateIpsumTrump(100);
});

let get250WordsBtn = document.getElementById("get-250-words");
get250WordsBtn.addEventListener("click", function () {
  generateIpsumTrump(250);
});

let get500WordsBtn = document.getElementById("get-500-words");
get500WordsBtn.addEventListener("click", function () {
  generateIpsumTrump(500);
});

let get1000WordsBtn = document.getElementById("get-1000-words");
get1000WordsBtn.addEventListener("click", function () {
  generateIpsumTrump(1000);
});

let get5000WordsBtn = document.getElementById("get-5000-words");
get5000WordsBtn.addEventListener("click", function () {
  generateIpsumTrump(5000);
});




function generateIpsumTrump(num) {
  let newArr = [];
  let words = trumpIpsum.split(" ");
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
  let trumpIpsumJoin = "Trump Ipsum: " + newArr.join(" ");
  let display = document.getElementById("trump-ipsum");
  display.innerHTML = trumpIpsumJoin;
}

let trumpIpsum =
"I love the poorly educated Why would Kim Jong-un insult me by calling me old, when I would never call him short and fat? Oh well, I try so hard to be his friend and maybe someday that will happen, You have 2,000 miles. You have mountains, you have rivers, you have things that you dont put the wall in, you dont need them. So the wall. The walls never meant to be 2,100 miles long. We have mountains that are far better than a wall. We have violent rivers that nobody goes near. ...You dont need a wall where you have a natural barrier thats far greater than any wall Im an environmentalist. A lot of people dont understand that. I think I know more about the environment than most people. We are up BIG, but they are trying to STEAL the Election. We will never let them do it. Votes cannot be cast after the Polls are closed! We have it totally under control. Its one person coming in from China. Its going to be just fine. Baghdadi has been on the run for many years, long before I took office. But at my direction, as commander-in-chief of the United States, we obliterated his caliphate, 100%, in March of this year. There has never been anything like it, this great movement of ours. Never been anything like it, and perhaps there will never be anything like it again. Together we built the greatest economy in the history of the world. Many people think that because of this, China played a very active role in the 2020 election. Just saying. The vicious ISIS caliphate, which no president was able to conquer, was decimated by me and our great warriors in less than three weeks. And yet Ive gone decades, decades without a war. The first president to do it for that long a period. Now we are a nation in decline. We are a failing nation. Our southern border has been erased and our country is being invaded by millions and millions of unknown people, many of whom are entering for a very bad and sinister reason. And you know what that reason is. The blood-soaked streets of our once-great cities are cesspools of violent crimes. And Ukraine, which would have never happened if I were your president. Thanks to the words of wisdom, he said thank you to the wrong country for inviting him to a major summit. You cannot mention the nuclear word. Its too devastating. Under Biden and the radical Democrats, America has been mocked, derided and brought to its knees, perhaps like never before. I believe the American people will overwhelmingly reject the lefts platform of national ruin. Much criticism is being placed on the fact that the Republican Party should have done better. And frankly, much of this blame is correct. I do want to point out that in the midterms, my endorsement success rate was 232 wins and only 22 losses. This is an elegant night and an elegant place. Despite the outcome in the Senate, we cannot lose hope and we must all work very hard for a gentleman and a great person named Herschel Walker. In order to make America great and glorious again, I am tonight announcing my candidacy for president of the United States. Some people say, How do you speak before so many people all the time? When theres love in the room, its really easy, if you want to know the truth. If you look at the numbers, if you look at whats happened with Hispanic, with African American, with Asian, and just look at whats happening Prior to Covid coming in, the people were calling me. … You wouldnt believe it, people that were so far-left, I figured theyd never speak to me and I would never speak to them." 


