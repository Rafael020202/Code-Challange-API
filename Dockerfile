FROM node:alpine3.16
WORKDIR /usr/judge
COPY *.json ./
RUN yarn
COPY . .
EXPOSE 8080
ENV NODE_ENV production
RUN yarn build
CMD ["yarn", "start"]