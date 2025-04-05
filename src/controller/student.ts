import StudentDB from "../db/student";

type StudentRecord = [
    grade: number,
    studentId: string,
    name: string,
    final_grade: number,
    hasIssues: boolean
];

const studentDB = new StudentDB();

class StudentController {
    async getStudentStatus() {
        const studentList = await studentDB.db() as StudentRecord[];
        const student_status_list = [];

        for (let student of studentList) {
            if (student[3] > 90 && !student[4]) {
                student_status_list.push([student[1], "Te graduaste con honores"]);
            }
            else if(student[3] > 90 && student[4]){
                student_status_list.push([student[1], "Tenias honores pero tienes una deuda"]);
            }
            else if(student[3] > 70 && student[3] <90 && !student[4]){
                student_status_list.push([student[1], "Pasaste muy apenas"]);
            }
        }

        return student_status_list;
    }
}

export default StudentController;