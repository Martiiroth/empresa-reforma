# Docker Scripts para Ofara Arquitectura

Este proyecto incluye configuración de Docker para desarrollo y producción.

## Comandos disponibles

### Desarrollo
```bash
# Construir y ejecutar en modo desarrollo
docker-compose --profile dev up --build

# Solo construir
docker-compose --profile dev build

# Ejecutar en segundo plano
docker-compose --profile dev up -d
```

### Producción
```bash
# Construir y ejecutar en modo producción
docker-compose up --build

# Con Nginx (proxy reverso)
docker-compose --profile production up --build

# Solo la aplicación
docker-compose up web --build
```

### Comandos útiles
```bash
# Ver logs
docker-compose logs -f web

# Entrar al contenedor
docker-compose exec web sh

# Parar servicios
docker-compose down

# Limpiar volúmenes
docker-compose down -v

# Reconstruir sin caché
docker-compose build --no-cache
```

## Configuración

### Variables de entorno
Crea un archivo `.env` para configurar variables:
```bash
NODE_ENV=production
PORT=3000
HOSTNAME=0.0.0.0
```

### Puertos
- **3000**: Aplicación en producción
- **3001**: Aplicación en desarrollo  
- **80**: Nginx (si se usa el perfil production)

## Estructura de Docker

- `Dockerfile`: Imagen optimizada para producción
- `Dockerfile.dev`: Imagen para desarrollo con hot reload
- `docker-compose.yml`: Orquestación de servicios
- `nginx.conf`: Configuración de proxy reverso
- `.dockerignore`: Archivos excluidos del contexto de Docker