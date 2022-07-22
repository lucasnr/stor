const toDoLane = document.querySelector('#to-do-lane');
const inProgressLane = document.querySelector('#in-progress-lane');
const overdueLane = document.querySelector('#overdue-lane');
const doneLane = document.querySelector('#done-lane');

function createTask(lane, task) {
  const element = document.createElement('div');
  element.classList.add('task');
  element.classList.add(`task-${task.type}`);
  element.innerHTML = `
    <h3 class="task-title">${task.title}</h3>
    <p class="task-description">
      ${task.description || 'No description provided'}
    </p>
  `;
  lane.appendChild(element);
}

fetch('http://localhost:3000/tasks')
  .then((response) => response.json())
  .then((tasks) => {
    tasks.toDo.forEach((task) => {
      createTask(toDoLane, task);
    });
    tasks.inProgress.forEach((task) => {
      createTask(inProgressLane, task);
    });
    tasks.overdue.forEach((task) => {
      createTask(overdueLane, task);
    });
    tasks.done.forEach((task) => {
      createTask(doneLane, task);
    });
  });
