var numero1 = document.getElementById('numero1'); // as HTMLInputElement está informando o TS que é um elemento HTML
var numero2 = document.getElementById('numero1');
var botao = document.getElementById('calcular');
var res = document.getElementById('resultado');
function calcular(n1, n2) {
    return n1 + n2;
}
botao.addEventListener('click', function () {
    res.innerHTML = calcular(+numero1.value, +numero2.value).toString();
});
// Após efetuar a tipagem, no terminal executar o comando tsc script.ts, isso irá criar um arquivo JavaScript com base no arquivo TS
// Normalmente todo o projeto tem uma pasta chama src e outra chamada public, a public tem os código que será enviado para serem usados, ja o src é a pasta de desenvolvimento, onde normalmente fica os codigos typescript (que não são executados no navegador, por isso a necessidade converter para javascript)
