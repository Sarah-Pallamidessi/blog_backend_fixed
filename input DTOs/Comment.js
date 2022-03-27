module.exports = class InputComment {
    constructor(comment, blogId) {

        // guards
        if(!comment.body || !comment.author ){
            throw new Error("missing mandatory field")
        }
        //@todo add more tests with express-validator or string-sanitizer 

        // formating
        this.blogId = blogId
        this.author = comment.author
        this.body = comment.body
    }
  }