# Dockerfile para Next.js con pnpm
FROM node:20-alpine AS base

# Instalar pnpm
RUN npm install -g pnpm

# Establecer directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias
COPY package.json pnpm-lock.yaml* ./

# Stage para instalar dependencias
FROM base AS deps
RUN pnpm install --frozen-lockfile

# Stage para construir la aplicación
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Construir la aplicación Next.js
RUN pnpm run build

# Stage para producción
FROM base AS runner

# Crear usuario no root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copiar archivos públicos
COPY --from=builder /app/public ./public

# Copiar archivos de build
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Cambiar a usuario no root
USER nextjs

# Exponer puerto
EXPOSE 3000

# Variables de entorno
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
ENV NODE_ENV=production

# Comando por defecto
CMD ["node", "server.js"]