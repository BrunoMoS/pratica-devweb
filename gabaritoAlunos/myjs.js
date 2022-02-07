let go = []
let n = []
let ga = []
let nta = []
let no = ''
let ala = ''
let ma = 0 // variável necessária para inicializar o laço que vai alimentar nta 
let nt = 0
let sn = 0.0
let m = 0.0


function Guardargo() {
    let al = document.querySelector('#gabo')
    go.push(al.value)
    al.value = ''
    al.focus()
    if(go.length === 5) {
        al.disabled = true
    }
}


function Guardarn() {
    no = document.querySelector('#nom')
    n.push(no.value)
    no.value = ''
    no.focus()
    if(n.length >= 1) {
        no.disabled = true
    }
    ma++
}


function Guardarga() {
    ala = document.querySelector('#gaba')
    ga.push(ala.value)
    ala.value = ''
    ala.focus()
    if(ga.length === 5) {
        ala.disabled = true
    }
}


function Verificar() {
    nt = 0
    for(let j = ma - 1 ; j < n.length; j++){ // decremento na ma para a nta ser inicializada
        for(let i = 0; i < go.length; i++) {
            for(let c = 0; c < go.length; c++) {
                if(go[i] === ga[c] && i === c) {
                    nt += 2.0
                }
            }
        }
        nta[j] = nt
        if(nt === 0) {
            nta[j] = 0.0
        }
        sn += nta[j]
        m = sn / n.length
    }
    if(ga.length === 5) {
        no.disabled = false
        ala.disabled = false
    }
    for(let i = 0; i < go.length; i++) {
        ga.pop()
    }
}


let r = document.querySelector('#rel')
function Relatorio() {
    let st = ''
    for(let i = 0; i < n.length; i++) {
        if(nta[i] > 5.0) {
            st = 'Aprovada(o)'
        } else {
            st = 'Reprovada(o)'
        }
        r.innerHTML += `<p>${n[i]} Nota: ${nta[i]} Situação: ${st} Média da turma: ${m}</p>` 
    }
}


function Reiniciar() {
    r.innerHTML = ''
}