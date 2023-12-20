const userRoutes = require("express").Router();

const {
    createUser,
    getAllUser,
    getUserDetails
} = require("./../controller/userHandler");
const basePath = "/api";

userRoutes.post("/user", createUser);
userRoutes.get("/user", getAllUser);
userRoutes.get("/user/:userId", getUserDetails);


module.exports = {
    userRoutes,
    basePath
};
