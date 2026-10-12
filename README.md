# Huachipato Huechuraba — Landing

Sitio estático single-file desplegado en Vercel: https://huachipato-huechuraba.vercel.app/

## Estructura

- `index.html` — HTML + CSS + JS inline (sin build).
- `assets/` — imágenes servidas por la página.
- `og-huachipato.jpg` — imagen para compartir en redes (cambiar `?v=` en las meta `og:image`/`twitter:image` al reemplazarla).

## Flujo de cambios

1. Trabajar en una rama, nunca directo en `main`.
2. Push de la rama → Vercel genera un Preview Deploy para revisar.
3. Merge a `main` → deploy a producción.

Probar en local: `python3 -m http.server 8000` y abrir http://localhost:8000

## Datos editables frecuentes (en `index.html`)

- WhatsApp: `var WA='56945911596'` en el `<script>` final, más el teléfono visible en footer y JSON-LD.
- Días/horario: ticker, hero-stats, sección ubicación, footer, FAQ, JSON-LD (`openingHoursSpecification`) y generador de fechas (`getDay()===1||getDay()===3`).
- Categoría: se calcula como `año actual − año de nacimiento` (Sub-7 a Sub-15).

## Imágenes del hero

`hero-team-1920.webp` se sirve solo en escritorio con densidad 1x; el resto usa `hero-team-4k.webp`.
Si se reemplaza la foto, regenerar ambas con el mismo encuadre 16:9.
