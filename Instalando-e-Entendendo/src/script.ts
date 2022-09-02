let numero1 = document.getElementById('numero1') as HTMLInputElement // as HTMLInputElement está informando o TS que é um elemento HTML
let numero2 = document.getElementById('numero1') as HTMLInputElement
let botao = document.getElementById('calcular')
let res = document.getElementById('resultado')

function calcular(n1: number, n2: number) { // quando há 3 pontinho em baixo do elemento,ovscode está dizendo q pode haver erros e sugerindo a typagem
  return n1 + n2
}

botao.addEventListener('click', function () {
  res.innerHTML = calcular(+numero1.value, +numero2.value).toString()
})

// Após efetuar a tipagem, no terminal executar o comando tsc script.ts, isso irá criar um arquivo JavaScript com base no arquivo TS

// Normalmente todo o projeto tem uma pasta chama src e outra chamada public, a public tem os código que será enviado para serem usados, ja o src é a pasta de desenvolvimento, onde normalmente fica os codigos typescript (que não são executados no navegador, por isso a necessidade converter para javascript)