FROM node:latest as node
WORKDIR /app
COPY ./ /app/
RUN npm install
ARG configuration=production
RUN npm run ng build --  --configuration=$configuration

FROM nginx:alpine
COPY --from=node /app/dist/docker-test /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
