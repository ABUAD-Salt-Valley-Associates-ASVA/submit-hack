const express = require("express");
const colors = require("colors")
const PORT = process.env.PORT || 3500;
const app = express()

// @middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
//  @route
app.use("/api/submit", require("./routes/userRoutes"))
// @server
app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`.cyan);
})