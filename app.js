var activities = [];

var taskInput = document.getElementById("input");

var taskList = document.getElementById("todolist");

document.getElementById("button").onclick = addTask;

function addTask() {
  activities.push(taskInput.value);
  console.log(activities);
  taskInput.value = "";
  displayTasks();
}

function displayTasks() {
  taskList.innerHTML = "";

  activities.forEach(function (task, index) {
    taskList.innerHTML +=
      "<li>" +
      task +
      "<a onclick='editTask(" +
      index +
      ")'>Edit</a>" +
      "<a onclick='removeTask(" +
      index +
      ")'>&times | </a></li>";
  });
}

function removeTask(index) {
  activities.splice(index, 1);
  displayTasks();
}

function editTask(index) {
  var newTask = prompt("Please insert your new value");
  activities.splice(index, 1, newTask);
  displayTasks();
}
