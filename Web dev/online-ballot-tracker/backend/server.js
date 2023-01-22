const express = require("express")
const app = express()
const PORT = process.env.PORT || 3500;


app.listen(PORT, (err) => {
        if (err) console.log("error in setting up server...")
        console.log("Server is running on port: " + PORT);
})