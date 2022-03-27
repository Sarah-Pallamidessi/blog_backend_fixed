const express = require("express")
const router = express.Router()
const Post = require("../models/Post")
const OutputComments = require("../output DTOs/Comments")
const InputComment = require("../input DTOs/Comment")
const OutputPost = require("../output DTOs/Post")
const OutputPosts = require("../output DTOs/Posts")

router.get('/blog', async (req, res) => {
    
    const posts = await Post.find()
    const outputPosts = new OutputPosts(posts)
    res.send(outputPosts)
})

router.get('/blog/:blogId', async (req, res) => {
    const post = await Post.findOne({_id: req.params.blogId})
    const outputPost = new OutputPost(post)
    res.send(outputPost)
})

router.get('/comment/:blogId', async (req, res) => {
    const post = await Post.findOne({_id: req.params.blogId})
    const outputComments = new OutputComments(post)
    res.send(outputComments)
})

router.post('/comment/:blogId', async (req, res) => {

    const inputComment = new InputComment(req.body, req.params.blogId)
    var post = await Post.findOne({_id: inputComment.blogId});
    post.comments.push(inputComment);
    post.save();
    const outputComments = new OutputComments(post)
    res.send(outputComments)
})

module.exports = router