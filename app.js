let count = 0;
let hold = "";
const result = document.querySelector(".result h2");




const li = document.querySelectorAll(".option");
const main = document.querySelector(".main")
// const button = document.querySelector("btn");
const selectedOption = document.querySelector(".selected-option");

selectedOption.addEventListener("click", ()=> {
    selectedOption.classList.toggle("selectionClicked");

})

main.addEventListener("mouseenter", ()=> {

    for (var i=0; i<li.length;i++){
        li[i].classList.remove("opa-out");
    
    }
   
    selectedOption.classList.toggle("selectionClicked")
    for (var i=0; i<li.length;i++){
        li[i].classList.add("show");
        
        // console.log(li[i])
    }
})

main.addEventListener("mouseleave", ()=> {
    selectedOption.classList.toggle("selectionClicked");
    for (var i=0; i<li.length;i++){
        li[i].classList.remove("opa-out");
        result.innerHTML = "";
    
    }

    
    for (var i=0; i<li.length;i++){
        li[i].classList.remove("show");
        
        // console.log(li[i])
    }
})



li.forEach((option)=>{

    
    option.addEventListener("click", (event)=> {

        selectedOption.innerText = event.target.innerText;
        selectedOption.classList.add("selectionClicked");
        option.addEventListener("mouseleave", ()=> {
            selectedOption.classList.remove("selectionClicked");
        })

        cc(option.innerText)
        // console.log(option.innerText);
    })
})



function cc(card) {
    // Only change code below this line
   switch(card) {
    case "Option 1":
    case "Option 2":
    case "Option 3":
    case "Option 4":
    case "Option 5":
    case "Option 6":
      count += 1;
      if (count > 0) {
        result.style.color = "white"
        hold = "Available";  
     }
      break;
      
    case "Option 7":
    case "Option 8":
    case "Option 9":
      count = 0;
      if (count >= 0) {
        result.style.color = "yellow"
        hold = "Limited Stocks";
      }   
      break;
  
    case "Option 10":
    case "Option J":
    case "Option Q":
    case "Option K":
    case "Option A":
      count-1;
      if (count >= 0) {
        result.style.color = "red"
        hold = "Sold Out";
      }
     
      break;
  
    default:
    break;
   }
  
   result.innerHTML = hold
  
   console.log(count, hold);
    return count + " " + result;
   
  }
  
 