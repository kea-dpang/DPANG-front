# 빌드 스테이지
FROM node:14
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# 빌드 결과물을 서빙하기 위해 서버를 실행
CMD [ "npm", "start" ]
