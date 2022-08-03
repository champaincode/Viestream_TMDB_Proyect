const express = require("express");
const passport = require("passport");
const User = require("../models/User");

const router = express.Router();



router.post("/register", (req, res) => {
  User.create(req.body).then((user) => {
     res.status(201).send(user);
  });
  });


router.post("/login",passport.authenticate("local"),(req,res) => {
  const {password,salt,...userinfo} = req.user.dataValues
  res.status(200).send(userinfo)

})





router.post("/logout", (req, res, next) => {
  req.logOut(error => {
    if (error) {
    return next(error)
    }
  }  )
 return res.status(200).send({})
});

module.exports = router;