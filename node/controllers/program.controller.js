const ProgramsService = require("../services/program.service");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    ProgramsService.getPrograms().then((response) => {
        res.status(200).send(response);
    })
        .catch((err) => {
            res.status(500).send({ error: 'Something went wrong. Try again later!' })
        })
})
router.get("/data", (req, res) =>{
    ProgramsService.getProgramData(req.query.handle).then((response) =>{
        res.status(200).send(response);
    })
    .catch((err) => {
        res.status(500).send({ error: 'Something went wrong. Try again later!' })
    })
})

module.exports = router;