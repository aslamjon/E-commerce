const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    password: {
        type: Number,
        required: true
    },
    addresses: {
        type: Types.Array,
        required: true
    }
})

module.exports = {
    UserModel: model('User', schema)
}