const Intern = require('../lib/intern');

describe('Intern', () => {
    describe('Initialization', () => {
        it("should should create an object containing the employee's school along with their role as an intern.", () => {
            const intern = new Intern("Computer University");

            expect(intern.school).toEqual('Computer University');
            expect(intern.role).toEqual('Intern');
        });

        it("should throw an error if no arguments are provided.", () => {
            const cb = () => new Intern();
            const err = new Error("You must provide the employee's university name.");

            expect(cb).toThrow(err);
        });

    });

    describe('getEmployeeSchool', () => {
        it('should return the name of the unversity that was previously entered for the employee', () => {
            const employeeUniversity = "Computer University"            
            const result = new Intern('Computer University').getEmployeeSchool();

            expect(result).toEqual(employeeUniversity);
        });
    });

    describe('getEmployeeRole', () => {
        it("it should return the employee's role", () => {
            const employeeRole = "Intern";
            const result = new Intern('Computer University').getEmployeeRole();

            expect(result).toEqual(employeeRole);
        });
    });
    
});