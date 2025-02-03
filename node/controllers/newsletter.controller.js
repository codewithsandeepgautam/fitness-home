const NewsletterService = require("../services/newsletter.service");
const express = require("express");
const router = express.Router();

router.post('/', (req, res) => {
    NewsletterService.createNewsLetter(req.body).then((response) => {
        res.status(200).send("Email saved successfully");
    })
        .catch((err) => {
            console.log("Error creating newsletter email", err);
            res.status(500).send("Email already exists");
        })
})
router.get("/", (req, res) => {
    NewsletterService.getNewsLetter().then((response) => {
        res.status(200).send(response);
    })
        .catch((err) => {
            res.status(500).send({ error: 'Something went wrong. Try again later!' })
        })
})

module.exports = router;