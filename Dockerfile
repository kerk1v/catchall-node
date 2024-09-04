# Use the official Node.js image
FROM node:22.7

# Create and change to the app directory
WORKDIR /usr/src/app

# Copy application files
COPY server.js .

# Expose the port the app runs on
EXPOSE 3000

# Run the application
CMD ["node", "server.js"]