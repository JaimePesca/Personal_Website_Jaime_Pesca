# Sitio web personal de Jaime Enrique Pesca Santos

Sitio estático multilingüe, sin frameworks ni paso de build. Se publica con GitHub Pages desde la rama `main`, carpeta raíz.

## Estructura

- `index.html`: hub con foto y las 4 tarjetas de perfil.
- `research.html`, `growth.html`, `data.html`, `training.html`: una página por perfil, todas con la misma plantilla: nav → hero tintado → servicios → destacados → CTA → footer.
- `assets/css/styles.css`: estilos compartidos y sistema visual (íconos, decoraciones, animaciones); todos los colores y fuentes son tokens en `:root`, con modo oscuro vía `prefers-color-scheme`. `assets/css/pages/<pagina>.css` (home, research, growth, data, training): estilos e ilustraciones propias de cada página, enlazados después de `styles.css`.
- Versionado: los enlaces a CSS y JS llevan `?v=<versión>` y `i18n.js` pide los diccionarios con la misma versión. Antes de publicar cambios en `assets/`, correr `node tools/bump-version.mjs` para que los navegadores no usen archivos viejos.
- `assets/js/i18n.js`: motor de idiomas y selector (se carga en `<head>` sin `defer`).
- `assets/i18n/<código>.js`: un diccionario por idioma adicional (`es`, `pt`, `fr`).
- `assets/js/main.js`: toggle del menú móvil y armado del correo (enlaces con `data-mail`; con `data-mail-text` también muestran la dirección). El correo nunca se escribe en el HTML ni en el JSON-LD.
- `404.html`: página de error con las 4 tarjetas; usa rutas desde la raíz (`/assets/...`, `/growth.html`) y `noindex`.
- `assets/fonts/`: Inter e Inter Tight (woff2 variables, latin y latin-ext) con sus licencias OFL.
- `images/jaime-pesca.jpg`: foto del hub (800 × 800), con versiones `jaime-pesca.webp` y `jaime-pesca-500.webp`; el original está en `images/originals/`. `images/social/og-<pagina>.jpg`: imágenes de 1200 × 630 para redes (Open Graph). Imágenes futuras por sección en `images/<pagina>/` (p. ej. `images/research/`), optimizadas para web.
- Todo lo que está en el repo queda público en GitHub Pages. Las hojas de vida y los manuscritos se retiraron del repositorio y `robots.txt` bloquea `/files/`: no volver a subir documentos privados.
- `tools/check-i18n.mjs`: verifica que cada idioma tenga todas las claves. `tools/bump-version.mjs`: actualiza el `?v=` de CSS y JS en todas las páginas.
- Favicon (Σ sobre carmesí): `assets/icons/favicon.svg` es la fuente; `favicon.ico`, `assets/icons/favicon-32.png` y `assets/icons/apple-touch-icon.png` se generan desde ese SVG. Los `<link rel="icon">` van en el `<head>` de cada página.

## SEO y analítica

- Cada página lleva en `<head>`: la etiqueta de Google Analytics 4 (`G-XW74HS2G7B`) justo después de `<head>` y una sola vez; `canonical` a la URL limpia en inglés (la portada es `https://jaimepesca.com/`); `hreflang` en/es/pt/fr (`?lang=`) y `x-default`; Open Graph, Twitter Card y un bloque JSON-LD (`@graph`) con la `Person` `https://jaimepesca.com/#person`.
- `i18n.js` cambia el canonical a la URL del idioma activo; no quitar esa parte.
- Eventos de GA4: cada enlace o botón medible lleva `data-ga-event="nombre"` (y `data-ga-label` opcional) y `main.js` los envía con `gtag`, agregando `link_location` (hero, promo, contact, footer, body) y `page_language`. Eventos: `request_growth_plan`, `request_training_program`, `request_data_consultation`, `email_click` (todo enlace con `data-mail` debe tenerlo), `social_click`, `learn_optimization_click`; además `language_change` y `faq_open` salen solos del selector y de las FAQ. Al agregar un botón o enlace importante, ponerle su `data-ga-event`.
- Al crear una página: copiar ese bloque del `<head>`, crear su imagen `images/social/og-<pagina>.jpg`, agregar sus 4 URLs a `sitemap.xml` (con sus `xhtml:link` alternos) y actualizar `lastmod`.
- Títulos (`*.meta.title`) y descripciones (`*.meta.desc`) se traducen en los diccionarios. Descripciones de 160 caracteres o menos: servicio primero e invitación al final. Si cambian, actualizar también `og:`, `twitter:` y el JSON-LD de esa página.
- `robots.txt` apunta al sitemap. `SEO_REPORT.md` resume lo implementado y las recomendaciones pendientes.

