const TaskInput = document.getElementById('taskInput');
const AddTaskInputBtn = document.getElementById('addTaskBtn'); 
const TaskList = document.getElementById('taskList'); 

AddTaskInputBtn.addEventListener('click', function() {
    const taskText = TaskInput.value.trim();
    if(taskText !== ""){
        //Creating element of the list
        const li = document.createElement('li');
        li.textContent = taskText;
        //create the delete button
        const DeleteBtn = document.createElement('button');
        DeleteBtn.textContent = ('X');
        DeleteBtn.classList.add('Delete');
        //creating the event
        DeleteBtn.addEventListener('click', function () {
            li.remove();
        });
        //Add the button and element to the list
        li.appendChild(DeleteBtn);
        TaskList.appendChild(li);
        //clean the input
        TaskInput.value = '';

    }
});