const express = require("express");
const app = express();
const PORT = 5050;

app.get("/", (req, res) => {
    res.json({ message: "home" });
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});