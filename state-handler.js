import { addEventListeners } from "./style-events";
import { projects } from "./state";

const renderCurrentProject = (e) =>{
    const index = e.target.getAttribute("id");
    const btnText = document.querySelector(".btn-text");
    btnText.innerHTML = projects[index].name;

    const checkboxGroup = document.querySelector(".checkbox-group");
    checkboxGroup.innerHTML = "";

    let fragment = document.createDocumentFragment();

    projects[index].tasks.forEach( (task, i) =>{
        fragment.appendChild(createGroupRow(task, i));
    })
    checkboxGroup.appendChild(fragment);
    addEventListeners();
}

const createGroupRow = (task, index) =>{
    let label = document.createElement("label");

    label.setAttribute("for","");
    label.classList.add("group-row");
    label.innerHTML = task.toDo;

    let input = document.createElement("input");

    input.setAttribute("type", "checkbox");
    input.setAttribute("id", index.toString());

    let span = document.createElement("span");
    span.classList.add("checkmark");

    let img = document.createElement("img");
    img.classList.add("pencil");
    img.setAttribute("src", "pencil.svg");

    label.appendChild(input);
    label.appendChild(span);
    label.appendChild(img);

    return label;
}
const createProject = (project) =>{
    projects.push({
        "name": project,
        "tasks":[{
            "toDo":"You can edit me!",
            "isDone": false
        }]
    });
} 

const dropdownItems = document.querySelectorAll(".dropdown-item");

dropdownItems.forEach(element =>{
    element.addEventListener("click", renderCurrentProject);
})