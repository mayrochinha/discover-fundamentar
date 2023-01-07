/* Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima -   A
* entre 80 - 89   -   B
* entre 70 - 79   -   C
* entre 60 - 69   -   D
* menor que 60    -   F
*/

/*
let score3 = 81
console.log(score3)

if(score3 >= 90) {
    console.log('A')
} else if(score3 >= 80){
    console.log('B')
} else if(score3 >= 70) {
    console.log('C')
} else if(score3 >= 60){
    console.log('D')
} else if(score3 < 60) {
    console.log('F')
}
*/

// Ou de outra forma
/*
let score2 = 72
let scoreA = score2 >= 90 && score2 <= 100
let scoreB = score2 >= 80 && score2 <= 89
let scoreC = score2 >= 70 && score2 <= 79
let scoreD = score2 >= 60 && score2 <= 69
let scoreF = score2 < 60 && score2 >=0

let scoreFinal;

if(scoreA){
    scoreFinal = "A"
} else if(scoreB){
    scoreFinal = "B"
} else if(scoreC){
    scoreFinal = "C"
} else if(scoreD){
    scoreFinal = "D"
} else if(scoreF){
    scoreFinal = "F"
} else {
    scoreFinal = "Nota inválida"
}

console.log(scoreFinal)
*/

// Tranformando em função:
//let score = 65

function getScore(score){
    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <= 89
    let scoreC = score >= 70 && score <= 79
    let scoreD = score >= 60 && score <= 69
    let scoreF = score < 60 && score >=0

    let scoreFinal;

    if(scoreA){
        scoreFinal = "A"
    } else if(scoreB){
        scoreFinal = "B"
    } else if(scoreC){
        scoreFinal = "C"
    } else if(scoreD){
        scoreFinal = "D"
    } else if(scoreF){
        scoreFinal = "F"
    } else {
        scoreFinal = "Nota inválida"
    }

    return scoreFinal

}

for (const value of [101, 71, 91, 81]) {
    console.log(getScore(value))
}

// console.log(getscore(101))
// console.log(getscore(-1))
// console.log(getscore(91))
// console.log(getscore(81))
// console.log(getscore(71))
// console.log(getscore(62))
// console.log(getscore(45))
// console.log(getscore(62))
// console.log(getscore(72))
// console.log(getscore(82))
// console.log(getscore(92))
// console.log(getscore(100))