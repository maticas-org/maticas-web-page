################################################################################
# 1️⃣ Build Stage (Node) – installs deps and produces /app/dist
################################################################################
FROM node:18-alpine AS build

WORKDIR /app

# 1) Copy package.json & package-lock.json, install dependencies
COPY package*.json ./
RUN npm install

# 2) Copy all source, then build (creates /app/dist)
COPY . .
RUN npm run build

################################################################################
# 2️⃣ Run Stage (Nginx) – serves static from /usr/share/nginx/html, with SSL
################################################################################
FROM nginx:alpine

# 2.1 Create folder for SSL inside container
RUN mkdir -p /etc/nginx/ssl

# 2.2 Copy your SSL files into that folder
COPY ssl/maticas-tech_com.key       /etc/nginx/ssl/maticas-tech_com.key
COPY ssl/maticas-tech_com.crt       /etc/nginx/ssl/maticas-tech_com.crt
COPY ssl/maticas-tech_com.ca-bundle /etc/nginx/ssl/maticas-tech_com.ca-bundle

# 2.3 Copy custom Nginx config (which expects those exact paths)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 2.4 Copy the “dist” folder from build stage into Nginx’s web root
COPY --from=build /app/dist /usr/share/nginx/html

# 2.5 Expose both HTTP (80) and HTTPS (443)
EXPOSE 80 443

# 2.6 Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]