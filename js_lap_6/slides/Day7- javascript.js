// import funHamada, { Shape } from "./javascript2.js";

// closures
// function m   yFun(a, b) {
//   let count = 0;

//   return () => {
//     console.log(a, b, count);
//   };
// }
// let result = myFun(8, 9);
// debugger;
// result();
// function counter() {
//   let count = 0;
//   return {
//     increment: () => ++count,
//     getCount: () => count,
//   };
// }

// let result = counter();
// console.log(result.increment());
// console.log(result.increment());

// console.log(result.getCount());

// IIFE
// console.log("hamada");

// (function () {
//   let tokenDecode = {
//     id: 50,
//     fullName: "hamada hamada",
//     email: "mahmoud@gmail.com",
//   };
//   console.log(tokenDecode.email);
// })();
// console.log("hamada2");

// funHamada();
// class Rectangle extends Shape {
//   constructor() {
//     super();
//   }
// }
// let rectangle = new Rectangle();
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let arr = [5, 9];
      //   resolve(arr);
      reject("Something went wrong");
    }, 4000);
  });
}

(async function returnData() {
  try {
    let result = await getData();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
})();
// console.log("hamada");

// function getData2(arr) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       //   resolve(arr[0]);
//       reject("Something went wrong");
//     }, 2000);
//   });
// }
// getData()
//   .then((data) => {
//     return getData2(data);
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// fetch("https://dummyjson.com/users")
//   .then((data) => {
//     return data.json();
//   })
//   .then((jsonData) => {
//     // console.log(jsonData);
//     let divLarge = document.createElement("div");

//     jsonData.users.forEach((user) => {
//       let div = document.createElement("div");
//       let img = document.createElement("img");
//       img.src = user.image;
//       let h3 = document.createElement("h3");
//       h3.innerText = `${user.firstName} ${user.lastName}`;
//       div.style.display = "flex";
//       div.append(img, h3);
//       divLarge.style.display = "flex";
//       divLarge.appendChild(div);
//     });
//     document.body.appendChild(divLarge);
//   })
//   .catch();
// (async function responseData() {
//   try {
//     let result = await fetch("https://dummyjson.com/users");
//     let data = await result.json();
//     console.log(data);
//   } catch (error) {}
// })();

// console.log("hamada");
// console.log(new Promise((resolve) => resolve("Hello from promise")));
// fetch("https://dummyjson.com/users").then((data) => {
//   console.log(data);
// });

// setTimeout(() => {
//   console.log("hello from settimeOut");
// }, 0);
// console.log("hello from global");
// let fName = "hamada";
// console.log(fName);
// Promise.resolve().then(() => console.log("hello from promise"));
