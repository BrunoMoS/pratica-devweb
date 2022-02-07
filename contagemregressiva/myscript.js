let dc = document.querySelector('#d')
let hc = document.querySelector('#h')
let mc = document.querySelector('#m')
let sc = document.querySelector('#s')

const nY = '1 Jan 2023'

function cR() {
    const nYD = new Date(nY)
    const cD = new Date()
    
    const tS = (nYD - cD) / 1000

    const days = Math.floor(tS / 3600 / 24)
    const hours = Math.floor(tS / 3600) % 24
    const minutes = Math.floor(tS / 60) % 60
    const seconds = Math.floor(tS) % 60

    dc.innerHTML = days 
    hc.innerHTML = fT(hours)
    mc.innerHTML = fT(minutes)
    sc.innerHTML = fT(seconds)
}

function fT(time) {
    return time < 10 ? `0${time}` : time
}

cR()

setInterval(cR, 1000)