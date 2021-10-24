/* ===================
   Import Node Modules
=================== */
const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; // Import Schema from Mongoose



// Blog Model Definition
const blogSchema = new Schema({
    title: { type: String, required: true },
    desc: { type: String, required: true },
    image: { type: String, required: false },
    createdAt: { type: Date, default: Date.now() },
    likes: { type: Number, default: 0 },


});

// Export Module/Schema
module.exports = mongoose.model('Blog', blogSchema);
