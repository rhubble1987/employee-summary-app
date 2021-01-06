const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)


const managerQuestions =
[    
    {
        //The second question is for the manager to enter their name.
        type: 'input',
        name: 'managerName',
        message: 'To get started, please enter your first and last name: ',
        validate: function (answer) {
            if (answer === false) {
                return 'You must enter your name: ';
            } else {
                return true;
            }
        }
    },
    {   
        //Then manager employee ID 
        type: 'input',
        name: 'managerEmployeeId',
        message: 'Please enter your employee ID: ',
        validate: function (answer) {
            if (answer === false || typeof answer !== 'number') {
                return 'You must enter a number.';
            } else {
                return true;
            } 
        }
    },
    {
        //Then manager email
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
        //Then manager office number.
        type: 'input',
        name: 'managerOfficeNumber',
        message: 'Please enter your office number: ',
        validate: function (answer) {
            if(answer === false) {
                return 'You must enter your office number.';
            } else {
                return true;
            }
        }
    }
]
const employeeRole =
[
    {
        //Question to get employee's role.
        type: 'list',
        name: 'employeeRoleSelect',
        message: "Please select the employee's role: ",
        choices: ["Engineer","Intern"],
    }
]
const employeeQuestions =
[
    {
        //Question for employee's name
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
        //Employee's ID
        type: 'number',
        name: 'employeeId',
        message: "Please enter employee ID:  ",
        validate: function (answer) {
            if (answer === false || typeof answer !== 'number') {
                return "You must enter a valid employee ID: ";
            } else {
                return true;
            }
        }
    },
    {
        //Employee's email
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
    }
]
const engineerQuestion =
[
    {
        //Engineer-specific question
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
    }
]
const internQuestion =
[
    {
        //Intern-specific question
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

const additionalEmployees = 
[
    {
        //Confirmation if any additional employees need to be added
        type: 'confirm',
        name: 'additionalEmployees',
        message: 'Do you need to add another employee?'
    }
]


//Array to add employee objects to
let employees = [];

// Function to ask the engineer questions
const askEngineerQuestions = employee => {
    inquirer.prompt(engineerQuestion).then((ans) => {
        let engineer = new Engineer(employee.name,employee.id,employee.email,ans.employeeGithub);
        employees.push(engineer);
        inquirer.prompt(additionalEmployees).then((a) => {
            if (a.additionalEmployees) {
                askEmployeeQuestions();
            } else {
                fs.writeFile(outputPath,render(employees),(err) => {
                    if (err) throw err;
                    console.log('Your html file has been successfully generated!');
                });
            }
        });
    });
}

// Function to ask the intern questions
const askInternQuestions = employee => {
    inquirer.prompt(internQuestion).then((ans) => {
        let intern = new Intern(employee.name,employee.id,employee.email,ans.employeeSchool);
        employees.push(intern);
        inquirer.prompt(additionalEmployees).then((a) => {
            if (a.additionalEmployees) {
                askEmployeeQuestions();
            } else {
                fs.writeFile(outputPath,render(employees),(err) => {
                    if (err) throw err;
                    console.log('Your html file has been successfully generated! You can find it in the outputs folder.');
                });
            }
        });
    });
}



    
//Prompt for first employee
const askEmployeeQuestions = () => {
        inquirer.prompt(employeeQuestions).then((answers) => {
            let employee =  new Employee(answers.employeeName,answers.employeeId,answers.employeeEmail);
            inquirer.prompt(employeeRole).then((answer) => {
                if (answer.employeeRoleSelect === "Engineer") {
                    askEngineerQuestions(employee);
                }
                if (answer.employeeRoleSelect === "Intern") {
                    askInternQuestions(employee);
                }
            
        });
    });
}

// Functions when the app is initialized
console.log('Welcome to the Employee Profile app!');

    inquirer.prompt(managerQuestions).then((answers) => {

        const manager = new Manager(answers.managerName,answers.managerEmployeeId,answers.managerEmail,answers.managerOfficeNumber);
        employees.push(manager);
    }).then(askEmployeeQuestions);  


    





// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!



// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
