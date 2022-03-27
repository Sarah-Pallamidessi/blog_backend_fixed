const OutputComments = require("./Comments")

module.exports = class OutputPost {
    constructor(post) {
        let comments = []

        // guards
        if(!post._id || !post.body || !post.title || !post.image || !post.comments || !post.created ){
            throw new Error("malformed object in database")
        }
        if( !Object.prototype.toString.call(post.created) === '[object Date]' ){
            throw new Error("malformed object in database")
        }

        // formating
        this.id = post._id,
        this.title = post.title
        this.body = post.body,
        this.created = (post.created.toLocaleDateString('en-GB').toString()).replace(/\//g, '-');
    }
  }