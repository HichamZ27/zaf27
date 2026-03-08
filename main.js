/* ========================
   SIDEBAR — menu hamburger
======================== */
function openNav() {
  document.getElementById("mySidenav").style.width = "260px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// Fermer le sidebar en cliquant en dehors
document.addEventListener("click", function (e) {
  const sidenav = document.getElementById("mySidenav");
  const openbtn = document.getElementById("openbtn");
  if (
    sidenav &&
    openbtn &&
    !sidenav.contains(e.target) &&
    !openbtn.contains(e.target)
  ) {
    sidenav.style.width = "0";
  }
});

/* ========================
   POP-UP YOUTUBE (Fancybox)
======================== */
window.addEventListener("load", function () {
  if (typeof Fancybox !== "undefined") {
    Fancybox.show([
      { src: "https://youtu.be/v3tu9_q0hbM?feature=shared", type: "iframe" },
    ]);
  }
});

/* ========================
   BARRE DE RECHERCHE
======================== */
const searchInput = document.getElementById("search");
const matchList = document.getElementById("match-list");
let states = [];

// Charger les données JSON
async function getStates() {
  try {
    const res = await fetch("./data/states.json");
    if (!res.ok) throw new Error("Erreur de chargement des données");
    states = await res.json();
  } catch (err) {
    console.error("getStates:", err);
  }
}

// Filtrer les résultats
function searchStates(searchText) {
  if (!searchText || searchText.trim().length === 0) {
    matchList.innerHTML = "";
    return;
  }

  const regex = new RegExp(`^${searchText.trim()}`, "gi");
  const matches = states.filter((state) => state.name.match(regex));

  outputHtml(matches);
}

// Afficher les résultats
function outputHtml(matches) {
  if (!matchList) return;

  if (matches.length === 0) {
    matchList.innerHTML = "";
    return;
  }

  const rows = matches
    .map(
      (match) => `
      <table class="center" style="width:80%">
        <thead>
          <tr>
            <th style="width:30%">Ville</th>
            <th style="width:30%">Adresse</th>
            <th style="width:30%">Date et horaire</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${match.name}</td>
            <td>${match.adress}</td>
            <td>${match.date} / ${match.hour}</td>
          </tr>
        </tbody>
      </table>
    `
    )
    .join("");

  matchList.innerHTML = rows;
}

/* ========================
   INITIALISATION
======================== */
document.addEventListener("DOMContentLoaded", function () {
  // Charger les données de recherche
  getStates();

  // Écouter la saisie dans la barre de recherche
  if (searchInput) {
    searchInput.addEventListener("input", () =>
      searchStates(searchInput.value)
    );
  }

  // Mise à jour automatique de l'année du copyright
  const yearEls = document.querySelectorAll(".copyright-year");
  yearEls.forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
});
