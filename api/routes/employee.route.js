const express = require("express");
const router = express.Router();

const EmployeeController = require("../controllers/employee.controller");

router.post("/register", EmployeeController.employee_register);
router.post("/login", EmployeeController.employee_login);
router.post("/setGift", EmployeeController.setGift);
router.get("/toggleGift", EmployeeController.toggleGift);
router.get("/toggleCheckin", EmployeeController.toggleCheckin);
router.post("/checkPrize", EmployeeController.checkPrize);
router.get("/getAll", EmployeeController.getAll);
//router.get("/bulkRegister", EmployeeController.registerBulk);

module.exports = router;
