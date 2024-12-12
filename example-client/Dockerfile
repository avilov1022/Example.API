FROM node:18.12-alpine
WORKDIR /app

COPY . .



RUN npm install pnpm -g
RUN pnpm install 

CMD ["npm", "run", "start"]