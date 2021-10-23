const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; // Import Schema from Mongoose
// const bcrypt = require('bcrypt-nodejs'); // A native JS bcrypt library for NodeJS

const userSchema = new Schema({
    email: { type: String, required: true, unique: true, lowercase: true},
    username: { type: String, required: true, unique: true, lowercase: true},
    password: { type: String, required: true},
})

// Export Module/Schema
module.exports = mongoose.model('User', userSchema);
