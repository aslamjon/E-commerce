const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
    user_id: {
        type: Types.ObjectId,
        required: true,
        ref: "User"
    },
    state: {
        type: String,
        required: true
    },
    line_items: [{
        type: Types.ObjectId,
        required: true,
        ref: "Product"
    }],
    shipping_address: {},
    sub_total: {
        type: Number,
        required: true
    }
})

module.exports = {
    OrderModel: model('Order', schema)
}