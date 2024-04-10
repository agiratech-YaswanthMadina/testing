const express = require('express');
const defaultRoutes = require('./routes/userRoutes')

const app = express()
app.use(express.json())

app.use("/api", defaultRoutes)

app.listen(3500, () => {
    console.log("Server running on port 3500"); 
})