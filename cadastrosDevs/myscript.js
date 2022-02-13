var nM = []
var sB = []
var eM = []
var cT = []
var sN = []
var tN = []
var cD = []
var obj 
var ax0 = ''
var opt
var r = document.querySelector('#r')
var no = document.querySelector('#nm')
var so = document.querySelector('#sbn')
var el = document.querySelector('#em')
var es = document.getElementsByName('dw')
var ht = document.querySelector('#t0')
var cc = document.querySelector('#t1')
var js = document.querySelector('#t2')
var ph = document.querySelector('#t3')
var cs = document.querySelector('#t4')
var phy = document.querySelector('#t5')
var ja = document.querySelector('#t6')


function sS() {
    opt = this.selectedOptions
    for (let i=0; i<opt.length; i++) {
        let txt = opt[i].value
        sN.push(txt)
    }   
}
const sl = document.querySelector('#sn')
sl.addEventListener('change', sS)


function S() {    
    nM.push(no.value)
    no.value = ''
    no.focus()    
    sB.push(so.value)
    so.value = ''
    so.focus()    
    eM.push(el.value)
    el.value = ''
    el.focus()    
    for (let i=0; i<es.length; i++) {
        if (es[i].checked) {
            cT.push(es[i].value)
        }
    }
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
    for (let i=nM.length-1; i<nM.length; i++) {
        obj = {nome: nM[i], sobrenome: sB[i], email: eM[i], categoria: cT[i], senioridade: sN[i], tecnologia: tN[i]}
    }
    cD.push(obj)
    for (let i=0; i<opt.length; i++) {
        opt[i].selected = false
    }
}
const bt = document.querySelector('#btns')
bt.addEventListener('click', S)

function resp(objeto) {
    for (let property in objeto) {
        r.innerHTML += `<p>${property}: ${objeto[property]}</p>`
    }
}


function rL() {
    for (let i=0; i<nM.length; i++) {
        resp(cD[i])
    }
}


function lR() {
    r.innerHTML = ''
}