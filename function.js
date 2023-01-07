function createPhrases() {
    console.log('Estudar é muito bom')
    console.log('Paciência e persistência')
    console.log('Revisão é a mãe do aprendizado')
}

createPhrases()

// sum = somar
const sum = function(number1, number2){
    console.log(number1 + number2)
}
 sum(2, 3)

const sum2 = function(number3, number4){
    let total = number3 + number4
    return total
}

let number3 = 34
let number4 = 25

console.log(`o número 3 é ${number3}`)
console.log(`o número 4 é ${number4}`)
console.log(`a soma é ${sum2(number3, number4)}`)


// Contar caracteres em uma palavra e quantod dígitos tem um número
let word = "Paralelepipedo"
console.log(word.length)

// em caso de números, este deve ser convertido para string
let number = 1234
console.log(String(number).length)

//Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula
let number5 = 345.564165161
console.log(number5.toFixed(2).replace(".", ","))
//Ao trocar pela vírgula, deixa de ser um number e vira uma string.

//Transformar em Maiúscula ou minúscula
let word2 = "Programar é muito bacana!"
console.log(word2.toUpperCase())
console.log(word2.toLowerCase())

//Separar um texto em array onde cada palavra é uma posição do array. Depois transformar substituir os espaços por _
let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ")
console.log(myArray)
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)

//Verificar alguma palavra no texto
console.log(phrase.includes("Amor"))

//Transformar uma cadeia de caracteres em elementos de um array
let word3 = "manipulação"
console.log(Array.from(word3))

//Operadores lógicos
let pao = true
let queijo = false
//&& (AND), || (OR) e ! (NOT)
console.log(pao && queijo)
console.log(pao || queijo)
console.log(!pao , !queijo) 

//se tiver pão e queijo "ENTÃO" (?) diga que o 'café é top' "SENÃO" (:) diga 'café é ruim'
const niceBreakfast = pao && queijo ? 'Café top' : 'Café ruim'
console.log(niceBreakfast)

const niceBreakfast2 = pao || queijo ? 'Café top' : 'Café ruim'
console.log(niceBreakfast2)

let age = 16
const canDrive = age >= 18 ? 'can drive' : "can't drive"
console.log(canDrive)

//switch
let expression = 'c'

switch (expression) {
    case 'a':
        console.log('a')
        break
    case 'b':
        console.log('b')
        break
    default:
        console.log('default')
        break
}
/*
//break para e continue pula
for(let i = 0; i <=10; i++){
    console.log(i)
}

for(let i = 10; i >=1; i--){
    console.log(i)
}


for(let i = 10; i >=1; i--){
    if(i === 5) {
        continue;
    }

    if(i === 2) {
        break;
    }
    console.log(i)
}


let i = 4965261564
while(i > 10) {
    console.log(i)
    i /= 35
}
*/

let i = 0
while(i < 10) {
    console.log(i)
    i++;
}

//FOR ...OF
let names = 'Mayk'
let names2 = ['João', 'Maria', 'José']

for(let char of names){
    console.log(char)
}

for(let names of names2){
    console.log(names)
}

//FOR ...IN
let person = {
    name: 'John',
    age: 30,
    weight: 88.6
}

for(let property in person) {
    console.log(property)
    console.log(person[property])
}