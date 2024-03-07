let doc = document.getElementById("main-2");
let input = document.getElementById("input")
let addbutton = document.getElementById("Add-button");
let inputCheck = document.getElementById("checkB")




addbutton.addEventListener('click', ()=>{
    let Value = input.value;

    if(Value === ""){
        console.log("Please provide a value");
    }
    else {
        console.log("provided a value");

      doc.innerHTML += `
      <div class="inner">
      <input type="checkbox" id="checkB" onclick=checked() >
      <h3 id="ih3">${Value}</h3>
      <button class="delete" onclick=delete()>Delete</button>
      </div>
      `

    }

})

function checked(){
    if(inputCheck.checked === true){
        input.value.style.text-decoration-line = "line-through";
        
    }

}