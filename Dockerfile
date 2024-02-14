# 빌드 스테이지
FROM node:14 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000

# 빌드 결과물을 서빙하기 위해 서버를 실행
CMD [ "npm", "start" ]
