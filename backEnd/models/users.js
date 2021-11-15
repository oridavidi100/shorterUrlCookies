const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {      
        userName: {
            type: String,
            required: true,
        },
        passWord: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Users", UserSchema);
