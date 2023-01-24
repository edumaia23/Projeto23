const express = require ("express");

const app = express();

app.set("view engine","ejs");
app.set("views","./src/views");
app.use(express.static("public"));

const home = require("./src/routers/homeRouter");

app.use("/",home)

app.listen(3000,() => {
    console.log("PROJETO 23")
});


