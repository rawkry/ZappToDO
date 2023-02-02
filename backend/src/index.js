import { Database } from "./provider/Database.js";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import { indexAllRouter } from "./routes/index.js";

const app = express();

const router = express.Router();
async function main() {
  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );

  await Database.init();
  app.use(bodyParser.urlencoded({ extended: false }));

  // parse application/json
  app.use(bodyParser.json());
  app.use(indexAllRouter);
  app.get("/", (req, res) => {
    res.send("Hello World from nepal");
  });

  var server_port = process.env.PORT || 8080;

  const server = app.listen(server_port, () => {
    console.log(`Server started on port ${server_port}`);
  });
}

main();
