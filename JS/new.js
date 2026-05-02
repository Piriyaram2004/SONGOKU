// // // const taskcontainer = document.getElementById("tasklist");
// // // const taskInput = document.getElementById("taskInput");
// // // function add(){
// // //     const user =[{status :"Pending" , name : taskInput.value}];
// // //     taskcontainer.innerHTML =""
// // //     user.forEach(u=>{
// // // taskcontainer.innerHTML += `<li>${u.name}</li>`
// // //     })
// // // taskInput.value = "";


// // // }


// // const taskcontainer = document.getElementById("tasklist");
// // const taskInput = document.getElementById("taskInput");

// // function add() {
// //     const taskName = taskInput.value.trim();
// //     if (taskName === "") return; // prevent empty tasks

// //     const user = { status: "Pending", name: taskName };

// //     // create list item
// //     const li = document.createElement("li");
// //     li.textContent = user.name;

// //     taskcontainer.appendChild(li); // append instead of replacing

// //     taskInput.value = ""; // clear input
// // }
// const taskcontainer = document.getElementById("tasklist");
// const taskInput = document.getElementById("taskInput");

// function add() {
//     const taskName = taskInput.value.trim();
//     if (taskName === "") return; // prevent empty tasks

//     const user = { status: "Pending", name: taskName };

//     // create list item
//     const li = document.createElement("li");
//     li.style.display = "flex"; // keep items in a row
//     li.style.alignItems = "center";
//     li.style.justifyContent = "space-between";

//     // task text
//     const span = document.createElement("span");
//     span.textContent = user.name;

//     // completed button
//     const completeBtn = document.createElement("button");
//     completeBtn.textContent = "✔";
//     completeBtn.style.marginLeft = "10px";
//     completeBtn.addEventListener("click", () => {
//         span.classList.toggle("strike"); // toggle strike-through
//         user.status = user.status === "Pending" ? "Completed" : "Pending";
//     });

//     // delete button
//     const deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "X";
//     deleteBtn.style.marginLeft = "10px";
//     deleteBtn.addEventListener("click", () => {
//         taskcontainer.removeChild(li);
//     });

//     // append all in order
//     li.appendChild(span);
//     li.appendChild(completeBtn);
//     li.appendChild(deleteBtn);

//     taskcontainer.appendChild(li);

//     taskInput.value = ""; // clear input
// }
const taskcontainer = document.getElementById("tasklist");
const taskInput = document.getElementById("taskInput");

function add() {
    const taskName = taskInput.value.trim();
    if (taskName === "") return; // prevent empty tasks

    const user = { status: "Pending", name: taskName };

    // create list item
    const li = document.createElement("li");
    li.style.display = "flex"; 
    li.style.alignItems = "center";
    li.style.justifyContent = "space-between";

    // task text
    const span = document.createElement("span");
    span.textContent = user.name;

    // button column container
    const btnContainer = document.createElement("div");
    btnContainer.style.display = "flex";
    btnContainer.style.flexDirection = "column"; // stack vertically
    btnContainer.style.gap = "5px"; // spacing between buttons

    // completed button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✔";
    completeBtn.addEventListener("click", () => {
        span.classList.toggle("strike");
        user.status = user.status === "Pending" ? "Completed" : "Pending";
    });

    // delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener("click", () => {
        taskcontainer.removeChild(li);
    });

    // put buttons inside column container
    btnContainer.appendChild(completeBtn);
    btnContainer.appendChild(deleteBtn);

    // append text + button column
    li.appendChild(span);
    li.appendChild(btnContainer);

    taskcontainer.appendChild(li);

    taskInput.value = ""; // clear input
}
