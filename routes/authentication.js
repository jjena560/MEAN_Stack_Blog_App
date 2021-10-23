const User = require('../mongoose/user'); // Import User Model Schema
// const jwt = require('jsonwebtoken'); // Compact, URL-safe means of representing claims to be transferred between two parties.
const config = require('../config/database'); // Import database configuration

module.exports = (router) => {
  router.post('/register',(req, res)=>{
      res.send('Hello world');
  });

  return router; // Return router object to main index.js
}
