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

// Analítica (GA4): cada enlace o botón a medir declara su evento en el HTML
// con data-ga-event="nombre" (y data-ga-label opcional). Aquí se envía con
// gtag y se agregan la sección donde ocurrió el clic y el idioma de la página.
function track(name, params) {
  if (typeof window.gtag !== "function") return;
  window.gtag("event", name, Object.assign({ page_language: document.documentElement.lang }, params));
}

function sectionOf(el) {
  if (el.closest(".hero")) return "hero";
  if (el.closest(".promo")) return "promo";
  if (el.closest(".cta")) return "contact";
  if (el.closest(".site-foot")) return "footer";
  return "body";
}

document.addEventListener("click", (e) => {
  const el = e.target.closest("[data-ga-event]");
  if (!el) return;
  const params = { link_location: sectionOf(el) };
  if (el.dataset.gaLabel) params.link_label = el.dataset.gaLabel;
  track(el.dataset.gaEvent, params);
});

// Cambio de idioma en el selector
document.querySelector("[data-lang-select]")?.addEventListener("change", (e) => {
  track("language_change", { language: e.target.value });
});

// Preguntas frecuentes abiertas (se registra la clave, igual en todos los idiomas)
document.addEventListener("toggle", (e) => {
  const d = e.target;
  if (!(d instanceof HTMLDetailsElement) || !d.open || !d.closest(".faq")) return;
  track("faq_open", { faq_question: d.querySelector("summary")?.dataset.i18n || "" });
}, true);
