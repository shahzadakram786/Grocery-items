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
  setTimeout(function () {
    popup.style.display = "none";
  }, 2000);

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
      <input type="checkbox" id="checkB" class="checkB" >
      <h3 class="text-h">${input.value} this is it</h3>
      <button class="delete" >Delete</button>
      </div>
      `;
  }

//   input.value = "";
});
let inputChecks = document.querySelector(".checkB");

let inph3 = document.querySelector(".text-h ");

inputChecks.forEach(inputCheck => {

inputCheck.addEventListener("click", () => {
  console.log("inpuy done top done working ");
  inph3.style.textDecoration = inputCheck.checked ? "line-through" : "none";
});


    
});

// function myFunction(){
// console.log("inpuy done ")

// inph3.style.textDecoration = inputCheck.checked ? 'line-through' : 'none';
// console.log("inpuy donew2 ")

// // myFunction(checked).
// }
