var express = require("express"),
 mongoose = require("mongoose"),
 articleRouter = require("./routes/articles.js");

var app = express();
mongoose.connect("mongodb://localhost/blog", {useNewUrlParser: true, useUnifiedTopology: true})
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: false}));



app.get("/", function(req, res){
	var aritcles = [{
		title: "Test Aritcles",
		date: new Date(),
		description: "Test Description"
	},
	{
		title: "Test Aritcles 2",
		date: new Date(),
		description: "Test Description"
	}

	]
	res.render("articles/index", {articles: aritcles});
});
app.use("/articles", articleRouter);
app.listen(3020, function(){
	console.log("Server Started");
});