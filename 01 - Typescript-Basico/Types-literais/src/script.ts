// Types literais irá dizer o type daquele item especifico, e dizer o valor dele

let nome: 'Lucas' = 'Lucas' // nessa caso estou informando que a variavel nome só poderá aceitar o item Lucas, automaticamente ao typar dessa forma o TS já typa como uma string, porém só aceita essa string especifica

// Casos que isso pode ser util:

// São uteus principalmente em union types
/*
function mostrarTexto(texto: string, alinhamento: string) {

}

mostrarTexto('Lucas', 'left')

mostrarTexto('Lucas', 'aleatorio') // dessa forma, o parametro alinhamento que deveria ser apenas refente a questão de alinhamento como right e left, esta recebendo um valor aleatorio não relacionado a alinhamento, sendo assim o types literais pode ser util conforme abaixo:

*/

function mostrarTexto(texto: string, alinhamento: 'left' | 'right' | 'center') {

}

mostrarTexto('Lucas', 'left')