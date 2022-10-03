import express from "express";
import bodyParser from "body-parser";
import path from "path";

const app = express();

app.use(bodyParser.json());
app.use(express.static("../client/dist"));

app.get("/api/login", (req, res) => {
  res.json({
    username: "Hello",
  });
});

app.post("/api/login", (req, res) => {
  res.sendStatus(401);
});

app.use((req, res, next) => {
  if (!req.path.startsWith("/api")) {
    res.sendFile(path.resolve("../client/dist/index.html"));
  } else {
    next();
  }
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log("Server started at: ", server.address());
});
