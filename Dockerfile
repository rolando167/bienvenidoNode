FROM node:16-bullseye

WORKDIR /app-node

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]