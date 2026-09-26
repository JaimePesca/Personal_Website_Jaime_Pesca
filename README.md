# Sitio web personal — Jaime Enrique Pesca Santos

Sitio estático (HTML + CSS + JS, sin frameworks ni build) con cuatro perfiles profesionales:

| Página | Perfil |
|---|---|
| `index.html` | Hub principal con las cuatro puertas de entrada |
| `investigacion.html` | Investigador & docente (Wildfire-OR, Universidad de La Sabana) |
| `growth.html` | Growth & media buyer |
| `datos.html` | Data scientist & consultor |
| `formacion.html` | Profesor empresarial (formación in-company) |

## Cómo publicarlo con GitHub Pages

1. En GitHub: **Settings → Pages**.
2. En *Source*, elige **Deploy from a branch**, rama `main`, carpeta `/ (root)`.
3. Guarda. En 1–2 minutos el sitio queda en:
   `https://jaimepesca.github.io/Personal_Website_Jaime_Pesca/`

## Cómo editarlo

- El contenido pendiente de personalizar está marcado en las páginas con la etiqueta amarilla **Editar** (clase `edit-tag`). Al reemplazar el texto real, borra el `<span class="edit-tag">…</span>`.
- Colores, tipografías y espaciados viven en `assets/css/styles.css` como variables CSS en `:root`.
- Cada página de perfil define su color de acento con una clase en `<body>`: `p-research`, `p-growth`, `p-data`, `p-teach`.

## Trabajar con Claude desde la nube

El repo está pensado para editarse con Claude Code en [claude.ai/code](https://claude.ai/code): abre una sesión, selecciona este repositorio y pide los cambios en lenguaje natural (por ejemplo, "agrega mis publicaciones a investigacion.html").
