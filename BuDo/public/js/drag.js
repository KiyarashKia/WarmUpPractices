let draggedItem = null;
let offsetX = 0;
let offsetY = 0;

document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.getElementById('taskList');

    // Start dragging
    taskList.addEventListener('mousedown', (e) => {
        if (e.target.classList.contains('list-group-item')) {
            draggedItem = e.target;

            // Calculate the offset (cursor position relative to the item's top-left corner)
            const rect = draggedItem.getBoundingClientRect();
            offsetX = e.clientX - rect.left;
            offsetY = e.clientY - rect.top;

            // Make the dragged item absolute for movement
            draggedItem.style.position = 'absolute';
            draggedItem.style.zIndex = 1000;
        }
    });

    // Handle movement
    document.addEventListener('mousemove', (e) => {
        if (draggedItem) {
            // Move the item with the cursor
            draggedItem.style.left = `${e.clientX - offsetX}px`;
            draggedItem.style.top = `${e.clientY - offsetY}px`;
        }
    });

    // Stop dragging
    document.addEventListener('mouseup', (e) => {
        if (draggedItem) {
            const screenWidth = window.innerWidth;

            // Check if dropped on the left or right
            if (e.clientX > screenWidth * 0.8) {
                // Remove if dropped on the right
                draggedItem.remove();
                alert('Task removed!');
            } else if (e.clientX < screenWidth * 0.2) {
                // Edit if dropped on the left
                const newTaskValue = prompt('Edit task:', draggedItem.textContent);
                if (newTaskValue !== null && newTaskValue.trim() !== '') {
                    draggedItem.textContent = newTaskValue.trim();
                }
            }

            // Reset the item styles
            draggedItem.style.position = '';
            draggedItem.style.zIndex = '';
            draggedItem = null;
        }
    });
});
