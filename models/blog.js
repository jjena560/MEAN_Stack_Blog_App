/* ===================
   Import Node Modules
=================== */
const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; // Import Schema from Mongoose







// Blog Model Definition
const blogSchema = new Schema({
    title: { type: String, required: true, validate: titleValidators },
    body: { type: String, required: true, validate: bodyValidators },
    Image: { type: Image, required: true },
    createdAt: { type: Date, default: Date.now() },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },

});

// Export Module/Schema
module.exports = mongoose.model('Blog', blogSchema);
