import express from "express";
import bodyParser from "body-parser";

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

const server = app.listen(process.env.PORT || 3000, () => {
  console.log("Server started at: ", server.address());
});
