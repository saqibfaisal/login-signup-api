// console.log("hello")
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes/routes")
const app = express();
const PORT = process.env.PORT || 5000
//Allow body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const DBURI = `mongodb+srv://saqib:saqibfaisal22@atlascluster.rvlqz1e.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(DBURI);
mongoose.connection.on("connected", () => console.log("Database Connect"));
mongoose.connection.on("error", () => console.log("error"));

app.use(router)
app.listen(PORT, () => console.log(`server running on localhost:${PORT}`));