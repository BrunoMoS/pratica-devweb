const navBar = document.querySelector('nav')
const firstSection = document.querySelector('section')
const series = [
    {
        id: "Walter White",
        nome: "Breaking Bad",
        genero: "Drama",
        temporadas: 5,
        anoLancamento: 2008,
        estudio: "AMC",
        sinopse: "Breaking Bad é uma série de drama criada por Vince Gilligan. A trama gira em torno de Walter White, um professor de química de meia-idade que trabalha em uma escola secundária no Novo México. A vida de Walter se complica quando ele é diagnosticado com um câncer de pulmão incurável. Para garantir o futuro financeiro de sua família, ele decide usar seu conhecimento em química para fabricar e vender metanfetamina, uma droga sintética. Ele conta com a ajuda de Jesse Pinkman, um ex-aluno e pequeno traficante. Enfrentando desafios e perigos, Walter mergulha cada vez mais fundo no mundo do crime, enquanto seu cunhado, um agente da Agência Anti-Drogas, está em seu encalço."
    },
    {
        id: "Ross Geller",
        nome: "Friends",
        genero: "Comédia",
        temporadas: 10,
        anoLancamento: 1994,
        estudio: "NBC",
        sinopse: "Friends é uma sitcom americana criada por David Crane e Marta Kauffman, apresentada pela rede de televisão NBC entre 22 de setembro de 1994 e 6 de maio de 2004, totalizando 236 episódios. A série gira em torno de um grupo de amigos que vive no bairro de Greenwich Village, na ilha de Manhattan, na cidade de Nova York1. Os seis amigos são unidos por laços familiares, românticos e, principalmente, de amizade, enquanto tentam vingar em Nova York."
    },
    {
        id: "Jon Snow",
        nome: "Game of Thrones",
        genero: "Fantasia",
        temporadas: 8,
        anoLancamento: 2011,
        estudio: "HBO",
        sinopse: "Game of Thrones é uma série de drama e fantasia baseada nos livros de George R. R. Martin. A trama se desenrola em Westeros, um continente fictício, onde nove famílias nobres lutam pelo controle das terras. Essas famílias estão envolvidas em intrigas políticas, guerras, alianças e traições. Além disso, uma antiga ameaça ressurge após milênios de dormência."
    },
    {
        id: "Eleven",
        nome: "Stranger Things",
        genero: "Ficção científica",
        temporadas: 4,
        anoLancamento: 2016,
        estudio: "Netflix",
        sinopse: "Stranger Things é uma série de televisão via streaming dos gêneros ficção científica, terror, suspense e drama adolescente. Criada pelos irmãos Matt e Ross Duffer para a plataforma Netflix, a série se passa na década de 1980 na cidade fictícia de Hawkins, Estados Unidos. A trama começa quando um garoto de doze anos chamado Will Byers desaparece misteriosamente. Logo após, uma garota aparentemente fugitiva com poderes telecinéticos, chamada Onze, entra em cena."
    },
    {
        id: "Queen Elizabeth II",
        nome: "The Crown",
        genero: "Drama histórico",
        temporadas: 4,
        anoLancamento: 2016,
        estudio: "Netflix",
        sinopse: "The Crown é uma série de televisão via streaming de origem britânica-americana do gênero drama biográfico, criada e escrita por Peter Morgan para a Netflix. A série conta a trajetória da rainha Elizabeth II do Reino Unido, desde o seu casamento em 1947 até o início dos anos 2000. Cada temporada consiste em cerca de uma década de sua vida e traz menções sobre a vida politica e pessoal de vários outros personagens históricos que fizeram parte de seu reinado, como o príncipe Philip, Duque de Edimbnurgo, a princesa Margare, Condessa de Snowdon, o então Príncipe Charles, a Princesa Diana e entre outros."
    },
    {
        id: "Michael Scott",
        nome: "The Office",
        genero: "Comédia",
        temporadas: 9,
        anoLancamento: 2005,
        estudio: "NBC",
        sinopse: "The Office é uma série de televisão via streaming que segue o formato de pseudodocumentário. Ela retrata o cotidiano de um escritório em Scranton, na Pensilvânia, que é uma filial da empresa fictícia Dunder Mifflin. Os funcionários dessa empresa têm a função de vender suprimentos de papel fornecidos pela companhia. O gerente da franquia, Michael Scott (interpretado por Steve Carell), é um chefe incoerente e imaturo, mas que se preocupa com o bem-estar de seus empregados."
    },
    {
        id: "Din Djarin",
        nome: "The Mandalorian",
        genero: "Aventura",
        temporadas: 2,
        anoLancamento: 2019,
        estudio: "Disney+",
        sinopse: "Em The Mandalorian, acompanhamos a história de Din Djarin (interpretado por Pedro Pascal), um guerreiro solitário que trabalha como caçador de recompensas. Ele embarca numa jornada pelos territórios esquecidos da galáxia, logo após a queda do Império e antes da criação da temida Primeira Ordem. O Mandaloriano está sempre buscando formas de melhorar sua armadura, até que recebe uma missão de um cliente misterioso no submundo de Nevarro. Ele precisa rastrear e capturar um alvo sem nome, de aproximadamente cinquenta anos e, apesar de seu cliente parecer não se importar, o Dr. Pershing (Omid Abtahi) insiste que seja mantido vivo. Então, ele encontra Grogu, um ser enigmático da raça de Yoda que precisa de sua ajuda. O Mandaloriano escolhe proteger Grogu, ou “A Criança”, como também é conhecido."
    },
    {
        id: "Dolores Abernathy",
        nome: "Westworld",
        genero: "Ficção científica",
        temporadas: 3,
        anoLancamento: 2016,
        estudio: "HBO",
        sinopse: "Westworld é uma série de televisão estadunidense de ficção científica, desenvolvida por Jonathan Nolan e Lisa Joy, que estreou em 2 de outubro de 2016 na emissora HBO. A série é baseada no filme de mesmo nome de 1973, que retrata um parque de diversões futurista, escrito e dirigido pelo norte-americano Michael Crichton, e também em sua continuação, Futureworld, de 1976. A história se passa em Westworld, um parque temático tecnologicamente avançado que simula o Velho Oeste. O parque é povoado por androides sintéticos apelidados de “anfitriões”, que atendem aos desejos dos ricos visitantes do parque, chamados de “recém-chegados”. Os visitantes podem fazer o que quiserem dentro do parque, sem seguir regras ou leis e sem medo de retaliação por parte dos anfitriões."
    },
    {
        id: "Geralt of Rivia",
        nome: "The Witcher",
        genero: "Fantasia",
        temporadas: 2,
        anoLancamento: 2019,
        estudio: "Netflix",
        sinopse: "Em The Witcher, série original da Netflix, Geralt de Rivia (interpretado por Henry Cavill) é um solitário caçador de monstros. Ele luta para encontrar seu lugar num mundo onde as pessoas são mais cruéis que as criaturas. O destino de Geralt se entrelaça com duas figuras: a feiticeira Yennefer de Vengerberg (vivida por Anya Chalotra) e a poderosa princesa Cintran Ciri (interpretada por Freya Allan). A trama se desenrola em linhas do tempo diferentes até que, finalmente, suas vidas se conectam na Batalha de Sodden Hill contra os invasores de Nilfgaard. Ciri e Geralt estão ligados pelo destino, mesmo sem saberem, pois antes mesmo de ela nascer, ele havia cumprido uma tarefa para seus pais e, como recompensa, “recebeu” a jovem princesa, tendo seus caminhos magicamente conectados."
    },
    {
        id: "Jimmy McGill",
        nome: "Better Call Saul",
        genero: "Drama",
        temporadas: 5,
        anoLancamento: 2015,
        estudio: "AMC",
        sinopse: "Better Call Saul é uma série derivada de Breaking Bad, ambientada seis anos antes de Saul Goodman conhecer Walter White e Jesse Pinkman. A série acompanha a transformação de Jimmy McGill no moralmente ambíguo advogado Saul Goodman. Antes de se transformar no infame Saul Goodman, o advogado de Breaking Bad era mais inocente, mas não era santo."
    }
]
const homePage = series.map((item) => {
    const buttonElement = document.createElement('button')
    buttonElement.innerText = item.nome
    buttonElement.addEventListener('click', () => {
        const contentTitle = document.createElement('h1')
        const contentDescription = document.createElement('p')
        const controlElements = [...document.querySelectorAll('p')]
        contentTitle.innerText = item.nome
        contentDescription.innerText = item.sinopse
        if(controlElements[0]) {
            const contentBeforeTitle = document.querySelector('h1')
            const contentBeforeDescription = document.querySelector('p')
            firstSection.removeChild(contentBeforeTitle)
            firstSection.removeChild(contentBeforeDescription)
        }
        firstSection.appendChild(contentTitle)
        firstSection.appendChild(contentDescription)
    })
    navBar.appendChild(buttonElement)
})

// const homePage = series.forEach((item) => {
//     const buttonElement = document.createElement('button')
//     buttonElement.innerText = item.nome
//     buttonElement.addEventListener('click', () => {
//         document.querySelector('h1').innerText = item.nome
//         document.querySelector('p').innerText = item.sinopse
//     })
//     navBar.appendChild(buttonElement)
// })
