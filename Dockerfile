FROM node:latest

WORKDIR /usr/src/app

COPY . .

RUN npm install npm@latest

EXPOSE 8080

CMD ["/bin/bash", "-c", "npm run dev"]