################################################################################
# 1️⃣ Build Stage (Node) – installs deps and produces /app/dist
################################################################################
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

################################################################################
# 2️⃣ Run Stage (Nginx) – serves static from /usr/share/nginx/html
################################################################################
FROM nginx:alpine

RUN apk update && \
    apk add --no-cache \
      iproute2        \
      curl            \
      bind-tools

# 🔥 No SSL files needed for local HTTP

# ⬇️ Use an Nginx config without SSL (e.g., nginx.local.conf)
COPY nginx.local.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]