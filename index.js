import express from 'express';
import mysql from 'mysql2';
import path from 'path';
import { fileURLToPath } from 'url';
const app = express();
let lng = 'ru';
/*const connection = mysql.createConnection({
    host: "176.123.165.15",
    user: "pril",
    password: "1205",
    database: "project"
});*/


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static('sait'));


let p = ["красивый", "веселый", "умный", "старый", "новый", "длинный", "короткий", "быстрый", "медленный", "светлый", "темный", "большой", "маленький", "легкий", "тяжелый", "ясный", "туманный", "прозрачный", "полный", "пустой", "глубокий", "поверхностный", "чистый", "грязный", "сухой", "влажный", "горячий", "холодный", "сладкий", "горький", "соленый", "кислый", "алкогольный", "водянистый", "твердый", "мягкий", "жесткий", "плотный", "легкий", "тонкий", "толстый", "высокий", "низкий", "длинный", "короткий", "широкий", "узкий", "прямой", "кривой", "плоский", "выпуклый", "скругленный", "острой", "тупой", "четкой", "нечеткой", "ясным", "мутным", "прозрачным", "непрозрачным", "полным", "пустым", "глубоким", "поверхностным", "чистым", "грязным", "сухим", "влажным", "горячим", "холодным", "сладким", "горьким", "соленым", "кислым", "алкогольным", "водянистым", "твердым", "мягким", "жестким", "плотным", "легким", "тонким", "толстым", "высоким", "низким", "длинным", "коротким", "широким", "узким", "прямым", "кривым", "плоским", "выпуклым", "скругленным", "острым", "тупым", "четким", "нечетким"];
let s = ["дом", "город", "студент", "учитель", "книга", "комната", "стул", "стол", "фрукты", "яблоко", "апельсин", "банан", "кошка", "собака", "мышь", "абрикос", "автомобиль", "банан", "василёк", "газета", "деньги","ежевика", "закат", "иван", "карандаш", "листок", "магнит", "небо","оленёнок", "птица", "разговор", "светлый", "творог", "улица", "фонарь","хлеб","человек", "шоколад", "щука", "эхо", "ягоды"];
let g = ["бежать", "быть", "видеть", "жаловать", "знать", "играть", "любить", "писать", "работать", "смотреть", "умирать", "ходить", "читать", "жарить", "делать", "есть", "идти", "летать", "мыть", "находиться", "отправлять", "петь", "пить", "помнить", "просыпаться", "рассказывать", "смеяться", "собираться", "считать", "танцевать", "убивать", "учить", "футболить", "хватать", "целовать", "шахматить", "ящик"];
let n = ["быстро", "медленно", "легко", "тяжело", "высоко", "низко","далеко", "близко", "скоро", "поздно", "рано", "здесь", "там", "отсюда", "туда", "вместе", "одиноко", "совсем", "почти","всегда", "никогда", "часто", "редко", "немного", "очень", "слишком","довольно", "полностью", "частью", "целиком", "всегда", "никогда","часто", "редко", "немного", "очень", "слишком", "довольно", "полностью","частью", "целиком"];
let w = ["в", "на", "под", "над", "за", "о", "по", "при", "с", "через", "до", "для", "из", "между", "около", "про", "перед", "после", "при", "с", "со", "внутри", "вне", "без", "вокруг", "кроме", "за", "против", "вместо", "ввиду", "вследствие", "вопреки"];
let u = ['и', 'или', 'но', 'также', 'тем не менее', 'поэтому', 'вместе с тем', 'в то же время', 'однако', 'в то время как', 'в связи с этим', 'в результате', 'после этого', 'до тех пор', 'в зависимости от', 'в отличие от', 'вместо', 'вместо того чтобы', 'вместо него', 'вместо нее', 'вместо них', 'вместо вас', 'вместо меня', 'вместо тебя', 'вместо нас', 'вместо себя', 'вместо кого-то', 'вместо чего-то'];

let p1 = [
  "beautiful", "cheerful", "smart", "old", "new", "long", "short", "fast", "slow", 
  "light", "dark", "large", "small", "easy", "heavy", "clear", "misty", "transparent", 
  "full", "empty", "deep", "surface", "clean", "dirty", "dry", "moist", "hot", "cold", 
  "sweet", "bitter", "salty", "acidic", "alcoholic", "watery", "hard", "soft", "rigid", 
  "dense", "thin", "thick", "high", "low", "long", "short", "wide", "narrow", "straight", 
  "curved", "flat", "convex", "rounded", "sharp", "blunt", "clear", "fuzzy", "transparent", 
  "opaque", "full", "empty", "deep", "surface", "clean", "dirty", "dry", "moist", "hot", 
  "cold", "sweet", "bitter", "salty", "acidic", "alcoholic", "watery", "hard", "soft", "rigid", 
  "dense", "thin", "thick", "high", "low", "long", "short", "wide", "narrow", "straight", 
  "curved", "flat", "convex", "rounded", "sharp", "blunt", "clear", "fuzzy", "transparent", 
  "opaque"
];

