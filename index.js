//PREDEFINED MODULES (fs,os)

// console.log("This is my first node js program")
// const data=require("fs")
// data.writeFileSync("abc.txt","hello how r u")
// const readData=data.readFileSync("abc.txt","utf-8")
// console.log(readData)
// const data=require("os")
// console.log(data.platform())
function sum(a,b)
{
    return a+b
}
function sub(a,b)
{
    return a-b
}
 
module.exports={
    sum,sub
}