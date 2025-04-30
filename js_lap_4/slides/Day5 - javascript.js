// let div = document.getElementsByClassName("Grey fontBlue");
// console.log(div);
// let names = document.getElementsByName("form");
// let button = document.getElementById("btn");
// let span = document.getElementById("span");
// let div1 = document.getElementById("div");
// let div2 = document.getElementById("div2");
// let div3 = document.getElementById("div3"); 
// let form = document.forms[0];
// create Element from javascript
// document.createElement("td")
// <element>.appendChild
// let table = document.getElementsByTagName("table")[0];
// function addToTable() {
//   if (isNaN(names[1].value)) {
//     span.style.display = "inline";
//     setTimeout(() => {
//       span.style.display = "none";
//     }, 3000);
//     return;
//   }
//   let tr = document.createElement("tr");
//   for (let i = 0; i < names.length; i++) {
//     let td = document.createElement("td");
//     td.innerText = names[i].value;
//     tr.appendChild(td);
//   }
//   table.tBodies[0].appendChild(tr);
// }
// ----------------------
// focus - blur
// names[0].onfocus = () => {
//   console.log("focused");
// };
// names[0].onblur = function () {
//   console.log("blured");
// };
// mouse Events
// names[0].onmouseenter = () => {
//   console.log("inside txt");
// };
// names[0].onclick = () => {};
// names[0].onmousemove = () => {
//   console.log("mouse moving... ");
// };
// names[0].onmouseup = () => {
//   console.log("mouse up");
// };
// names[0].onmouseout = () => {
//   console.log("mouse out");
// };
// onchange
// names[0].onchange = () => {
//   console.log(names[0].value);
// };
// oninput
// names[0].oninput = () => {
//   console.log(names[0].value);
// };
// keyboard events
// names[0].onkeydown = () => {
//   console.log(names[0].value);
// };
// names[0].onkeyup = () => {
//   console.log("key up");
// };
// names[0].onclick = (e) => {
//   console.log(e);
//   console.log(this);

//   //   console.log(e.target.value);
//   //   console.log(e.target.parentElement);
// };
// names[0].onclick = function (e) {
//   console.log(e);
//   console.log(this.value);

//   //   console.log(e.target.value);
//   //   console.log(e.target.parentElement);
// };
// div.onclick = function (e) {
//   //   console.log(e.target);
//   //   console.log(this);
//   console.log("div 1");
// };
// div2.onclick = function (e) {
//   console.log("div 2");
//   //   e.stopPropagation();
//   e.cancelBubble = true;
// };

// div3.onclick = function (e) {
//   console.log("div 3");
//   //   e.stopPropagation();
//   e.cancelBubble = true;
// };

// function div33(e) {
//   console.log("div 3");

//   e.cancelBubble = true;
//   console.log(e);
// }
// form.onsubmit = (e) => {
//   if (isNaN(names[0].value) || names[0].value.length == 0) e.preventDefault();
// };
// names[0].onkeydown = (e) => {
//   if (!isNaN(e.key)) e.preventDefault();
// };
// addEventListener
// div3.onclick = () => {
//   console.log("from div 3 function 1");
// };
// div3.onclick = () => {
//   console.log("from div 3 function 2");
// };
// function fireFun() {
//   console.log("from div 3 function 2");
// }
// div3.addEventListener("click", () => {
//   console.log("from div 3 function 1");
// });
// button.onclick = (e) => {
//   console.log(e);
// };
// form.onsubmit = (e) => {
//   e.preventDefault();
// };
// div3.addEventListener("click", fireFun);
// div3.removeEventListener("click", fireFun);

// let leftBtn = document.getElementById("leftBtn");
// let rightBtn = document.getElementById("rightBtn");
// let img = document.images[0];
// let count = 1;
// rightBtn.onclick = rightSlide;

// leftBtn.onclick = () => {
//   count--;
//   if (count < 1) count = 3;
//   img.src = `images/${count}.jpg`;
// };
// function rightSlide() {
//   count++;
//   if (count > 3) count = 1;
//   img.src = `images/${count}.jpg`;
// }
// setInterval(rightSlide, 1500);
