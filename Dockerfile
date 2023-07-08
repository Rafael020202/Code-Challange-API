FROM node:alpine3.16
WORKDIR /usr/judge
COPY *.json ./
RUN yarn
COPY . .
EXPOSE 8080
RUN yarn build
CMD ["yarn", "start"]