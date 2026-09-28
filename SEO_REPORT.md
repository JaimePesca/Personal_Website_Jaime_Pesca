# Reporte de SEO técnico · jaimepesca.com

Fecha: 2026-09-28 · Rama: `seo-technical`

Todos los cambios son técnicos y no se ven en pantalla. Para comprobarlo, se compararon las 5 páginas en los 4 idiomas (20 combinaciones) antes y después del cambio: las capturas son idénticas píxel a píxel y el texto visible es el mismo. No cambió ninguna ruta, nombre de archivo, texto, traducción ni estilo.

---

## 1. Google Analytics 4 (G-XW74HS2G7B)

El sitio no usa Jekyll ni una plantilla compartida: cada página es un HTML independiente. Por eso la etiqueta se pegó **una vez en cada página**, justo después de `<head>`:

| Archivo | Etiqueta GA4 |
|---|---|
| `index.html` | Sí, 1 vez |
| `research.html` | Sí, 1 vez |
| `growth.html` | Sí, 1 vez |
| `data.html` | Sí, 1 vez |
| `training.html` | Sí, 1 vez |

No existía ninguna etiqueta de Google Analytics antes de este cambio.

---

## 2. Cómo funcionan los idiomas (importante para entender el SEO)

Los idiomas no son páginas separadas: es la misma URL con el parámetro `?lang=`, y el texto se traduce con JavaScript (`assets/js/i18n.js`). Las URLs de cada idioma son:

| Página | en (principal y x-default) | es | pt | fr |
|---|---|---|---|---|
| Inicio | `https://jaimepesca.com/` | `/?lang=es` | `/?lang=pt` | `/?lang=fr` |
| Investigación | `/research.html` | `/research.html?lang=es` | `?lang=pt` | `?lang=fr` |
| Growth | `/growth.html` | `/growth.html?lang=es` | `?lang=pt` | `?lang=fr` |
| Datos | `/data.html` | `/data.html?lang=es` | `?lang=pt` | `?lang=fr` |
| Formación | `/training.html` | `/training.html?lang=es` | `?lang=pt` | `?lang=fr` |

Google ejecuta JavaScript, así que puede ver cada idioma. Para que cada versión se indexe por separado:

- El HTML declara el canonical en inglés, y `i18n.js` lo cambia a la URL del idioma activo cuando la página se ve en otro idioma. Por ejemplo, en `/growth.html?lang=es` el canonical final es `https://jaimepesca.com/growth.html?lang=es`. Así el canonical coincide con los hreflang.
- `i18n.js` ya cambiaba `<html lang>` al idioma activo (`en`, `es`, `pt`, `fr`). El HTML estático declara `lang="en"`, que es el idioma del contenido sin traducir.

Limitación: redes sociales como LinkedIn, WhatsApp y X no ejecutan JavaScript, así que al compartir un enlace siempre muestran la vista previa en inglés. Ver la recomendación R3.

---

## 3. Cambios de SEO por archivo

### Todas las páginas (`index.html`, `research.html`, `growth.html`, `data.html`, `training.html`)
- Etiqueta GA4 justo después de `<head>`.
- `<meta name="author" content="Jaime Enrique Pesca Santos">`.
- `<link rel="canonical">` hacia la URL limpia en inglés (en la portada, `https://jaimepesca.com/`, no `/index.html`).
- 5 etiquetas `hreflang`: `en`, `es`, `pt`, `fr` y `x-default` (que apunta al inglés).
- Open Graph: `og:type`, `og:site_name`, `og:title`, `og:description`, `og:url`, `og:image` (tu foto de 800 × 800) con ancho, alto y texto alternativo, `og:locale` (`en_US`) y `og:locale:alternate` (`es_CO`, `pt_BR`, `fr_FR`).
- Twitter Card tipo `summary`, con título, descripción e imagen.
- Datos estructurados schema.org en JSON-LD, un bloque `@graph` por página (ver abajo).
- `og:title` / `twitter:title` repiten el `<title>` existente y `og:description` / `twitter:description` repiten la meta description existente. No se redactó texto nuevo.

