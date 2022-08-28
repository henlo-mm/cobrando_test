FROM node:latest

# Create app directory
WORKDIR /app

COPY . .

RUN npm install
EXPOSE 1234
CMD [ "npm", "start" ]