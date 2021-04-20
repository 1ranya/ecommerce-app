import mongoose from 'mongoose';

//Schema
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    email:{
        type: String,
        unique: true, //unique email in the database
        required: true
    },
    isAdmin:{
        type: Boolean,
        default: true,
        required: true
    }
}, {
    timestamps: true //createdAt and updatedAt 
});

//Model 
const User = mongoose.model('User', userSchema);

export default User;