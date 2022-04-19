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
          <table class="center" style="width:60%">
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

// Code Teamp page

(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = "09/30/",
    birthday = dayMonth + yyyy;

  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end

  const countDown = new Date(birthday).getTime(),
    x = setInterval(function () {
      const now = new Date().getTime(),
        distance = countDown - now;

      (document.getElementById("days").innerText = Math.floor(distance / day)),
        (document.getElementById("hours").innerText = Math.floor(
          (distance % day) / hour
        )),
        (document.getElementById("minutes").innerText = Math.floor(
          (distance % hour) / minute
        )),
        (document.getElementById("seconds").innerText = Math.floor(
          (distance % minute) / second
        ));

      //do something later when date is reached
      if (distance < 0) {
        document.getElementById("headline").innerText = "It's my birthday!";
        document.getElementById("countdown").style.display = "none";
        document.getElementById("content").style.display = "block";
        clearInterval(x);
      }
      //seconds
    }, 0);
})();
