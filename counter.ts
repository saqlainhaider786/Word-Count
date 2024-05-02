import input from './Data.js'
import ch from 'chalk';

const countWord=()=>{
    console.log(ch.cyan("Your Entered text is : \n",ch.italic(`"${input.data}"`)));
    let onlyWords=input.data.replaceAll(" ","");
    console.log(ch.bold.green(`Total Words = ${onlyWords.length}`));
}
export default countWord;