// Comando any informa que o tipo, é um tipo qualquer, caso o typescript não aceita a falta de tipagem mas não preciso usar mais de um tipo de dado, pode ser util

let nomes: any = ['Lucas', 'Matheus', 'Duda']

nomes.push(556)

// Acima, criei um array de string e tentei adicionar um numero, o any iria ajudar

// Obs: o emet não acusou erro ao usar o nomes.push, talvez o any seja obsoleto nessa situação

// Não é recomendado usar any, a menos em ultimo caso