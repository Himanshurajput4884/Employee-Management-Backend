const express = require("express");
const signupUser = require("../controller/signupUser");
const login = require("../controller/login");
const logout = require("../controller/logout");
const router = express.Router();
const validUser = require("../controller/validUser");
const authenticate = require("../middleware/authenticate");
const addEmp = require("../controller/addEmp");
const getEmp = require("../controller/getEmp");
const getEmpId = require("../controller/getEmpId");
const updateEmp = require("../controller/updateEmp");

// to register the admin-user
router.post("/signup", signupUser);

// to login the admin-user
router.post("/login", login);

// to logout the admin-user
router.get("/logout", authenticate, logout);

// to get the ValidUser
router.get("/validuser", authenticate, validUser);

// to add new employee
router.post("/new/emp", authenticate, addEmp);

// router to get all the details
router.get("/get/emp", getEmp);

// get employee by id
router.get("/get/:id", getEmpId);

// update employee by id
router.post("/update/:id", updateEmp);


module.exports = router;