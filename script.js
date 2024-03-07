let doc = document.getElementById("main-2");
let popup = document.querySelector(".pop")
let input = document.getElementById("input")
let addbutton = document.getElementById("Add-button");
let p = document.getElementById("p")
let iR = document.getElementById("iR")
let iG = document.getElementById("iG")
let line = document.getElementById("line")
let inph3 = document.getElementById("text-h")


   let value = input.value;

addbutton.addEventListener('click', ()=>{

  
    setTimeout(function(){
        popup.style.display = 'none';
    },2000 )

    if(input.value == ""){
        console.log("Please provide a value");
        iR.style.display = 'block';
        iG.style.display = 'none';
        p.innerText = "Please provide a value"
        popup.style.display = 'block';
        

        
    }
    else if(!input.value == ""){
        console.log("provided a value", input.value);
        popup.style.display = 'block';
        iR.style.display = 'none';
        iG.style.display = 'block';

      doc.innerHTML += `
      <div class="inner">
      <input type="checkbox" id="checkB" onclick="myFunction()">
      <h3 id="text-h">${input.value}</h3>
      <button class="delete" onclick="delete()">Delete</button>
      </div>
      `

    }

})

function myFunction(){ 
let inputCheck = document.getElementById("checkB");

      console.log("checked")
    if(inputCheck.checked == true){
        console.log("checked22")
      
    }
    else{
        // console.log("unchecked", value)
        // input.value.innerText += `<del>${input.value}</del>`;
    }
// myFunction(checked).
}
