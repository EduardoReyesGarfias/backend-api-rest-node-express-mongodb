const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        name:{
            type: String
        },
        avatar: {
            type:String,
            default: 'http://image.com'
        },
        email: {
            type: String,
            unique: string,
            required: true
        }
    }
)

module.exports = mongoose.model('user', UserSchema);