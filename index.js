// Array index, við byrjum alltaf að telja frá 0.
let fruits = ["apple", "banana", "melon"];
console.log(fruits);

// skilar okkur lengd listans í number, byrjar að telja frá 1
console.log(fruits.length);

// PUSH, bætir við aftast í array
fruits.push("orange","papaya","kiwi");
console.log(fruits);

//POP, remove'ar aftast úr array
fruits.pop();

//SHIFT, tekur úr fremst
let apple = fruits.shift();
console.log(fruits)
console.log(apple)

//UNSHIFT, bætir við fremst í array
fruits.unshift("tomato", "spaghetti");
console.log(fruits);

// INCLUDES, athugar hvort að ákveðið gildi sé í array
let isOrange = fruits.includes("orange");
console.log(isOrange);

// INDEXOF, finnur í havaða sæti (index) ákveðið gildi situr
let whereIsOrange = fruits.indexOf("orange");
console.log(whereIsOrange);

// Hér notum við svo bæði til að extracta það gildi.
let hereIsOrange = fruits[whereIsOrange];

//FIND, finnur ákveðið gildi sem við leitum af
let users = ["Jón", "Kinga", "Danni", "Agnar"];

// loopar yfir hvern einasta hlut í fylkinu,
//  og ef að sá hlutur uppfyllir þessi skilyrði þá skilar það honum
let danni = users.find((user) => user === "Danni");
console.log(danni)

//FINDINDEX, finnur item í fylki og skilar sæti (index)

let danniIndex = users.findIndex((user)=> user === "Danni")
console.log(danniIndex)




