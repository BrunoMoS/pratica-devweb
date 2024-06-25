const wolverine = document.querySelector("#wolverine");
wolverine.textContent = Array.from({ length: 25 }, (e, i) => i + 1)
  .sort(() => Math.random() - 0.5)
  .filter((e, i) => i < 15);
