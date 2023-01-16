const container = document.querySelector('.container')
const apiURL = 'https://source.unsplash.com/random/'
const numeroLinhas = 225

for (let i = 0; i < numeroLinhas * 3; i++) {
    const img = document.createElement('img')
    img.src = `${apiURL}${getRandomTamanho()}`
    container.appendChild(img)

}

function getRandomTamanho() {
    return `${getRandomNumero()}x${getRandomNumero()}`
}

function getRandomNumero() {
    return Math.floor(Math.random() * 10) + 300
}