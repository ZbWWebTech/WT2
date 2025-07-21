let fruechte = [
    ["Bananen", 4],
    ["Kiwis", 2],
    ["Äpfel", 6]
]

function zeileAusgeben(zeile) {
    console.log(`Es hat ${zeile[1]} ${zeile[0]} in der Früchteschale`)
}

function arrayAusgeben(array) {
    for (let i = 0; i < array.length; i++) {
        const zeile = array[i];
        zeileAusgeben(zeile)
    }
}

arrayAusgeben(fruechte)