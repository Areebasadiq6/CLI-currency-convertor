#!usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.yellow("\n\t *** WELCOME TO YOUR CURRENCY CONVERTOR *** \n"));
const currency: any = {
  USD: 1,
  EUR: 0.85,
  GBP: 0.73,
  JPY: 110.5,
  AUD: 1.31,
  CAD: 1.25,
  CHF: 0.92,
  CNY: 6.44,
  INR: 75.1,
  PKR: 177.5,
};
let user_answer = await inquirer.prompt([
  {
    name: "for",
    message: chalk.magentaBright("Enter from Currency"),
    type: "list",
    choices: [
      "USD",
      "EUR",
      "GBP",
      "JPY",
      "AUD",
      "CAD",
      "CHF",
      "CNY",
      "INR",
      "PKR",
    ],
  },
  {
    name: "to",
    message: chalk.magentaBright("Enter to Currency"),
    type: "list",
    choices: [
      "USD",
      "EUR",
      "GBP",
      "JPY",
      "AUD",
      "CAD",
      "CHF",
      "CNY",
      "INR",
      "PKR",
    ],
  },
  {
    name: "amount",
    message: chalk.magentaBright("Enter your Amount"),
    type: "number",
  },
]);
let fromAmount = currency[user_answer.for];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(
  chalk.green`Your converted amount is: ${chalk.cyan(
    convertedAmount.toFixed(2)
  )}`
);
console.log(chalk.blueBright(convertedAmount));
console.log(
  chalk.cyan("\n\t **** THANKS FOR USING THE CURRENCY CONVERTOR ****\n")
);
