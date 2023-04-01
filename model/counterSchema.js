const mongoose = require("mongoose");

const CounterSchema = mongoose.Schema({
    id:{
        type:"String",
    },
    seq:{
        type:Number,
    }
});


const counter = mongoose.model("counter", CounterSchema);

module.exports = counter;