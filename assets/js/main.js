// Menú móvil
const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector("#nav-menu");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

// Correo: se arma aquí y no aparece escrito en el HTML, para que los bots
// que recolectan direcciones no lo encuentren. Los enlaces llevan data-mail;
// con data-mail-text además muestran la dirección.
const MAIL = ["jaime.e.pesca.s", "gmail.com"].join("@");
document.querySelectorAll("[data-mail]").forEach((a) => {
  a.setAttribute("href", "mailto:" + MAIL);
  if (a.hasAttribute("data-mail-text")) a.textContent = MAIL;
});
