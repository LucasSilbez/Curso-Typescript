function fazerRequisicao(url: string, method: 'GET' | 'POST') {
  //...
}

type Methods = 'GET' | 'POST' // Solução para o erro comentado

let url = 'https://google.com.br'
let method: Methods = 'GET'

// fazerRequisicao(url, method) // Deste modo o TS não esta aceitando o type literal method pois ele entende q é uma typagem fraca, onde no decorrer do codigo a variavel method pode ser redeclarada com outro valor ocasionando um problema

// Uma forma de evitar o problema acima seria criar um type proprio conforme exemplo ACIMA 

fazerRequisicao(url, method) 