const Employee = require('../lib/employee');

describe('Employee', () => {
    describe('Initialization', () => {
        it('should create a class consisting of an object containing name, id, and email', () => {
            const employee = new Employee("John Smith", 12345, "john.smith@company.com");

            expect(employee.name).toEqual("John Smith");
            expect(employee.id).toEqual(12345);
            expect(employee.email).toEqual("john.smith@company.com");
        });

        it("should throw an error if no arguments are provided", () => {
            const cb = () => new Employee();
            const err = new Error('No employee information was provided.');

            expect(cb).toThrow(err);

        });

        it("should throw an error when a name isn't provided", () => {
            const cb = () => new Employee(12345,"john.smith@company.com");
            const err = new Error('You must provide a name.');

            expect(cb).toThrow(err);
        });

        it("should throw an error when an ID isn't provided.", () => {
            const cb = () => new Employee("John Smith","john.smith@company.com");
            const err = new Error('You must provide an ID.');

            expect(cb).toThrow(err);
        });

        it("should throw an error when an email isn't provided.", () => {
            const cb = () => new Employee("John Smith",12345);
            const err = new Error('You must provide an email address.');

            expect(cb).toThrow(err);
        });

        it("should throw an error when a non-string is provided for name.", () => {
            const cb = () => new Employee(12345,67890,"john.smith@company.com");
            const err = new Error('You must provide a valid name.');

            expect(cb).toThrow(err);
        });

        it("should throw an error when a number is not provided for employee ID.", () => {
            const cb = () => new Employee("John Smith","12345","john.smith@company.com");
            const err = new Error('You must provide a valid employee ID.');

            expect(cb).toThrow(err);
        });

        it("should throw an error when a valid email address is not provided.", () => {
            const cb = () => new Employee("John Smith",12345,"john.smithatcompanydotcom");
            const err = new Error('You must provide a valid email address.');

            expect(cb).toThrow(err);
        });


    });

    describe("getEmployeeName", () => {
        it("should return the previously provided employee name.", () => {
            const employeeName = "John Smith";

            const result = new Employee("John Smith",12345,"john.smith@company.com").getEmployeeName();

            expect(result).toEqual(employeeName);
        });
    });

    describe("getEmployeeId", () => {
        it("should return the previously provided employee ID.", () => {
            const employeeId = 12345;

            const result = new Employee("John Smith", 12345,"john.smith@company.com").getEmployeeId();

            expect(result).toEqual(employeeId);
        });
    });

    describe('getEmployeeEmail', () => {
        it("should return the previously provided employee email.", () => {
            const employeeEmail = "john.smith@company.com";

            const result = new Employee("John Smith", 12345,"john.smith@company.com").getEmployeeEmail();

            expect(result).toEqual(employeeEmail);
        });

    });

});