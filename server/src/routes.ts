import express from "express";

const routes = express.Router();

routes.get("/", (request, response) => {
  return response.json("Hello Cleber");
});

export default routes;
