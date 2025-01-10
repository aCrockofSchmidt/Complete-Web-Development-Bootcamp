//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
let pageName = "";

app.use(bodyParser.urlencoded({ extended: true}));

function passwordLogic(req, res, next) {
    if (req.body.password === "ILoveProgramming") {
        pageName = "secret"
    }else{
        pageName = "index"
    }
    next();
};

app.use(passwordLogic);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });

app.post("/check", (req, res) => {
    res.sendFile(__dirname + "/public/" + pageName + ".html");
});

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  