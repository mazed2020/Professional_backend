// const userName=new String("mazedul islam");
// console.log(userName.charAt(5))
// console.log(userName.indexOf('d'));
// console.log(userName.trim());
// console.log(userName.includes('mazed'));
// console.log(userName.concat("is bad boy"));
// console.log(userName.slice(3,4));
// console.log(userName.split(" ",10));

const name="apples";
// let str=name.split("")
// let output=str.filter((value,index,str)=>{
//     return str.indexOf(value)==index;
// })
// console.log(output.join(""));
let output=new Set();
for(let i=0;i<name.length;i++){
    output.add(name[i]);
}