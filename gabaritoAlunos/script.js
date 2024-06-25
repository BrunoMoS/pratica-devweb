const inputName = document.querySelector("#input-name");
const officialTemplate = document.querySelectorAll("#officialTemplate");
const studentTemplate = document.querySelectorAll("#studentTemplate");
const showReports = document.querySelector("#showReports");
const officialArray = [];
const studentArray = [];
const studentsCollection = [];
let obj = {};

document.querySelector("#saveOfficial").addEventListener("click", event => {
  event.preventDefault();
  Array.from(officialTemplate).forEach(element => {
    if (element.checked) {
      officialArray.push(element.value);
    }
  });
});

document.querySelector("#saveStudent").addEventListener("click", event => {
  event.preventDefault();
  Array.from(studentTemplate).forEach(element => {
    if (element.checked) {
      studentArray.push(element.value);
    }
  });
});

const scoreStudent = () => {
  let score = 0;
  officialArray.forEach((element, externalIndex) => {
    studentArray.forEach((item, internalIndex) => {
      if (element === item && externalIndex === internalIndex) {
        score += 2;
      }
    });
  });
  return score;
}

document.querySelector("#save").addEventListener("click", event => {
  event.preventDefault();
  obj = {
    nome: `${inputName.value}`,
    nota: scoreStudent(),
    resultado: scoreStudent() > 6 ? "Aprovado" : "Reprovado",
  };
  studentsCollection.push(obj);
  inputName.value = "";
  officialArray.forEach(item => studentArray.pop());
});

document.querySelector("#reports").addEventListener("click", () => {
  studentsCollection.map((item) => {
    const show = document.createElement("option");
    show.textContent = `${item.nome} ${item.nota} ${item.resultado}`;
    showReports.appendChild(show);
  });
});

function remove() {
  showReports.textContent = "";
}
document.querySelector("#removeReport").addEventListener("click", remove);
