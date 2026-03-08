// ===== SIDEBAR =====
const openNav = () =>
  (document.getElementById("mySidenav").style.width = "250px");
const closeNav = () => (document.getElementById("mySidenav").style.width = "0");

// ===== MODAL =====
const modal = document.getElementById("myModal");
const img = document.getElementById("myImg");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close");
const downloadBtn = document.getElementById("downloadBtn");

img.onclick = () => {
  modal.style.display = "block";
  modalImg.src = img.src;
  captionText.innerHTML = img.alt;
  downloadBtn.href = img.src;
  downloadBtn.download = img.alt || "image";
};

closeBtn.onclick = () => (modal.style.display = "none");
