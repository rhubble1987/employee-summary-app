const Manager = require('../lib/manager');

describe('Manager', () => {
    describe('Initialization', () => {
        it("should should create an object containing the employee's office number along with their role as manager.", () => {
            const manager = new Manager('John Smith', 12345,'john-smith@company.com',"2B");

            expect(manager.name).toEqual('John Smith');
            expect(manager.id).toEqual(12345);
            expect(manager.email).toEqual('john-smith@company.com');
            expect(manager.officeNumber).toEqual('2B');
        });

        it("should throw an error if no arguments are provided.", () => {
            const cb = () => new Manager();
            const err = new Error("You must provide the required information.");

            expect(cb).toThrow(err);
        });

        it("should throw an error if no name is provided.", () => {
            let name;
            const cb = () => new Manager(name,12345,'john-smith@company.com','2B');
            const err = new Error("You must provide your name.");

            expect(cb).toThrow(err);
        });

        it("should throw an error if no ID is provided.", () => {
            let id;
            const cb = () => new Manager('John Smith',id,'john-smith@company.com','2B');
            const err = new Error("You must provide your employee ID.");

            expect(cb).toThrow(err);
        });

        it("should throw an error if no email is provided.", () => {
            let email;
            const cb = () => new Manager('John Smith',12345,email,'2B');
            const err = new Error("You must provide your email.");

            expect(cb).toThrow(err);
        });

        it("should throw an error if no office number is provided.", () => {
            let officeNumber;
            const cb = () => new Manager('John Smith',12345,'john-smith@company.com',officeNumber);
            const err = new Error("You must provide your office number.");

            expect(cb).toThrow(err);
        });



    });

    describe('getEmployeeOfficeNumber', () => {
        it('should return the office number entered for the employee', () => {
            const officeNumber = "2B"            
            const result = new Manager('John Smith',12345,'john-smith@company.com','2B').getEmployeeOfficeNumber();

            expect(result).toEqual(officeNumber);
        });
    });

    describe('getEmployeeRole', () => {
        it("it should return the employee's role", () => {
            const employeeRole = "Manager";
            const result = new Manager('John Smith',12345,'john-smith@company.com','2B').getEmployeeRole();

            expect(result).toEqual(employeeRole);
        });
    });
    
});