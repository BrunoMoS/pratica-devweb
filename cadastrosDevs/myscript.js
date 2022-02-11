var nM = []
var sB = []
var eM = []
var cT = []
var sN = []
var tN = []
var cD = []
let obj = new Object
var r = ''
var ax0 = ''

function sS() {
    let opt = this.selectedOptions
    for (let i=0; i<opt.length; i++) {
        let txt = opt[i].textContent
        sN.push(txt)
    }
}
const sl = document.querySelector('#sn')
sl.addEventListener('change', sS)


function S() {
    let no = document.querySelector('#nm')
    nM.push(no.value)
    no.value = ''
    no.focus()
    let so = document.querySelector('#sbn')
    sB.push(so.value)
    so.value = ''
    so.focus()
    let el = document.querySelector('#em')
    eM.push(el.value)
    el.value = ''
    el.focus()
    let es = document.getElementsByName('dw')
    for (let i=0; i<es.length; i++) {
        if (es[i].checked) {
            cT.push(es[i].value)
        }
    }
    let ht = document.querySelector('#t0')
    let cc = document.querySelector('#t1')
    let js = document.querySelector('#t2')
    let ph = document.querySelector('#t3')
    let cs = document.querySelector('#t4')
    let phy = document.querySelector('#t5')
    let ja = document.querySelector('#t6')
    for (let i=nM.length-1; i<nM.length; i++) {
        if (ht.checked) {
            ax0 += `[${ht.value}]`
        }
        if (cc.checked) {
            ax0 += `[${cc.value}]`
        }
        if (js.checked) {
            ax0 += `[${js.value}]`
        }
        if (ph.checked) {
            ax0 += `[${ph.value}]`
        }
        if (cs.checked) {
            ax0 += `[${cs.value}]`
        }
        if (phy.checked) {
            ax0 += `[${phy.value}]`
        }
        if (ja.checked) {
            ax0 += `[${ja.value}]`
        }
        tN.push(ax0)
        ax0 = ''
    }
    for (let i=0; i<1; i++) {
        ht.checked = false
        cc.checked = false
        js.checked = false
        ph.checked = false
        cs.checked = false
        phy.checked = false
        ja.checked = false
    }
    r = document.querySelector('#r')
    for (let i=nM.length-1; i<nM.length; i++) {
        obj = (`${nM[i]} ${sB[i]} ${eM[i]} ${cT[i]} ${sN[i]} ${tN[i]}`)
    }
    cD.push(obj)
}
const bt = document.querySelector('#btns')
bt.addEventListener('click', S)


function rL() {
    for (let i=0; i<nM.length; i++) {
        r.innerHTML += `<p>${cD[i]}</p>`
    }
}