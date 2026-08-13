# Download node.js
FROM node:14-slim

# Create app directory and change working directory
WORKDIR /usr/src/app

# Copy dependencies files
COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle app source
COPY . .

# Configure the port the app runs on
EXPOSE 8080

# Start the app
CMD [ "node", "server.js" ]