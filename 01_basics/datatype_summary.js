// primitive data types

// 7:strings,number,boolean,null,undefined,BigInt,Symbol

const scoreValue=100.3

const isLoggoedin=null
let userEmail;//undefined


const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id==anotherId);

const BigNumber=276372677682n//for bigint



// REFERENCE(NON_primitive)

// Array,objects,function
    const num=["1","21","212"]
    let myObj= {
        name:"siddharth",
        age:"20",
    }

const myFunction=function(params) {
    console.log("Hello World");
}


// *****************************************************************

// stack(primitive),heap(non primitive)

let myYoutubeName="siddhRTH"

let anotherYoutubeName=myYoutubeName
anotherYoutubeName="chai"

console.log(myYoutubeName);
console.log(anotherYoutubeName);

let userOne={
    email:"djnswjd@gmail.com",
upi:"sid@ybl"
}
let userTwo=userOne
userTwo.email="sid@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);


