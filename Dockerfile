# Use the official Node.js image as a base image
FROM node:18.18.2

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose any necessary ports (if your app needs it; otherwise, this line can be removed)
EXPOSE 3000

# Default command to run your app
CMD ["node", "app.js"]
