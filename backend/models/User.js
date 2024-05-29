import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
    name:{
        type: String,
        required: true
    },
    dateOfBirth:{
        type: Date
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true
    }
},
{timestamps: true}
)

export default mongoose.model("Users", UserSchema);