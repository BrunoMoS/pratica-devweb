var go = []
var n = []
var ga = []
var nta = []
var al = document.querySelector('#gabo') 
var no = document.querySelector('#nom') 
var ala = document.querySelector('#gaba')
var guarGo = document.querySelector('#guarGo')
var guarN = document.querySelector('#guarN')
var guarGa = document.querySelector('#guarGa')
var ver = document.querySelector('#ver')
var rel = document.querySelector('#rel')
var ren = document.querySelector('#ren')
var r = document.querySelector('#alv')
var sn = 0.0
var m = 0.0


function guardarGo() { 
    go.push(al.value)
    al.value = ''
    al.focus()
    if (go.length===5) {
        al.disabled = true
    }
}
guarGo.addEventListener('click', guardarGo)


function guardarN() { 
    n.push(no.value)
    no.value = ''
    no.focus()
    if (n.length>=1) {
        no.disabled = true
    }
}
guarN.addEventListener('click', guardarN)


function guardarGa() { 
    ga.push(ala.value)
    ala.value = ''
    ala.focus()
    if (ga.length===5) {
        ala.disabled = true
    }
}
guarGa.addEventListener('click', guardarGa)


function Verificar() {
    let nt = 0
    for (let j=n.length-1; j<n.length; j++){ 
        for (let i=0; i<go.length; i++) {
            for (let c=0; c<go.length; c++) {
                if (go[i]===ga[c] && i===c) {
                    nt += 2.0
                }
            }
        }
        nta[j] = nt
        if (nt===0) {
            nta[j] = 0.0
        }
        sn += nta[j]
        m = sn/n.length
    }
    if (ga.length===5) {
        no.disabled = false
        ala.disabled = false
    }
    for (let i=0; i<go.length; i++) {
        ga.pop()
    }
}
ver.addEventListener('click', Verificar)


function Relatorio() {
    let st 
    for (let i=0; i<n.length; i++) {
        if (nta[i]>5.0) {
            st = 'Aprovada(o)'
        } else {
            st = 'Reprovada(o)'
        }
        let itemAd = document.createElement('option')
        itemAd.text = `${n[i]} Nota: ${nta[i]} Situação: ${st} Média da turma: ${m.toFixed(1)}`
        r.appendChild(itemAd)  
    }
}
rel.addEventListener('click', Relatorio)


function Reiniciar() {
    r.innerHTML = ''
}
ren.addEventListener('click', Reiniciar)