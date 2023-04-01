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
app.use(cors());
app.use(router);
// app.use(cors());
// app.use(bodyParser.json({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: true }));
const PORT = 8009;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})
