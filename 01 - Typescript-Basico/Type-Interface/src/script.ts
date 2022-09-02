// Criar os proprios types

// Por padrão é usado pascal case, que é como o camelcase, mas com letra maiuscula na primeira letra tbm

type NomeCompleto = string

let nome: NomeCompleto = 'Lucas'

// Pode ser util caso eu vá utilizar esse padrão de type mais de uma vez, por exemplo posso criar um type string | number, e dps no codigo ao inves de ficar typando normalmente eu simplismente puxo meu type criado

// É mais usado em objeto conforme exemplo abaixo

type User = {
  nome: string,
  idade: number
}

function resumo(usuario: User) {
  return `Olá ${usuario.nome}, você tem ${usuario.idade} anos`
}

resumo({
  nome: 'Lucas',
  idade: 90
})

// Posso criar um type usando o metodo interface

/*

interface User = {
  nome: string,
  idade: number
}

*/

// A unidade diferença é q com interface eu posso adicionar mais tipos posteriormente ao codigo, repetindo o comando e adicionando o novo tipo