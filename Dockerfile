FROM node:alpine

WORKDIR /hola

COPY package.json /hola

COPY . .

EXPOSE 8080

RUN npm install


CMD ["node", "index.js"]