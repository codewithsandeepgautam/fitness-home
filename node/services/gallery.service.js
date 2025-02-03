const GallerySchema = require("../schemas/gallery.schema");

let service = {}
service.getImages = getImages;

async function getImages() {
    try {
        const data = await GallerySchema.find({isActive: true});
        return data;
    }
    catch (error) {
        return Promise.reject({ error: 'Unable to get Images' })
    }
}

module.exports = service;
