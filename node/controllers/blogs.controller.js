const BlogsService = require("../services/blogs.service");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) =>{
    BlogsService.getBlogs().then((response) =>{
        res.status(200).send(response);
    })
    .catch((err) =>{
        res.status(500).send({ error: 'Something went wrong. Try again later!' })
    })
})
router.get("/data", (req, res) =>{
    BlogsService.getBlogsData(req.query.handle).then((response) =>{
        res.status(200).send(response);
    })
    .catch((err) => {
        res.status(500).send({ error: 'Something went wrong. Try again later!' })
    })
})
module.exports = router;