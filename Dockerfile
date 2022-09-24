FROM node
WORKDIR /apps
COPY package*.json ./
RUN yarn
COPY . .
EXPOSE 8080
CMD ["yarn", "dev:server"]