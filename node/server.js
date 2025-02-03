const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config()
const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.connect(process.env.MONGO_URI).then(resp => {
    console.log("Database Connected!")
}).catch(error => console.log("Unable to connect to DB!"));

app.get("/", (req, res) => {
    res.send("Working!");
})
app.use("/api/contact", require("./controllers/contact.controller"));
app.use("/api/newsletter", require("./controllers/newsletter.controller"));
app.use("/api/service", require("./controllers/program.controller"));
app.use("/api/gallery", require("./controllers/gallery.controller"));
app.use("/api/blogs", require("./controllers/blogs.controller"));
app.use("/api/timetable", require("./controllers/timetable.controller"));
app.use("/api/schedule", require("./controllers/schedule.controller"));
app.use("/api/time", require("./controllers/time.controller"));
app.use("/api/category", require("./controllers/category.controller"));
app.use("/api/comment", require("./controllers/comment.controller"));
app.all("*", function (req, res) {
    res.status(404).send("Gym Servers");
});

app.listen(process.env.PORT, () => {
    console.log(`Server started at ${process.env.PORT}!`);
})