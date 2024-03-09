let doc = document.getElementById("main-2");
let popup = document.querySelector(".pop");
let input = document.getElementById("input");
let addbutton = document.getElementById("Add-button");
let p = document.getElementById("p");
let iR = document.getElementById("iR");
let iG = document.getElementById("iG");
let line = document.getElementById("line");

let value = input.value;

addbutton.addEventListener("click", () => {
  console.log("workign ouside loop");

  setTimeout(function () {
    popup.style.display = "none";
  }, 3000);

  if (input.value == "") {
    console.log("Please provide a value");
    iR.style.display = "block";
    iG.style.display = "none";
    line.style.background = "red";
    p.innerText = "Please provide a value";
    popup.style.display = "block";
  } else {
    console.log("provided a value", input.value);
    popup.style.display = "block";
    p.innerText = "Item Added To The List";
    line.style.background = "#4FBD11";

    iR.style.display = "none";
    iG.style.display = "block";

    doc.innerHTML += `
      <div class="inner">
      <input type="checkbox" id="checkB" class="checkB" onclick="check()">
      <p id="text-h">${input.value}</p>
      <button class="delete" id="del" onclick="del()">Delete</button>
      </div>
      `;
  }
  input.value = "";
});

function check() {
  let chx = document.getElementById("checkB");
  let text = document.getElementById("text-h");
  console.log(chx.checked);

  chx.checked
    ? (text.style.textDecoration = "line-through")
    : console.log("woking");
}

// alet;
// function del(){
//     let del = document.getElementById("del");

//     console.log("del.checked");

// }
// function del(button) {
//   let div = button.parentElement;
//   div.remove();
// }

// let inner = document.querySelectorAll(".inner")
// for(let i = 0 ; i < inner.length;i++ ){
// console.log("working or not")

// function check(){
//     let chx = document.getElementById("checkB");
//     let text = document.getElementById("text-h");
//     console.log(chx.checked);

//    chx.checked ? text.style.textDecoration = "line-through":text.style.textDecoration = "none";

// }}
