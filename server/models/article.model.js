const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    UserName:{
        type: String
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    content: {
        type: String
    },
    url: {
        type: String
    },
    

}, {timestamps: true});

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;