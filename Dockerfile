FROM node
WORKDIR /usr/judge
COPY *.json ./
RUN yarn
COPY . .
EXPOSE 8080
CMD ["yarn", "dev:server"]