const taskContainer = document.getElementById("task-Container");
const addBtn = document.getElementById("add-btn");
const task = document.getElementById("task");

// Use onclick() method instead of addEventListener for small functionality purposes

addBtn.onclick = ()=>{
    document.querySelector(".tasks").style.display = "block";

    const li = document.createElement('li');
    const btns = document.createElement('div');
    const tasks = document.createElement('div');
    const donebtn = document.createElement('button');
    const deletebtn = document.createElement('button');

    tasks.classList.add("taskslist")

    li.classList.add("task");
    li.innerText = `${task.value}`;
    
    donebtn.classList.add("btn");
    donebtn.innerText = "👍";

    deletebtn.classList.add("btn");
    deletebtn.innerText = "✌"
    
    if (task.value !== '') {
        btns.appendChild(donebtn);
        btns.appendChild(deletebtn);
        tasks.appendChild(li);
        tasks.appendChild(btns);
        taskContainer.appendChild(tasks)
    }
    task.value = "";

    donebtn.onclick = ()=>{
        li.style.textDecoration = "line-through";
    }

    deletebtn.onclick = (e)=>{
        e.target.parentElement.parentElement.remove();
    }
}