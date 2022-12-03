tasks = localStorage.getItem("tasks");
if (!tasks) {
  tasks = [];
  setTasks(tasks);
} else {
  tasks = JSON.parse(tasks);
}
tasks_div = document.getElementById("tasks");
function buildTasks() {
  for (var i = 1; i < tasks.length; i++) {
    createTask(tasks[i]);
  }
}
buildTasks();

function createTask(current_task) {
  let task = document.createElement("span");
  task.className = "c_task";
  task.textContent = current_task;
  tasks_div.appendChild(task);
  task.setAttribute("onclick", "deleteSelf(this)");
}

submit_task = document.getElementById("add-task");
task_input = document.getElementById("task-input");
submit_task.addEventListener("click", function () {
  tasks.push(task_input.value);
  task = task_input.value;
  createTask(task);
  task_input.value = "";
  submit_task.disabled = true;
  submit_task.value = " ";
  setTasks(tasks);
});
task_input.addEventListener("keypress", function (event) {
  if (this.value !== "") {
    if (event.key === "Enter") {
      event.preventDefault();
      submit_task.click();
    }
  }
});

function success() {
  if (task_input.value === "") {
    submit_task.disabled = true;
    submit_task.value = " ";
  } else {
    submit_task.disabled = false;
    submit_task.value = "+";
  }
}
function setTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function deleteSelf(element) {
  var index = tasks.indexOf(element.textContent);
  if (index !== -1) {
    tasks.splice(index, 1);
  }
  setTasks(tasks);
  element.parentElement.removeChild(element);
}
