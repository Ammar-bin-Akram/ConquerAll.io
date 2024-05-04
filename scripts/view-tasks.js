let tasks;

const tasksElement = document.querySelector('.js-all-tasks');

function deleteTask(index){
    tasks.splice(index, 1);
    localStorage.setItem('tasks',JSON.stringify(tasks));
    location.reload();
    console.log('Task deleted');
}

function rendertasks(){
    let darkMode = JSON.parse(localStorage.getItem('darkMode'));
    console.log(darkMode);
    let tasksText = '';
    tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    if(tasks.length === 0){
        tasksText = `<div>Nothing to show here. Add tasks to get started.</div>`;
    }
    else{
        for(let i = 0; i < tasks.length; i++){
            const task  = tasks[i];
            const {taskId, taskName, taskDescription, taskc, taskDeadline, taskStatus} = task;
            const html = `<tr class="tasks-container mb-2"> <td >${taskId}</td> <td>${taskName}</td> <td>${taskDescription}</td> <td>${taskc}</td> <td >${taskDeadline}</td> <td>${taskStatus}</td> <td><button onClick="deleteTask(${i})" class="delete-button btn btn-danger mx-2"><i class="fa-solid fa-trash"></i></button> <button class="update-button btn btn-primary" onClick="updateTask(${i})"><i class="fa-solid fa-check"></i></button></td></tr>`;
            tasksText += html;
        }
        tasksElement.innerHTML = tasksText;;
    }

    if(darkMode === true){
        document.body.classList.add('dark-mode');
        document.querySelector('.tasks-container').style.color = '#fff';
    } else{
        document.body.classList.remove('dark-mode');
        document.querySelector('.tasks-container').style.color = '#000';
    }
}

function hello(){
    console.log('Hello');
}



function updateTask(index) {
    task = tasks[index];
    console.log(task);
    task.taskStatus = 'Completed';
    localStorage.setItem('tasks',JSON.stringify(tasks));
    location.reload();
}

rendertasks();