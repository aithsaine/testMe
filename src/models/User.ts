import mongoose, { Schema } from "mongoose"
const userSchema = new Schema({
    first_name: {
        type: String,
    },
    last_name: {
        type: String
    },
    email: {
        type: String,
        nullable: true,
    }
}, { timestamps: true })


const User = mongoose.models.User || mongoose.model("User", userSchema)
export default User;