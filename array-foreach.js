const lista = ["João", "Maria","Ana", "Taís", "Lucas"]
/*
for(indice in lista){
  console.log(lista[indice])
}
*/

/*
const percorrer = function(item,indice,lista){
  console.log(item)
}

lista.forEach(item => console.log(item))

*/

Array.prototype.percorrer = function(funcao){
  //console.log(this)
  for(let i = 0; i < this.length; i++){
    //console.log()
    funcao(this[i],i,this)
  }
}
const funcao = function(item,indice,lista){
  console.log(item)
}

lista.percorrer(funcao)
