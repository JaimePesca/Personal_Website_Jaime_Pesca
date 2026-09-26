# Sitio web personal · Jaime Enrique Pesca Santos

Sitio estático (HTML + CSS + JS, sin frameworks ni build) con cuatro perfiles profesionales, en inglés como idioma principal y con traducciones a español, portugués y francés.

| Página | Perfil |
|---|---|
| `index.html` | Hub principal con foto y las cuatro puertas de entrada |
| `research.html` | Investigación y docencia (Wildfire-OR, Universidad de La Sabana) |
| `growth.html` | Growth & media buying |
| `data.html` | Data science |
| `training.html` | Formación empresarial (in-company) |

## Idiomas

- El texto en inglés vive en el HTML. Las traducciones están en `assets/i18n/es.js`, `pt.js` y `fr.js`.
- El selector de idioma (arriba a la derecha) recuerda la elección y la agrega a la URL, por ejemplo `.../growth.html?lang=es`.
- **Agregar un idioma:** copiar `assets/i18n/es.js` como `assets/i18n/<código>.js`, traducir los valores y agregar el idioma a la lista `LANGS` en `assets/js/i18n.js`.
- `node tools/check-i18n.mjs` avisa si a algún idioma le falta una clave.

## Imágenes y hojas de vida

- `images/jaime-pesca.jpg`: foto del hub (formato vertical 4:5 recomendado). Si no existe, se muestran las iniciales.
- `images/`: aquí van las imágenes futuras de cada sección.
- `files/`: hojas de vida.

## Cómo publicarlo con GitHub Pages

1. En GitHub: **Settings → Pages**.
2. En *Source*, elige **Deploy from a branch**, rama `main`, carpeta `/ (root)`.
3. Guarda. En 1 o 2 minutos el sitio queda en:
   `https://jaimepesca.github.io/Personal_Website_Jaime_Pesca/`

## Cómo editarlo

- El contenido pendiente de personalizar está marcado con la etiqueta amarilla **Editar** (clase `edit-tag`). Al reemplazar el texto real, borra el `<span class="edit-tag">…</span>`.
- Colores, tipografías y espaciados viven en `assets/css/styles.css` como variables CSS en `:root`.
- Cada página de perfil define su color de acento con una clase en `<body>`: `p-research`, `p-growth`, `p-data`, `p-teach`.

## Trabajar con Claude desde la nube

El repo está pensado para editarse con Claude Code en [claude.ai/code](https://claude.ai/code): abre una sesión, selecciona este repositorio y pide los cambios en lenguaje natural (por ejemplo, "agrega mis publicaciones a research.html"). Los archivos que Claude deba leer (hojas de vida, fotos) tienen que estar subidos al repositorio.
