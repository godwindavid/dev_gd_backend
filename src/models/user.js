import { model, Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String
    },
    age: {
        type: Number,
        default: 18
    },
    email: {
        type: String,
        required : true
    },
    password: {
        type: String,
        required : true
    },
}, {
    timestamps: true
})

const User = model("User", userSchema, "User");
// export default User;

