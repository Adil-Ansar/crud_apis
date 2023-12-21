// Define an empty array to simulate a database
let data = [];

// Function to create a user
const createUser = async (req, res) => {
    try {
        // Destructure the request body to extract required fields
        const { username, age, hobbies } = req.body;

        // Check if required fields are missing
        if (!username || !age || !hobbies) {
            return res.status(400).json({
                meta: { msg: "Required fields missing", status: false }
            });
        };

        if (typeof username !== 'string') {
            return res.status(400).json({
                meta: { msg: "Username will be a string", status: false }
            });   
        }
        if (typeof age !== 'number') {
            return res.status(400).json({
                meta: { msg: "Age will be a string", status: false }
            });   
        }
        if (!Array.isArray(hobbies)) {
            return res.status(400).json({
                meta: { msg: "Hobbies will be a array", status: false }
            });   
        }

        // Generate a unique ID for the new user based on the array length
        const id = data.length + 1;

        // Create a user object
        const userObj = {
            id,
            username,
            age,
            hobbies
        }

        // Push the new user object into the data array (simulated database)
        data.push(userObj);

        // Return a success response with the newly created user object
        return res.status(201).json({
            meta: { msg: "Record created successfully", status: true },
            record: userObj
        });

    } catch (error) {
        // If an error occurs, handle it and send an error response
        return res.status(500).json({
            meta: { msg: "Something went wrong.", status: false },
            data: error.message
        });
    }
}

// Function to get all user details
const getAllUser = async (req, res) => {
    try {
        // Check if the 'data' array is empty
        if (!data.length) {
            // If 'data' is empty, return a success response indicating no users found
            return res.status(200).json({
                meta: { msg: "Users not found", status: false },
                data
            });
        } else {
            // If 'data' has user records, return all user data with a success status
            return res.status(200).json({
                meta: { msg: "All users data", status: true },
                data
            });
        }
    } catch (error) {
        // Handle any unexpected errors and return a 500 status with an error message
        return res.status(500).json({
            meta: { msg: "Something went wrong.", status: false },
            data: error.message
        });
    }
}



// Function to get user details by ID
const getUserDetails = async (req, res) => {
    try {
        // Extract userId from request parameters
        const { userId } = req.params;

        // Check if userId is not a number
        if (isNaN(userId)) {
            return res.status(400).json({
                meta: { msg: "Invalid userId", status: false },
            });
        }

        // Find user data by ID in the 'data' array
        const userData = data.find(obj => obj.id === Number(userId));

        // If user data is found, return it with a success status
        if (userData) {
            return res.status(200).json({
                meta: { msg: "User found", status: true },
                data: userData
            });
        } else {
            // If user data is not found, return a 404 status with a relevant message
            return res.status(404).json({
                meta: { msg: "User not found", status: false }
            });
        }
    } catch (error) {
        // Handle any unexpected errors and return a 500 status with an error message
        return res.status(500).json({
            meta: { msg: "Something went wrong.", status: false },
            data: error.message
        });
    }
}

// Function to update user details by ID
const updateUserDetails = async (req, res) => {
    try {
        // Extract userId from request parameters
        const { userId } = req.params;

        // Check if userId is not a number
        if (isNaN(userId)) {
            return res.status(400).json({
                meta: { msg: "Invalid userId", status: false },
            });
        }

        // Find the index of the user in 'data' array based on the ID
        const userIndex = data.findIndex(obj => obj.id === Number(userId));

        // If the user with the given ID is found
        if (userIndex !== -1) {
            // Destructure username, age, and hobbies from request body
            const { username, age, hobbies } = req.body;

            // Create an updated object with the provided data
            const updatedObj = {
                id: Number(userId),
                username,
                age,
                hobbies
            };

            // Remove keys with undefined or null values from the updated object
            Object.keys(updatedObj).forEach((key) => {
                if (!updatedObj[key]) {
                    delete updatedObj[key];
                }
            });

            // Update the user's data in the 'data' array
            data[userIndex] = { ...data[userIndex], ...updatedObj };

            // Return a success response with the updated user data
            return res.status(200).json({
                meta: { msg: "User's data updated", status: true },
                data: updatedObj
            });
        } else {
            // If the user with the given ID is not found, return a 404 status
            return res.status(404).json({
                meta: { msg: "User not found", status: false }
            });
        }
    } catch (error) {
        // Handle any unexpected errors and return a 500 status with an error message
        return res.status(500).json({
            meta: { msg: "Something went wrong.", status: false },
            data: error.message
        });
    }
}

// Function to delete user details by ID
const deleteUserDetails = async (req, res) => {
    try {
        // Extract userId from request parameters
        const { userId } = req.params;

        // Check if userId is not a number
        if (isNaN(userId)) {
            return res.status(400).json({
                meta: { msg: "Invalid userId", status: false },
            });
        }

        // Find the index of the user in 'data' array based on the ID
        const userIndex = data.findIndex(obj => obj.id === Number(userId));

        // If the user with the given ID is found
        if (userIndex !== -1) {
            // Use splice() to delete the user data from 'data' array
            const userData = data.splice(userIndex, 1);

            // Return a success response indicating user deletion
            return res.status(204).json({
                meta: { msg: "User deleted", status: true },
                data: userData
            });
        } else {
            // If the user with the given ID is not found, return a 404 status
            return res.status(404).json({
                meta: { msg: "User not found", status: false }
            });
        }

    } catch (error) {
        // Handle any unexpected errors and return a 500 status with an error message
        return res.status(500).json({
            meta: { msg: "Something went wrong.", status: false },
            data: error.message
        });
    }
}


// Export the createUser function to use it elsewhere in the application
module.exports = {
    createUser,
    getAllUser,
    getUserDetails,
    updateUserDetails,
    deleteUserDetails
};
