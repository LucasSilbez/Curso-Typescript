// Abaixo é mostrado como fazer para que eu escolha quais arquivos serão convertidos através do tsc do arquivo json

// Incluir os array abaixo no arquivo json

//    Excluir:

//   "exclude": [
//    "scriptNao.ts" // digo para que este arquivo não seja convertido
//    "*.dev.ts" // para que todos os arquivos que terminem com .dev.ts não sejam convertidos
//    "**/*.dev.ts" // para que não converta os arquivos que terminem com .dev.ts em todas as pastas
//    "nodes_modules" // não converte os arquivos desta pasta, pois em um projeto node existe essa pasta em que existe    diversos arquivo TS, isso serve tbm para qualquer nome de pasta
//    ]

//    incluir:

//    "include": [
//    "script.ts"
//    "src/*" // apenas todos desta pasta
//    ]

// A utilidade do include seria pq apesar de o tsc verificar todo o projeto, ao usar o include ele irá se limitar apenas aos arquivos listados, e ignorando o restante