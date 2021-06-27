/*
const numeros = [
  2,3,5
]

const funcao = function(acumulador, atual, i){
  /*
  console.log(i)
  console.log("ac: " + acumulador)
  console.log("a:" + atual)
  console.log("----------")
  
  return acumulador + atual
 
}

const resultado = numeros.reduce(funcao,6)
console.log(resultado)

*/
/*
const produtos = [
  {nome: "Notebook", promocao: true},
  {nome: "Celular", promocao: false},
  {nome: "M<ouse", promocao: false},
]
const produtosPromo = produtos.map(
  produto => produto.promocao
)
console.log(produtosPromo)
const funcao = function(acumulador, atual){
  return acumulador || atual
}
const novo = produtosPromo.reduce(funcao)
if(novo) console.log("Tem promoção")
*/

const lista = [
  "joão", "ana", "pedro"
]
const funcao = (acumulado, atual) => acumulado += `<li>${atual}</li>`
let listaHtml = lista.reduce(funcao,"")

console.log(listaHtml)
