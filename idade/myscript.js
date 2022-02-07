function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('manha')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/manhac.png'
        document.body.style.background = '#35ce8d'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/tardec.png'
        document.body.style.background = '#8ae1fc'
    } else {
        img.src = 'imagens/noitec.png'
        document.body.style.background = '#272635'
        
    }
}

function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    const res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        const idade = ano - Number(fano.value)
        let genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'f')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 12) {
                img.setAttribute('src', 'imagens/infantilh.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovemh.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'imagens/adultah.png')
            } else{
                img.setAttribute('src', 'imagens/idosah.png')
            }
        }
        if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                img.setAttribute('src', 'imagens/infantilm.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovemm.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'imagens/adultam.png')
            } else {
                img.setAttribute('src', 'imagens/idosam.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`        
        res.appendChild(img)
    }
}