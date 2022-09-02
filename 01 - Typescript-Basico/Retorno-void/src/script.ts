let idade: string | number = 90 // dessa forma, faço a typagem informando que ela pode ser de mais de uma forma, fazendo ser aceitou um dos tipos especificados 

idade = 90

/*function mostrarIdade(idade: string | number) {
  console.log(idade.toUpperCase()) // dessa forma gera erro pois no parametro diz que pode haver number, e não é possível usar a função toUpperCase em number, o TS não permite ser escrito assim, por isso é necessário a condicional
} */

// Forma correta com a condicional:

function mostrarIdade(idade: string | number) {
  if (typeof idade === 'string') {
    console.log(idade.toUpperCase())
  } else {
    console.log(idade)
  }
}

mostrarIdade(90) // por este o erro do toUpperCase
mostrarIdade('90')