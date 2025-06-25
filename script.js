let tryNow = document.getElementById("try-btn");
let goBack = document.getElementById("goBack-btn");
let modal = document.getElementById("modal");

tryNow.addEventListener("click",() => {
    modal.style.display = "flex";
    modal.style.opacity = 0;
    setTimeout(() => {
        modal.classList.add("slidUpAnimation")
    }, 100);
    setTimeout(() => {
        modal.style.opacity = 1;
    },200)

})
goBack.addEventListener("click", () => {
  modal.style.opacity = 1;

  setTimeout(() => {
    modal.style.opacity = 0;

    setTimeout(() => {
      modal.style.display = "none";
    }, 300);
  }, 0);
});

// To do list page
const taskList = document.getElementById("#taskContainer");
const addbtn = document.getElementById("addtask");

addbtn.addEventListener("click", () => {
    const task = document.getElementById("writeTask").value.trim();
    if (task !== "") {
        const newTask = document.createElement("li");
        newTask.textContent = task;
        taskList.appendChild(newTask); // 🪄 append to UL
        document.getElementById("writeTask").value = ""; // clear input
    }
});

