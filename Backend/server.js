const express = require("express");
const cors = require("cors");

const auditRoutes = require("./routes/auditRoutes");

const app = express();

app.use(cors());

app.use(express.json());

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello Maanya! 🎉 Welcome to Page Pulse.");
});

app.use("/audit", auditRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});