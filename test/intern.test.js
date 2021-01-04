const Intern = require('../lib/intern');

describe('Intern', () => {
    describe('Initialization', () => {
        it("should should create an object containing the employee's school along with their role as an intern.", () => {
            const intern = new Intern('John Smith', 12345,'john-smith@company.com',"Computer University");

            expect(intern.name).toEqual('John Smith');
            expect(intern.id).toEqual(12345);
            expect(intern.email).toEqual('john-smith@company.com');
            expect(intern.school).toEqual('Computer University');

        });

        it("should throw an error if no arguments are provided.", () => {
            const cb = () => new Intern();
            const err = new Error("You must provide the required information.");

            expect(cb).toThrow(err);
        });

        it("should throw an error if no name is provided.", () => {
            let name;
            const cb = () => new Intern(name, 12345,'john-smith@company.com',"Computer University");
            const err = new Error("You must provide the intern's name.");

            expect(cb).toThrow(err);
        });

        it("should throw an error if no ID is provided.", () => {
            let id;
            const cb = () => new Intern('John Smith', id,'john-smith@company.com',"Computer University");
            const err = new Error("You must provide the intern's ID.");

            expect(cb).toThrow(err);
        });

        it("should throw an error if no email is provided.", () => {
            let email;
            const cb = () => new Intern('John Smith', 12345, email,"Computer University");
            const err = new Error("You must provide the intern's email.");

            expect(cb).toThrow(err);
        });

        it("should throw an error if no school is provided.", () => {
            let school;
            const cb = () => new Intern('John Smith', 12345, 'john-smith@company.com',school);
            const err = new Error("You must provide the intern's university name.");

            expect(cb).toThrow(err);
        });

    });

    describe('getEmployeeSchool', () => {
        it('should return the name of the unversity that was previously entered for the employee', () => {
            const employeeUniversity = "Computer University"            
            const result = new Intern('John Smith', 12345,'john-smith@company.com','Computer University').getEmployeeSchool();

            expect(result).toEqual(employeeUniversity);
        });
    });

    describe('getEmployeeRole', () => {
        it("it should return the employee's role", () => {
            const employeeRole = "Intern";
            const result = new Intern('John Smith', 12345,'john-smith@company.com','Computer University').getEmployeeRole();

            expect(result).toEqual(employeeRole);
        });
    });
    
});