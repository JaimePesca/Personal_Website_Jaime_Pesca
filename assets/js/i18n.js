// Idiomas del sitio.
// El HTML está escrito en inglés (idioma base). Cada idioma adicional vive en
// assets/i18n/<código>.js y traduce las claves marcadas en el HTML con:
//   data-i18n="clave"                 → reemplaza el contenido del elemento
//   data-i18n-attr="atributo:clave"   → reemplaza atributos (varios, separados por ";")
// Para agregar un idioma: crear assets/i18n/<código>.js y sumarlo a LANGS.
// Si falta una clave en un idioma, se muestra el texto en inglés.
// Enlaces externos con data-keep-lang (p. ej. learn-optimization) también reciben ?lang=.
(function () {
  const LANGS = [
    { code: "en", name: "English" },
    { code: "es", name: "Español" },
    { code: "pt", name: "Português" },
    { code: "fr", name: "Français" },
  ];
  const BASE = "en";
  const STORAGE_KEY = "lang";

  const root = document.documentElement;
  const dictDir = document.currentScript.src.replace(/js\/i18n\.js(\?.*)?$/, "i18n/");
  const dicts = {};

  window.I18N = {
    register(code, dict) { dicts[code] = dict; },
  };

  const store = {
    get() { try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; } },
    set(v) { try { localStorage.setItem(STORAGE_KEY, v); } catch (e) { /* sin almacenamiento */ } },
  };

  const isSupported = (code) => LANGS.some((l) => l.code === code);

  function initialLang() {
    const param = new URLSearchParams(location.search).get("lang");
    if (param && isSupported(param)) { store.set(param); return param; }
    const saved = store.get();
    return saved && isSupported(saved) ? saved : BASE;
  }

  function loadDict(code) {
    if (code === BASE || dicts[code]) return Promise.resolve();
    return new Promise((resolve) => {
      const s = document.createElement("script");
      s.src = dictDir + code + ".js";
      s.fetchPriority = "high";
      s.onload = resolve;
      s.onerror = resolve;
      document.head.appendChild(s);
    });
  }

  // Textos originales (inglés) capturados del HTML para poder volver a ellos.
  const original = { text: new Map(), attr: new Map(), href: new Map() };

  function parseAttrSpec(spec) {
    return spec.split(";").map((pair) => pair.split(":").map((s) => s.trim())).filter((p) => p.length === 2);
  }

  function captureOriginal() {
    document.querySelectorAll("[data-i18n]").forEach((el) => original.text.set(el, el.innerHTML));
    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      const values = {};
      parseAttrSpec(el.dataset.i18nAttr).forEach(([attr]) => { values[attr] = el.getAttribute(attr); });
      original.attr.set(el, values);
    });
    // Enlaces internos (y externos con data-keep-lang): llevan ?lang= para que
    // el idioma se mantenga al navegar.
    document.querySelectorAll("a[href]").forEach((a) => {
      const href = a.getAttribute("href");
      // Coincide con "growth.html", "./", "/" y "/growth.html" (la página 404 usa rutas desde la raíz).
      if (/^(\.?\/|\/?[\w-]+\.html)(#.*)?$/.test(href) || a.hasAttribute("data-keep-lang")) original.href.set(a, href);
    });
  }

  function apply(code) {
    const dict = code === BASE ? null : dicts[code];
    if (!dict) code = BASE;
    const t = (key, fallback) => (dict && dict[key] != null ? dict[key] : fallback);

    original.text.forEach((html, el) => { el.innerHTML = t(el.dataset.i18n, html); });
    original.attr.forEach((values, el) => {
      parseAttrSpec(el.dataset.i18nAttr).forEach(([attr, key]) => el.setAttribute(attr, t(key, values[attr])));
    });
    original.href.forEach((href, a) => {
      if (code === BASE) { a.setAttribute("href", href); return; }
      const [path, hash] = href.split("#");
      const sep = path.includes("?") ? "&" : "?";
      a.setAttribute("href", path + sep + "lang=" + code + (hash ? "#" + hash : ""));
    });

    root.lang = code;
    const select = document.querySelector("[data-lang-select]");
    if (select) select.value = code;

    try {
      const url = new URL(location.href);
      if (code === BASE) url.searchParams.delete("lang");
      else url.searchParams.set("lang", code);
      history.replaceState(null, "", url);
    } catch (e) { /* p. ej. abierto desde file:// en algunos navegadores */ }

    // SEO: el canonical apunta a la versión del idioma activo (la misma URL que
    // declaran los hreflang), para que cada idioma se indexe como su propia página.
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      original.canonical = original.canonical || canonical.getAttribute("href");
      try {
        const url = new URL(original.canonical);
        if (code === BASE) url.searchParams.delete("lang");
        else url.searchParams.set("lang", code);
        canonical.setAttribute("href", url.href);
      } catch (e) { /* href inválido: se deja como está */ }
    }
  }

  function buildSwitcher() {
    const select = document.querySelector("[data-lang-select]");
    if (!select) return;
    LANGS.forEach(({ code, name }) => {
      const opt = document.createElement("option");
      opt.value = code;
      opt.lang = code;
      opt.textContent = name;
      select.appendChild(opt);
    });
    select.addEventListener("change", () => {
      const code = select.value;
      store.set(code);
      loadDict(code).then(() => apply(code));
    });
    select.closest("[hidden]")?.removeAttribute("hidden");
  }

  const lang = initialLang();
  // Evita que se vea el inglés un instante antes de traducir. El diccionario
  // se pide con prioridad alta; si tarda más de 1,2 s se muestra la página igual.
  if (lang !== BASE) {
    root.classList.add("i18n-pending");
    setTimeout(() => root.classList.remove("i18n-pending"), 1200);
  }
  const ready = loadDict(lang);

  document.addEventListener("DOMContentLoaded", () => {
    captureOriginal();
    buildSwitcher();
    ready.then(() => {
      apply(lang);
      root.classList.remove("i18n-pending");
    });
  });
})();
