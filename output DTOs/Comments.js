
module.exports = class OutputComments {
    constructor(post) {
        this.comments = []

        post.comments.map((comment) => {
            // guards
            if(!comment._id || !comment.body || !comment.author){
                throw new Error("malformed object in database")
            }

            // formating
            this.comments.push({ 
                id: comment._id,
                blogId: post._id,
                body: comment.body,
                author: comment.author
            })
        })   
    }
  }