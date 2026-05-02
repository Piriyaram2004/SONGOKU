// Load tasks from localStorage or start empty
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function displayTasks(filter = "all") {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    if (filter === "all" || task.status === filter) {
      const li = document.createElement("li");
      li.textContent = task.description;
      if (task.status === "completed") li.classList.add("completed");

      // Toggle button
      const toggleBtn = document.createElement("button");
      toggleBtn.textContent = task.status === "pending" ? "Complete" : "Undo";
      toggleBtn.onclick = () => toggleStatus(index);

      // Delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.onclick = () => deleteTask(index);

      li.appendChild(toggleBtn);
      li.appendChild(deleteBtn);
      list.appendChild(li);
    }
  });
}

function addTask() {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();
  if (text === "") return;

  const task = { description: text, status: "pending" }; // default status
  tasks.push(task);
  saveTasks();
  displayTasks();
  input.value = "";
}

function toggleStatus(index) {
  tasks[index].status = tasks[index].status === "pending" ? "completed" : "pending";
  saveTasks();
  displayTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  displayTasks();
}

function filterTasks(type) {
  displayTasks(type);
}

// Initial load
displayTasks();
