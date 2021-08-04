FROM node:current-alpine3.11

WORKDIR /node-js-blog

COPY package*.json ./
RUN yarn install

COPY . .

EXPOSE 3000
CMD ["yarn", "run", "serve"]
