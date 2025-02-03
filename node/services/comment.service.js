const CommentsSchema = require("../schemas/comment.schema");

let service = {}
service.addComment = addComment;
service.getComments = getComments;

async function addComment(body) {
    try {
        const findComment = await CommentsSchema.findOne({ handle: body.username });
        if (!findComment) {
            const newComment = new CommentsSchema(body);
            const savedData = await newComment.save();
            return savedData;
        }
        else {
            return "comment aready exist!";
        }
    }
    catch (err) {
        return Promise.reject({ error: 'Unable to create comment. Try again later!' });
    }
}
async function getComments(id) {
    try {
        const findComments = await CommentsSchema.find({ blogId: id });
        if (!findComments) {
            return "data not found";
        }
        else {
            return findComments;
        }
    }
    catch (error) {
        return Promise.reject({ error: 'Unable to get data' })
    }
}

module.exports = service;