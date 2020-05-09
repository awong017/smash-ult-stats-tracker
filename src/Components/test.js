let obj = {
    first: 1,
    second: 2,
    third: 3
}

let match = {
    id: 1,
    date: 9872349082,
    player: "first",
    opponent: 5,
    outcome: "win"
}

let key = match.player;

console.log(key);

console.log(obj[match.player]);