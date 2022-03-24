const jurosSimples = function (capital, juros, tempo) {
    let montante = capital + (juros * capital * tempo)
    return montante
}

const jurosComposto = function (capital, juros, tempo) {
    let montante = capital * Math.pow((1 + juros), tempo);
    return montante
}

console.log(jurosSimples(100, 0.5, 10))
console.log(jurosComposto(1000, 0.1, 5))