var select = document.querySelector('select')
var html = document.querySelector('html')
document.body.style.padding = '10px'

function atualizar(bgColor, textColor) {
    html.style.backgroundColor = bgColor
    html.style.color = textColor
}

select.onchange = function() {
    (select.value === 'escuro') ? atualizar('#474954','#f6fff8') : atualizar('#f6fff8','#474954')
}

var nome
const atual = document.querySelector('h2')
atual.addEventListener('click', atualizarNome)
function atualizarNome() {
    nome = prompt('Insira um novo nome')
    atual.textContent = 'Jogador: ' + nome
}

 var numeroAleatorio = Math.floor(Math.random() * 100) + 1
 var palpites = document.querySelector('.palpites')
 var ultimoResultado = document.querySelector('.ultimoResultado')
 var baixoOuAlto = document.querySelector('.baixoOuAlto')
 var envioPalpite = document.querySelector('.envioPalpite')
 var campoPalpite = document.querySelector('.campoPalpite')
 var contagemPalpites = 1
 var botaoReinicio
 //var para 

 function conferirPalpite() {
     var pu = Number(campoPalpite.value)
     if (contagemPalpites === 1) {
         palpites.textContent = 'Palpites anteriores: '
     }
     palpites.textContent += pu + ' '

     if (pu === numeroAleatorio) {
         ultimoResultado.innerHTML = `<p>Parabéns! <strong>${nome}</strong> Você acertou!</p>`
         ultimoResultado.style.backgroundColor = '#10ffcb'
         baixoOuAlto.textContent = ''
         configFimDeJogo()
     } else if (contagemPalpites === 10) {
         ultimoResultado.textContent = '!!! FIM DE JOGO !!! Número Selecionado foi ' + numeroAleatorio
         baixoOuAlto.textContent = ''
         configFimDeJogo()
     } else {
         ultimoResultado.textContent = 'Errado!'
         ultimoResultado.style.backgroundColor = '#e84855'
         if (pu < numeroAleatorio) {
             baixoOuAlto.innerHTML = `<p><strong>${nome}</strong> seu palpite está muito baixo!</p>`
         } else if (pu > numeroAleatorio) {
             baixoOuAlto.innerHTML = `<p><strong>${nome}</strong> seu palpite está muito alto!</p>`
         }
     }

     contagemPalpites++
     campoPalpite.value = ''
     campoPalpite.focus()
 }
 envioPalpite.addEventListener('click', conferirPalpite)

 /* Cria um novo parágrafo e o insere no fim do arquivo HTMl.
function criarParagrafo() {
    para = document.createElement('p')
    para.textContent = 'Você clicou aqui'
    document.body.appendChild(para)
}
 1. Captura referências de todos os botões na página e armazena isso em um array.
   2. Vai até todos os botões e adiciona um event listner click a cada um deles.
   Quando cada botão é clicado, a função criarParagrafo() será executada.

const botoes = document.querySelectorAll('.btn')
for(var i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener('click', criarParagrafo)
}
*/

function configFimDeJogo() {
    campoPalpite.disabled = true
    envioPalpite.disabled = true
    botaoReinicio = document.createElement('button')
    botaoReinicio.textContent = 'Iniciar novo jogo'
    document.body.appendChild(botaoReinicio)
    botaoReinicio.addEventListener('click', reiniciarJogo)
}

function reiniciarJogo() {
    contagemPalpites = 1
    var reiniciarParas = document.querySelectorAll('.resultadoParas p')
    for (var i = 0; i < reiniciarParas.length; i++) {
        reiniciarParas[i].textContent = ''
    }

    botaoReinicio.parentNode.removeChild(botaoReinicio)
    //para.parentNode.removeChild(para) 
    campoPalpite.disabled = false
    envioPalpite.disabled = false
    campoPalpite.value = ''
    campoPalpite.focus()
    ultimoResultado.style.backgroundColor = 'white'
    numeroAleatorio = Math.floor(Math.random() * 100) + 1
}