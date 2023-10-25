const express = require("express");
const req = require("express/lib/request");
const { setPosts } = require("../controllers/post.controller");
const router = express.Router();

router.get("/", (req,res) => {
    res.json({message:"voila les données"});
});

router.post("/", setPosts);

router.put("/:id", (req,res) =>{
    res.json({messageId: req.params.id});
});

router.delete("/:id", (req,res) =>{
    res.json({message: "Post Supprimé id :" +req.params.id});
});

router.patch("/like-post/:id", (req,res) =>{
    res.json({message: "Post liké : id "+req.params.id});
});

router.patch("/dis-like-post/:id", (req,res) =>{
    res.json({message: "Post disliké : id "+req.params.id});
});


module.exports = router;