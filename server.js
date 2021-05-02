const express = require("express");
const app=express();

const PORT = 5001;

app.get("/", (req, res) => {
    res.send("Hello Armenia");
})

app.listen(PORT, () => {
	console.log("Server Started on: " +PORT)
})