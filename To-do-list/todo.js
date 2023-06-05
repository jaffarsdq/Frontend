console.log("welcome to my app")

let todos = [];

let todoDataSection = document.getElementById("todo-data");
let saveButton = document.getElementById("save-todo");
let todoInputBar = document.getElementById("add-todo");
console.log(todoInputBar);
todoInputBar.addEventListener("keyup", function toggleSaveButton() {
    let todotext = todoInputBar.value;
    if(todotext.length == 0) {
        if(saveButton.classList.add("disabled"))return;
    }
    else {
        saveButton.classList.remove("disabled");
    }
})

saveButton.addEventListener("click", function getTextAndAddTodo() {
    let todotext = todoInputBar.value;
    if(todotext.length == 0) return;
    todos.push(todotext);
    addToDo(todotext,todos.length);
    todoInputBar.value = "";
})

function removeTodo (event) {
//    console.log("clicked", event.target.parentElement.parentElement)
//    event.target.parentElement.parentElement.remove();
    
}

function addToDo(todoData,todoCount) {
    console.log("called add to do")
    let rowDiv = document.createElement("div");
    let todoNumber = document.createElement("h6");
    let todoDetail = document.createElement("p");
    let todoStatus = document.createElement("p");
    let todoActions = document.createElement("div");
    let deleteButton = document.createElement("button");
    let finishedButton = document.createElement("button");
    let editButton = document.createElement("button");
    let hr = document.createElement("hr");

    // adding classes
    rowDiv.classList.add("row");
    todoNumber.classList.add("todo-no", "col-1", "m-0", "p-0", "text-center");
    todoDetail.classList.add("todo-detail", "text-muted", "col-11", "col-sm-5");
    todoStatus.classList.add("todo-status", "text-primary","col-12", "col-sm-2", "text-center");
    todoActions.classList.add("todo-actions","col-sm-4","align-items-center")
    deleteButton.classList.add("col-12","col-sm-3","py-1","px-0","mb-1","me-1","btn","btn-danger","shadow", "delete-todo")
    finishedButton.classList.add("col-12","col-sm-4","py-1","px-0","mb-1","me-1","btn","btn-success","shadow","finish-todo")
    editButton.classList.add("col-12","col-sm-3","py-1","px-0","mb-1","me-1","btn","btn-warning","shadow","edit-todo")

    deleteButton.onclick = removeTodo;

    todoNumber.textContent = `${todoCount}.`;
    todoDetail.textContent = todoData;
    todoStatus.textContent = "In progress";
    deleteButton.textContent = "Delete";
    finishedButton.textContent = "Finished";
    editButton.textContent = "Edit";

    todoActions.appendChild(deleteButton);
    todoActions.appendChild(finishedButton);
    todoActions.appendChild(editButton);

    rowDiv.appendChild(todoNumber);
    rowDiv.appendChild(todoDetail);
    rowDiv.appendChild(todoStatus);
    rowDiv.appendChild(todoActions);
    rowDiv.appendChild(hr);
    todoDataSection.appendChild(rowDiv);
}
