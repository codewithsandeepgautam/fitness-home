const mongoose = require("mongoose");
const ProgramsSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    handle: {
        type: String,
        required: true
    },
    altTag: {
        type: String,
        required: true
    },
    imageTitle: {
        type: String,
        required: true
    },
    keyword: {
        type: String,
        required: true
    },
    metaTitle: {
        type: String,
        required: true
    },
    metaDescription: {
        type: String,
        required: true
    },
    publishedAt: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true,
        default: true
    }
}, { timestamps: true })

const Programs = mongoose.model("Programs", ProgramsSchema);
module.exports = Programs;