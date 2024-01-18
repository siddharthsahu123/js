const name="siddharth"
const repoCount=50

console.log(name+repoCount+"value"); //not a good method
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName=new String('siddharth-sahu-sem')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('h'));

const newString=gameName.substring(0,4)//cant give negative value to substring
console.log(newString);
const anotherString=gameName.slice(-8,4)
console.log(anotherString);
const newStringOne="      siddharth     d"
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://hitesh.com/hitesh%20chodhary"
console.log(url.replace('%20','-'));
console.log(url.includes("siddharth"));

console.log(gameName.split("-"));

