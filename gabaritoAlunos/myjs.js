var go = []
var n = []
var ga = []
var nta = []
var no = ''
var ala = '' 
var sn = 0.0
var m = 0.0
var r = ''


function guardarGo() {
    let al = document.querySelector('#gabo')
    go.push(al.value)
    al.value = ''
    al.focus()
    if (go.length===5) {
        al.disabled = true
    }
}


function guardarN() {
    no = document.querySelector('#nom')
    n.push(no.value)
    no.value = ''
    no.focus()
    if (n.length>=1) {
        no.disabled = true
    }
}


function guardarGa() {
    ala = document.querySelector('#gaba')
    ga.push(ala.value)
    ala.value = ''
    ala.focus()
    if (ga.length===5) {
        ala.disabled = true
    }
}


function Verificar() {
    let nt = 0
    r = document.querySelector('#rel')
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


function Relatorio() {
    let st = ''
    for (let i=0; i<n.length; i++) {
        if (nta[i]>5.0) {
            st = 'Aprovada(o)'
        } else {
            st = 'Reprovada(o)'
        }
        r.innerHTML += `<p>${n[i]} Nota: ${nta[i]} Situação: ${st} Média da turma: ${m.toFixed(1)}</p>` 
    }
}


function Reiniciar() {
    r.innerHTML = ''
}