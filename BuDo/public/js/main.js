// Select DOM elements
const taskForm = document.querySelector('#taskForm');
const taskInput = document.querySelector('#taskInput');
const taskList = document.querySelector('#taskList');

// Handle form submission
taskForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent page reload

    // Get the task value
    const taskValue = taskInput.value.trim();
    if (!taskValue) return; // Do nothing if input is empty

    // Create a new task element
    const taskItem = document.createElement('li');
    taskItem.className = 'list-group-item';
    taskItem.textContent = taskValue;

    // Add task to the list
    taskList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = '';
});