const TimeService = require("../services/time.service");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) =>{
    TimeService.getTime().then((response) =>{
        res.status(200).send(response);
    })
    .catch((err) =>{
        res.status(500).send({err: 'Something went wrong!'})
    })
})

module.exports = router;