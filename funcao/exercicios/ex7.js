function resolverBhaskara(ax2, bx, c) {
    const delta = Math.pow(bx, 2) - 4 * ax2 * c
    if (delta < 0) {
        return console.log('Delta é Negativo!')
    } else {
        const x1 = (-bx + Math.sqrt(delta)) / (2 * ax2)
        const x2 = (-bx - Math.sqrt(delta)) / (2 * ax2)
        return console.log(`Os valores de x são: ${x1} e ${x2}`)
    }
}

resolverBhaskara(3, -5, 12)
resolverBhaskara(3, -15, 12)