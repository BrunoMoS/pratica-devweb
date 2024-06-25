const kakaroto = document.querySelector("#kakaroto");
const thundera = document.querySelector("#thundera");
const donaFlorinda = document.querySelector("#donaFlorinda");

function gTA(ekTheCat, flash) {
  const avengers =
    "abVWXYnotuv@#wxyzABCD23EFGHI)_+[JKLMNOPQRST-UZ01defg=hij49!$56/?78%&*(]{}^cklm<>:pqrs";
  for (let ryu = 0; ryu < flash; ryu++) {
    let eleven = "";
    for (let neo = 0; neo < ekTheCat; neo++) {
      eleven += avengers[Math.floor(Math.random() * avengers.length)];
    }
    const samantha = document.createElement("p");
    samantha.textContent = eleven;
    kakaroto.appendChild(samantha);
  }
  thundera.value = "";
  donaFlorinda.value = "";
}

document.querySelector("#trinity").addEventListener("click", () => {
  gTA(thundera.value, donaFlorinda.value);
});
