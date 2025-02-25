let citations;

fetch("./citations.json")
  .then((response) => response.json())
  .then((data) => {
    citations = data;
  })
  .catch((error) => console.error("Error loading JSON", error));

console.log(citations);

function newCitation() {
  const randomIndex = Math.floor(Math.random() * citations.length);

  return citations[randomIndex];
}

const newCitationBtn = document.querySelector("#new-citation");

const citationEl = document.querySelector("#citation");

const auteurEl = document.querySelector("#auteur");

const derniereCitation = JSON.parse(localStorage.getItem("derniere-citation"));


if (derniereCitation) {
  newCitationInPage(derniereCitation);
}

newCitationBtn.addEventListener("click", (event) => {
  newCitationInPage(newCitation());
});

function newCitationInPage(newCitation) {
  console.log("date :", newCitation.date);

  const derniereFoisEl = document.querySelector("#derniere-fois");

  const date = new Date();

  const dateHeureFrancaise = date.toLocaleString("fr-FR", {
    dateStyle: "full",
    timeStyle: "short",
  });

  console.log("Citation date :", newCitation.date);

  if (newCitation.date === undefined) {
    derniereFoisEl.textContent = "---";
  } else {
    derniereFoisEl.textContent = newCitation.date;
  }

  newCitation.date = dateHeureFrancaise;

  let citations;

  fetch("./citations.json")
    .then((response) => response.json())
    .then((data) => (citations = data))
    .catch((error) => console.error("Error loading JSON", error));

  if (citations) {
    for (let c = 0; c < citations.length; c++) {
      for (let i in citations[c]) {
        let value = citations[c];

        if (value[i] === newCitation.citation) {
          citations[c] = { ...citations[c], date: dateHeureFrancaise };
        }
      }
    }
  }

  localStorage.setItem("derniere-citation", JSON.stringify(newCitation));

  console.log("new citation :", newCitation);

  citationEl.textContent = newCitation.citation;

  auteurEl.textContent = newCitation.auteur;

  console.log("citation :", citationEl, "auteur :", auteurEl);
}
