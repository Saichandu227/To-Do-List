var tasks = [];

function addTask() {
    var input = document.getElementById("taskInput").value;
    if (input === "") {
        alert("Please enter a task!");
        return;
    }
    
    var task = {
        name: input,
        completed: false
    };
    
    tasks.push(task);
    renderTasks();
    
    document.getElementById("taskInput").value = "";
}

function renderTasks() {
    var taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    
    tasks.forEach(function(task, index) {
        if (!task.completed || document.getElementById("showCompleted").checked) {
            var listItem = document.createElement("li");
            listItem.textContent = task.name;
            
            if (task.completed) {
                listItem.style.textDecoration = "line-through";
            }
            
            var checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = task.completed;
            checkbox.onchange = function() {
                tasks[index].completed = this.checked;
                renderTasks();
            };
            
            var deleteButton = document.createElement("span");
            deleteButton.textContent = "❌";
            deleteButton.className = "delete";
            deleteButton.onclick = function() {
                tasks.splice(index, 1);
                renderTasks();
            };
            
            listItem.appendChild(checkbox);
            listItem.appendChild(deleteButton);
            taskList.appendChild(listItem);
        }
    });
}

function toggleCompleted() {
    renderTasks();
}