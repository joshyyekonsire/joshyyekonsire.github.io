let generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", function () {
  let num = document.getElementById("num-input").value;
  generateIpsumWashington(num);
});

let get100WordsBtn = document.getElementById("get-100-words");
get100WordsBtn.addEventListener("click", function () {
  generateIpsumWashington(100);
});

let get250WordsBtn = document.getElementById("get-250-words");
get250WordsBtn.addEventListener("click", function () {
  generateIpsumWashington(250);
});

let get500WordsBtn = document.getElementById("get-500-words");
get500WordsBtn.addEventListener("click", function () {
  generateIpsumWashington(500);
});

let get1000WordsBtn = document.getElementById("get-1000-words");
get1000WordsBtn.addEventListener("click", function () {
  generateIpsumWashington(1000);
});

let get5000WordsBtn = document.getElementById("get-5000-words");
get5000WordsBtn.addEventListener("click", function () {
  generateIpsumWashington(5000);
});




function generateIpsumWashington(num) {
  let newArr = [];
  let words = washingtonIpsum.split(" ");
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
  let washingtonIpsumJoin = "Washington Ipsum: " + newArr.join(" ");
  let display = document.getElementById("washington-ipsum");
  display.innerHTML = washingtonIpsumJoin;
}

let washingtonIpsum =
"The great events on which my resignation depended having at length taken place; I have now the honor of offering my sincere Congratulations to Congress and of presenting myself before them to surrender into their hands the trust committed to me, and to claim the indulgence of retiring from the Service of my Country. Happy in the confirmation of our Independence and Sovereignty, and pleased with the opportunity afforded the United States of becoming a respectable Nation, I resign with satisfaction the Appointment I accepted with diffidence. A diffidence in my abilities to accomplish so arduous a task, which however was superseded by a confidence in the rectitude of our Cause, the support of the Supreme Power of the Union, and the patronage of Heaven. The Successful termination of the War has verified the most sanguine expectations, and my gratitude for the interposition of Providence, and the assistance I have received from my Countrymen, increases with every review of the momentous Contest. While I repeat my obligations to the Army in general, I should do injustice to my own feelings not to acknowledge in this place the peculiar Services and distinguished merits of the Gentlemen who have been attached to my person during the War. It was impossible the choice of confidential Officers to compose my family should have been more fortunate. Permit me Sir, to recommend in particular those, who have continued in Service to the present moment, as worthy of the favorable notice and patronage of Congress. I consider it an indispensable duty to close this last solemn act of my Official life, by commending the Interests of our dearest Country to the protection of Almighty God, and those who have the superintendence of them, to his holy keeping. Having now finished the work assigned me, I retire from the great theatre of Action; and bidding an Affectionate farewell to this August body under whose orders I have so long acted, I here offer my Commission, and take my leave of all the employments of public life. In looking forward to the moment which is intended to terminate the career of my public life, my feelings do not permit me to suspend the deep acknowledgment of that debt of gratitude which I owe to my beloved country for the many honors it has conferred upon me… Here, perhaps, I ought to stop. But a solicitude for your welfare, which cannot end but with my life, and the apprehension of danger, natural to that solicitude, urge me, on an occasion like the present, to offer to your solemn contemplation, and to recommend to your frequent review, some sentiments which are the result of much reflection Of all the dispositions and habits which lead to political prosperity, religion and morality are indispensable supports. In vain would that man claim the tribute of patriotism, who should labor to subvert these great pillars of human happiness, these firmest props of the duties of men and citizens. The mere politician, equally with the pious man, ought to respect and to cherish them. A volume could not trace all their connections with private and public felicity. Let it simply be asked: Where is the security for property, for reputation, for life, if the sense of religious obligation desert the oaths which are the instruments of investigation in courts of justice ? And let us with caution indulge the supposition that morality can be maintained without religion. Whatever may be conceded to the influence of refined education on minds of peculiar structure, reason and experience both forbid us to expect that national morality can prevail in exclusion of religious principle. It is substantially true that virtue or morality is a necessary spring of popular government. The rule, indeed, extends with more or less force to every species of free government. Who that is a sincere friend to it can look with indifference upon attempts to shake the foundation of the fabric? Against the insidious wiles of foreign influence (I conjure you to believe me, fellow-citizens) the jealousy of a free people ought to be constantly awake, since history and experience prove that foreign influence is one of the most baneful foes of republican government. But that jealousy to be useful must be impartial; else it becomes the instrument of the very influence to be avoided, instead of a defense against it. Excessive partiality for one foreign nation and excessive dislike of another cause those whom they actuate to see danger only on one side, and serve to veil and even second the arts of influence on the other. Real patriots who may resist the intrigues of the favorite are liable to become suspected and odious, while its tools and dupes usurp the applause and confidence of the people, to surrender their interests."

