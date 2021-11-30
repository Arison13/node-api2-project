// implement your posts router here
const express = require('express')
const Post = require("./posts-model")
const router = express.Router()

router.get('/', (req, res)=> {
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

module.exports = router