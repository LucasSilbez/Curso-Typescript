type MathFunction = (n1: number, n2: number) => number // isso é um type criado para atender uma função, onde é typado os parametros entre parenteses, e em seguida o returno

const somar: MathFunction = (n1, n2) => {
  return n1 + n2
}