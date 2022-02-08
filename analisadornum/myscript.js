var n = document.querySelector('#cn')
var l = document.querySelector('#alv')
var r = document.querySelector('#r')
var nu = []

function Numero(num) {
    if (Number(num) >= 1 && Number(num) <= 100) {
        return true
    } else {
        return false
    }
}

function Lista(num, l) {
    if (l.indexOf(Number(num)) != - 1) {
        return true
    } else {
        return false
    }
}

function Ad() {
    if (Numero(n.value) && !Lista(n.value, nu)) {
        nu.push(Number(n.value))
        let itemAd = document.createElement('option')
        itemAd.text = `${n.value} adicionado.`
        l.appendChild(itemAd)
        r.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    n.value = ''
    n.focus()
}

function Vrf() {
    if (nu.length === 0) {
        alert('Adicione números') 
    } else {
        let tn = nu.length
        let nMax = nu[0]
        let nMin = nu[0]
        let sn = 0
        let m = 0
        for (let i in nu) {
            sn += nu[i]
            if (nMax < nu[i]) {
                nMax = nu[i]
            }
            if (nMin > nu[i]) {
                nMin = nu[i]
            }
        }
        m = sn / tn
        r.innerHTML = '' 
        r.innerHTML += `<p>${tn} números cadastrados</p>`
        r.innerHTML += `<p>A soma dos números é ${sn}</p>`
        r.innerHTML += `<p>${nMax} é o maior número</p>`
        r.innerHTML += `<p>${nMin} é o menor número</p>`
        r.innerHTML += `<p>${m} é a média dos números</p>`
    }
}