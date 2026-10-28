   //Part 1 --> Array Higher Ordered Method
//1.
/*let number=[1,2,3,4,5,6,7,8,9,10];
number.forEach((num) => {
    console.log(num);
    
});*/

//2.
/*let number=[1,2,3,4,5];
let result=number.map((number)=>{
 return number*5
});
console.log(result);*/

//3.
/*let number=[20,5,7,30,21,80];
let result=number.filter((number)=>{
    return number>20
});
console.log(result);*/

//4.
/*let employee=[{name:"Mathiyazhagan",salary:330000},
    {name:"Sakthi",salary:200000},{name:"Surya",salary:320000}
];
let result = employee.filter((employee)=>{
    return employee.salary>=200000
});
console.log(result);*/

//5.
/*let employee=[{name:"Mathiyazhagan",Salary:200000},{name:"Elango",Salary:300000
},{name:"sanjai",Salary:400000}];
let result = employee.find((employee)=>{
    return employee.Salary>200000
});
console.log(result);*/

//6.
/*let number=[1,2,3,4,5,6,7,8];
let result=number.reduce((sum,num)=>{
    return sum+num
})
console.log(result);*/

//7.
/*let number=[[1, 3, 5, 7, 9]];
let result=number.some((number)=>{
    return number%2===0
});
console.log(result);*/

//8.
/*let number=[1,2,4,5,7];
let result=number.every((number)=>{
    return number > 0;
})
console.log(result);*/

//9.
/*let number=[10,40,50,39];
let result=number.sort((a,b)=>{
    return a-b 
});
console.log(result);*/

//10.
/*(let number =[10,40,20,70,80];
let result=number.sort((a,b)=>{
    return b-a
});
console.log(result);*/

   //String method
//11.
/*let name="Javascript";
console.log(name.charAt(4));*/

//12.
/*let name ="Javascript";
console.log(name.charCodeAt(2));*/

//13.
/*let name = "    JavaScript";
console.log(name.trim());*/

//14.
/*let name="Hello Javascript";
console.log(name.toUpperCase())
console.log(name.toLowerCase())*/

//15.
/*const name = "javascript";
console.log(name.includes("script"));*/


// 16. 
/*const name = "JavaScript";
console.log(name.startsWith("Java"));
console.log(name.endsWith("Script"));*/


//17.
/*const name = "java is easy, java is popular";
console.log(name.replaceAll("java", "python"));*/

//18.
/*const str = "html-css-javascript-react";
const result = str.split("-");
console.log(result);*/

//19.
/*const names = ["Mathi", "Ravi", "Kumar"];
const result = names.join(",");
console.log(result);*/

//20.
/*const str = "JavaScript";
const result = str.slice(0, 4);
console.log(result);*/

//21.
/*const today = new Date();
console.log("Year:", today.getFullYear());
console.log("Month:", today.getMonth() + 1);
console.log("Date:", today.getDate());
console.log("Day:", today.getDay());*/

//22.
/*const months = ["January", "February", "March", "April","May", "June", "July", "August","September", "October", "November", "December"];
const today = new Date();
console.log(months[today.getMonth()]);*/

//23.
/*const now = new Date();
console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds:", now.getSeconds());*/

//24.
/*const date = new Date();
date.setFullYear(2003);
date.setMonth(0);
date.setDate(30);
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());*/

//25.
/*setTimeout(function () {
      console.log("Welcome to JavaScript");
    }, 3000);*/

//26.
/*setInterval(function () {
  console.log("Learning JavaScript");
}, 2000);*/

//27.
/*const intervalId = setInterval(function () {
  console.log("Learning JavaScript");
}, 2000);

setTimeout(function () {
  clearInterval(intervalId);
  console.log("Interval stopped");
}, 8000);*/

//28.
/*function one() {
  console.log("One");
}

function two() {
  console.log("Two");
}

function three() {
  console.log("Three");
}

one();
setTimeout(two, 0);
three();*/

//29.
const login = new Promise((resolve, reject) => {
    resolve("Login successful");
});

login.then((message) => {
    console.log(message);
});









