const marvel_heros = ["thor", "Ironman", "spiderman"]
const famous_cricketers = ["M.S.Dhoni", "Virat", "Hardik"]

//marvel_heros.push(famous_cricketers)

//console.log(marvel_heros);
//console.log(marvel_heros[3][1]);

//const allHeros = marvel_heros.concat(famous_cricketers)
//console.log(allHeros)

const all_new_heroes=[...marvel_heros, ...famous_cricketers]
//console.log (all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7,[6, 7,[4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Harshit"))
console.log(Array.from("Harshit"))
console.log(Array.from({name: "harshit"})) // interesting for interview purpose


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));