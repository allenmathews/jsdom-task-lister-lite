const taskList = new TaskList()
const newTaskForm = document.getElementById("create-task-form")
const newTaskDescription = document.getElementById("new-task-description")
const newTaskPriority = document.getElementById("new-task-priority")
const sortButton = document.getElementById('sort-tasks')

const taskUl = document.getElementById("tasks");

const renderApp = () => (taskUl.innerHTML = taskList.renderTasks());

newTaskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  taskList.createNewTask(
    newTaskForm['new-task-description'],value),
  newTaskForm['priority'].value,
  newTaskForm['due-date'].value

);
  e.target.reset();
  renderApp();
};

taskUl.addEventListener("click", e => {
  if (e.target.nodeName === "BUTTON") {
    taskList.deleteTast(e.target.dataset.description);
    renderApp();
  }
})

sortButton.addEventListener('change', e => {
  console.log("SORTING THE TASKS")
  taskList.sortTasks(e.target.value)
  renderApp();
})