let tasks;
let taskc;

const addTaskButton = document.querySelector('.js-add-task-btn');
const taskAddedAlert = document.querySelector('.js-task-added-alert');
let darkMode = JSON.parse(localStorage.getItem('darkMode'));

if(darkMode === true){
    document.body.classList.add('dark-mode');
    document.querySelector('.add-form').classList.add('add-form-dark');
    document.querySelector('.js-task-name-input').classList.add('input-dark');
    document.querySelector('.js-task-description-input').classList.add('input-dark');
    document.querySelector('.js-task-category-input').classList.add('input-dark');
    document.querySelector('.js-task-deadline-input').classList.add('input-dark');
    document.querySelector('.js-add-task-btn').classList.add('view-btn-dark');
    document.querySelector('.view-btn').classList.add('view-btn-dark');
} else{
    document.body.classList.remove('dark-mode');
    document.querySelector('.add-form').classList.remove('add-form-dark');
    document.querySelector('.js-task-name-input').classList.remove('input-dark');
    document.querySelector('.js-task-description-input').classList.remove('input-dark');
    document.querySelector('.js-task-category-input').classList.remove('input-dark');
    document.querySelector('.js-task-deadline-input').classList.remove('input-dark');
    document.querySelector('.js-add-task-btn').classList.remove('view-btn-dark') ;
    document.querySelector('.view-btn').classList.remove('view-btn-dark');
}

function addTasks(tasks){
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

addTaskButton.addEventListener('click', (e) => {
    e.preventDefault();
    tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskId = tasks.length + 1; 
    const taskName = document.querySelector('.js-task-name-input').value;
    const taskDescription = document.querySelector('.js-task-description-input').value;
    const taskCategory = document.querySelector('.js-task-category-input').value;
    if(taskCategory === 1){
        taskc = 'Study';
    } else if(taskCategory === 2){
        taskc = 'Play';
    } else{
        taskc = 'House Chores';
    }
    const taskDeadline = document.querySelector('.js-task-deadline-input').value;
    const taskStatus = document.querySelector('.js-task-status-input').value;
    let task = {
        taskId,
        taskName,
        taskDescription,
        taskc,
        taskDeadline,
        taskStatus
    };
    

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    document.querySelector('.js-task-name-input').value = '';
    document.querySelector('.js-task-description-input').value = '';
    document.querySelector('.js-task-category-input').value = '';
    document.querySelector('.js-task-deadline-input').value = '';

    taskAddedAlert.classList.remove('d-none'); 

  setTimeout(() => {
    taskAddedAlert.classList.add('d-none'); 
  }, 2000); 
});