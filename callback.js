function processar(callbackSucesso, callbackErro){
  /*
  ações
  ...
  */
  let resultadoProcessamento = true
  if(resultadoProcessamento){
    callbackSucesso()
  }else{
    callbackErro()
  }
}
const salvarResultado = function(){
  /*
    ...
  */
  console.log("Salvar Resultado")
}

const cancelar = function(){
  /*
    ...
  */
  console.log("Erro")
}
processar(salvarResultado, cancelar)