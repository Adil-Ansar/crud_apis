const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const server = express();
PORT = process.env.PORT || 3000;

const { userRoutes, basePath } = require("./route/userRoutes");

server.use(bodyParser.json({ limit: "100mb" }));
server.use(bodyParser.urlencoded({ extended: true }));

dotenv.config({ path: "config.env" });

server.get("/", (req, res) => {
    res.send("I am a server")
});

server.use(basePath, userRoutes);

server.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
});