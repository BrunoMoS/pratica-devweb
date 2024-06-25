// const quotes = [
//     {"autor": "Albert Einstein", "citação": "A imaginação é mais importante que o conhecimento."},
//     {"autor": "Isaac Newton", "citação": "Se vi mais longe, foi por estar de pé sobre ombros de gigantes."},
//     {"autor": "Galileu Galilei", "citação": "E no entanto move-se."},
//     {"autor": "Marie Curie", "citação": "Nada na vida deve ser temido, apenas compreendido."},
//     {"autor": "Nikola Tesla", "citação": "O presente é deles; o futuro, pelo qual realmente trabalhei, é meu."},
//     {"autor": "Thomas Edison", "citação": "Genialidade é um por cento inspiração e noventa e nove por cento transpiração."},
//     {"autor": "Stephen Hawking", "citação": "Inteligência é a capacidade de se adaptar à mudança."},
//     {"autor": "Carl Sagan", "citação": "Somos feitos de poeira de estrelas."},
//     {"autor": "Richard Feynman", "citação": "A primeira regra é que você não deve se enganar - e você é a pessoa mais fácil de enganar."},
//     {"autor": "Ada Lovelace", "citação": "Essa máquina pode fazer qualquer coisa que saibamos como ordenar que ela execute."}
// ]
// const homePage = document.querySelector('.container')
// const onlyButton = document.querySelector('button')
// onlyButton.textContent = 'Gerar citação'
// onlyButton.addEventListener('click', () => {
//     const randomAuthor = Math.floor(Math.random() * quotes.length)
//     document.querySelector('h1').textContent = quotes[randomAuthor].autor
//     document.querySelector('p').textContent = quotes[randomAuthor].citação
// })

const listPerson = document.querySelector("#listPerson");
const fisrtName = document.querySelector("#firstName");
const interestArea = document.querySelector("#interest-area");
const age = document.querySelector("#ages");
const sendButton = document.querySelector("#sendButton");
const firstsOptions = document.querySelector("#firstOption");
const interestAreaColection = [
  "Engenharia",
  "Biologia",
  "Piscologia",
  "Computação",
  "Linguística",
  "Física",
];
const wages = [7400, 3199, 3331, 8785, 4095, 9232];
const ages = [];
const users = [];

for (let i = 18; i <= 60; i++) {
  ages.push(i);
}

ages.forEach((element) => {
  const newOption = document.createElement("option");
  newOption.textContent = element;
  age.appendChild(newOption);
});

interestAreaColection.forEach((element) => {
  const newOption = document.createElement("option");
  newOption.textContent = element;
  interestArea.appendChild(newOption);
});

function Person(firstName, age, interestArea, income) {
  (this.firstName = firstName),
    (this.age = age),
    (this.interestArea = interestArea),
    (this.income = income);
}

document.querySelector("#cadastro").textContent = "Cadastro";
sendButton.textContent = "Salvar";
sendButton.addEventListener("click", (event) => {
  event.preventDefault();
  users.push(
    new Person(
      fisrtName.value,
      age.options[age.selectedIndex].value,
      interestArea.options[interestArea.selectedIndex].value,
      wages[interestArea.selectedIndex]
    )
  );
  if (users.length < 2) {
    const showRegistered = document.createElement("button");
    showRegistered.classList.add("btn", "btn-outline-dark");
    showRegistered.textContent = "Mostrar Cadastrados";
    showRegistered.addEventListener("click", () => {
      firstsOptions.innerText = "";
      users.map((element) => {
        const newOption = document.createElement("option");
        newOption.text = `${element.firstName} ${element.age} ${element.interestArea} R$${element.income}`;
        firstsOptions.appendChild(newOption);
      });
    });
    listPerson.appendChild(showRegistered);
  }
  fisrtName.value = "";
  fisrtName.focus();
  age.value = "";
  interestArea.value = "";
  firstsOptions.innerText = "";
});
