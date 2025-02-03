const GalleryService = require("../services/gallery.service");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    GalleryService.getImages().then((response) => {
        res.status(200).send(response);
    })
        .catch((err) => {
            res.status(500).send({ error: 'Something went wrong. Try again later!' })
        })
})

module.exports = router;