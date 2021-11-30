// implement your server here
// require your posts router and connect it here
const express = require('express');
const server = express();
const postsRouter = require('./posts/posts-router')
//middleware to parse through JSON //####NEVER FORGETTT!!!!!
server.use(express.json())

server.use('/api/posts', postsRouter);

// server.get('/api/posts', (req, res)=> {
//     Post.find()
//     .then(post => {
//         res.status(200).json(post);
//     })
//     .catch(error => {
//         res.status(500).json({
//           message: 'Error retrieving the dogs',
//           error
//         });
//       });
// })


// server.get('/api/posts/:id', (req, res)=> {
//     Post.findById(req.params.id)
//     .then(post => {
//         res.status(200).json(post);
//     })
//     .catch(error => {
//         res.status(500).json({
//           message: 'Error retrieving the dogs',
//           error
//         });
//       });
// })
module.exports = server;
