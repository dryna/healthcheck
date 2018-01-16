FROM node:boron

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app/
RUN npm install
RUN npm install pm2 -g

COPY . /app

EXPOSE 9200
CMD [ "pm2-docker", "index.js" ]