// implement your server here
// require your posts router and connect it here
const express = require('express');
const server = express();
const Post = require('./posts/posts-model')

server.get('/api/posts', (req, res)=> {
    Post.find()
    .then(post => {
        res.status(200).json(post);
    })
    .catch(error => {
        res.status(500).json({
          message: 'Error retrieving the dogs',
          error
        });
      });
})

server.use(express.json())

module.exports = server;
