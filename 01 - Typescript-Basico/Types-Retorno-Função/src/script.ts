function fisrtLetterUpperCase(name: string): string { // essa segunda tipagem string está tipando o return
  let firstLetter = name.charAt(0).toUpperCase()
  return firstLetter + name.substring(1)
}


function somar(n1: number, n2: number): number {
  return `${n1 + n2}`
}

let alguma = somar(90, 15)

// Na função acima, o erro ocorre pois esta sendo tipado o return em number, e ele esta sendo declado em template string, ou seja, string...



