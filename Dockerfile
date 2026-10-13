FROM nginx:1.27-alpine

# Configuración del servidor
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Sitio: se copia la raíz del repo y luego se quitan los archivos que no son del sitio.
COPY . /usr/share/nginx/html
RUN rm -f /usr/share/nginx/html/Dockerfile \
          /usr/share/nginx/html/nginx.conf \
          /usr/share/nginx/html/vercel.json \
          /usr/share/nginx/html/.dockerignore

EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s --retries=3 CMD wget -qO- http://127.0.0.1/ >/dev/null || exit 1
