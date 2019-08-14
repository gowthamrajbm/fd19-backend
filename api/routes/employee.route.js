const express = require("express");
const router = express.Router();

const EmployeeController = require("../controllers/employee.controller");

router.post("/register", EmployeeController.employee_register);
router.post("/login", EmployeeController.employee_login);
router.post("/setGift", EmployeeController.setGift);
router.post("/checkPrize", EmployeeController.checkPrize);

module.exports = router;
