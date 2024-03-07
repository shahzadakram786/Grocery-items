let doc = document.getElementById("main-2");
let popup = document.querySelector(".pop")
let input = document.getElementById("input")
let addbutton = document.getElementById("Add-button");
let p = document.getElementById("p")
let iR = document.getElementById("iR")
let iG = document.getElementById("iG")
let line = document.getElementById("line")



   let value = input.value;

addbutton.addEventListener('click', ()=>{

  
    setTimeout(function(){
        popup.style.display = 'none';
    },2000 )

    if(input.value == ""){
        console.log("Please provide a value");
        iR.style.display = 'block';
        iG.style.display = 'none';
        line.style.background = 'red';
        p.innerText = "Please provide a value"
        popup.style.display = 'block';
        

        
    }
    else if(!input.value == ""){
        console.log("provided a value", input.value);
        popup.style.display = 'block';
        p.innerText = "Item Added To The List"
        line.style.background = '#4FBD11';

        iR.style.display = 'none';
        iG.style.display = 'block';

      doc.innerHTML += `
      <div class="inner">
      <input type="checkbox" id="checkB" onclick="myFunction(this)">
      <h3 clas="text-h">${input.value}</h3>
      <button class="delete" onclick="delete()">Delete</button>
      </div>
      `

    }
    input.value = "";
let inph3 = document.querySelector(".text-h")
myFunction(inph3)
})

function myFunction(e){ 
let inputCheck = document.getElementById("checkB");
let  checkbox = this.target;

    if(checkbox.checked){
        console.log("checked22");
        inph3.style.textDecoration ="line-through";
        // inph3.style.textDecoration ="line-through";
      
    }
    else{
        console.log("unchecked")
        // input.value.innerText += `<del>${input.value}</del>`;
    }
// myFunction(checked).
}
