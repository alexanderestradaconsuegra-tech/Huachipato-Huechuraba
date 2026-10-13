# Huachipato Huechuraba — Landing

Sitio estático single-file desplegado en Vercel: https://huachipato-huechuraba.vercel.app/

## Estructura

- `index.html` — HTML + CSS + JS inline (sin build).
- `assets/` — imágenes y fuentes (`assets/fonts`, servidas desde el propio sitio) usadas por la página.
- `vercel.json` — cabeceras de seguridad (CSP, HSTS, etc.) y caché de `assets/`.
- `404.html`, `favicon.ico`, `site.webmanifest` — página de error, iconos y manifiesto.
- `privacidad.html` — política de privacidad y uso de imágenes (se publica en `/privacidad`). Si se agrega analítica, cookies o formularios con base de datos, hay que actualizarla.

## Fotos de menores

Publicar solo fotos de jugadores con autorización escrita del apoderado. Los niños de otros equipos van con el rostro difuminado. Antes de agregar fotos nuevas a la galería, revisar ambas cosas.
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

## Checklist de lanzamiento (dominio propio)

1. Vercel → Project → Settings → Domains: agregar el dominio y copiar los registros DNS que indique (A para el apex, CNAME para `www`). Dejar un solo dominio principal; el otro redirige.
2. Reemplazar `huachipato-huechuraba.vercel.app` por el dominio nuevo en `index.html` (canonical, og:url, og:image, twitter:image, JSON-LD) y crear `robots.txt` + `sitemap.xml` con el dominio nuevo.
3. Agregar en `vercel.json` una redirección permanente desde `huachipato-huechuraba.vercel.app` al dominio nuevo.
4. Google Search Console: propiedad de dominio (TXT en DNS) → enviar `sitemap.xml` → "Inspeccionar URL" de la portada → "Solicitar indexación".
5. Google Business Profile (ficha de la escuela, mismo nombre/dirección/teléfono que la web) y enlace de la web en Instagram.
6. Actualizar el enlace en WhatsApp Business y redes; refrescar la vista previa con el depurador de Facebook (Scrape Again).

## Métricas de referencia (Lighthouse, local sin compresión)

Móvil: Rendimiento 95 · Accesibilidad 100 · Buenas prácticas 100 · SEO 100. Escritorio: 100 · 100 · 100 · 100.
