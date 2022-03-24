function estaEntre(num, max, min, inclusivo = false) {
    if (inclusivo = true){
        if (max >= num && num >= min) {
            return console.log(true)
        } else return console.log(false)
    } else if (inclusivo = false && max > num && num > min) {
        return console.log(true)
    } else return console.log(false)
}

estaEntre(10, 100, 50) // retornará true
estaEntre(16, 100, 160) // retornará false
estaEntre(3, 150, 3) // retornará false
estaEntre(3, 150, 3, true) // retornará true
