function resumo(usuario: { nome: string, idade: number }) {
  return `Olá ${usuario.nome}, tudo bem? Você tem ${usuario.idade} anos`
}

//Implementação da função
let u = {
  nome: 'Lucas',
  idade: 90
}

resumo(u)

// Na função acima, existe objetos de mais de um tipo dentro de um template string, onde eu posso criar um novo objeto e typar cada um dos itens, isso está sendo feito através da linha de codigo { nome: string, idade: number }