import db from "../db/student";

const studentDB = new StudentDB();

class StudentController{
    async getStudentStatus (){
        const studentList = await studentDB.db();
    }
}

export default StudentController;