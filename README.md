# Huachipato Huechuraba — Landing

Sitio estático single-file: https://huachipatohuechuraba.cl/ (EasyPanel; antes en Vercel).

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

## Despliegue en EasyPanel (alternativa a Vercel)

El repo incluye `Dockerfile` y `nginx.conf` (replican las cabeceras, el caché y las URLs limpias de `vercel.json`).

1. EasyPanel → proyecto → **App** → Source: **GitHub** (repo `Huachipato-Huechuraba`, rama `main`).
2. Build: **Dockerfile** (ruta `Dockerfile`, contexto `/`).
3. Domains: agregar el dominio; puerto del proxy **80**; activar HTTPS (Let's Encrypt).
4. DNS: registro A del dominio (y de `www`) apuntando a la IP del VPS.
5. Activar auto-deploy (webhook de GitHub) para que cada merge a `main` publique solo.

Probado localmente con nginx: `/` 200, `/privacidad` 200, `/privacidad.html` redirige a `/privacidad`, rutas inexistentes devuelven 404 con la página de error, y no se sirven `Dockerfile`, `nginx.conf` ni `vercel.json`.

## Checklist de lanzamiento (dominio propio)

Hecho: dominio `huachipatohuechuraba.cl` inscrito en NIC Chile, DNS en Cloudflare (registros A a la IP del VPS, sin proxy), etiquetas canónicas, `robots.txt`, `sitemap.xml` y redirección de `www` al dominio principal.

Pendiente (los hace el cliente o el prestador con su cuenta):

1. Google Search Console: propiedad de dominio (registro TXT en Cloudflare) -> enviar `https://huachipatohuechuraba.cl/sitemap.xml` -> "Inspeccionar URL" de la portada -> "Solicitar indexación".
2. Google Business Profile (ficha de la escuela con el mismo nombre, dirección y teléfono que la web) y el enlace del sitio en la ficha.
3. Enlace del sitio en la bio de Instagram y en WhatsApp Business.
4. Refrescar la vista previa al compartir con el depurador de Facebook (Scrape Again).
5. Bing Webmaster Tools (importar desde Search Console).
6. Si se quita el sitio de Vercel, eliminar ese proyecto para no tener contenido duplicado.

## Métricas de referencia (Lighthouse, local sin compresión)

Móvil: Rendimiento 95 · Accesibilidad 100 · Buenas prácticas 100 · SEO 100. Escritorio: 100 · 100 · 100 · 100.
