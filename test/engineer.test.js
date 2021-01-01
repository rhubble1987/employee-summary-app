const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    describe('Initialization', () => {
        it("should create an object containing the employee's personal github page along with their role as engineer.", () => {
            const engineer = new Engineer("https://github.com/john-smith");

            expect(engineer.github).toEqual('https://github.com/john-smith');
            expect(engineer.role).toEqual('Engineer');
        });

        it("should throw an error if no arguments are provided.", () => {
            const cb = () => new Engineer();
            const err = new Error("You must provide the employee's GitHub profile URL.");

            expect(cb).toThrow(err);
        });
    });

    describe("getEmployeeGithub", () => {
        it("should return the previously provided GitHub URL.", () => {
            const employeeGithub = "https://github.com/john-smith";

            const result = new Engineer("https://github.com/john-smith").getEmployeeGithub();

            expect(result).toEqual(employeeGithub);
        });
    });

    describe("getEmployeeRole", () => {
        it("should return 'Engineer' for the employee's role.", () => {
            const employeeRole = 'Engineer';
            
            const result = new Engineer("https://github.com/john-smith").getEmployeeRole();

            expect(result).toEqual(employeeRole);
        });
    });
});