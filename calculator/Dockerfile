FROM node:22.14-alpine

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install --omit=dev

COPY dist/ .
 
EXPOSE 3000

CMD ["node", "./main.js"]