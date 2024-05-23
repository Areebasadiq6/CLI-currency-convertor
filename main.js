#!usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
console.log(chalk_1.default.yellow("\n\t *** WELCOME TO YOUR CURRENCY CONVERTOR *** \n"));
const currency = {
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
let user_answer = await inquirer_1.default.prompt([
    {
        name: "for",
        message: chalk_1.default.magentaBright("Enter from Currency"),
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
        message: chalk_1.default.magentaBright("Enter to Currency"),
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
        message: chalk_1.default.magentaBright("Enter your Amount"),
        type: "number",
    },
]);
let fromAmount = currency[user_answer.for];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(chalk_1.default.green `Your converted amount is: ${chalk_1.default.cyan(convertedAmount.toFixed(2))}`);
console.log(chalk_1.default.blueBright(convertedAmount));
console.log(chalk_1.default.cyan("\n\t **** THANKS FOR USING THE CURRENCY CONVERTOR ****\n"));
