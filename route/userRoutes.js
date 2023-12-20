const userRoutes = require("express").Router();

const {
    createUser,
    getAllUser,
    getUserDetails,
    updateUserDetails
} = require("./../controller/userHandler");
const basePath = "/api";

userRoutes.post("/user", createUser);
userRoutes.get("/user", getAllUser);
userRoutes.get("/user/:userId", getUserDetails);
userRoutes.put("/user/:userId", updateUserDetails);


module.exports = {
    userRoutes,
    basePath
};
