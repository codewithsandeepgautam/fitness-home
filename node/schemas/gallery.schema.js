const mongoose = require("mongoose");
const GallerySchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    videoUrl: {
        type: String,
        required: true
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    alt: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true,
        default: true
    }
}, { timestamps: true })

const Gallery = mongoose.model("Gallery", GallerySchema);
module.exports = Gallery;
