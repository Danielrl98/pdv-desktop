postgres:

``
  docker rm -f postgres
  docker compose build --no-cache
  docker compose up -d
``