const jwt = require("jsonwebtoken");

const isLoggedIn = async (req, res, next) => {
    try {
        // Checking if authorization token is recieved
        if (req.headers.authorization) {
            // Split bearer token
            const token = req.headers.authorization.split(" ")[1];
            if (token) {
                // Verify JWT token
                const payload = await jwt.verify(token, process.env.Secret_key);
                if (payload) {
                    req.user = payload;
                    next();
                } else {
                    res.status(400).json({ error: "token verification failed" });
                }
            } else {
                res.status(400).json({ error: "malformed auth header" });
            }
        } else {
            res.status(400).json({ error: "No authorization header" });
        }
    } catch (error) {
        res.status(400).json({ error });
    }
};

module.exports = { isLoggedIn };