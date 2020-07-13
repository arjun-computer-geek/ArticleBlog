var express = require("express");
var Article = require("./../models/article.js")
var router = express.Router();

router.get("/new",function(req, res){
	res.render("articles/new")
});
router.get("/:id", function(req, resS){

});
router.post("/", async(req, res)=>{
	var article = new Article({
		title: req.body.title,
		description: req.body.description,
		markdown: req.body.markdown
	});
	article.save();

module.exports = router;