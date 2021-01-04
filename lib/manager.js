const Employee = require('../lib/employee');

class Manager extends Employee {
    constructor(name,id,email,officeNumber) {
        if (!name && !id && !email && !officeNumber) {
            throw new Error("You must provide the required information.");
        }
        if (!name && id && email && officeNumber) {
            throw new Error("You must provide your name.");
        }
        if (name && !id && email && officeNumber) {
            throw new Error("You must provide your employee ID.");
        }
        if (name && id && !email && officeNumber) {
            throw new Error("You must provide your email.")
        }
        if (name && id && email && !officeNumber) {
            throw new Error("You must provide your office number.");
        }
        super(name,id,email);
        this.officeNumber = officeNumber;
    }

    getEmployeeOfficeNumber() {
        return this.officeNumber;
    }

    getEmployeeRole() {
        return 'Manager';
    }
}

module.exports = Manager;