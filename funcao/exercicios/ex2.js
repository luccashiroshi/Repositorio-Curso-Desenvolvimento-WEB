function classifyTriangle (a, b, c) {
    if (a == b && b == c) {
        console.log('Triângulo Equilátero!')
    } else if (a =! b && b == c || a == b && b != c || a==c && b != c){
        console.log('Triângulo Isóceles!')
    } else {
        console.log('Triângulo Escaleno!')
    }
}

classifyTriangle(2, 2, 3)
classifyTriangle(2, 2, 2)
classifyTriangle(2, 1, 3)