import mongoose from "mongoose";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: [6, "Email must be at least 6 characters long"],
        maxLength: [50, "Email must be at most 50 characters long"]
    },
    password: {
        type: String,
        select: false
    }
})

userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash[password, 10];
}

userSchema.methods.isValidPassword = async function (password) {
    return await bcrypt.compare(oassword, this.password);
}

userSchema.methoads.generateJWT = function(){
    return jwt.sign({email: this.email}, process.env.JWT_SECRET)
}

const User = mongoose.model('user', userSchema);

export default User;
