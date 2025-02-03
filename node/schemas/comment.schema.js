const mongoose = require("mongoose");
const CommentSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    useremail: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true,
    },
    blogId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blogs',
        required: true
    },
}, { timestamps: true })

const Comments = mongoose.model("Comments", CommentSchema);
module.exports = Comments;