//Code for bar menu
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// Code for search bar

// Déclaration des constantes
const search = document.getElementById("search");
const matchList = document.getElementById("match-list");
let states;

// Rechercher les items
const getStates = async () => {
  const res = await fetch("./data/states.json");
  states = await res.json();
};

// Filtrer les items
const searchStates = (searchText) => {
  // Obtenir correspondance à partir du champ de recherche
  let matches = states.filter((state) => {
    const regex = new RegExp(`^${searchText}`, "gi");
    return state.name.match(regex);
  });

  // Clear quand le input ou correspondance sont vide
  if (searchText.length === 0) {
    matches = [];
    matchList.innerHTML = "";
  }

  outputHtml(matches);
};

// Affiche les résultats dans le HTML
const outputHtml = (matches) => {
  if (matches.length > 0) {
    const html = matches
      .map(
        (match) => `
          <table class="center" style="width:80%">
            <tr>
              <th style="width:30%">Ville</th>
              <th style="width:30%">Adresse</th>
              <th style="width:30%">Date et horaire</th>
            </tr>
            <tr>  
              <td>${match.name}</td>
              <td>${match.adress}</td>
              <td>${match.date} / ${match.hour}</td>
            </tr>
          </table>
      `
      )
      .join("");
    matchList.innerHTML = html;
  }
};
window.addEventListener("DOMContentLoaded", getStates);
search.addEventListener("input", () => searchStates(search.value));
