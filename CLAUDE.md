# Sitio web personal de Jaime Enrique Pesca Santos

Sitio estático multilingüe, sin frameworks ni paso de build. Se publica con GitHub Pages desde la rama `main`, carpeta raíz.

## Estructura

- `index.html`: hub con foto y las 4 tarjetas de perfil.
- `research.html`, `growth.html`, `data.html`, `training.html`: una página por perfil, todas con la misma plantilla: nav → hero tintado → servicios → destacados → CTA → footer.
- `assets/css/styles.css`: único stylesheet; todos los colores y fuentes son tokens en `:root`, con modo oscuro vía `prefers-color-scheme`.
- `assets/js/i18n.js`: motor de idiomas y selector (se carga en `<head>` sin `defer`).
- `assets/i18n/<código>.js`: un diccionario por idioma adicional (`es`, `pt`, `fr`).
- `assets/js/main.js`: solo el toggle del menú móvil.
- `images/jaime-pesca.jpg`: foto del hub (800 × 800); el original está en `images/originals/`. Imágenes futuras por sección en `images/<pagina>/` (p. ej. `images/research/`), optimizadas para web.
- `files/cv/`: hojas de vida de Jaime (fuente de contenido). `files/research/<proyecto>/`: manuscritos, una carpeta por paper. `files/README.md` explica qué es cada archivo y su estado; actualizarlo al agregar archivos.
- Todo lo que está en el repo queda público en GitHub Pages, incluidos los PDF.
- `tools/check-i18n.mjs`: verifica que cada idioma tenga todas las claves.
- Favicon (Σ sobre carmesí): `assets/icons/favicon.svg` es la fuente; `favicon.ico`, `assets/icons/favicon-32.png` y `assets/icons/apple-touch-icon.png` se generan desde ese SVG. Los `<link rel="icon">` van en el `<head>` de cada página.

## Idiomas

- El HTML está en **inglés**, que es el idioma principal. Todo texto visible lleva `data-i18n="pagina.clave"`; atributos traducibles usan `data-i18n-attr="atributo:clave"`.
- Al cambiar o agregar texto: editar el inglés en el HTML y la misma clave en **cada** `assets/i18n/*.js`. Luego correr `node tools/check-i18n.mjs` (debe salir sin faltantes).
- Para agregar un idioma: crear `assets/i18n/<código>.js` (copiar `es.js` y traducir) y sumar `{ code, name }` a `LANGS` en `assets/js/i18n.js`. El selector aparece solo en todas las páginas.
- El idioma elegido se guarda en el navegador y viaja en la URL (`?lang=es`), así que los enlaces compartidos abren en ese idioma.
- Las etiquetas `edit-tag` van fuera de los elementos con `data-i18n` (si no, una traducción las borraría).

## Convenciones de contenido

- Lo que habla de Jaime va en **primera persona** ("soy", "trabajé", "escríbeme"). El nombre completo solo aparece en títulos, `<title>` y meta descripciones.
- Growth y Formación: tono vendedor, con CTA de botón. Investigación, Datos y el hub: tono informativo, humilde pero mostrando el valor.
- Sin rayas largas ni medias (em dash, en dash) en el contenido; usar comas, dos puntos o "·".
- Tono por página con clase en `<body>`: `p-home` (carmesí), `p-research` (azul), `p-growth` (ámbar), `p-data` (verde), `p-teach` (violeta). Cada tono tiene acento `--c-*` y versión profunda `--d-*` (héroe y contacto); las secciones alternan con el tono suave. `--accent-soft`/`--accent-faint` se declaran en `body`, no en `:root`, para que tomen el tono de cada página. Nuevos colores se agregan como tokens, nunca en línea.
- Tipografía estilo MIT: Neue Haas Grotesk (`neue-haas-grotesk-display` / `-text`, Adobe Fonts) como primera opción; hoy se ve Inter Tight (títulos) e Inter (texto y etiquetas) desde Google Fonts. Para usar la original, agregar el `<link>` del kit de Adobe Fonts en el `<head>` de cada página; los tokens ya la piden primero.
- Contenido pendiente de que Jaime lo personalice se marca con `<span class="edit-tag">Editar …</span>` (en español, sin traducir). Al poner contenido real, eliminar la etiqueta.
- Enlaces internos relativos. El sitio se publica en `https://jaimepesca.com` (dominio propio, archivo `CNAME`; no borrarlo) y también responde bajo `jaimepesca.github.io/Personal_Website_Jaime_Pesca/`.
- Al crear una página nueva, copiar la estructura de una existente para mantener nav y footer (con redes sociales) idénticos, y agregar el enlace en el nav de todas las páginas.
- Redes sociales: lista `.social` del footer, igual en todas las páginas. Para sumar una red, agregar un `<li>` en cada página.
- Optimización en Acción (`https://learn-optimization.jaimepesca.com/`, repo `JaimePesca/Educational_Resources_Optimization`): recuadro `.promo` en el hub y enlace `.foot-learn` como última línea del footer en todas las páginas. Los enlaces a ese sitio llevan `data-keep-lang` para abrirlo en el mismo idioma.
