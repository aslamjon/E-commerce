const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    sku: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    slug: {
        type: String,
        required: true
    },
    details: {
        type: {},
        required: true
    },
    total_reviews: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: Types.ObjectId,
        required: true,
        ref: "Category"
    },
    tags: [{ type: String }]
})

module.exports = {
    ProductModel: model('Product', schema)
}