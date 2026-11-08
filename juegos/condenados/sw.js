// Service worker: imagenes desde cache (cargan al instante la segunda vez) y el HTML siempre desde la red con respaldo sin conexion.
const CACHE = 'condenados-v3';
self.addEventListener('install', () => { self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const r = e.request; if (r.method !== 'GET' || !r.url.startsWith(self.location.origin)) return;
  const put = res => { if (res.ok) { const c = res.clone(); caches.open(CACHE).then(ch => ch.put(r, c)); } return res; };
  if (/\.(webp|png|jpg|jpeg|svg)(\?|$)/.test(r.url)) { e.respondWith(caches.match(r).then(hit => hit || fetch(r).then(put))); return; }
  e.respondWith(fetch(r).then(put).catch(() => caches.match(r)));
});
