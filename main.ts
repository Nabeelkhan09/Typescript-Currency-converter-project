import inquirer from "inquirer";

import chalk from "chalk";

console.log(chalk.blue.bold("\n \t Welcome to Nabeel Hanif - Currency Convertor\n"))

// Define the list of currencies and thier exchange rates

let exchange_rate: any = {
    "USD": 1,          // Base Currency
    "Eur": 0.9,        // European Currency
    "JYP": 113,        // Japanese Currency
    "CAD": 1.3,        // Canadian Dollar
    "AUD": 1.65,       // Australian Dollar
    "PKR": 277.70,        // Pakistani Rupees

    // Add more currencies and thier exchange rates here
}

// Prompt the user to selesct currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: chalk.green("Select the currency to convert from:"),
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: chalk.blue("Select the currency to convert into:"),
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: chalk.magenta("Enter the amount to convert:")
    }
]);

// Perform currency conversion by using Formula
let from_amount = exchange_rate [user_answer.from_currency];

let to_amount = exchange_rate [user_answer.to_currency];

let amount = user_answer.amount;

// Formula of conversion
let base_amount = amount / from_amount

let converted_amount = base_amount * to_amount

// Display the converted amount
console.log(`Converted Amount = ${chalk.green(converted_amount.toFixed(2))}`);