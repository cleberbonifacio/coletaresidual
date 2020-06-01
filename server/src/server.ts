import express from "express";

const app = express();

app.get("/users", (request, response) => {
  response.json("Hello Cleber");
});

app.listen(3333);
