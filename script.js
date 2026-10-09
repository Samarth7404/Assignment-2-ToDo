 // =========================================
// FSD LAB ASSIGNMENT 02
// DOM BASED TO-DO LIST
// =========================================


function addTask() {

    // Get input value
    let taskInput = document.getElementById("taskInput");

    let taskText = taskInput.value.trim();


    // Check if input is empty
    if (taskText === "") {

        alert("Please enter a task!");

        return;
    }


    // Get task list
    let taskList = document.getElementById("taskList");


    // Create new list item
    let li = document.createElement("li");

    li.className = "task-item";


    // Create checkbox
    let checkbox = document.createElement("input");

    checkbox.type = "checkbox";

    checkbox.className = "task-checkbox";


    // Create task text
    let span = document.createElement("span");

    span.className = "task-text";

    span.innerText = taskText;


    // Create delete button
    let deleteButton = document.createElement("button");

    deleteButton.className = "delete-btn";

    deleteButton.innerText = "Delete";


    // Mark task as completed
    checkbox.addEventListener("change", function() {

        li.classList.toggle("completed");

        updateTaskCount();

    });


    // Delete task
    deleteButton.addEventListener("click", function() {

        li.remove();

        updateTaskCount();

        showEmptyMessage();

    });


    // Add elements to list item
    li.appendChild(checkbox);

    li.appendChild(span);

    li.appendChild(deleteButton);


    // Add list item to task list
    taskList.appendChild(li);


    // Clear input
    taskInput.value = "";


    // Update task count
    updateTaskCount();

    showEmptyMessage();
}


// =========================================
// UPDATE TASK COUNT
// =========================================

function updateTaskCount() {

    let tasks = document.querySelectorAll(".task-item");

    let taskCount = document.getElementById("taskCount");

    taskCount.innerText =
        tasks.length + (tasks.length === 1 ? " Task" : " Tasks");
}


// =========================================
// SHOW / HIDE EMPTY MESSAGE
// =========================================

function showEmptyMessage() {

    let tasks = document.querySelectorAll(".task-item");

    let emptyMessage = document.getElementById("emptyMessage");


    if (tasks.length === 0) {

        emptyMessage.style.display = "block";

    } else {

        emptyMessage.style.display = "none";
    }
}


// =========================================
// PRESS ENTER TO ADD TASK
// =========================================

document.getElementById("taskInput").addEventListener("keypress", function(event) {

    if (event.key === "Enter") {

        addTask();
    }

});