firstEndElement = array => {
    let array2 = []
    const num = array.length
    array2.push(array[0])
    array2.push(array[num-1])
    return array2
}
const a = ['Luccas', 'Bruno', 'Luis']
console.log(firstEndElement(a))