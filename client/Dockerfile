FROM node:20-alpine
WORKDIR /app
# ENV CHOKIDAR_USEPOLLING=true
COPY package.json /app
	RUN ["npm", "install"]
COPY . /app
EXPOSE 4001 4010
CMD ["npm", "run", "dev"]