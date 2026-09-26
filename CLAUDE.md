# Sitio web personal de Jaime Enrique Pesca Santos

Sitio estático en español, sin frameworks ni paso de build. Se publica con GitHub Pages desde la rama `main`, carpeta raíz.

## Estructura

- `index.html` — hub con las 4 tarjetas de perfil.
- `investigacion.html`, `growth.html`, `datos.html`, `formacion.html` — una página por perfil, todas con la misma plantilla: nav → hero tintado → servicios → destacados → CTA → footer.
- `assets/css/styles.css` — único stylesheet; todos los colores y fuentes son tokens en `:root`, con modo oscuro vía `prefers-color-scheme`.
- `assets/js/main.js` — solo el toggle del menú móvil.

## Convenciones

- Idioma del contenido: español. Tono directo, primera persona.
- Acento por página con clase en `<body>`: `p-research` (azul), `p-growth` (ámbar), `p-data` (verde), `p-teach` (violeta). Nuevos colores se agregan como tokens, nunca en línea.
- Tipografías (Google Fonts): Bricolage Grotesque (títulos), Source Serif 4 (texto), Spline Sans Mono (etiquetas/eyebrows).
- Contenido pendiente de que Jaime lo personalice se marca con `<span class="edit-tag">Editar …</span>`. Al poner contenido real, eliminar la etiqueta.
- Enlaces internos relativos (el sitio vive bajo la subruta `/Personal_Website_Jaime_Pesca/`).
- Al crear una página nueva, copiar la estructura de una existente para mantener nav y footer idénticos, y agregar el enlace en el nav de todas las páginas.