### JSON-LD por página
| Archivo | Tipos schema.org |
|---|---|
| `index.html` | `WebSite`, `ProfilePage`, `Person` (completo: formación, certificados, premios, membresías, idiomas, áreas, LinkedIn y GitHub), `LearningResource` (Optimización en Acción) |
| `research.html` | `WebPage` con migas de pan, `Person`, `WebSite`, 4 × `ScholarlyArticle` (1 publicado con Springer/ICPR 2025, 2 en revisión, 1 en preparación, con su estado en `creativeWorkStatus`), 2 × `Course` (Externado) |
| `growth.html` | `WebPage` con migas de pan, `Person`, `WebSite`, `Service` con catálogo de los 4 servicios |
| `data.html` | `WebPage` con migas de pan, `Person`, `WebSite`, `Service` con catálogo de las 4 áreas |
| `training.html` | `WebPage` con migas de pan, `Person`, `WebSite`, `Service` con catálogo de los 6 temas como `Course` |

Todos los datos salen del contenido que ya está en cada página. La `Person` usa el mismo `@id` (`https://jaimepesca.com/#person`) en todo el sitio, para que Google la reconozca como una sola entidad.

### `assets/js/i18n.js`
- Al aplicar un idioma, actualiza `<link rel="canonical">` a la URL de ese idioma (sección 2). No cambia nada visible.

### `sitemap.xml` (nuevo)
- 20 URLs: 5 páginas × 4 idiomas, cada una con sus alternativas `xhtml:link hreflang` (incluido `x-default`) y `lastmod` 2026-09-28.

### `robots.txt` (nuevo)
- Permite todo el sitio y apunta a `https://jaimepesca.com/sitemap.xml`.
- Bloquea solo archivos internos del repositorio sin valor para buscadores: `/tools/`, `/.claude/`, `/CLAUDE.md`, `/README.md`, `/SEO_REPORT.md`.
- No bloquea `/files/`. Ver la recomendación R1.

### Meta title y meta description
Las 5 páginas ya tenían `<title>` y meta description en inglés, y las 3 traducciones de cada una ya existían en `assets/i18n/*.js`. Como pediste agregarlas solo donde faltaran, **no se agregó ninguna nueva**.

---

## 4. Meta descriptions nuevas

**Ninguna.** Todas existían. Para que las revises, estas son las actuales, que ahora también se usan en Open Graph y Twitter:

| Página | Caracteres | Meta description actual |
|---|---|---|
| `index.html` | 177 | Jaime Enrique Pesca Santos: industrial engineer and M.S. in Applied Analytics working across optimization research, growth and media buying, data science and corporate training. |
| `research.html` | 183 | Research and teaching of Jaime Enrique Pesca Santos: optimization models for wildfire response, facility location and air cargo, and university teaching in analytics and optimization. |
| `growth.html` | 149 | Jaime Enrique Pesca Santos, senior growth and media buyer: paid media on Meta and Google, measurement with GA4 and GTM, and campaigns built to scale. |
| `data.html` | 143 | Jaime Enrique Pesca Santos in data science: machine learning, business intelligence and large-scale optimization applied to business decisions. |
| `training.html` | 150 | Corporate training by Jaime Enrique Pesca Santos: in-company courses on experimentation, optimization, analytics, machine learning and digital growth. |

Google suele cortar las descripciones en unos 155 a 160 caracteres. La de la portada y la de Investigación se cortarán, y también varias de las traducciones (por ejemplo, `home.meta.desc`: 196 en español, 194 en portugués, 203 en francés). Ver la recomendación R2.

---

## 5. Recomendaciones que NO se implementaron (para que decidas)

Tu objetivo es que la gente llegue buscando tus 4 servicios. Estas son las acciones con más impacto, ordenadas por prioridad.

### Alta prioridad
- **R1. PDFs públicos e indexables.** Hoy Google puede indexar `files/cv/*.pdf`, que incluye tu número de celular, y `files/research/*` (manuscritos en revisión, lo que algunas revistas no permiten). Opciones: agregar `Disallow: /files/` a `robots.txt`, o sacar esos archivos del repositorio público.
- **R2. Títulos y descripciones orientados a búsquedas.** La portada se titula solo "Jaime Pesca", y los títulos de las páginas no incluyen lo que la gente busca. Ejemplos para decidir (cambian el texto de la pestaña del navegador):
  - Portada: "Jaime Pesca · Optimization, Data Science, Growth & Corporate Training"
  - Growth: "Growth & Media Buying Consultant · Meta & Google Ads · Jaime Pesca"
  - Datos: "Data Science & Optimization Consulting · Jaime Pesca"
  - Formación: "Corporate Training in Analytics, Experimentation & AI · Jaime Pesca"
  - Además, acortar las descripciones a 160 caracteres o menos, poner primero el servicio y cerrar con una invitación a contactarte. También conviene traducir el título de la portada (hoy no tiene traducción).
