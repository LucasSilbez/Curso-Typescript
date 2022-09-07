// // "lib": [],

const botao = document.querySelector('button') as HTMLButtonElement
botao.addEventListener('click', () => {
  console.log('Clicou!')
})

// na opção lib do arquivos json ele esta ja importando libs padrões do javascript, onde por exemplo através dele q é reconhecido o objeto html, pois ela esta implementando o DOM. Isso é para varios objetos usados no JS