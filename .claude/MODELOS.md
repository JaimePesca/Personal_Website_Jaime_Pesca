# Modelos y niveles de esfuerzo en Claude Code

Este repositorio fija en `.claude/settings.json` el modelo y el nivel de esfuerzo que Claude Code usa por defecto:

```json
{
  "model": "claude-opus-5-5",
  "effortLevel": "high"
}
```

## 1. Modelos

| Alias | Nombre completo | Para qué sirve |
|---|---|---|
| `opus` | `claude-opus-5-5` | Tareas complejas. |
| `sonnet` | `claude-sonnet-5` | Uso general. |
| `haiku` | `claude-haiku-4-5` | Tareas rápidas y simples. |
| `fable` | `claude-fable-5-1` | Tareas más exigentes, si el plan lo incluye. |

**Alias o nombre completo.** El alias `opus` apunta siempre a la última versión de Opus: cuando salga una nueva, empezarás a usarla sin cambiar nada. El nombre completo `claude-opus-5-5` deja la versión fija hasta que la cambies a mano. Lo mismo vale para los demás alias. Este repositorio usa el nombre completo para que el modelo no cambie sin que lo decidas.

## 2. Niveles de esfuerzo

El nivel de esfuerzo define cuánto razona Claude antes de responder.

| Nivel | Cuándo usarlo |
|---|---|
| `low` | Cambios mecánicos y consultas puntuales: corregir un texto, renombrar algo, buscar un dato. |
| `medium` | Tareas cotidianas donde la rapidez y el costo pesan tanto como la calidad. |
| `high` | La mayoría del trabajo: buen equilibrio entre calidad y velocidad. Es el valor por defecto de este repositorio. |
| `xhigh` | Problemas difíciles que piden razonamiento profundo, como una depuración compleja o un cambio que toca muchas piezas. |
| `max` | Los casos más difíciles, cuando importa la máxima capacidad de razonamiento y no el costo. |
| `ultracode` | Trabajo grande que conviene repartir: activa la planificación de workflows con varios agentes en paralelo y razonamiento `xhigh`. |

> **Advertencia:** los niveles altos (`xhigh`, `max` y sobre todo `ultracode`) consumen más uso y tardan más en responder. No todos los niveles están disponibles en todos los modelos: por ejemplo, Haiku no admite ajuste de esfuerzo y `xhigh` solo existe en algunos modelos. Antes de fijar un nivel alto, confirma que el modelo que usas lo admite.

## 3. Cómo cambiarlos

### Editando `.claude/settings.json`

Cambia los valores de `model` y `effortLevel`. Este archivo se sube a git, así que el cambio aplica a cualquiera que abra el repositorio con Claude Code.

```json
{
  "model": "sonnet",
  "effortLevel": "medium"
}
```

### Con flags al iniciar una sesión local

Aplican solo a esa sesión y no modifican `settings.json`.

```bash
claude --model sonnet --effort medium
```

### Con comandos dentro de una sesión

También aplican solo a la sesión en curso.

```text
/model haiku
/effort low
```

### Qué configuración gana

Si hay varias, gana la más específica: primero el comando dentro de la sesión, después el flag al iniciar y por último `.claude/settings.json`.
