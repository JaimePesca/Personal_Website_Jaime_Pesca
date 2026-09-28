# Reporte de SEO técnico · jaimepesca.com

Rama: `seo-technical` · Actualizado: 2026-09-28

El reporte tiene dos rondas:
1. **Ronda 1:** SEO técnico sin cambios visibles.
2. **Ronda 2:** las recomendaciones que aprobaste. Esta ronda sí cambia cosas visibles: títulos de pestaña, preguntas frecuentes, ubicación, botón de correo, fuentes y la página 404.

---

## 1. Google Analytics 4 (G-XW74HS2G7B)

El sitio no usa Jekyll ni una plantilla compartida, así que la etiqueta va **una vez en cada página**, justo después de `<head>`:

| Archivo | Etiqueta GA4 |
|---|---|
| `index.html` | Sí, 1 vez |
| `research.html` | Sí, 1 vez |
| `growth.html` | Sí, 1 vez |
| `data.html` | Sí, 1 vez |
| `training.html` | Sí, 1 vez |
| `404.html` (nueva) | Sí, 1 vez, para medir enlaces rotos |

Antes no existía ninguna etiqueta de Google Analytics.

---

## 2. Cómo funcionan los idiomas

Cada idioma es la misma URL con `?lang=` (por ejemplo, `https://jaimepesca.com/growth.html?lang=es`) y el texto se traduce con JavaScript (`assets/js/i18n.js`).

- El HTML declara `lang="en"` y un canonical en inglés. `i18n.js` cambia `<html lang>` y el canonical a la URL del idioma activo, de modo que coinciden con los hreflang y cada idioma se indexa por separado.
- Las redes sociales no ejecutan JavaScript: las vistas previas al compartir siempre salen en inglés. Decidiste no hacer páginas estáticas por idioma (R3).

---

## 3. Cambios por archivo

### `index.html`, `research.html`, `growth.html`, `data.html`, `training.html`
- **Ronda 1:** GA4, `meta author`, `canonical`, `hreflang` (en, es, pt, fr, x-default), Open Graph, Twitter Card y JSON-LD.
- **R2:** títulos y meta descriptions nuevos, traducidos a los 4 idiomas (sección 4). El título de la portada ahora también se traduce. En las traducciones, el sufijo "Jaime Pesca Santos" pasó a "Jaime Pesca" para coincidir con tu cambio de marca.
- **R7:** "Colombia · Remote" en el pie de todas las páginas y como dato en el héroe de la portada. En el JSON-LD: `homeLocation` (Colombia), y en los servicios `areaServed` y `availableChannel` remoto.
- **R11:** `og:image` y `twitter:image` usan una imagen de 1200 × 630 por página (`images/social/og-*.jpg`), con tarjeta `summary_large_image`.
- **R13:** el `<head>` precarga las fuentes del propio sitio (`preload`) en lugar de conectarse a Google Fonts.
- **R16:** los enlaces a la portada ahora apuntan a `./` en lugar de `index.html`.
- **R18:** el correo ya no aparece en el HTML. Los enlaces llevan `data-mail` y la dirección la arma `main.js`. Inicio, Investigación y Datos ganan un botón "Write to me" (Escríbeme) junto a la dirección.
- **JSON-LD:** se quitó el correo de `Person` (R18).

### Solo `index.html`
- **R14:** la foto usa `<picture>` con WebP (12 KB y 28 KB, frente a 58 KB del JPG) y `fetchpriority="high"`.
- JSON-LD: `WebSite`, `ProfilePage`, `Person` y `LearningResource`.

### `growth.html` y `training.html`
- **R8:** sección de preguntas frecuentes (6 en Growth y 7 en Formación) antes del contacto, más `FAQPage` en el JSON-LD con las mismas preguntas. Contenido: precio a cotizar tras una primera conversación sin costo; Growth empieza con diagnóstico y sigue por proyecto o mensual; Meta y Google Ads con GA4 y GTM; trabajo desde Colombia y en remoto; formación presencial, virtual o híbrida; duración según formato; ejercicios con datos de la empresa; constancia de asistencia; español e inglés; respuesta en 1 día hábil.
- Nota: desde 2023 Google solo muestra resultados enriquecidos de FAQ para sitios de gobierno y de salud. El marcado sigue ayudando a entender la página, pero no esperes el desplegable en los resultados.
- JSON-LD de Formación: los 6 temas como `Course` con modalidad presencial, en línea y mixta, e idiomas español e inglés.

### `404.html` (nuevo, R15)
- Misma plantilla del sitio, traducida a los 4 idiomas, con botón "Back to home" y las 4 tarjetas de servicios.
- `noindex`. Usa rutas desde la raíz porque GitHub Pages la muestra en cualquier URL inexistente.

### `assets/css/styles.css`
- **R13:** `@font-face` para Inter e Inter Tight alojadas en `assets/fonts/` (latin y latin-ext, con licencia SIL OFL incluida).
- Estilo de las preguntas frecuentes (acordeón con "+").

