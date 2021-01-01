const Manager = require('../lib/manager');

describe('Manager', () => {
    describe('Initialization', () => {
        it("should should create an object containing the employee's office number along with their role as manager.", () => {
            const manager = new Manager("2B");

            expect(manager.officeNumber).toEqual('2B');
            expect(manager.role).toEqual('Manager');
        });

        it("should throw an error if no arguments are provided.", () => {
            const cb = () => new Manager();
            const err = new Error("You must provide your office number.");

            expect(cb).toThrow(err);
        });

    });

    describe('getEmployeeOfficeNumber', () => {
        it('should return the office number entered for the employee', () => {
            const officeNumber = "2B"            
            const result = new Manager('2B').getEmployeeOfficeNumber();

            expect(result).toEqual(officeNumber);
        });
    });

    describe('getEmployeeRole', () => {
        it("it should return the employee's role", () => {
            const employeeRole = "Manager";
            const result = new Manager('2B').getEmployeeRole();

            expect(result).toEqual(employeeRole);
        });
    });
    
});