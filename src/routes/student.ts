import express from "express";
import StudentHttpHandler from "../handler/student";

const router = express.Router();

const studentHttpHandler = new StudentHttpHandler();

router.get('/', studentHttpHandler.getStudent);

export default router;