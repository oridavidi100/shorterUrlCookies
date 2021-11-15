require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const mongoose=require('mongoose')
const PORT = process.env.PORT || 3000;
require("dotenv").config();

const mongo = process.env.DATABASE;

mongoose
    .connect(mongo)
    .then((result) => {
        console.log("connected to MongoDB");
    })
    .catch((error) => {
        console.log("error connecting to MongoDB:", error.message);
    });


app.use(cors());
app.use(cors({
  origin: "*"
}));

app.use(express.json())
const {urlHandler} = require("./backEnd/middleware/urlHandler");
const {errorHandlerMiddleware} = require("./backEnd/middleware/errorHandler")

app.use("/", express.static(`./fronte/dist`));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "./fronte/dist/html");
});

const urlsRouters=require("./backEnd/routers/urlsRouters")
app.use(urlHandler)

app.use("/api" , urlsRouters)


app.use(errorHandlerMiddleware)



app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

