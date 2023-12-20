const userRoutes = require("express").Router();

const { createUser } = require("./../controller/userHandler");
const basePath = "/api";

userRoutes.post("/user", createUser);

module.exports = {
    userRoutes,
    basePath
};
