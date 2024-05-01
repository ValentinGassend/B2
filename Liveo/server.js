
import express from "express";
import path from "path";
const app = express();

app.use("/static", express.static(path.resolve("./", "frontend", "static")));
app.use("/static/image", express.static(path.resolve("./", "frontend", "static/image")));
app.use('/scss', express.static(path.join("./", '../static/css')))
app.get("/*", (req, res) => {
    res.sendFile(path.resolve("./frontend", "index.html"));
});

app.listen(process.env.PORT || 3000, () => console.log("Server running..."));
