const mongoose = require("mongoose")

const schema = mongoose.Schema({
	title: String,
    image: String,
    body: String,
    comments: [{ 
        body: String,
        author: String
     }],
	created: Date,
})

module.exports = mongoose.model("Post", schema)