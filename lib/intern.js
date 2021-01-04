const Employee = require('../lib/employee');

class Intern extends Employee {
    constructor(name,id,email,school) {
        if (!name && !id && !email && !school) {
            throw new Error("You must provide the required information.");
        }
        if (!name && id && email && school) {
            throw new Error("You must provide the intern's name.");
        }
        if (name && !id && email && school) {
            throw new Error("You must provide the intern's ID.");
        }
        if (name && id && !email && school) {
            throw new Error("You must provide the intern's email.")
        }
        if (name && id && email && !school) {
            throw new Error("You must provide the intern's university name.");
        }
        super(name,id,email);
        this.school = school;
    }

    getEmployeeSchool() {
        return this.school;
    }

    getEmployeeRole() {
        return 'Intern';
    }
}

module.exports = Intern;