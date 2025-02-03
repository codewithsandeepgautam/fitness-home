const contactService = require("../services/contact.service");
const express = require("express");
const router = express.Router();

router.post("/submit", (req, res) => {
    contactService.createContact(req.body)
        .then((response) => {
            res.status(200).send("Email send successfully");
        })
        .catch((err) => {
            console.log("Error creating contact form", err)
            res.send(500, "Error creating contact form", err)
        })
})

router.get("/", (req, res) => {
    contactService.getContacts().then((response) => {
        res.status(200).send(response);
        
    })
        .catch((err) => {
            res.status(500).send({ error: 'Something went wrong. Try again later!' })
        })
})
module.exports = router;