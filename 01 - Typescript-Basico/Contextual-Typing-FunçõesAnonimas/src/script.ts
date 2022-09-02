// Contextual types, o typescript verifica o contexto do codigo e com base nele, ele determino os types sem que você determine eles

let names = ['Lucas', 'Matheus', 'Duda']

names.forEach(function (nome) {
  console.log(nome.toLocaleUpperCase)
})

// Por exemplo, no codigo acima ao usar a função foreach para utilizar a uppercase, ele não pediu para typar foi ele ja entendeu que todo o array tem apenas string, e ele mesmo reconheceu a typagem por baixo dos panos e não exigiu na função, onde ele pode ser escrita sem erros

