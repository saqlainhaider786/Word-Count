import inq from 'inquirer';

let input=await inq.prompt([{
    name:"data",
    type:"input",
    message:"Enter text to count words in the text : \n"
}]);

console.log(`Your Entered text is : \n${input.data}`);

let onlyWords=input.data.replaceAll(" ","");

console.log(`Total Words = ${onlyWords.length}`);