let s1 = [
  "home", "city", "student", "teacher", "book", "room", "chair", "table", "fruits", 
  "apple", "orange", "banana", "cat", "dog", "mouse", "apricot", "car", "banana", "violet", 
  "newspaper", "money", "bilberry", "sunset", "Ivan", "pencil", "leaf", "magnet", "sky", 
  "calf", "bird", "conversation", "cheese", "street", "lamp", "bread", "person", "chocolate", 
  "pike", "echo", "berries"
];

let g1 = [
  "run", "be", "see", "allow", "know", "play", "love", "write", "work", "look", 
  "die", "walk", "read", "cook", "do", "eat", "go", "fly", "wash", "be", "send", 
  "sing", "drink", "remember", "wake up", "tell", "laugh", "gather", "count", "dance", 
  "kill", "teach", "play football", "catch", "kiss", "play chess", "box"
];

let n1 = [
  "quickly", "slowly", "easily", "difficultly", "highly", "lowly", "far", "close", 
  "soon", "late", "early", "here", "there", "from here", "to there", "together", "alone", 
  "completely", "almost", "often", "rarely", "a little", "very", "too much", "quite", 
  "fully", "partially", "always", "never", "often", "rarely", "a little", "very", "too much", 
  "quite", "fully", "partially"
];

let w1 = [
  "in", "on", "under", "over", "behind", "about", "by", "to", "through", "before", 
  "after", "since", "despite", "instead", "because of", "as a result", "following this", 
  "at the same time", "however", "while", "due to", "unlike", "instead of", "because of", 
  "as a result of", "instead of doing something", "instead of him/her/them", "instead of us/me/you", 
  "instead of oneself", "instead of someone/something"
];

let u1 = [
  "and", "or", "but", "also", "nonetheless", "therefore", "both...and...", "at the same time", 
  "however", "while", "as a result", "after this", "until then", "depending on", "unlike", 
  "instead of", "instead of doing something", "instead of him/her/them", "instead of her/him/them", 
  "instead of them/us", "instead of you", "instead of me", "instead of you", "instead of us", 
  "instead of oneself", "instead of someone", "instead of something"
];

function generate_en() {
  let pr = '';
  for (let i = 0; i <= 50; i++) {
    for (let i1 = 0; i1 < 5; i1++) {
      if (Math.floor(Math.random() * 3) === 1) {
        pr += n1[Math.floor(Math.random() * n1.length)];
        pr += " ";
      }
      if (Math.floor(Math.random() * 2) === 1) {
        pr += p1[Math.floor(Math.random() * p1.length)];
        pr += " ";
      }
      pr += s1[Math.floor(Math.random() * s1.length)];
      pr += " ";
      if (Math.floor(Math.random() * 3) === 1) {
        pr += n1[Math.floor(Math.random() * n1.length)];
        pr += " ";
      }
      pr += g1[Math.floor(Math.random() * g1.length)];
      pr += " ";
      if (Math.floor(Math.random() * 2) === 1) {
        pr += w1[Math.floor(Math.random() * w1.length)];
        pr += " ";
      }
      if (Math.floor(Math.random() * 2) === 1) {
        pr += ",";
      }
      pr += u1[Math.floor(Math.random() * u1.length)];
      pr += " ";

      if (Math.floor(Math.random() * 2) === 1) {
        break;
      }
    }
    pr += "<br>";
  }
  return `<div class='content'>${pr}</div>`;
}


