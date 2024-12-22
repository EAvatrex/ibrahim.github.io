// script.js

// Task Management
let tasks = [];
const taskList = document.getElementById('task-list');
const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');
let tasksCompleted = 0;

addTaskButton.addEventListener('click', () => {
  const task = newTaskInput.value.trim();
  if (task) {
    tasks.push({ task, completed: false });
    newTaskInput.value = '';
    renderTasks();
  }
});

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const taskItem = document.createElement('div');
    taskItem.innerHTML = `
      <p>${task.task}</p>
      <button onclick="removeTask(${index})">❌</button>
    `;
    taskList.appendChild(taskItem);
  });
}

function removeTask(index) {
  tasks.splice(index, 1);
  tasksCompleted++;
  document.getElementById('tasks-completed').textContent = tasksCompleted;
  renderTasks();
}

// Timer
let timer;
let isRunning = false;

function parseTime(time) {
  const [minutes, seconds] = time.split(':').map(Number);
  return minutes * 60 + seconds;
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes}:${secs.toString().padStart(2, '0')}`;
}

let timeRemaining = parseTime(document.getElementById('time').textContent);

document.getElementById('time').addEventListener('input', (e) => {
  const newTime = e.target.textContent.trim();
  timeRemaining = parseTime(newTime || '25:00');
});

document.getElementById('start-timer').addEventListener('click', () => {
  if (!isRunning) {
    timer = setInterval(() => {
      if (timeRemaining > 0) {
        timeRemaining--;
        document.getElementById('time').textContent = formatTime(timeRemaining);
      } else {
        clearInterval(timer);
        document.getElementById('timer-sound').play();
        alert('Time’s up!');
        isRunning = false;
      }
    }, 1000);
    isRunning = true;
  }
});

document.getElementById('pause-timer').addEventListener('click', () => {
  clearInterval(timer);
  isRunning = false;
});

document.getElementById('reset-timer').addEventListener('click', () => {
  clearInterval(timer);
  timeRemaining = parseTime(document.getElementById('time').textContent);
  isRunning = false;
});

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});
