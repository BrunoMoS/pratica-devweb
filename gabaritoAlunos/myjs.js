let go = []
let n = []
let ga = []
let nta = []
const al = document.querySelector('#gabo') 
const no = document.querySelector('#nom') 
const ala = document.querySelector('#gaba')
const guarGo = document.querySelector('#guarGo')
const guarN = document.querySelector('#guarN')
const guarGa = document.querySelector('#guarGa')
const ver = document.querySelector('#ver')
const rel = document.querySelector('#rel')
const ren = document.querySelector('#ren')
const r = document.querySelector('#alv')
let sn = 0.0
let m = 0.0


function guardarGo() { 
    go.push(al.value)
    al.value = ''
    al.focus()
    if (go.length===5) {
        al.disabled = true
    }
}
guarGo.addEventListener('click', guardarGo)
al.addEventListener('keypress', (e) => {
    if(!checkChar(e)) {
        e.preventDefault()
    }
})


function guardarN() { 
    n.push(no.value)
    no.value = ''
    no.focus()
    if (n.length>=1) {
        no.disabled = true
    }
}
guarN.addEventListener('click', guardarN)
no.addEventListener('keypress', (e) => {
    if(!checkCharN(e)) {
        e.preventDefault()
    }
})


function guardarGa() { 
    ga.push(ala.value)
    ala.value = ''
    ala.focus()
    if (ga.length===5) {
        ala.disabled = true
    }
}
guarGa.addEventListener('click', guardarGa)
ala.addEventListener('keypress', (e) => {
    if(!checkChar(e)) {
        e.preventDefault()
    }
})

function checkChar(e) {
    const char = String.fromCharCode(e.keyCode)
    const pattern = '[a-eA-E]'
    if(char.match(pattern)) {
        return true
    }
}

function checkCharN(e) {
    const char = String.fromCharCode(e.keyCode)
    const pattern = '[a-zA-Z]'
    if(char.match(pattern)) {
        return true
    }
}

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
        if(m%1!==0) {
            m = m.toFixed(1)
        }
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
        itemAd.text = `${n[i]} Nota: ${nta[i]} Situação: ${st} Média da turma: ${m}`
        r.appendChild(itemAd)  
    }
}
rel.addEventListener('click', Relatorio)


function Reiniciar() {
    r.innerHTML = ''
}
ren.addEventListener('click', Reiniciar)