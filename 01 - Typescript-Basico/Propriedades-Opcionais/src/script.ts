function resumo(usuario: { nome: string, idade?: number }) { // essa interrogação transforma o objeto em opcional, pode ter ou não o mesmo
  if (usuario.idade !== undefined) {
    return `Olá ${usuario.nome}, tudo bem? Você tem ${usuario.idade} anos`
  } else {
    // A condição acima é para que caso não seja informado a idade, tenha um else para essa situação, onde supostamente a idade é opcional, porém pode haver erros pois foi tipado que havia uma string e um number, mas nessa condição é informado apenas a string, por isso a interrogação no objeto idade
    return `Olá ${usuario.nome}, tudo bem?`
  }

}

//Implementação da função
let u = {
  nome: 'Lucas',
  idade: 90
}

resumo(u)

