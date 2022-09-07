// Boa parte das funções tem o retorno void

// Void é quando uma função vai cumprir o papel dela, mas ela não tem um retorno

function removerElemento(el: HTMLElement): void { // a typagem void informa q não haverá retorno, caso seja descrito um retorno irá dar erro. Caso eu não faça a typagem void e não tenha nenhum retorno o TS já irá definir que é uma função do tipo void (passando o mouse acima da função) o ideal é caso não haja retorno, msm q o TS já faça isso eu typar void para q caso seja escrito um retorno em uma função q não deveria ter retorno, o TS não aceite
  el.remove()
}

removerElemento(document.getElementById('teste'))

// Forma em que o TS iria aceitar um retorno de função mesmo que seja typado o tipo void:

type QualquerFuncao = () => void

const algo: QualquerFuncao = () => {
  return 12
}

// Dessa forma, o TS entende que ele não espera um retorno, porém não quer dizer que não irá aceitar