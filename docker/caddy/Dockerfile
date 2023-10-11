FROM caddy:2.6.2-alpine AS local

WORKDIR /app

COPY ./Caddyfile.local /etc/caddy/Caddyfile

FROM caddy:2.6.2-alpine AS final

WORKDIR /app

COPY ./Caddyfile.prod /etc/caddy/Caddyfile
