const inquirer = require('inquirer');
const fs = require('fs');


const questions = 

[
    {
        //The first question prompts the user to provide the number of employees on their team.
        type: 'number',
        name: 'numberOfEmployees',
        message: 'Welcome to the Employee Profile app! To get started, please enter the number of employees for which you will be creating profiles, not including yourself:',
        validate: function (answer) {
            if (answer === false || answer !== Number || answer < 1) {
                return 'You must enter a number.';
            } else {
                return true;
            }
        }
    },
    {
        //The second question is for the manager to enter their name.
        type: 'input',
        name: 'managerName',
        message: 'Please enter your first and last name: ',
        validate: function (answer) {
            if (answer === false) {
                return 'You must enter your name: ';
            } else {
                return true;
            }
        }
    }
    {
        type: 'number',
        name: 'managerEmployeeId',
        message: 'Please enter your employee ID: ',
        validate: function (answer) {
            if (answer === false || answer !== Number) {
                return 'You must enter a number.';
            } else {
                return true;
            } 
        }
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'Please enter your email address: ',
        validate: function (answer) {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            const testEmail = re.test(answer);
            if (answer === false || testEmail === false ) {
                return 'You must enter a valid email address.';
            } else {
                return true;
            }
        }
    },
    {
        type: 'list',
        name: 'employeeRoleSelect',
        message: "Please select the employee's role: ",
        choices: ["Engineer","Intern"],
        validate: function (answer) {
            if (answer === false) {
                return "You must select a role for the employee.";
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'employeeName',
        message: "Please provide the employee's first and last name: ",
        validate: function (answer) {
            if (answer === false) {
                return "You must enter the employee's name: ";
            } else {
                return true;
            }
        }
    },
    {
        type: 'number',
        name: 'employeeId',
        message: "Please enter employee ID:  ",
        validate: function (answer) {
            if (answer === false || answer !== Number) {
                return "You must enter a valid employee ID: ";
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'employeeEmail',
        message: "Please enter employee's email address: ",
        validate: function (answer) {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            const testEmail = re.test(answer);
            if (answer === false || testEmail === false ) {
                return 'You must enter a valid email address.';
            } else {
                return true;
            }   
        }
    },
    {
        type: 'input',
        name: 'employeeGithub',
        message: "Please enter the URL for the employee's GitHub profile: ",
        validate: function (answer) {
            const re = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;
            const testUrl = re.test(answer);
            if (answer === false || testUrl === false) {
                return 'You must enter a valid URL.';
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'employeeSchool',
        message: "Please enter the school that the intern is attending: ",
        validate: function (answer) {
            if (answer === false) {
                return "You must enter the intern's school.";
            } else {
                return true; 
            }
        }
    }
]


inquirer.prompt(questions[0,1,2,3,4]).then((data) => {
    
}
   

inquirer.prompt(
    [
        {
            type: 'input',
            name: 'managerName',
            message: "Please enter your first and last name: "
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'Please enter your employee ID: '
        },
        {
            type: 'input',
            name: 'installationInfo',
            message: 'Please enter information on how to install your app:'
        },
        {
            type: 'input',
            name: 'usageInfo',
            message: 'Please enter information on how to use your app:'
        },
        {
            type: 'list',
            name: 'licenseInfo',
            message: 'Please select the type of license that pertains to your app:',
            choices: ['Public Domain','Permissive','LGPL','Copyleft','Proprietary']
        },
        {
            type: 'input',
            name: 'contributionRules',
            message: 'Please enter contribution guidelines for your app:'
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'Please enter your GitHub username:'
        },
        {
            type: 'input',
            name: 'emailAddress',
            message: 'Please enter your email address:'
        }
    
    ]).then((data) => {