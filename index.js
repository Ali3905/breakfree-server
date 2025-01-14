const express = require("express");
const cors = require("cors");
const { connectToMongo } = require("./connections");
require("dotenv").config();

// Routes
const authRoute = require("./routes/user")

const PORT = 8000;
const app = express();
connectToMongo(process.env.MONGO_URL || "mongodb://localhost:27017/breakfree")
    .then(console.log("Mongo Connected"))
    .catch(err => console.log(err.message))

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/api/user", authRoute)


app.listen(PORT, ()=>{
    console.log("Server is running is on PORT "+PORT)
})