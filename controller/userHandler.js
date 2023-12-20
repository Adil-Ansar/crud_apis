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

// Export the createUser function to use it elsewhere in the application
module.exports = {
    createUser
};
