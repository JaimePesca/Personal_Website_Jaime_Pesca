// Verifica que cada idioma en assets/i18n/ tenga todas las claves usadas en el HTML.
// Uso:   node tools/check-i18n.mjs          → reporte de claves faltantes o sobrantes
//        node tools/check-i18n.mjs --dump   → lista clave y texto en inglés (base para traducir)
import { readFileSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const pages = readdirSync(root).filter((f) => f.endsWith(".html"));

// Clave → texto en inglés (primera aparición)
const keys = new Map();
for (const page of pages) {
  const html = readFileSync(join(root, page), "utf8");
  for (const m of html.matchAll(/<(\w+)[^>]*\sdata-i18n="([^"]+)"[^>]*>([\s\S]*?)<\/\1>/g)) {
    if (!keys.has(m[2])) keys.set(m[2], m[3].trim());
  }
  for (const m of html.matchAll(/<[^>]*\sdata-i18n-attr="([^"]+)"[^>]*>/g)) {
    for (const pair of m[1].split(";")) {
      const [attr, key] = pair.split(":").map((s) => s.trim());
      const value = m[0].match(new RegExp(`\\s${attr}="([^"]*)"`));
      if (!keys.has(key)) keys.set(key, value ? value[1] : "");
    }
  }
}

if (process.argv.includes("--dump")) {
  console.log(JSON.stringify(Object.fromEntries(keys), null, 2));
  process.exit(0);
}

const dir = join(root, "assets", "i18n");
let problems = 0;
for (const file of readdirSync(dir).filter((f) => f.endsWith(".js"))) {
  const dicts = {};
  vm.runInNewContext(readFileSync(join(dir, file), "utf8"), {
    I18N: { register: (code, d) => { dicts[code] = d; } },
  });
  for (const [code, dict] of Object.entries(dicts)) {
    const missing = [...keys.keys()].filter((k) => !(k in dict));
    const extra = Object.keys(dict).filter((k) => !keys.has(k));
    problems += missing.length + extra.length;
    console.log(`${code}: ${Object.keys(dict).length} claves` +
      (missing.length ? `\n  faltan: ${missing.join(", ")}` : "") +
      (extra.length ? `\n  sobran: ${extra.join(", ")}` : ""));
  }
}
console.log(`${keys.size} claves en el HTML`);
process.exit(problems ? 1 : 0);
