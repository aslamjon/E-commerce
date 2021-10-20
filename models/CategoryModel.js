const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    parent_id: {
        type: Types.ObjectId,
        required: true,
        ref: "Category"
    },
    description: {
        type: String
    }
})

module.exports = {
    CategoryModel: model('Category', schema)
}