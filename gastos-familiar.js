/*
Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.
*/

let family = {
    incomes: [1450, 500],
    expenses: [80, 150, 60, 1500]
}

// Modo realizado porém não-dinâmico
function controleGastos(incomes, expenses) {
    let incomesTotal = incomes[0] + incomes[1] 
    let expensesTotal = expenses[0] + expenses[1] + expenses[2] + expenses[3]  
    let saldoFinal = incomesTotal - expensesTotal

    return saldoFinal
}

//let saldoFinal = controleGastos(family.incomes, family.expenses)
//saldoFinal > 0 ? console.log('Saldo Positivo') : console.log('Saldo Negativo')


// Modo dinâmico CORRETO
function calculateBalance(incomes, expenses) {
    function sum(array){
        let total = 0
        for (const value of array) {
            total += value 
        }
        return total
    }

    function convertToReal(value){
        return Intl.NumberFormat("pt-br", {
            currency: "BRL", 
            style: "currency"
        }).format(value)
    } 

    let incomesTotal = sum(incomes)
    let expensesTotal = sum(expenses)
    let saldoFinal = incomesTotal - expensesTotal
    let isPositive = saldoFinal > 0
    let message = `Saldo negativo: ${convertToReal(saldoFinal)}`

    if(isPositive){
        message = `Saldo Positivo: ${convertToReal(saldoFinal)}`
    }

    console.log(message)
}

calculateBalance(family.incomes, family.expenses)