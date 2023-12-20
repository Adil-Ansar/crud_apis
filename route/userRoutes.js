const userRoutes = require("express").Router();

const {
    createUser,
    getAllUser,
    getUserDetails,
    updateUserDetails,
    deleteUserDetails
} = require("./../controller/userHandler");
const basePath = "/api";

userRoutes.post("/user", createUser);
userRoutes.get("/user", getAllUser);
userRoutes.get("/user/:userId", getUserDetails);
userRoutes.put("/user/:userId", updateUserDetails);
userRoutes.delete("/user/:userId", deleteUserDetails);


module.exports = {
    userRoutes,
    basePath
};
