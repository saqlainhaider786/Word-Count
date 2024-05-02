import inq from 'inquirer';
import ch from 'chalk';

let input=await inq.prompt([{
    name:"data",
    type:"input",
    message:ch.yellow("Enter text to count words in the text : \n")
}]);
console.clear()
export default input