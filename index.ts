#! /usr/bin/env node
import inquirer from "inquirer"
// Printing Welcome message
console.log ("\n\tWelcome to Simple calculator \'coding with AbDRauf37'\n")

const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstnumber" },
  { message: "Enter second number", type: "number", name: "secondnumber" },
  {
    message: "Select one of the operator to perform other operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);
// conditional statement
if (answer.operator==="Addition") {console.log (answer.firstnumber+answer.secondnumber)}
else if (answer.operator==="Subtraction") {console.log (answer.firstnumber-answer.secondnumber)}
else if (answer.operator==="Multiplication") {console.log (answer.firstnumber*answer.secondnumber)}
else if (answer.operator==="Division") {console.log (answer.firstnumber/answer.secondnumber)}
else {console.log("Please select valid operator")}
