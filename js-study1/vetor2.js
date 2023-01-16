let vh = ["vitor" ,"gabriel" ,"edson" ,"douglas"]

paraMaiuscula = function (x) {
    return x.toUpperCase()
}

// Bruxaria pura aqui
vh = vh.map(paraMaiuscula)

document.write(`${vh}`)