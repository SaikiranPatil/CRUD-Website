const express = require('express');
const dotenv = require('dotenv');
const path = require("path");
const connectDB = require("./server/database/connections");
var morgan = require('morgan');

const app = express();

dotenv.config({path: '.env'}) ;
const port = process.env.PORT||8080;

// log request
app.use(morgan('tiny'));

// mongo db connection 
connectDB();

// for serving static files
app.use('/static', express.static('static'));

// parse requested to body parser
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// set up view engine pug 
app.set("view engine","pug");

// load router 
app.use("/",require("./server/routes/router"));

// Set up views path
app.set('views', path.join(__dirname, "views"));

// set up paths 
app.use("/css",express.static(path.resolve(__dirname,"static/css")));
app.use("/img",express.static(path.resolve(__dirname,"static/img")));
app.use("/js",express.static(path.resolve(__dirname,"static/js")));

app.listen(port,()=>{
    console.log(`The server is started at port ${process.env.BASE_URL}:${port}`);
})