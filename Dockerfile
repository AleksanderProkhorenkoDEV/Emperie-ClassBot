FROM node:23-alpine
WORKDIR /app

# Instala pnpm globalmente
RUN npm install -g pnpm

# Copia archivos de dependencias
COPY ./app/package.json ./app/pnpm-lock.yaml ./

# Instala dependencias
RUN pnpm install    

# Copia el resto del código
COPY ./app .

# Compila TypeScript (si es necesario)
RUN pnpm run build

# Comando de inicio (usa ts-node para desarrollo)
CMD ["pnpm", "dev"]