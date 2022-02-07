const reviews = [
    {
        id: 1,
        name: 'susan smith',
        job: 'web developer',
        img: './imagens/adultam.png',
        text: 'Estamos sempre em constante atualização e promovemos muita troca de conhecimento no cenário de tecnologia. Buscando inovar em cada projeto proposto por nossos clientes.',
    },
    {
        id: 2,
        name: 'Han Li',
        job: 'software engineer',
        img: './imagens/jovemh.png',
        text: 'Nosso objetivo é participar dos desafios de nossos clientes, entregando valor além do software, pois sabemos que o mundo mudou e as necessidades dos usuários também.',
    },
    {
       id: 3,
       name: 'naomy johnson',
       job: 'project manager',
       img: './imagens/idosam.png',
       text: 'Entendemos que cada cliente possui as suas necessidades específicas, e é com este foco que desenhamos nossos pilares, dando total flexibilidade nas formas de trabalho.',
    },
    {
        id: 4,
        name: 'norman larson',
        job: 'cto',
        img: './imagens/idosah.png',
        text: 'Para a soc, o bem-estar, a qualidade de vida e o desenvolvimento do nosso time é coisa séria. Entendemos que cada pessoa é única, repleta de habilidades e inúmeras possibilidades de crescimento.',
    },
    {
        id: 5,
        name: 'sarah jones',
        job: 'ux designer',
        img: './imagens/jovemm.png',
        text: 'A imersão na área de TI do cliente é a forma mais eficaz para coletar informações, avaliar processos e identificar gaps e possibilidades de melhoria em todas as etapas que impactam na arquitetura de sofware.',
    }
]

const img = document.getElementById('person-img')
const author = document.getElementById('author')
const job = document.getElementById('job')
const info = document.getElementById('info')
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const randomBtn =document.querySelector('.random-btn')
let currentItem = 0

window.addEventListener('DOMContentLoaded', function() {
    showPerson()
})

function showPerson() {
    const item = reviews[currentItem]
    img.src = item.img
    author.textContent = item.name
    job.textContent = item.job
    info.textContent = item.text
}

nextBtn.addEventListener('click', function () {
    currentItem++
    if(currentItem > reviews.length -1) {
        currentItem = 0
    }
    showPerson()
})

prevBtn.addEventListener('click', function () {
    currentItem--
    if(currentItem < 0) {
        currentItem = reviews.length - 1
    }
    showPerson()
})

randomBtn.addEventListener('click', function () {
    currentItem = Math.floor(Math.random() * reviews.length)
    showPerson()
})