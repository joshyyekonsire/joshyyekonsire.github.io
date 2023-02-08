let generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", function () {
  let num = document.getElementById("num-input").value;
  generateIpsumFrance(num);
});

let get100WordsBtn = document.getElementById("get-100-words");
get100WordsBtn.addEventListener("click", function () {
  generateIpsumFrance(100);
});

let get250WordsBtn = document.getElementById("get-250-words");
get250WordsBtn.addEventListener("click", function () {
  generateIpsumFrance(250);
});

let get500WordsBtn = document.getElementById("get-500-words");
get500WordsBtn.addEventListener("click", function () {
  generateIpsumFrance(500);
});

let get1000WordsBtn = document.getElementById("get-1000-words");
get1000WordsBtn.addEventListener("click", function () {
  generateIpsumFrance(1000);
});

let get5000WordsBtn = document.getElementById("get-5000-words");
get5000WordsBtn.addEventListener("click", function () {
  generateIpsumFrance(5000);
});




function generateIpsumFrance(num) {
  let newArr = [];
  let words = franceIpsum.split(" ");
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
  let franceIpsumJoin = "France Ipsum: " + newArr.join(" ");
  let display = document.getElementById("france-ipsum");
  display.innerHTML = franceIpsumJoin
}
let franceIpsum = "Demain, dès laube, à lheure où blanchit la campagne, Je partirai. Vois-tu, je sais que tu mattends. Jirai par la forêt, jirai par la montagne. Je ne puis demeurer loin de toi plus longtemps. Je marcherai les yeux fixés sur mes pensées, Sans rien voir au dehors, sans entendre aucun bruit, Seul, inconnu, le dos courbé, les mains croisées, Triste, et le jour pour moi sera comme la nuit. Je ne regarderai ni or du soir qui tombe, Ni les voiles au loin descendant vers Harfleur, Et quand jarriverai, je mettrai sur ta tombe Un bouquet de houx vert et de bruyère en fleur. Et nos amours Faut-il quil men souvienne La joie venait toujours après la peine Vienne la nuit sonne lheure Les jours sen vont je demeure Les mains dans les mains restons face à face Tandis que sous Le pont de nos bras passe Des éternels regards londe si lasse Demain, dès laube, à lheure où blanchit la campagne, Je partirai. Vois-tu, je sais que tu mattends. Jirai par la forêt, jirai par la montagne. Je ne puis demeurer loin de toi plus longtemps. Je marcherai les yeux fixés sur mes pensées, Sans rien voir au dehors, sans entendre aucun bruit, Seul, inconnu, le dos courbé, les mains croisées, Triste, et le jour pour moi sera comme la nuit. Je ne regarderai ni or du soir qui tombe, Ni les voiles au loin descendant vers Harfleur, Et quand jarriverai, je mettrai sur ta tombe Un bouquet de houx vert et de bruyère en fleur. Et nos amours Faut-il quil men souvienne La joie venait toujours après la peine Vienne la nuit sonne lheure Les jours sen vont je demeure Les mains dans les mains restons face à face Tandis que sous Le pont de nos bras passe Des éternels regards londe si lasse Demain, dès laube, à lheure où blanchit la campagne, Je partirai. Vois-tu, je sais que tu mattends. Jirai par la forêt, jirai par la montagne. Je ne puis demeurer loin de toi plus longtemps. Je marcherai les yeux fixés sur mes pensées, Sans rien voir au dehors, sans entendre aucun bruit, Seul, inconnu, le dos courbé, les mains croisées, Triste, et le jour pour moi sera comme la nuit. Je ne regarderai ni or du soir qui tombe, Ni les voiles au loin descendant vers Harfleur, Et quand jarriverai, je mettrai sur ta tombe Un bouquet de houx vert et de bruyère en fleur. Et nos amours Faut-il quil men souvienne La joie venait toujours après la peine Vienne la nuit sonne lheure Les jours sen vont je demeure Les mains dans les mains restons face à face Tandis que sous Le pont de nos bras passe Des éternels regards londe si lasse Demain, dès laube, à lheure où blanchit la campagne, Je partirai. Vois-tu, je sais que tu mattends. Jirai par la forêt, jirai par la montagne. Je ne puis demeurer loin de toi plus longtemps. Je marcherai les yeux fixés sur mes pensées, Sans rien voir au dehors, sans entendre aucun bruit, Seul, inconnu, le dos courbé, les mains croisées, Triste, et le jour pour moi sera comme la nuit. Je ne regarderai ni or du soir qui tombe, Ni les voiles au loin descendant vers Harfleur, Et quand jarriverai, je mettrai sur ta tombe Un bouquet de houx vert et de bruyère en fleur. Et nos amours Faut-il quil men souvienne La joie venait toujours après la peine Vienne la nuit sonne lheure Les jours sen vont je demeure Les mains dans les mains restons face à face Tandis que sous Le pont de nos bras passe Des éternels regards londe si lasse";



