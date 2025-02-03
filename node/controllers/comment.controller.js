const CommentsService = require("../services/comment.service");
const express = require("express");
const router = express.Router();

router.post("/", (req, res) =>{
    CommentsService.addComment(req.body).then((response) =>{
        res.status(200).send(response);
    })
    .catch((err) =>{
        res.status(500).send({ error: 'Something went wrong. Try again later!' })
    })
})
router.get("/data", (req, res) =>{
    CommentsService.getComments(req.query.id).then((response) =>{
        res.status(200).send(response);
    })
    .catch((err) => {
        res.status(500).send({ error: 'Something went wrong. Try again later!' })
    })
})

module.exports = router;