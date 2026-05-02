// assign input tag to the inputValue;
let inputValue = document.getElementById("text_input");
// assign ul tag to the display;
let display = document.getElementById("list-container");

// add function 
function add(){
let list = document.createElement("li"); // create li element
let text_list = document.createElement("span");
let deletebutn = document.createElement("span"); // create span element
let markbutn = document.createElement("span");

deletebutn.className="deletebutn";//add class to the deletebutn
deletebutn.textContent = "X" // text content of deletebutn

markbutn.className = "mark";
markbutn.textContent = "✔";

 
text_list.textContent = inputValue.value;
//add text to the list element
text_list.className = "task-text";
list.appendChild(text_list);
list.appendChild(markbutn);
list.appendChild(deletebutn);// add deletebutn with list element
display.appendChild(list);//add list element to the display .
inputValue.value = ""; // reset input value after every click of add butn.

deletebutn.addEventListener("click",()=>{
    display.removeChild(list);
})
markbutn.addEventListener("click",()=>{
    text_list.classList.toggle("strike");
    markbutn.classList.toggle("complete");
})
}
function Completed_task() {
  // get all list items
  let tasks = document.querySelectorAll("#list-container li");

  // clear the display first
  display.innerHTML = "";

  tasks.forEach(task => {
    let textSpan = task.querySelector("span.task-text");
    if (textSpan.classList.contains("strike")) {
      // append only completed tasks back to display
      display.appendChild(task.cloneNode(true));
    }
  });
}

