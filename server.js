const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose")

const serverPort = 3001;
app.set("port", process.env.PORT || serverPort);

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://anjuonline:ezlo6644@hellscape-digital.jpmzs.mongodb.net/Archive");

app.use("/", require("./routes/song"));

app.listen(app.get("port"), () => {
    console.log("express server running on port " + app.get("port"));
})