 import express from "express";
import { addEmployee, addEmployer, deleteEmployee, deleteEmployer, getEmployee, getEmployeeByCompany, getEmployer, updateEmployee, updateEmployer } from "../Controller/ManageController.js";

 const router = express.Router();

 router.route("/Empregister").get(getEmployee).post(addEmployee)

 router.route("/Employerregister").get(getEmployer).post(addEmployer)

 router.route("/Empregister/:id").patch(updateEmployee).delete(deleteEmployee)

 router.route("/Employerregister/:id").patch(updateEmployer).delete(deleteEmployer)

 router.route("/Empregister/:companyname").get(getEmployeeByCompany)

 export default router;