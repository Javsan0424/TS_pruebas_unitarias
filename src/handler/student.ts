import { Request, Response, NextFunction } from "express";
import StudentController from "../controller/student";

const studentController = new StudentController();

class StudentHttpHandler {
    getStudent = async (request: Request, response: Response, next: NextFunction) => {
        try {
            const student = await studentController.getStudentStatus();
            response.json(student);
        } catch (error) {
            next(error);
        }
    };
}

export default StudentHttpHandler; 