const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connection = require("./db/conn");
const router = require("./routes/router");
const cookieParser = require("cookie-parser");


const app = express();
dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:3000/"}));
app.use(router);
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

// app.use(cors());
// app.use(bodyParser.json({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: true }));
const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})
