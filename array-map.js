const pessoas = [
  "João", "Ana", "Maria"
]

let funcao = function(item, indice, arr){
  return {nome: item}
}

const novoArray = pessoas.map(funcao)
console.log(novoArray)

// 1 dolar = 3 reais
const produtosDolar = [
  {produto: "Notebook", preco: 1200, moeda:'$'},
  {produto: "Celular", preco: 800, moeda:'$'}
]
const conversao = function(item,indice,arr){
  return {produto:item.produto, preco:item.preco * 3, moeda: 'R$'}
}
const novo = produtosDolar.map(conversao)
console.log(novo)