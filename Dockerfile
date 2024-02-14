# 빌드 스테이지
FROM node:14 AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# 실행 스테이지
FROM nginx:1.19.0-alpine AS run
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
COPY nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]
