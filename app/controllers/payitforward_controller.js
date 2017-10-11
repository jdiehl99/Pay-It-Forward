// Variable to require express package
var express = require("express");

// Main express router
var router = express.Router();

// user model require

var user = require("../models/user_model.js");

// donor model require

var donor = require("../models/donor_model.js");

var charity = require("../models/charity_model.js");

// Route to go to home page
router.get("/", function (req, res) {

    user.rand(3, function(result){
    res.render("index", {user: result})
    });
    
});

// Route to user page
router.get("/user", function (req, res) {

});
// Route to donor page
router.get("/donor", function (req, res) {

});

// temp facebook
router.get("/facebook", function (req, res) {
    res.sendFile("/facebook.html")
});

// user login
router.post("/user/signup", function (req, res) {
    user.create(["first_name", "last_name", "email", "loan_amt", "user_story"], [req.body.first_name, req.body.last_name, req.body.email, req.body.loan_amt, req.body.user_story], function (result) {});
     
    user.setDashboardId(req.body.email, function(result2){
    res.redirect("/user/dashboard/"+result2[0].id);
    })    
    
    

});

//  donor login
router.post("/donor/signup", function (req, res) {
    donor.create(["first_name", "last_name", "email", "anonymous"], [req.body.first_name, req.body.last_name, req.body.email, req.body.anonymous], function (result) {});

    donor.setDashboardId(req.body.email, function(result2){
    res.redirect("/donor/dashboard/"+result2[0].id);
    })
});


// user dashboard
router.get("/user/dashboard/:id", function (req, res) {

var usersId = req.params.id;

user.allIdInfo(userId, function(userResult){

charity.all(function(charityResult){

    res.render("user_dashboard", {user: userResult, charity: charityResult})
});


});


});

// donor dashboard
router.get("/donor/dashboard/:id", function (req, res) {

});

module.exports = router;