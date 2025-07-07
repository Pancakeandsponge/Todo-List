const taskInput = document.getElementById('taskInput') as HTMLInputElement;
const addTaskBtn = document.getElementById('addTask') as HTMLButtonElement;
const taskContainer = document.getElementById('taskContainer')!;

let id = 0; // move this outside, so it keeps incrementing

const addTask = () => {
  const taskText = taskInput.value.trim();
  if (!taskText) return;

  id++; // increment the task ID

  const newTaskInput = document.createElement('input') as HTMLInputElement;
  newTaskInput.type = 'checkbox';
  newTaskInput.id = `task-${id}`; // unique id for input

  const newTaskLabel = document.createElement('label') as HTMLLabelElement;
  newTaskLabel.htmlFor = newTaskInput.id; // link label to checkbox
  newTaskLabel.innerText = `${id}: ${taskText}`; // add number prefix

  const taskWrapper = document.createElement('div') as HTMLDivElement;
  taskWrapper.append(newTaskLabel, newTaskInput);

  taskContainer.append(taskWrapper);

  taskInput.value = ''; // clear input after adding
};

addTaskBtn.addEventListener('click', addTask);
