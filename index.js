const mainDiv = document.getElementById('main')

const audio = new Audio()
audio.src = './smeh.mp3'

const puk = () => {
    const pukEl = document.createElement('div')
    pukEl.className = 'puki'
    pukEl.innerHTML = '<p><center>PUKI</center></p>'
    mainDiv.appendChild(pukEl)
    audio.play()
}