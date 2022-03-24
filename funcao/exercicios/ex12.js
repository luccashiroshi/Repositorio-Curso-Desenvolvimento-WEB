function fatorial(num){
    let assist = num
    for (i = num - 1; i > 0; i--) {
        assist = assist * i
    }
    console.log(`${num}! = ${assist}`)
}

fatorial(5)
fatorial(10)