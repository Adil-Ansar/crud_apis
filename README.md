# CRUD APIs

## Description
This project implements CRUD (Create, Read, Update, Delete) APIs using Node.js and Express.js for handling HTTP requests. It provides basic functionalities to perform CRUD operations on data.

## Installation
1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`

## Usage
- To start the server:
  - For development: `npm run dev`
  - For production: `npm start`
- Building for development: `npm run build:dev`
- Building for production: `npm run build:prod`

## Structure
- `server.js`: Entry point of the application.
- `webpack.dev.js` and `webpack.prod.js`: Webpack configuration files for development and production builds respectively.
- `dev-build/main.js` and `prod-build/main.js`: Output files after building for development and production.

## Technologies Used
- Node.js
- Express.js
- body-parser
- dotenv
- nodemon (for development)
- webpack (for bundling)
- babel-loader (for transpiling)
- webpack-node-externals (for excluding node_modules in the bundle)

## Scripts
- `npm start`: Start the server using Node.js.
- `npm run dev`: Start the server in development mode using nodemon for automatic restarts on file changes.
- `npm run start:dev`: Start the server using the development build.
- `npm run start:prod`: Start the server using the production build.
- `npm run build:dev`: Build the project for development.
- `npm run build:prod`: Build the project for production.

## Author
Adil

