import inquirer from "inquirer";
console.log("Wellcome to catculator");
let option;
do {
    const answers = await inquirer.prompt([
        { type: "list",
            name: "calculation",
            message: "chose opretor you want to perform",
            choices: ['adition', 'subtract', 'multiply', 'division', 'modolus']
        },
        { type: 'number',
            name: "number1",
            messege: "what is your first number",
        },
        {
            type: "number",
            name: "number2",
            messege: "what is your second number"
        },
    ]);
    if (answers.calculation == 'adition') {
        console.log(`Addition result : ${answers.number1 + answers.number2}`);
    }
    else if (answers.calculation == 'subtract') {
        console.log(`subtraction result : ${answers.number1 - answers.number2}`);
    }
    else if (answers.calculation == 'multiply') {
        console.log(`multiplication result : ${answers.number1 * answers.number2}`);
    }
    else if (answers.calculation == 'division') {
        console.log(`division result : ${answers.number1 / answers.number2}`);
    }
    else if (answers.calculation == 'modolus') {
        console.log(`modolus result : ${answers.number1 % answers.number2}`);
    }
    ;
    const choice = await inquirer.prompt([{
            type: "confirm",
            name: "slection",
            message: "perform another opration pres y for yes or n for no",
            default: false,
        }]);
    if (choice.slection) {
        option = 'y';
    }
    else {
        option = 'n';
    }
} while (option.toLowerCase() === 'y');
