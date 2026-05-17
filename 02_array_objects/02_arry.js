const marvel_heros=["thor","Ironmen","spiderman"]
const dc_heros =["superman","flash","batman"]

marvel_heros.push(dc_heros);
console.log(marvel_heros);

const allheros=marvel_heros.concat(dc_heros);
console.log(allheros);

const allnewheros=[...marvel_heros,...dc_heros];
console.log(allnewheros);

const another=[1,2,3,[4,5,6],7,8,[9,10,11,[12,13,14]]];
console.log(another.flat(Infinity));

console.log(Array.isArray("param"));
console.log(Array.from("param"));
// its return a empty array
console.log(Array.from({name:"param"}))// interasting

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));