let generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", function () {
  let num = document.getElementById("num-input").value;
  generateIpsumZuko(num);
});

let get100WordsBtn = document.getElementById("get-100-words");
get100WordsBtn.addEventListener("click", function () {
  generateIpsumZuko(100);
});

let get250WordsBtn = document.getElementById("get-250-words");
get250WordsBtn.addEventListener("click", function () {
  generateIpsumZuko(250);
});

let get500WordsBtn = document.getElementById("get-500-words");
get500WordsBtn.addEventListener("click", function () {
  generateIpsumZuko(500);
});

let get1000WordsBtn = document.getElementById("get-1000-words");
get1000WordsBtn.addEventListener("click", function () {
  generateIpsumZuko(1000);
});

let get5000WordsBtn = document.getElementById("get-5000-words");
get5000WordsBtn.addEventListener("click", function () {
  generateIpsumZuko(5000);
});



function generateIpsumZuko(num) {
  let newArr = [];
  let words = zukoIpsum.split(" ");
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
  let zukoIpsumJoin = "Zuko Ipsum: " + newArr.join(" ");
  let display = document.getElementById("zuko-ipsum");
  display.innerHTML = zukoIpsumJoin;
}

let zukoIpsum =

"Yes. I Juggled. Youre So Beautiful When You Hate The World. I Have Changed. The Scars Not On The Wrong Side! Thats Rough, Buddy. I'm Never Happy. No, You're Not. My Name Is Zuko. Son Of Ursa And Fire Lord Ozai. Prince Of The Fire Nation And Heir To The Throne. You Rise With The Moon ... I Rise With The Sun. Because Their Honor Didn't Hinge On The Avatar's Capture. Mine Does.  You've Always Thrown Everything You Could At Me! Well, I Can Take It, And Now I Can Give It Back! I Did Lose My Way. I Promised My Uncle That I Would Restore The Honor Of The Fire Nation. And I Will. You Have To Try Every Time. You Can't Quit Because You're Afraid You Might Fail. I Don't Need Luck, Though. I Don't Want It. I've Had To Struggle And Fight And That's Made Me Strong. It's Made Me Who I Am. For so long now I thought if my dad accepted me, I'd be happy. I'm back home now, my dad talks to me, he even thinks I'm a hero! Everything should be perfect, right? I should be happy now, but I'm not! I'm angrier than ever and I don't know why. For so long now I thought if my dad accepted me, I'd be happy. I'm back home now, my dad talks to me, he even thinks I'm a hero! Everything should be perfect, right? I should be happy now, but I'm not! I'm angrier than ever and I don't know why. I was going to save it for later! Yup, thats Uncle Iroh. Well….weve….been traveling around for a long time. Yes. I juggled. Yes. I juggled. Well … weve….been traveling around for a long time. Ill save you from the pirates. My honor. My throne. My country. Im about to lose them all. I have changed. Thats rough, buddy. Thats rough, buddy. You must look within yourself to save yourself from your other self, only then will your true self reveal itself Yes. I Juggled. Youre So Beautiful When You Hate The World. I Have Changed. The Scars Not On The Wrong Side! Thats Rough, Buddy. I'm Never Happy. No, You're Not. My Name Is Zuko. Son Of Ursa And Fire Lord Ozai. Prince Of The Fire Nation And Heir To The Throne. You Rise With The Moon ... I Rise With The Sun. Because Their Honor Didn't Hinge On The Avatar's Capture. Mine Does.  You've Always Thrown Everything You Could At Me! Well, I Can Take It, And Now I Can Give It Back! I Did Lose My Way. I Promised My Uncle That I Would Restore The Honor Of The Fire Nation. And I Will. You Have To Try Every Time. You Can't Quit Because You're Afraid You Might Fail. I Don't Need Luck, Though. I Don't Want It. I've Had To Struggle And Fight And That's Made Me Strong. It's Made Me Who I Am. For so long now I thought if my dad accepted me, I'd be happy. I'm back home now, my dad talks to me, he even thinks I'm a hero! Everything should be perfect, right? I should be happy now, but I'm not! I'm angrier than ever and I don't know why. For so long now I thought if my dad accepted me, I'd be happy. I'm back home now, my dad talks to me, he even thinks I'm a hero! Everything should be perfect, right? I should be happy now, but I'm not! I'm angrier than ever and I don't know why. I was going to save it for later! Yup, thats Uncle Iroh. Well….weve….been traveling around for a long time. Yes. I juggled. Yes. I juggled. Well … weve….been traveling around for a long time. Ill save you from the pirates. My honor. My throne. My country. Im about to lose them all. I have changed. Thats rough, buddy. Thats rough, buddy. You must look within yourself to save yourself from your other self, only then will your true self reveal itself Yes. I Juggled. Instead Of Lightning It Just Blew Up In My Face, Just Like Everything Always Does. I should be happy now, but I'm not! I'm angrier than ever and I don't know why. I was going to save it for later! Yup, thats Uncle Iroh. Well….weve….been traveling around for a long time. Yes. I juggled. Yes. I juggled. Well … weve….been traveling around for a long time. Ill save you from the pirates. My honor. My throne. My country. Im about to lose them all. I have changed. Thats rough, buddy. Thats rough, buddy. You must look within yourself to save yourself from your other self, only then will your true self reveal itself Yes. I Juggled. Youre So Beautiful When You Hate The World. I Have Changed. The Scars Not On The Wrong Side! Thats Rough, Buddy. I'm Never Happy. No, You're Not. My Name Is Zuko. Son Of Ursa And Fire Lord Ozai. Prince Of The Fire Nation And Heir To The Throne. You Rise With The Moon ... I Rise With The Sun. Because Their Honor Didn't Hinge On The Avatar's Capture. Mine Does.  You've Always Thrown Everything You Could At Me! Well, I Can Take It, And Now I Can Give It Back! I Did Lose My Way. I Promised My Uncle That I Would Restore The Honor Of The Fire Nation. And I Will. You Have To Try Every Time. You Can't Quit Because You're Afraid You Might Fail. I Don't Need Luck, Though. I Don't Want It. I've Had To Struggle And Fight And That's Made Me Strong. It's Made Me Who I Am. For so long now I thought if my dad accepted me, I'd be happy. I'm back home now, my dad talks to me, he even thinks I'm a hero! Everything should be perfect, right? I should be happy now, but I'm not! I'm angrier than ever and I don't know why.  During The Meeting, I Was The Perfect Prince, The Son My Father Wanted, But I Wasn't Me. For so long now I thought if my dad accepted me, I'd be happy. I'm back home now, my dad talks to me, he even thinks I'm a hero! Everything should be perfect, right? I should be happy now, but I'm not! I'm angrier than ever and I don't know why. I was going to save it for later! Yup, thats Uncle Iroh. Well….weve….been traveling around for a long time. Yes. I juggled. Yes. I juggled. Well … weve….been traveling around for a long time. Ill save you from the pirates. My honor. My throne. My country. Youre So Beautiful When You Hate The World. Im about to lose them all. I have changed. Thats rough, buddy. Thats rough, buddy. You must look within yourself to save yourself from your other self, only then will your true self reveal itself";
