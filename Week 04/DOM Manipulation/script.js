
const addBtnFunction = (id, task, complete = false) => {
    const li = document.createElement('li');
    const btns = document.createElement('div');
    const tasks = document.createElement('div');
    const donebtn = document.createElement('button');
    const deletebtn = document.createElement('button');

    tasks.classList.add("taskslist")
    tasks.id = id;

    li.classList.add("task");
    li.innerText = (typeof task === 'object') ? task.value : task;

    if (complete) {
        li.style.textDecoration = "line-through";
    }

    donebtn.classList.add("btn");
    donebtn.innerText = "👍";

    deletebtn.classList.add("btn");
    deletebtn.innerText = "✌"

    if (task.value !== '') {
        btns.appendChild(donebtn);
        btns.appendChild(deletebtn);
        tasks.appendChild(li);
        tasks.appendChild(btns);
        document.querySelector("#tasks").style.display = "block";
    }

    donebtn.onclick = () => {
        li.style.textDecoration = "line-through";

        const storedTask = JSON.parse(localStorage.getItem("tasks")) || [];
        const updateTask = storedTask.map(task=>{
            if(task.id == id){
                task.complete = true;
            }
            return task;
        })
        localStorage.setItem("tasks", JSON.stringify(updateTask));
    }

    deletebtn.onclick = (e) => {
        e.target.parentElement.parentElement.remove();
        const taskId = tasks.id;
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const updatedTasks = storedTasks.filter(task => task.id != taskId);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }

    return tasks;
}

const todolist = (id, task, complete) => {
    const taskList = document.getElementById("task-list");
    const taskExist = document.getElementById(id);

    if (taskExist) return;

    const item = addBtnFunction(id, task, complete)
    taskList.appendChild(item);
}

document.addEventListener("DOMContentLoaded", () => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    storedTasks.forEach(function (tasks) {
        todolist(tasks.id, tasks.task, tasks.complete);
    });
})

document.getElementById("add-btn").addEventListener("click", () => {
    const todo = document.getElementById("task");
    const taskId = new Date().getTime(); // Unique key for each task

    todolist(taskId, todo, false);

    const storedTask = JSON.parse(localStorage.getItem("tasks")) || [];

    storedTask.push({ id: taskId, task: todo.value,complete: false });
    localStorage.setItem("tasks", JSON.stringify(storedTask));

});