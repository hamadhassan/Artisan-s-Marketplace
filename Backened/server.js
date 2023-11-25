const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const path = require("path");
require("./utils/db");

const port = 3002;
const app = express();

app.use(bodyParser.json());
app.use("/api", userRoutes);

const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
});

app.listen(port, () => {
    console.log(`Server is running at port:${port}`);
});