## Idiomas

- El HTML está en **inglés**, que es el idioma principal. Todo texto visible lleva `data-i18n="pagina.clave"`; atributos traducibles usan `data-i18n-attr="atributo:clave"`.
- Al cambiar o agregar texto: editar el inglés en el HTML y la misma clave en **cada** `assets/i18n/*.js`. Luego correr `node tools/check-i18n.mjs` (debe salir sin faltantes).
- Para agregar un idioma: crear `assets/i18n/<código>.js` (copiar `es.js` y traducir) y sumar `{ code, name }` a `LANGS` en `assets/js/i18n.js`. El selector aparece solo en todas las páginas.
- El idioma elegido se guarda en el navegador y viaja en la URL (`?lang=es`), así que los enlaces compartidos abren en ese idioma.
- Las etiquetas `edit-tag` van fuera de los elementos con `data-i18n` (si no, una traducción las borraría).

## Convenciones de contenido

- **No nombrar empresas** (clientes ni empleadores): hablar de sectores y tipos de empresa ("multinacionales de banca", "empresas de marketing en Brasil", "una startup de software"). Sí se pueden nombrar las universidades (Universidad de La Sabana, Universidad Externado de Colombia, MIT). Cifras aprobadas por Jaime: más de USD 150.000 al mes en pauta, ROAS de más de 10x, más de 40 empresas y microempresas, más de 100 profesionales formados, pauta para cualquier industria (todo público o +18).
- Lo que habla de Jaime va en **primera persona** ("soy", "trabajé", "escríbeme"). El nombre completo solo aparece en títulos, `<title>` y meta descripciones.
- Growth y Formación: tono vendedor, con CTA de botón y preguntas frecuentes (`.faq` con `<details>`, más `FAQPage` en el JSON-LD con las mismas preguntas). Datos: informativo pero invita a pedir asesoría (botón en el héroe y en contacto). Investigación y el hub: tono informativo, humilde pero mostrando el valor.
- Sin fechas en experiencias, proyectos, docencia, formación ni premios (solo el año de las publicaciones y los nombres de conferencias).
- Inicio, Growth, Datos y Formación mencionan que Jaime es experto en IA, relacionado con el tema de la página (clave `ai.badge` y secciones `.ai-section`). Los valores (ética, calidad, rigurosidad, analítica garantizada) van en la portada y como `.values-inline` en el contacto de Growth, Datos y Formación.
- Ilustraciones y animaciones: SVG en línea decorativo (`aria-hidden`), colores solo con tokens, sin texto dentro, y todo quieto con `prefers-reduced-motion`. Entradas con `.reveal` y contadores con `data-count` (manejados por `main.js`).
- Sin rayas largas ni medias (em dash, en dash) en el contenido; usar comas, dos puntos o "·".
- Tono por página con clase en `<body>`: `p-home` (carmesí), `p-research` (azul), `p-growth` (ámbar), `p-data` (verde), `p-teach` (violeta). Cada tono tiene acento `--c-*` y versión profunda `--d-*` (héroe y contacto); las secciones alternan con el tono suave. `--accent-soft`/`--accent-faint` se declaran en `body`, no en `:root`, para que tomen el tono de cada página. Nuevos colores se agregan como tokens, nunca en línea.
- Tipografía estilo MIT: Neue Haas Grotesk (`neue-haas-grotesk-display` / `-text`, Adobe Fonts) como primera opción; hoy se ve Inter Tight (títulos) e Inter (texto y etiquetas), alojadas en `assets/fonts/` con `@font-face` en `styles.css` y `preload` en cada `<head>`. No usar Google Fonts.
- Contenido pendiente de que Jaime lo personalice se marca con `<span class="edit-tag">Editar …</span>` (en español, sin traducir). Al poner contenido real, eliminar la etiqueta.
- Enlaces internos relativos. El sitio se publica en `https://jaimepesca.com` (dominio propio, archivo `CNAME`; no borrarlo) y también responde bajo `jaimepesca.github.io/Personal_Website_Jaime_Pesca/`.
- Al crear una página nueva, copiar la estructura de una existente para mantener nav y footer (con redes sociales) idénticos, y agregar el enlace en el nav de todas las páginas.
- Redes sociales: lista `.social` del footer, igual en todas las páginas. Para sumar una red, agregar un `<li>` en cada página.
- Optimización en Acción (`https://learn-optimization.jaimepesca.com/`, repo `JaimePesca/Educational_Resources_Optimization`): recuadro `.promo` en el hub y enlace `.foot-learn` como última línea del footer en todas las páginas. Los enlaces a ese sitio llevan `data-keep-lang` para abrirlo en el mismo idioma.
