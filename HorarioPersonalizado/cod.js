function carregar() {
    var horas = new Date()
    var hora = horas.getHours()

    var res = document.getElementById('res')
    res.innerHTML = `Agora são ${hora} horas`
    var img = document.getElementById('imagem')

    if (hora >= 0 && hora < 6) {
        document.body.style.backgroundColor = '#110530' 
        img.src = 'imagemadru.png'
    } else if (hora >= 6 && hora < 12) {
        document.body.style.backgroundColor = '#eff303'
        img.src = 'imagemanha.png'
    } else if (hora >= 12 && hora < 18) {
        document.body.style.backgroundColor = '#fca400'
        img.src = 'imagetarde.png'
    } else if (hora >= 18 && hora < 25) {
        document.body.style.backgroundColor = '#2b4ce0'
        img.src = 'imagenoite.png'
    }
}
