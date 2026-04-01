const cart = ["mouse", "keyboard"]
cart.push("Monitor");
cart.push("Cable","Adapter")
console.log(cart)

// 1. Bættu "monitor" aftan á arrayið
// 2. Bættu svo líka "cable" og "adapter" við
// 3. Prentaðu út cart


const queue = ["Anna", "Bjarni", "Dóra"]
let lastInQueue = queue.pop();
console.log(lastInQueue);
console.log(queue)

// 1. Taktu síðasta nafnið úr queue og geymdu í breytu
// 2. Prentaðu út breytuna
// 3. Prentaðu út queue eftir breytinguna


const line = ["fyrstur", "annar", "þriðji"]
let firstInLine = line.shift()
console.log(firstInLine)
console.log(line)

// 1. Taktu fyrsta stakið úr line
// 2. Prentaðu út hvaða stak fór út
// 3. Prentaðu út line eftir breytinguna


const scores = [20, 30, 40]
console.log(scores)
scores.unshift(10)
console.log(scores)
scores.unshift(0)
console.log(scores)

// 1. Bættu 10 fremst í arrayið
// 2. Bættu svo 0 líka fremst
// 3. Prentaðu út scores


const colors = ["red", "green", "blue"]
let isGreen = colors.includes("green");
let isYellow = colors.includes("yellow")
console.log(isGreen)
console.log(isYellow)

// 1. Athugaðu hvort "green" sé í arrayinu
// 2. Athugaðu hvort "yellow" sé í arrayinu
// 3. Prentaðu út bæði svörin


const users = ["Danni", "Jón", "Kinga", "Agnar"]

// 1. Finndu user sem heitir "Kinga"
// 2. Prentaðu út userinn

let kinga = users.find((user)=> user === "Kinga")

console.log(kinga)

const todo = [
  { id: 11, text: "læra", done: false },
  { id: 12, text: "æfa", done: true },
  { id: 13, text: "sofa", done: false }
]

// 1. Finndu index á task með id 12
// 2. Finndu index á fyrsta task sem er done === false
