// ---------- To-do List Logic ----------

// Select the UL inside #taskContainer
const taskList = document.querySelector("#taskContainer ul");
const addBtn = document.getElementById("addtask");
const taskInput = document.getElementById("writeTask");

// Add task on add btn and 'enter' key
addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function (e) {
  if (e.key === 'Enter') {
    addTask();
  }
});

// Load tasks from localStorage on page load
window.onload = function () {
  let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach(task => {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const label = document.createElement("span");
    label.textContent = task;

    li.appendChild(checkbox);
    li.appendChild(label);
    taskList.appendChild(li);
  });
};

// Add task function
function addTask() {
  const task = taskInput.value.trim();

  if (task !== "") {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const label = document.createElement("span");
    label.textContent = task;

    li.appendChild(checkbox);
    li.appendChild(label);
    taskList.appendChild(li);

    // Save to localStorage
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    taskInput.value = ""; // Clear input field
  }
}

// Delete
function updateLocalStorage() {
  const tasks = [];
  const listItems = taskList.getElementsByTagName("li");
  for (let li of listItems) {
    const label = li.querySelector("span").textContent;
    tasks.push(label);
  }
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

let deleteBtn = document.getElementById("delTask");
function deleteTask() {
  const listItems = taskList.getElementsByTagName("li");

  // Because HTMLCollection is live, iterate backwards to safely remove items
  for (let i = listItems.length - 1; i >= 0; i--) {
    const li = listItems[i];
    const checkbox = li.querySelector("input[type='checkbox']");
    if (checkbox && checkbox.checked) {
      taskList.removeChild(li);
    }
  }
  
  // Update localStorage after deletion
  updateLocalStorage();
}

deleteBtn.addEventListener("click",deleteTask);