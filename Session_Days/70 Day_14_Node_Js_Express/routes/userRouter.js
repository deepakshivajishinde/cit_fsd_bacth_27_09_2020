let express = require("express");
let router = express.Router();
let userController = require("../application/controller/userController");
//get router
router.get("/", userController.userHomeView);
router.get("/add-new-student", userController.getAddNewStudent);

//post router
router.post("/add-new-student", userController.postAddNewStudent);

// module exports
module.exports = router;
