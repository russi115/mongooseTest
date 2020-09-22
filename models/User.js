const { Schema, model } = require ('mongoose');

const userSchema = new Schema({
    username : {
        type: String,
        unique: true,
        require: true
    },
    password: String,
    date: {
        type: Date,
        default: new Date()
    },
    name: String
})

module.exports = model('User', userSchema)