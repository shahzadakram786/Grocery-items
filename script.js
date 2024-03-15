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
      <input type="checkbox"class="checkB" onclick="check()">
      <p class="text-h">${input.value}</p>
      <button></button>
      <button class="delete" id="del" onclick="del(this)">Delete</button>
      </div>
      `;
  }
  input.value = "";
});

function check() {
  let chx = document.querySelectorAll(".checkB");
  let text = document.querySelectorAll(".text-h");
  console.log("what is in text: ", text);
  console.log(chx.length);

  chx = Array.from(chx);
  text = Array.from(text);

  for (let i = 0; i < chx.length; i++) {
    chx[i].checked
      ? (text[i].style.textDecoration = "line-through")
      : (text[i].style.textDecoration = "none");
  }
}

// alet;
function del(button) {
  button.parentElement.remove(button);
}

// let del = document.getElementById("del")
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
