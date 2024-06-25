const boxText = document.querySelector("#boxText");
const firstName = document.querySelector("#firstName");
const surname = document.querySelector("#surname");
const email = document.querySelector("#email");
const applicationSide = document.getElementsByName("radioBox");
const language = document.querySelectorAll(".check");
const seniority = document.querySelectorAll(".select");
let objectCollection = [];
let obj = new Object();

function handleSelect() {
  let value = "";
  Array.from(seniority).forEach(element => {
    if (element.selected) {
      value = element.value;
    }
  });
  return value;
}

function handleRadioBox() {
  let value = "";
  Array.from(applicationSide).forEach(element => {
    if (element.checked) {
      value = element.value;
    }
  });
  return value;
}

function handleCheckBox() {
  let value = ''
  Array.from(language).forEach(element => {
    if (element.checked) {
      value += `${element.value} `;
    }
    element.checked = false;
  });
  return value;
}

document.querySelector("#btnSave").addEventListener("click", (event) => {
  event.preventDefault();
  obj = {
    nome: `${firstName.value} ${surname.value}`,
    email: `${email.value}`,
    categoria: handleRadioBox(),
    senioridade: handleSelect(),
    tecnologias: handleCheckBox(),
  };
  objectCollection.push(obj);
  firstName.value = "";
  surname.value = "";
  email.value = "";
  firstName.focus();
});

function response(objeto) {
  for (let property in objeto) {
    let itemAd = document.createElement("option");
    itemAd.textContent = `${property}: ${objeto[property]}`;
    boxText.appendChild(itemAd);
  }
}

document.querySelector("#btnReport").addEventListener('click', () => {
    objectCollection.forEach(element => {
        response(element)
    })
})

document.querySelector("#btnClear").addEventListener('click', () => boxText.textContent = '')
