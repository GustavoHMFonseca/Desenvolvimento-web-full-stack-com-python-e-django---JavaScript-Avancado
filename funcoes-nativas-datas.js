/*
const data = new Date()
data.toString()

let d = data.getDate()
let m = data.getMonth() + 1
let a = data.getFullYear()

console.log(`data: ${d}/${m}/${a}`)

let h = data.getHours()
let min = data.getMinutes()
let s = data.getSeconds()

console.log(`Horas: ${h}:${min}:${s}`)
*/

//Operações com datas
const data = new Date()
data.toString()

//data.setDate(data.getDate() + 35)
//data.setMonth(data.getMonth() + 5)
data.setFullYear(data.getFullYear() + 24)
let d = data.getDate()
let m = data.getMonth() + 1
let a = data.getFullYear()
console.log(`data: ${d}/${m}/${a}`)