function generate_ru(){
  let pr = '';
  for (let i=0; i<=50;i++){
    for (let i1=0; i1<5; i1++){

    
    if (Math.floor(Math.random() * 3) == 1){
      pr+=n[Math.floor(Math.random() * n.length)];
      pr+=" ";
    }
    if (Math.floor(Math.random() * 2) == 1){
      pr+=p[Math.floor(Math.random() * p.length)];
      pr+=" ";
    }
    pr+=s[Math.floor(Math.random() * s.length)];
    pr+=" ";
    if (Math.floor(Math.random() * 3) == 1){
      pr+=n[Math.floor(Math.random() * n.length)];
      pr+=" ";
    }
    pr+=g[Math.floor(Math.random() * g.length)];
    pr+=" ";
    if (Math.floor(Math.random() * 3) == 1){
      pr+=n[Math.floor(Math.random() * n.length)];
      pr+=" ";
    }
    if (Math.floor(Math.random() * 2) == 1){
      pr+=p[Math.floor(Math.random() * p.length)];
      pr+=" ";
    }
    if (Math.floor(Math.random() * 3) == 1){
      pr+=s[Math.floor(Math.random() * s.length)];
      pr+=" ";
    }
    if (Math.floor(Math.random() * 2) == 1){
      break;
    }
    if (Math.floor(Math.random() * 2) == 1){
      pr+=w[Math.floor(Math.random() * w.length)];
      pr+=" ";
    }
    
    if (Math.floor(Math.random() * 2) == 1){
      pr += ", "
    }
    pr+=u[Math.floor(Math.random() * u.length)];
    pr+=" ";
  }
    pr += "<br>"
  }
  return `<div class = 'content'>${pr}</div>`
}

function missing_database(cur_lng){
  if (cur_lng=="en") return generate_en();
  return generate_ru();
  }


console.log()

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'sait', 'indexen.html'), function(err) {
      if (err) {
        console.error('Не удалось отправить файл:', err);
        res.status(500).send('Ошибка при отправке файла');
      }
    });
  });

  app.get('/ru', function(req, res) {
    lng = 'ru';
    res.sendFile(path.join(__dirname, 'sait', 'indexen.html'), function(err) {
      if (err) {
        console.error('Не удалось отправить файл:', err);
        res.status(500).send('Ошибка при отправке файла');
      }
    });
  });

  app.get('/en', function(req, res) {
    lng = 'en';
    res.sendFile(path.join(__dirname, 'sait', 'indexru.html'), function(err) {
      if (err) {
        console.error('Не удалось отправить файл:', err);
        res.status(500).send('Ошибка при отправке файла');
      }
    });
  });

app.get('/about', function(req, res) {
  res.sendFile(path.join(__dirname, 'sait', 'about.html'), function(err) {
    if (err) {
      console.error('Не удалось отправить файл:', err);
      res.status(500).send('Ошибка при отправке файла');
    }
  });
});

app.get('/1', function(req, res) {
  res.send(missing_database(lng))
});
app.get('/2', function(req, res) {
  res.send(missing_database(lng))
});
app.get('/3', function(req, res) {
  res.send(missing_database(lng))
});
app.get('/4', function(req, res) {
  res.send(missing_database(lng))
});
app.get('/5', function(req, res) {
  res.send(missing_database(lng))
});
app.get('/6', function(req, res) {
  res.send(missing_database(lng))
});
app.get('/7', function(req, res) {
  res.send(missing_database(lng))
});
app.get('/8', function(req, res) {
  res.send(missing_database(lng))
});
app.get('/9', function(req, res) {
  res.send(missing_database(lng))
});
app.get('/101', function(req, res) {
  res.send(missing_database(lng))
});
app.get('/102', function(req, res) {
  res.send(missing_database(lng))
});
app.get('/103', function(req, res) {
  res.send(missing_database(lng))
});
app.get('/104', function(req, res) {
  res.send(missing_database(lng))
});
app.get('/11', function(req, res) {
  res.send(missing_database(lng))
});
app.get('/12', function(req, res) {
  res.send(missing_database(lng))
});
app.get('/13', function(req, res) {
  res.send(missing_database(lng))
});
app.get('/141', function(req, res) {
  res.send(missing_database(lng))
});
app.get('/142', function(req, res) {
  res.send(missing_database(lng))
});
app.get('/143', function(req, res) {
  res.send(missing_database(lng))
});
app.get('/144', function(req, res) {
  res.send(missing_database(lng))
});
app.get('/145', function(req, res) {
  res.send(missing_database(lng))
});
app.get('/146', function(req, res) {
  res.send(missing_database(lng))
});
app.get('/147', function(req, res) {
  res.send(missing_database(lng))
});
app.get('/148', function(req, res) {
  res.send(missing_database(lng))
});
app.get('/149', function(req, res) {
  res.send(missing_database(lng))
});


/*app.get('/aaas', (req, res) => {
connection.query(`
SELECT * FROM project.partit;
`,(err, results, fields) => {
    console.log(results[0]);

})});


app.get('/en', (req, res) => {
connection.query(`
SELECT * FROM a
WHERE language = 'en';
`,(err, results, fields) => {
res.send(results[0]['content']);
    
})});*/



app.listen(9898, (err) => {
    if (err){
        return console.log(err)
    }
    console.log('server aaaa')
});