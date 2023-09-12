"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//const express = require('express');
const app = (0, express_1.default)();
const port = 3000;
//const mongoose = require('mongoose'); //to connect to mongodb
//connect to mongodb and listen to requests
// mongoose.connect("mongodb+srv://pratyush123:ABCD123@cluster0.vnu5ecn.mongodb.net/?retryWrites=true&w=majority", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// const db = mongoose.connection;
// db.on("error", (error) => console.log(error));
// db.once("open", () => console.log("connected"));
// app.set('view engine','ejs');
// app.use(express.static('public'));
//app.use(express.urlencoded());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// var expressLayouts=require('express-ejs-layouts');
// app.use(expressLayouts);
// app.set('layout','layouts/layout');
// //teacher and student routes
// const teachRoutes = require("./routes/teacherRoutes")
// const studRoutes = require("./routes/studentRoutes")
// app.use("/teacher",teachRoutes);
// app.use("/student",studRoutes);
app.get('/', (req, res) => {
    //res.render('index');
    res.send('hello world');
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});
//# sourceMappingURL=app.js.map