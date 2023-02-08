let generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", function () {
  let num = document.getElementById("num-input").value;
  generateIpsum(num);
});

let get100WordsBtn = document.getElementById("get-100-words");
get100WordsBtn.addEventListener("click", function () {
  generateIpsum(100);
});

let get250WordsBtn = document.getElementById("get-250-words");
get250WordsBtn.addEventListener("click", function () {
  generateIpsum(250);
});

let get500WordsBtn = document.getElementById("get-500-words");
get500WordsBtn.addEventListener("click", function () {
  generateIpsum(500);
});

let get1000WordsBtn = document.getElementById("get-1000-words");
get1000WordsBtn.addEventListener("click", function () {
  generateIpsum(1000);
});

let get5000WordsBtn = document.getElementById("get-5000-words");
get5000WordsBtn.addEventListener("click", function () {
  generateIpsum(5000);
});




function generateIpsum(num) {
  let newArr = [];
  let words = yodaIpsum.split(" ");
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
  let yodaIpsumJoin = "Yoda Ipsum: " + newArr.join(" ");
  let display = document.getElementById("yoda-ipsum");
  display.innerHTML = yodaIpsumJoin;
}

let yodaIpsum =
  "No! Try not. Do. Or do not. There is no try. Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering. Size matters not. No! Try not. Do. Or do not. There is no try. Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering. Look at me. Judge me by my size, do you? Hmm? And well you should not. For my ally is the Force, and a powerful ally it is. Life creates it, makes it grow. Its energy surrounds us and binds us. Luminous beings are we, not this crude matter. You must feel the Force around you. Here, between you, me, the tree, the rock—everywhere, yes. Even between the land and the ship. Patience you must have, my young Padawan I dont believe it!” “That is why you fail Great warrior. Hmm. Wars not make one great You must unlearn what you have learned. A Jedi uses the Force for knowledge and defense, never for attack. Pass on what you have learned. Strength, mastery, hmm… but weakness, folly, failure, also. Yes, failure, most of all. The greatest teacher, failure is Death is a natural part of life. Rejoice for those around you who transform into the Force. Mourn them do not. Miss them do not. Attachment leads to jealously. The shadow of greed, that is. Train yourself to let go of everything you fear to lose. Many of the truths that we cling to depend on our point of view. If no mistake have you made, yet losing you are, a different game you should play. Named must your fear be, before banish it you can. Yes, I am afraid. Hmm, surprised are you? A challenge lifelong it is, not to bend fear into anger When you look at the dark side, careful you must be. For the dark side looks back Once you start down the dark path, forever will it dominate your destiny. Consume you, it will The boy you trained, gone he is. Consumed by Darth Vader Whats in that cave? Only what you take with you A Jedi must have the deepest commitment, the most serious mind. This one a long time have I watched. All his life has he looked away… to the future, to the horizon. Never his mind on where he was Attachment leads to jealously. The shadow of greed, that is. Train yourself to let go of everything you fear to lose. Many of the truths that we cling to depend on our point of view. If no mistake have you made, yet losing you are, a different game you should play folly, failure, also. Yes, failure, most of all. For the dark side looks back Once you start down the dark path, forever will it dominate your destiny. Consume you, it will The boy you trained, gone he is. Consumed by Darth Vader Whats in that cave? Only what you take with you A Jedi must have the deepest commitment, the most serious mind. This one a long time have I watched. All his life has he looked away… to the future, to the horizon. Never his mind on where he was Attachment leads to jealously. The shadow of greed, that is. Train yourself to let go of everything you fear to lose. Many of the truths that we cling to depend on our point of view. If no mistake have you made, yet losing you are, a different game you should play folly, failure, also. Yes, failure, most of all. No! Try not. Do. Or do not. There is no try.   Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.Size matters not. No! Try not. Do. Or do not. There is no try.Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering. Look at me. Judge me by my size, do you? Hmm? And well you should not. For my ally is the Force, and a powerful ally it is. Life creates it, makes it grow. Its energy surrounds us and binds us. Luminous beings are we, not this crude matter. You must feel the Force around you. Here, between you, me, the tree, the rock—everywhere, yes. Even between the land and the ship. Patience you must have, my young Padawan I dont believe it!” “That is why you fail Great warrior. Hmm. Wars not make one great You must unlearn what you have learned. A Jedi uses the Force for knowledge and defense, never for attack. Pass on what you have learned. Strength, mastery, hmm… but weakness, folly, failure, also. Yes, failure, most of all.  If no mistake have you made, yet losing you are, a different game you should play folly, failure, also. Yes, failure, most of all. The greatest teacher, failure is Death is a natural part of life. Rejoice for those around you who transform into the Force. Mourn them do not. Miss them do not. Attachment leads to jealously. The shadow of greed, that is. Train yourself to let go of everything you fear to lose. Many of the truths that we cling to depend on our point of view. If no mistake have you made, yet losing you are, a different game you should play. Named must your fear be, before banish it you can. Yes, I am afraid. Hmm, surprised are you? A challenge lifelong it is, not to bend fear into anger When you look at the dark side, careful you must be. For the dark side looks back Once you start down the dark path, forever will it dominate your destiny. Consume you, it will The boy you trained, gone he is. Consumed by Darth Vader Whats in that cave? Only what you take with you Many of the truths that we cling to depend on our point of view. A Jedi must have the deepest commitment, the most serious mind. This one a long time have I watched. All his life has he looked away… to the future, to the horizon. Never his mind on where he was Attachment leads to jealously. The shadow of greed, that is. Train yourself to let go of everything you fear to lose. Many of the truths that we cling to depend on our point of view. If no mistake have you made, yet losing you are, a different game you should play folly, failure, also. Yes, failure, most of all. For the dark side looks back Once you start down the dark path, forever will it dominate your destiny. Consume you, it will The boy you trained, gone he is. Consumed by Darth Vader Whats in that cave? Only what you take with you A Jedi must have the deepest commitment, the most serious mind. This one a long time have I watched. All his life has he looked away… to the future, to the horizon. Never his mind on where he was Attachment leads to jealously. The shadow of greed, that is. Train yourself to let go of everything you fear to lose. Many of the truths that we cling to depend on our point of view.";
