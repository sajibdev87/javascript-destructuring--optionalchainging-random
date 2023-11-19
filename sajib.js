


// const numvers=[32,53,645,34,];
// var index=numvers.indexOf(34);
// numvers.push(34); 
// numvers.pop();
// numvers.shift(53);
// numvers.unshift(53);
// // numvers =32;
// console.log(numvers);


// let student = [43,43,32,45,38];
// let frist =student[2];

// console.log(frist);


//array disturing 

let [frist,secound,tred] =[65,87,89,87,6];
console.log(frist,secound,tred);

// Object disturing

let myDetails ={
          name:'sajib',
          addrees:'b-bariha',
          age:23,
          phone:764566,

           father:{
                    name:'shopon',
                    baba:'honest',
                    abbu:'good person',
                    parent:'maje maje boka de',
          others:{
                    myFriend:'mafuz',
                    myDrem:'programmer',


          }
                    
           }
           
           }

let {myDrem}=myDetails.father.others;
console.log(myDrem);

// let myDrem =myDetails.father.others.myDrem;
// console.log(myDrem);

// optional chaining

let abbu =myDetails.fathe?.abbu;
console.log(abbu);

// spread operator

var numvers=[43,3,34,24];
console.log(...numvers);

let result  =[42,53,75,7];
console.log(Math.max(...result));

let result1  =[42,53,75,7];
console.log(Math.min(...result));

// random

let numvers =[43,32,13,12];
console.log(Math.random()*6);

let numvers =[43,32,13,12];
console.log(Math.ceil(Math.random()*6));

// Array er modhue Object

const products =[
          {name:'shart',price:500,quantity:55},
          {name:'T-shart',price:600,quantity:5},
          {name:'pant',price:100,quantity:15},

]
for(const product of products){
          console.log(product.name);
}
