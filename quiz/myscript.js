const qD = [
    {
        p: 'Qual personagem dos quadrinhos é o mais velho?',
        a: 'Caçador de Marte',
        b: 'Apocalipse',
        c: 'Darkseid',
        d: 'Odin',
        r: 'a',
    },
    {
        p: 'Qual o desenho mais assistido no mundo?',
        a: 'Bob Esponja',
        b: 'South Park',
        c: 'Dragon Ball',
        d: 'Os Simpsons',
        r: 'd',
    },
    {
       p: 'Qual o Pokemon mais poderoso?',
       a: 'Slaking',
       b: 'Primal Groudon',
       c: 'Palkia',
       d: 'MewTwo',
       r: 'b',
    },
    {
       p: 'Qual o filme mais popular do mundo?',
       a: 'Titanic',
       b: 'Vingadore Ultimato',
       c: 'Avatar',
       d: 'Guerra Nas Estrelas O Despertar Da Força',
       r: 'c',
    },
    {
        p: 'Qual a série mais longa da história?',
        a: 'Law & Order',
        b: 'Vila Sésamo',
        c: 'Doctor Who',
        d: 'Os Simpsons',
        r: 'b'
    }
]

let qz = document.querySelector('#qz')
let resE = document.querySelectorAll('.res')
let qt = document.querySelector('#qt')
let at = document.querySelector('#at')
let bt = document.querySelector('#bt')
let ct = document.querySelector('#ct')
let dt = document.querySelector('#dt')
let btn = document.querySelector('#btn')

let cQ = 0
let score = 0
lQ()

function lQ() {
    dsA()
    let cQD = qD[cQ]
    qt.innerText = cQD.p
    at.innerText = cQD.a
    bt.innerText = cQD.b
    ct.innerText = cQD.c
    dt.innerText = cQD.d
}

function gS() {
    let re = undefined
    resE.forEach((resE) => {
        if (resE.checked) {
            re = resE.id
        }
    })
    return re
}

function dsA() {
    resE.forEach((resE) => {
        resE.checked = false
    })
}

btn.addEventListener('click', () => {
    let re = gS()
    if (re) {
        if (re === qD[cQ].r) {
            score++
        }
        cQ++
        if (cQ < qD.length) {
            lQ()
        } else {
            qz.innerHTML = `<h2> Você acertou corretamente ${score} de ${qD.length} perguntas. </h2> <button onClick='location.reload()'>Reiniciar</button>`
        }
    }
})