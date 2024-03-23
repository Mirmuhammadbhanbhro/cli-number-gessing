#! /usr/bin/env node
import inquirer from "inquirer";
//computer willl generate number
//user input the gessing number
//compare user inputt with computer generate number
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([

    {

         name:"userGuessNumber",
         type:"number",
         message:"please guess number 1 to 10:",
    },
]);
if(answer.userGuessNumber === randomNumber){
       console.log("congrates you gess right number");
}else{
     console.log("you gess wrong number");
}