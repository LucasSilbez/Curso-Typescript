// Type Assertions ajuda o typescript a ser mais especifico 

let idadeField = document.getElementById('idade') as HTMLInputElement

console.log(idadeField.value)

// Todos os elementos HTML para o typescript trata-se de um HTMLElement, neste caso typei como HTMLInputElement, informando que não é tão generico assim, dizendo q ele é um input