### `assets/js/i18n.js`
- **Ronda 1:** el canonical sigue al idioma activo.
- **R12:** el diccionario se pide con prioridad alta y el tiempo máximo con la página oculta bajó de 2,5 s a 1,2 s.
- **R15/R16:** reconoce los enlaces `./`, `/` y `/pagina.html` para mantener el idioma al navegar.

### `assets/js/main.js`
- **R18:** arma los enlaces `mailto:` y la dirección visible.

### `robots.txt`, `sitemap.xml`
- `robots.txt`: apunta al sitemap y bloquea `/files/` (R1), `/tools/`, `/.claude/`, `CLAUDE.md`, `README.md` y este reporte.
- `sitemap.xml`: 20 URLs (5 páginas × 4 idiomas) con sus alternativas hreflang. La 404 no se incluye.

### `files/` (eliminada, R1)
- Se retiraron del repositorio las 3 hojas de vida, los 3 manuscritos y `files/README.md`.
- **Importante:** siguen existiendo en el historial de git del repositorio público. Quien busque en commits antiguos todavía puede descargarlos. Para borrarlos por completo hay que reescribir el historial (por ejemplo, con `git filter-repo`) o hacer privado el repositorio. No lo hice porque es irreversible; dime si quieres que lo hagamos.

### Imágenes nuevas
- `images/social/og-home.jpg`, `og-research.jpg`, `og-growth.jpg`, `og-data.jpg`, `og-training.jpg` (1200 × 630): tono de cada página, servicio, tu foto y "Colombia · Remote · jaimepesca.com".
- `images/jaime-pesca.webp` y `images/jaime-pesca-500.webp`.

---

## 4. Títulos y meta descriptions nuevos (para revisar)

### Títulos

**Inicio (`index.html`)**

| Idioma | Caracteres | Texto |
|---|---|---|
| EN | 69 | Jaime Pesca · Optimization, Data Science, Growth & Corporate Training |
| ES | 76 | Jaime Pesca · Optimización, Ciencia de Datos, Growth y Formación Empresarial |
| PT | 76 | Jaime Pesca · Otimização, Ciência de Dados, Growth e Treinamento Corporativo |
| FR | 82 | Jaime Pesca · Optimisation, science des données, growth et formation en entreprise |

**Investigación (`research.html`)**

| Idioma | Caracteres | Texto |
|---|---|---|
| EN | 33 | Research & Teaching · Jaime Pesca |
| ES | 38 | Investigación y Docencia · Jaime Pesca |
| PT | 33 | Pesquisa e Docência · Jaime Pesca |
| FR | 39 | Recherche et enseignement · Jaime Pesca |

**Growth (`growth.html`)**

| Idioma | Caracteres | Texto |
|---|---|---|
| EN | 66 | Growth & Media Buying Consultant · Meta & Google Ads · Jaime Pesca |
| ES | 68 | Consultor de Growth y Media Buying · Meta y Google Ads · Jaime Pesca |
| PT | 66 | Consultor de Growth e Mídia Paga · Meta e Google Ads · Jaime Pesca |
| FR | 67 | Consultant growth et achat média · Meta et Google Ads · Jaime Pesca |

**Datos (`data.html`)**

| Idioma | Caracteres | Texto |
|---|---|---|
| EN | 52 | Data Science & Optimization Consulting · Jaime Pesca |
| ES | 60 | Consultoría en Ciencia de Datos y Optimización · Jaime Pesca |
| PT | 58 | Consultoria em Ciência de Dados e Otimização · Jaime Pesca |
| FR | 60 | Conseil en science des données et optimisation · Jaime Pesca |

**Formación (`training.html`)**

| Idioma | Caracteres | Texto |
|---|---|---|
| EN | 67 | Corporate Training in Analytics, Experimentation & AI · Jaime Pesca |
| ES | 70 | Formación Empresarial en Analítica, Experimentación e IA · Jaime Pesca |
| PT | 71 | Treinamento Corporativo em Analítica, Experimentação e IA · Jaime Pesca |
| FR | 73 | Formation en entreprise : analytique, expérimentation et IA · Jaime Pesca |

### Meta descriptions (160 caracteres o menos)

**Inicio (`index.html`)**

| Idioma | Caracteres | Texto |
|---|---|---|
| EN | 141 | Operations research, data science, paid media growth and corporate training. Based in Colombia, working remotely. Write to me and let's talk. |
| ES | 131 | Investigación de operaciones, ciencia de datos, growth y formación empresarial. Desde Colombia, en remoto. Escríbeme y conversemos. |
| PT | 142 | Pesquisa operacional, ciência de dados, growth e treinamento corporativo. Da Colômbia, em trabalho remoto. Escreva para mim e vamos conversar. |
| FR | 141 | Recherche opérationnelle, science des données, growth et formation en entreprise. Depuis la Colombie, à distance. Écrivez-moi pour en parler. |

**Investigación (`research.html`)**

