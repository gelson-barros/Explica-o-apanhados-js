const o = {
    name: "Brendan"
}
const s = JSON.parse(JSON.stringify(o))

console.log(s===o)//false