#! /usr/bin/env node
import inquirer from "inquirer";
// import Choices from "inquirer/lib/objects/choices.js";
let myBalance = 50000; //Dollar $  
let myPin = 112233;
let pinAnswer = await inquirer.prompt([
    {
        message: "Enter Your Pin Number.?",
        name: "pin",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct Pin Code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "Operation",
            type: "list",
            Message: "Please Select Option",
            choices: ["Withdraw", "Check Balance"],
        }
    ]);
    console.log(operationAns);
    if (operationAns.Operation === "Withdraw") {
        let amountAns = await inquirer.prompt([{
                name: "amount",
                type: "number",
                message: "Enter Your Amount",
            }]);
        if (amountAns.amount <= 50000 && amountAns.amount >= 500) {
            myBalance -= amountAns.amount;
            console.log(`Your Remaining Balance is ${myBalance}`);
        }
        else {
            console.log("Invalid Amount");
        }
    }
    else if (operationAns.Operation === "Check Balance") {
        console.log(`Your Balanced is : ${myBalance}`);
    }
}
else {
    console.log("Incorrect Your Pin Code!");
}
