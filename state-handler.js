
import { projects } from "./state.js";
import { addStylesEventListener } from "./style-events.js";
import { createGroupRow, createProject } from "./utilities.js";
const renderCurrentProject = (e) =>{
    let index;
    
    if(!e){
        index = "0";
    }else
        index = e.target.getAttribute("id");

    const btnText = document.querySelector(".btn-text");
    btnText.innerHTML = projects[index].name;

    const checkboxGroup = document.querySelector(".checkbox-group");
    checkboxGroup.innerHTML = "";

    let fragment = document.createDocumentFragment();

    projects[index].tasks.forEach( (task, i) =>{
        fragment.appendChild(createGroupRow(task, i));
    })

    checkboxGroup.appendChild(fragment);
    addStylesEventListener();
}

const dropdownItems = document.querySelectorAll(".dropdown-item");

dropdownItems.forEach(element =>{
    element.addEventListener("click", renderCurrentProject);
})

renderCurrentProject();