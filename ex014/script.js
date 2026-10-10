function carregar () {
    let msg = document.getElementById ('mensagem')
    let img = document.getElementById ('foto')
    let date = new Date()
    let horaAtual = date.getHours()
    let minutoAtual = date.getMinutes()
    msg.innerText = `Agora são ${horaAtual}:${minutoAtual} horas`

    if (horaAtual >= 0 && horaAtual < 12) {
        img.src = 'Manha.jpg'
        document.body.style.background = 'rgba(170, 170, 111, 0.58)'
    } else if (horaAtual >= 12 && horaAtual < 18) {
        img.src = 'Tarde.jpg'
        document.body.style.background = 'rgba(107, 52, 52, 0.76)'
    } else {
        img.src = 'Noite.jpg'
        document.body.style.background = 'rgba(77, 72, 72, 0.96)'
    }
}
