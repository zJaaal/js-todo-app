
import { tasks } from "../js/state.js";
import { addStylesEventListener } from "../js/style-events.js";
import { createGroupRow, isEmpty} from "../js/utilities.js";

const regex = new RegExp(`\>`);
let currentTask;
const setCurrentTask = (value) => currentTask = value;

const editInput = document.querySelector(".edit-name");

const dismissBtn = document.querySelector(".dismiss");
const resolveBtn = document.querySelector(".resolve");
const createBtn = document.querySelector(".create");

const renderTasks = () =>{

    const checkboxGroup = document.querySelector(".checkbox-group");
    checkboxGroup.innerHTML = "";

    let fragment = document.createDocumentFragment();

    tasks.forEach((task, i) =>{
        fragment.appendChild(createGroupRow(task.toDo, task.isDone, i));
    })
    checkboxGroup.appendChild(fragment);
    addStylesEventListener();
}

const editTask = (e) =>{
    editInput.disabled = false;
    setCurrentTask(+e.target.getAttribute("id"));
    editInput.value = tasks[currentTask].toDo;
} 

const saveEdit = () =>{
    if(isEmpty(editInput.value))
        return;

    if(regex.test(editInput.value)){
        editInput.value = "";
        editInput.disabled = true;
        alert("Please don't use HTML");
        return;
    }
    tasks[currentTask].toDo = editInput.value;

    renderTasks();
    addFormEventListeners();

    alert("Task has been edited!");

    editInput.value = "";
    editInput.disabled = true;
}

const eraseTask = () =>{
    if(currentTask == undefined)
        return;
    tasks.splice(currentTask,1);
    renderTasks();
    addFormEventListeners();
    alert("Task has been remove!");
    editInput.value = "";
    editInput.disabled = true;
}
const createTask = () =>{

    tasks.push({"toDo": "Edit Me!", "isDone": false});
    renderTasks();
    addFormEventListeners();
    alert("Task has been added!");
}


renderTasks();
addFormEventListeners();

resolveBtn.addEventListener("click", saveEdit);
dismissBtn.addEventListener("click", eraseTask);
createBtn.addEventListener("click", createTask);

function addFormEventListeners(){
const editBtns = document.querySelectorAll(".pencil");
    editBtns.forEach((btn) =>{
        console.log(btn);
        btn.addEventListener("click",editTask);
    });
}