| Idioma | Caracteres | Texto |
|---|---|---|
| EN | 147 | Optimization models for wildfire response, facility location and air cargo, plus university teaching in analytics. Open to research collaborations. |
| ES | 158 | Modelos de optimización para incendios forestales, localización de instalaciones y carga aérea, y docencia en analítica. Abierto a colaborar en investigación. |
| PT | 150 | Modelos de otimização para incêndios florestais, localização de instalações e carga aérea, e docência em analítica. Aberto a colaborações de pesquisa. |
| FR | 155 | Modèles d’optimisation pour les feux de forêt, la localisation d’installations et le fret aérien, et enseignement en analytique. Ouvert aux collaborations. |

**Growth (`growth.html`)**

| Idioma | Caracteres | Texto |
|---|---|---|
| EN | 153 | Paid media on Meta and Google Ads, GA4 measurement and conversion optimization with a data scientist's rigor. Colombia and remote. Request a growth plan. |
| ES | 159 | Pauta en Meta y Google Ads, medición con GA4 y optimización de conversión con rigor de científico de datos. Colombia y remoto. Solicita tu plan de crecimiento. |
| PT | 148 | Mídia paga no Meta e no Google Ads, mensuração com GA4 e otimização de conversão com rigor de cientista de dados. Colômbia e remoto. Peça seu plano. |
| FR | 154 | Médias payants sur Meta et Google Ads, mesure GA4 et optimisation de la conversion, avec la rigueur d’un data scientist. Colombie, à distance. Parlons-en. |

**Datos (`data.html`)**

| Idioma | Caracteres | Texto |
|---|---|---|
| EN | 159 | Data science and optimization consulting: machine learning, Power BI dashboards and MILP models for better business decisions. Colombia and remote. Let's talk. |
| ES | 153 | Consultoría en ciencia de datos y optimización: machine learning, tableros en Power BI y modelos MILP para decidir mejor. Colombia y remoto. Conversemos. |
| PT | 158 | Consultoria em ciência de dados e otimização: machine learning, dashboards em Power BI e modelos MILP para decidir melhor. Colômbia e remoto. Vamos conversar. |
| FR | 150 | Conseil en science des données et optimisation : machine learning, tableaux de bord Power BI et modèles MILP pour mieux décider. Colombie, à distance. |

**Formación (`training.html`)**

| Idioma | Caracteres | Texto |
|---|---|---|
| EN | 152 | In-company training in analytics, experimentation, optimization and AI: in person, virtual or hybrid, in Spanish or English. Design your team's program. |
| ES | 155 | Formación in-company en analítica, experimentación, optimización e IA: presencial, virtual o híbrida, en español o inglés. Diseña el programa de tu equipo. |
| PT | 158 | Treinamento in company em analítica, experimentação, otimização e IA: presencial, virtual ou híbrido, em espanhol ou inglês. Desenhe o programa da sua equipe. |
| FR | 153 | Formation en entreprise en analytique, expérimentation, optimisation et IA : en présentiel, à distance ou hybride, en espagnol ou en anglais. Parlons-en. |

---

## 5. Estado de las recomendaciones

| # | Recomendación | Decisión | Estado |
|---|---|---|---|
| R1 | PDFs públicos | Sacarlos y bloquear `/files/` | Hecho (ver nota sobre el historial de git) |
| R2 | Títulos y descripciones | Aplicar | Hecho, en 4 idiomas |
| R3 | Páginas estáticas por idioma | No | No se hizo |
| R4 | Search Console | Ya verificado como propiedad de dominio | Solo falta enviar `https://jaimepesca.com/sitemap.xml` en Search Console, en Sitemaps, cuando esta rama llegue a `main` |
| R5 | Aviso de privacidad y cookies | No | No se hizo |
| R6 | Casos con resultados | No | No se hizo |
| R7 | Ubicación | Colombia y Remoto | Hecho |
| R8 | Preguntas frecuentes | Sí | Hecho en Growth y Formación |
| R9 | Testimonios en Formación | Pospuesto | Pendiente de que tengas testimonios con permiso |
| R10 | Enlaces entrantes | Sin decisión | Pendiente |
| R11 | Imagen para redes | Sí | Hecho, una por página |
| R12 | Texto oculto al traducir | Sí | Mejorado (prioridad alta y máximo 1,2 s) |
| R13 | Fuentes propias | Sí | Hecho |
| R14 | Foto WebP y prioridad | Sí | Hecho |
| R15 | Página 404 | Sí | Hecho |
| R16 | Enlaces a `./` | Sí | Hecho |
| R17 | Eventos de conversión en GA4 | Lo estás trabajando | Los enlaces de correo tienen `data-mail` y los botones tienen las clases `btn` y `mail`, por si te sirven como selectores |
| R18 | Correo oculto a bots | Sí, sin formulario | Hecho |
| R19 | Datos académicos extra | No | No se hizo |
| R20 | Cuenta de X | No | No se hizo |
