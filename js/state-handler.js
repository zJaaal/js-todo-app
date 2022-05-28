
import { tasks } from "../js/state.js";
import { addStylesEventListener } from "../js/style-events.js";
import { createGroupRow} from "../js/utilities.js";

const renderCurrentProject = () =>{

    const checkboxGroup = document.querySelector(".checkbox-group");
    checkboxGroup.innerHTML = "";

    let fragment = document.createDocumentFragment();

    tasks.forEach((task, i) =>{
        console.log(task);
        fragment.appendChild(createGroupRow(task.toDo, i));
    })

    checkboxGroup.appendChild(fragment);
    addStylesEventListener();
}
const dropdownItems = document.querySelectorAll(".dropdown-item");
dropdownItems.forEach(element =>{
    element.addEventListener("click", renderCurrentProject);
})
renderCurrentProject();