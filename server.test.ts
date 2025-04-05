import StudentController from "./src/controller/student";

jest.mock("./src/db/student", () => {
    return jest.fn().mockImplementation(() => {
        return {
            db: async () => ([
                [91, "A0001", "Juan Pérez", 92, false],   // Se gradua con honores
                [88, "A0002", "María López", 89, true],   // Apenas paso, pero tiene deuda
                [60, "A0003", "Pedro Gómez", 62, true],   // expulsado
                [69, "A0004", "Ana Díaz", 69, false],     // tiene derecho a examen de recuperación
                [95, "A0005", "Luisa Ramírez", 96, true]  // Tendría honores, pero tiene deudas
            ])
        };
    });
});

describe("StudentController", () => {
    let studentController: StudentController;

    beforeEach(() => {
        studentController = new StudentController();
    });

    it("should return correct student status messages", async () => {
        const result = await studentController.getStudentStatus();

        expect(result).toEqual([
            ["A0001", "Te graduaste con honores"],
            ["A0002", "Pasaste muy apenas pero tienes deuda"],
            ["A0003", "Expulsado."],
            ["A0004", "Como no tienes adeudo tienes derecho a un examen de recuperación."],
            ["A0005", "Tenias honores pero tienes una deuda"]
        ]);
    });
});
