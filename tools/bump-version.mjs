// Actualiza la versión (?v=) de CSS, JS y diccionarios en todas las páginas.
// Correr antes de publicar cambios en assets/: node tools/bump-version.mjs
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const now = new Date();
const version = now.toISOString().slice(0, 10).replace(/-/g, "") + now.getHours().toString().padStart(2, "0") + now.getMinutes().toString().padStart(2, "0");
for (const page of readdirSync(root).filter((f) => f.endsWith(".html"))) {
  const file = join(root, page);
  const html = readFileSync(file, "utf8");
  const next = html.replace(/(assets\/(?:css|js)\/[\w/.-]+\.(?:css|js))\?v=\w+/g, `$1?v=${version}`);
  if (next !== html) writeFileSync(file, next);
}
console.log(`versión ${version}`);