- **R3. Páginas estáticas por idioma** (por ejemplo `/es/growth.html`). Es la forma más confiable de posicionar en español, portugués y francés, y hace que las vistas previas en redes salgan en el idioma correcto. Implica cambiar la estructura del sitio, así que no se hizo.
- **R4. Google Search Console.** Verificar el dominio `jaimepesca.com` (puedes usar la misma cuenta de GA4) y enviar `https://jaimepesca.com/sitemap.xml`. Lo mismo en Bing Webmaster Tools.
- **R5. Privacidad.** GA4 usa cookies. Conviene un aviso de privacidad y cookies (Ley 1581 de Colombia y RGPD si tienes visitantes de Europa) y, si aplica, un banner de consentimiento con Consent Mode de Google.

### Contenido (lo que más atrae búsquedas de servicios)
- **R6. Casos con resultados.** Una página o sección por caso (por ejemplo, "optimización de turnos en Coca-Cola FEMSA" o "predicción de churn") con problema, enfoque y cifras. Es el contenido que más posiciona en búsquedas de servicios.
- **R7. Ubicación.** El sitio casi no dice dónde trabajas (Bogotá, Colombia, remoto). Mencionarlo ayuda en búsquedas como "consultor de Meta Ads en Colombia" o "capacitación en analítica Bogotá".
- **R8. Preguntas frecuentes** en Growth y Formación (precios o rangos, duración, modalidad, idiomas). Se pueden marcar con `FAQPage`.
- **R9. Testimonios** de clientes o de participantes de las formaciones.
- **R10. Enlaces entrantes.** Enlazar jaimepesca.com desde LinkedIn, GitHub (perfil y repositorios), Optimización en Acción, Google Scholar y ORCID. Crear perfiles en Google Scholar y ORCID también ayuda a que te encuentren por tus publicaciones.

### Técnico y rendimiento
- **R11. Imagen para redes sociales** de 1200 × 630 px (foto, nombre y servicios). Permitiría la tarjeta grande `summary_large_image`; hoy la foto es cuadrada y se muestra pequeña.
- **R12. Texto oculto mientras carga la traducción.** Al abrir la página en otro idioma, el cuerpo queda oculto hasta 2,5 s mientras carga el diccionario. Esto puede empeorar el LCP (Core Web Vitals) en es, pt y fr. Se resuelve con R3 o precargando el diccionario.
- **R13. Fuentes propias.** Servir Inter e Inter Tight desde el mismo dominio en lugar de Google Fonts ahorra conexiones y mejora la privacidad.
- **R14. Foto de la portada:** agregar `fetchpriority="high"` y una versión WebP más liviana.
- **R15. Página 404 personalizada** (`404.html`) con enlaces a los 4 servicios.
- **R16. Enlaces a `index.html`.** El menú enlaza a `index.html` y el canonical es `/`. El canonical ya evita contenido duplicado, pero enlazar directamente a `./` sería más limpio (implica cambiar enlaces).
- **R17. Eventos de conversión en GA4.** Medir clics en "Request a growth plan", "Design a program", en el correo y en los enlaces a LinkedIn y a Optimización en Acción, y marcarlos como conversiones.
- **R18. Correo visible en texto plano.** Los bots lo pueden recolectar para spam. Un formulario de contacto (por ejemplo, Formspree) lo evita y además permite medir conversiones.
- **R19. Datos académicos:** agregar el DOI del capítulo de ICPR 2025 cuando lo tengas (hoy solo está el del libro). Si publicas versiones preprint, usa las metaetiquetas `citation_*` de Google Scholar.
- **R20. Cuenta de X:** si tienes una, agrega `twitter:site` y `twitter:creator`, y súmala a `sameAs` en el JSON-LD.
