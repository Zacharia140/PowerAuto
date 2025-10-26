document.getElementById("year").textContent = new Date().getFullYear();

const dateEl = document.getElementById("creation-date");
if (dateEl) {
  setTimeout(() => {
    dateEl.style.color = "#1e3a8a";
    dateEl.style.fontWeight = "bold";
  }, 1000);
}
