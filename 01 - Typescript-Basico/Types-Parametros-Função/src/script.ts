function fisrtLetterUpperCase(name: string) {
  let firstLetter = name.charAt(0).toUpperCase()
  return firstLetter + name.substring(1)
}

// Na função acima, posso declarar um nome e ela faz com que a primeira letra fique maiuscula. Esta sendo tipada pois pode ser descrito um number ao inves de string para o nome