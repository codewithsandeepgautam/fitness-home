const TimeService = require("../services/timetable.service");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    TimeService.getTimeData().then((response) => {
        res.status(200).send(response)
    }).catch((error) => {
        res.status(500).send({error: 'Unable to get data'});
    })
})
router.get("/data", (req, res) =>{
    TimeService.getClass(req.query.handle).then((response) =>{
        res.status(200).send(response);
    })
    .catch((err) => {
        res.status(500).send({ error: 'Something went wrong. Try again later!' })
    })
})
module.exports = router;