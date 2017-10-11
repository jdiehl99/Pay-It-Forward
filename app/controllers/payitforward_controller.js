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
    user.all(function (result) {
        res.render("index", {
            user: result
        })
    });

});

// Route to user page
router.get("/user", function (req, res) {

});
// Route to donor pagge
router.get("/donor", function (req, res) {

});

// temp facebook
router.get("/facebook", function (req, res) {
    res.sendFile("/facebook.html")
});

// user login
router.post("/user/signup", function (req, res) {
    user.create(["first_name", "last_name", "email", "loan_amt", "user_story"], [req.body.first_name, req.body.last_name, req.body.email, req.body.loan_amt, req.body.user_story], function (result) {});

    user.setDashboardId(req.body.email, function (result2) {
        res.redirect("/user/dashboard/" + result2[0].id);
    })



});

//  donor login
router.post("/donor/signup", function (req, res) {
    donor.create(["first_name", "last_name", "email", "anonymous"], [req.body.first_name, req.body.last_name, req.body.email, req.body.anonymous], function (result) {});

    donor.setDashboardId(req.body.email, function (result2) {
        res.redirect("/donor/dashboard/" + result2[0].id);
    })
});


// user dashboard
router.get("/user/dashboard/:id", function (req, res) {

    var userId = req.params.id;

    user.allIdInfo(userId, function (userResult) {

        charity.all(function (charityResult) {

            res.render("user_dashboard", {
                user: userResult,
                charity: charityResult
            })
        });


    });


});

// donor dashboard
router.get("/donor/dashboard/:id", function (req, res) {

    var donorId = req.params.id;

    donor.allIdInfo(donorId, function (donorResult) {

        charity.all(function (charityResult) {

            user.all(function (userResults) {
                res.render("donor_dashboard", {
                    donor: donorResult,
                    charity: charityResult,
                    user: userResults
                })
            })
        })

    })

});

// Route to login 

router.post("/login", function (req, res) {
    // console.log(req.body)

    user.setDashboardId(req.body.email, function (userResult) {

        // console.log("Yomomma", userResult[0]) 

        if (userResult[0] == undefined) {

            donor.setDashboardId(req.body.email, function (donorResult) {

                console.log("check donor ", donorResult[0])

                if (donorResult[0] == undefined) {

                    res.redirect("/signup");

                } else {

                    res.redirect("/donor/dashboard/" + donorResult[0].id);

                }
            })

        } else {

            res.redirect("/user/dashboard/" + userResult[0].id);
        }

    })

})

module.exports = router;