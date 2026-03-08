const form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  const status = document.getElementById("status");
  const data = new FormData(event.target);

  try {
    const response = await fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: { Accept: "application/json" },
    });

    if (!response.ok) throw new Error("Server error");

    status.className = "success";
    status.innerHTML =
      "Votre message a été envoyé avec succès!<br>Un membre de notre équipe va prendre contact avec vous.";
    form.reset();
  } catch (error) {
    status.className = "error";
    status.innerHTML = "Oops! Une erreur s'est produite veuillez réessayer!";
  }
}

form.addEventListener("submit", handleSubmit);

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
