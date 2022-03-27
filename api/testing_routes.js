const express = require("express")
const router = express.Router()
const Post = require("../models/Post")

router.post('/blog', async (req, res) => {

    const post = new Post({
        title: 'New post',
        image: 'https://www.google.co.uk/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fword-text-blue-fun-image-vector-19183853&psig=AOvVaw0m-QVRt5RXNfmZoQxAJKob&ust=1648414087607000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMCI1pbT5PYCFQAAAAAdAAAAABAD',
        body: 'The very new post!<p>Wouhou!</p>',
        comments: [{ 
            body: 'Amazing a new post!',
            author: 'A Fan'
        }],
        created: new Date()
        }
    )
    try {
        await post.save()
    } catch (e) {
        console.error(e);
    }
    
    res.send(post)
})

module.exports = router