const Employee = require('../lib/employee');

class Engineer extends Employee {
    constructor(name,id,email,github) {
        if (!name && !id && !email && !github) {
            throw new Error("You must provide the required information.");
        }
        if (!name && id && email && github) {
            throw new Error("You must provide the employee's name.");
        }
        if (name && !id && email && github) {
            throw new Error("You must provide the employee's ID.");
        }
        if (name && id && !email && github) {
            throw new Error("You must provide the employee's email.")
        }
        if (name && id && email && !github) {
            throw new Error("You must provide the employee's GitHub profile.");
        }
        super(name,id,email);
        this.github = github;
    }

    getEmployeeGithub() {
        return this.github;
    }

    getEmployeeRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;