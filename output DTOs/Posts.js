const OutputPost = require("./Post")

module.exports = class OutputPosts {
    constructor(databasePosts) {
        this.posts = []
        databasePosts.map((post) => {
            // guards are handled by Post
            const outputPost = new OutputPost(post)

            // formating
            this.posts.push(outputPost)
        })   
    }
  }