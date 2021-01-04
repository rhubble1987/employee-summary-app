const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    describe('Initialization', () => {
        it("should create an object containing the employee's name, ID, email, personal github page.", () => {
            const engineer = new Engineer('John Smith',12345,'john-smith@company.com',"https://github.com/john-smith");

            
            expect(engineer.name).toEqual('John Smith');
            expect(engineer.id).toEqual(12345);
            expect(engineer.email).toEqual('john-smith@company.com')
            expect(engineer.github).toEqual('https://github.com/john-smith');

        });

        it("should throw an error if no arguments are provided.", () => {
            const cb = () => new Engineer();
            const err = new Error("You must provide the required information.");

            expect(cb).toThrow(err);
        });

        it("should throw an error if no name is provided.", () => {
            let name;
            const cb = () => new Engineer(name,12345,'john-smith@company.com','https://github.com/john-smith');
            const err = new Error("You must provide the employee's name.");

            expect(cb).toThrow(err);
        });

        it("should throw an error if no ID is provided.", () => {
            let id;
            const cb = () => new Engineer('John Smith',id,'john-smith@company.com','https://github.com/john-smith');
            const err = new Error("You must provide the employee's ID.");

            expect(cb).toThrow(err);
        });

        it("should throw an error if no email is provided.", () => {
            let email;
            const cb = () => new Engineer('John Smith',12345,email,'https://github.com/john-smith');
            const err = new Error("You must provide the employee's email.");

            expect(cb).toThrow(err);
        });
        
        it("should throw an error if no GitHub URL is provided.", () => {
            let github;
            const cb = () => new Engineer('John Smith',12345,'john-smith@company.com',github);
            const err = new Error("You must provide the employee's GitHub profile.");

            expect(cb).toThrow(err);
        });
    });

    describe("getEmployeeGithub", () => {
        it("should return the previously provided GitHub URL.", () => {
            const employeeGithub = "https://github.com/john-smith";

            const result = new Engineer('John Smith',12345,'john-smith@company.com',"https://github.com/john-smith").getEmployeeGithub();

            expect(result).toEqual(employeeGithub);
        });
    });

    describe("getEmployeeRole", () => {
        it("should return 'Engineer' for the employee's role.", () => {
            const employeeRole = 'Engineer';
            
            const result = new Engineer('John Smith',12345,'john-smith@company.com',"https://github.com/john-smith").getEmployeeRole();

            expect(result).toEqual(employeeRole);
        });
    });
});