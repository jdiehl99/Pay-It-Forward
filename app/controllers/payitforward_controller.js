// Variable to require express package
var express = require("express");

// Main express router
var router = express.Router();

// Route to go to home page
router.get("/", function(req, res) {
    res.render("index")
});

// Route to user page
router.get("/user", function(req, res) {

});
// Route to donor pagge
router.get("/donor", function(req, res) {

});

// temp facebook
router.get("/facebook", function(req, res) {
    res.sendFile("/facebook.html")
});
module.exports = router;