import express from "express"

const app = express()
const PORT = process.env.PORT || 3000;

// For testing purposes
app.get("/", (req, res) => {
    res.send("<h1>It's Working!</h2>")
})

app.listen(PORT, () => {
    console.log(`API is listening on port http://localhost:${PORT}`)
})