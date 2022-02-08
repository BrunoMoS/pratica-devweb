let resposta = window.prompt('Deseja Utilizar todo site? ')        
        function entrar() {
            let a = window.document.getElementById('area')
            a.innerText = "Clicou!"
        }
        if (resposta == 'sim') {
            function Calcular() {
                let calculo = document.getElementsByName('operação')
                let tn1 = window.document.getElementById('txtn1')
                let tn2 = window.document.querySelector('#txtn2')
                let res = window.document.getElementById('resp') 
                let n1 = Number(tn1.value)
                let n2 = Number(tn2.value)
                res.innerHTML = ''
                if(calculo[0].checked ) {
                    let cal = n1 + n2
                    res.innerHTML += ` A soma entre ${n1} e ${n2} é igual a ${cal}`
                } else if(calculo[1].checked ) {
                    if(n1 > n2) {
                        let cal = n1 - n2
                        res.innerHTML += ` A subtração entre ${n1} e ${n2} é igual a ${cal}`
                    }else {
                        let cal = n2 - n1
                        res.innerHTML += ` A subtração entre ${n2} e ${n1} é igual a ${cal}`
                    }
                } else if(calculo[2].checked ) {
                    let cal = n1 * n2
                    res.innerHTML += ` A multiplicação entre ${n1} e ${n2} é igual a ${cal}`
                } else if(calculo[3].checked ) {
                    let cal = n1 / n2
                    res.innerHTML += ` A divisão entre ${n1} e ${n2} é igual a ${cal}`
                }
            
            }

            function Verificar() {
                let txtv = window.document.querySelector('#txtvel')
                let res = window.document.querySelector('#res')
                let vel = Number(txtv.value)
                res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel} km/h</strong></p>`
                if (vel > 80) {
                    res.innerHTML += `<p><strong>MULTADO</strong> velocidade acima do permitido ${vel} km/h</p>`
                }
                res.innerHTML += '<p>Utilize sempre o cinto de segurança!</p>'
                
            }

            function Pesquisar() {
                let txtps = window.document.getElementById('txtp')
                let re = window.document.getElementById('re')
                let pa = txtps.value
                re.innerHTML = `Você é natural do país: ${pa}`
                if (pa != 'brasil' && pa != 'Brasil') {
                    re.innerHTML += `<p>Seja Bem Vindo!</p>`
                } else {
                    re.innerHTML += `<p>É bom ter Você de volta</p>`
                }
            }

            function Contar() {
                let ini = document.getElementById('txti')
                let fim = document.getElementById('txtf')
                let passo = document.getElementById('txtpa')
                let solu = document.getElementById('solu')                
                let i = Number(ini.value)
                let f = Number(fim.value)
                let p = Number(passo.value)
                
               if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
                   window.alert('Você precisa pencher todos os campos!')
               } else if(i < f) {
                   solu.innerHTML = ''
                   for(var c = i; c <= f; c += p) {
                       solu.innerHTML += `${c} `
                   }
               } else {
                   for(var c = i; c >= f; c -= p) {
                       solu.innerHTML += `${c} `
                   }
               }
            }

            function Tabuada() {
                let num = document.getElementById('txtnt')
                let tab = document.getElementById('selt')
                let n = Number(num.value)

                if(num.value.length == 0) {
                    window.alert('Você precisa digitar um número!')
                } else {
                    tab.innerHTML = ''
                    for(var m = 0; m <= 10; m++) {
                        var item = document.createElement('option')
                        item.text = `${m} x ${n} = ${m * n}`
                        tab.appendChild(item)
                    }
                }
            }
        }
