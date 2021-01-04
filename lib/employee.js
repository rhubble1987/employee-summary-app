class Employee {
    constructor(name, id, email) {
        if (!name && !id && !email) {
            throw new Error('No employee information was provided.');
        }
        if (!name && id && email) {
            throw new Error('You must provide a name.');
        }
        if (!id && name && email) {
            throw new Error('You must provide an ID.');
        }
        if (!email && name && id) {
            throw new Error('You must provide an email address.');
        }
        if (typeof name !=='string') {
            throw new Error('You must provide a valid name.');
        }
        if (typeof id !== 'number') {
            throw new Error('You must provide a valid employee ID.');
        }
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const testEmail = re.test(email);
        if (testEmail === false ) {
            throw new Error('You must provide a valid email address.');
        }
        this.name = name;
        this.id = id;
        this.email = email;
    }

    

    getEmployeeName() {
        return this.name;
    }

    getEmployeeId() {
        return this.id;
    }

    getEmployeeEmail() {
        return this.email;
    }
}


module.exports = Employee;