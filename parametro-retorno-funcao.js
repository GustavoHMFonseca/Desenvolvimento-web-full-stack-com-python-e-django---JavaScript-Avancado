//Parâmetro padrão
/*
function somar(num1, num2){
  num1 = isNaN(num1) ? 0 : num1
  num2 = isNaN(num2) ? 0 : num2
  return num1 + num2
}
somar(2,"teste")
*/
//valor padrão do ES2015
function somar(num1 = 0, num2 = 0){
  num1 = isNaN(num1) ? 0 : num1
  num2 = isNaN(num2) ? 0 : num2
  return num1 + num2
}
//NaN -> not a number

//Parâmetros e retornos opcionais

function calcularSalario(salario, desconto){
  desconto = isNaN(desconto) ? 0 : desconto
  if(salario <= 0){
    console.log("Salário Inválido")
  }else{
    return salario - desconto
  }
}

let resultado = calcularSalario(100)
console.log(resultado)

