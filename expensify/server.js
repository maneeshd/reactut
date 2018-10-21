const express = require('express')
const app = express()
const path = require("path")
const public_path = path.join(__dirname, "dist")

app.use(express.static(public_path))

app.get("*", (request, response) => {
    response.sendFile(path.join(public_path, "index.html"))
})

app.listen(8080, () => {console.log("Serving Expensify on http://127.0.0.1:8080")})