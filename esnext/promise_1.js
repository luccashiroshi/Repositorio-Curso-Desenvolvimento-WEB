// setTimeout(function(){
//     console.log('Exec')

//     setTimeout(function(){
//         console.log('Exec')

//     }, 2000)
// }, 2000)


function esperarPor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log('executando promise')
            resolve()
        }, tempo)
    })
}

esperarPor(3000)
    .then(()=> esperarPor())
    .then(esperarPor)