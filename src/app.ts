import express from 'express';
//const express = require('express');
const app = express();
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



//npx tsc :== JavaScript output to the dist directory
//node dist/app.js to run application

//Configuring Typescript Linting with eslint
//npm install --save-dev eslint:==  install eslint using npm
//npx eslint --init
//run eslint’s initialization command to interactively set up the project

// How would you like to use ESLint?: To check syntax and find problems
// What type of modules does your project use?: JavaScript modules (import/export)
// Which framework does your project use?: None of these
// Does your project use TypeScript?: Yes
// Where does your code run?: Node
// What format do you want your config file to be in?: JavaScript

//Run the linter to check all files with the .ts TypeScript extension
//npx eslint . --ext .ts
