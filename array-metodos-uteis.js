const estados = ["São Paulo" , "Ceára", "Rio de Janeiro", "Bahia", "Minas Gerais"]

/*** Remove elementos do array*/

//estados.pop()//remove o ultimo
//estados.shift()//remove o primeiro


/*** Adiciona novo elemento no array*/

//estados.push('teste')//adiciona ao final
//estados.unshift("teste 2")// adiciona ao inicio

/*Retornam um novo Array*/

//const novo = estados.splice(0,2, "teste 1", "Teste 2", "Teste 3")//emendar

//const novo = estados.slice(2,5)//cortar

/* Converte Array/String */
const usuarios = ["João", "Maria", "Ana"]
let texto = usuarios.join()
let arrayTexto = texto.split(",")
console.log(texto)
