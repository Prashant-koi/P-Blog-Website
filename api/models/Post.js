const mongoose = require('mongoose');
const UserModel = require('./User');
const {Schema, model} = mongoose;

const PostSchema = new Schema({
    title: String,
    summary: String,
    cover: String,
    content: String,
    author:{type:Schema.Types.ObjectId, ref:'User'},
},{
    timestamps: true,
})

const PostModel = model('Post', PostSchema);

module.exports= PostModel;