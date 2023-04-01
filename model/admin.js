const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv")

dotenv.config();
const keysecret = process.env.SECRET_KEY; 

const Schema = mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    tokens: [
        {
            token: {
                type: String,
                required: true,
            }
        }
    ]
});


// hash password
// Schema.pre("save", async function (next) {

//     if (this.isModified("password")) {
//         this.password = await bcrypt.hash(this.password, 12);
//         this.cpassword = await bcrypt.hash(this.cpassword, 12);
//     }
//     next()
// });



Schema.methods.generateAuthtoken = async function () {
    try {
        let token23 = jwt.sign({ _id: this._id }, keysecret, {
            expiresIn: "1d"
        });

        this.tokens = this.tokens.concat({ token: token23 });
        await this.save();
        return token23;
    } catch (error) {
        console.log("Error in generateAuthtoken: ", error);
        res.status(422).json(error)
    }
}



const admin = mongoose.model("admin", Schema);

module.exports = admin;