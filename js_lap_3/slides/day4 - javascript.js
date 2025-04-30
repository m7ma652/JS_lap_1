// object
// let obj = {
//   first_name: "hamada",
// };
// obj.first_name = "mahmoud";
// obj["age"] = 88;
// ----
// myFun.id = 10;
// function myFun() {
//   console.log("hello world");
//   console.log(this);
// }
// let arr = [88];
// arr.id = 500;
// for (elem of arr) console.log(elem);
// arr.forEach((elem) => console.log(elem));
// BOM -> Browser object model
// window

// console.log("hello");
// let myWindow = open("https://www.google.com", "_blank", "width=500,height=500");
// myWindow.close();
// alert("hello");
// console.log("hello world");
// let check = confirm("Are you sure you want to delete user?");
// console.log(check);
// let value = prompt("Please Enter You Name...", "Ex:- Mahmoud");
// console.log(value);
// timers
// setIntervel -- setTimeOut

// let timerId = setInterval(() => {
//   console.log("from interval");
// }, 2000);
// let timerIdd = setTimeout(() => {
//   clearInterval(timerId);
// }, 4000);
// console.log("hello");
// console.log();
// setTimeout(() => {
//   location.replace("https://www.google.com");
// }, 2000);
// ?name=hamada&age=88

//let str = location.search;
//let search = str.substring(1);
// let arr = search.split("&"); // [ name=hamada , age=88 ]
// let obj = {};
// arr.forEach((elem) => {
//   let keyValue = elem.split("="); // [name , hamada]
//   obj[keyValue[0]] = keyValue[1];
// });
// let result = JSON.parse(arr);
// console.log(result);
// let obj = { name: "hamada" };
// localStorage.setItem("age", 50);
// localStorage.clear();
// DOM -> document object model
// node element
let div = document.getElementById("div");
let txt1 = document.getElementById("txt1");
let li = document.getElementsByTagName("li");
let div1 = document.getElementsByClassName("li");
let div3 = document.querySelector("div li");
let div4 = document.querySelectorAll("div li");
let button = document.getElementById("button");
let p = document.getElementsByTagName("p")[0];

//console.log(div);
//document.writeln("hello world");
// document.bgColor = "red"
// div.style.display = "none";
function clickMe() {
  console.log(txt1.value);

  //   if (div.style.backgroundColor == "") div.style.backgroundColor = "red";
  //   else div.style.backgroundColor = "";
  //   if (div.classList.contains("class")) div.classList.remove("class");
  //   else div.classList.add("class");
  //   div.classList.toggle("class");
}
div.setAttribute("id", "divv");
