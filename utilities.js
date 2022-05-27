 import { projects } from "./state.js";
 
 export const createGroupRow = (task, index) =>{
    const div = document.createElement("div");
    div.setAttribute("style", "display: flex; flex-grow: 1; align-items: center; justify-content: space-between;");
    div.innerHTML = (`<div style="display: flex; flex: 1; flex-grow: 1; align-items: center;">
    <input type="checkbox" id="checkbox-${index}"/>
    <span class="checkmark"></span>
    <label for="" class="group-row">${task.toDo}</label>
  </div>
  <img class="pencil" src="pencil.svg" alt="">`);     

return div;
}
export const createProject = (project) =>{
projects.push({
    "name": project,
    "tasks":[{
        "toDo":"You can edit me!",
        "isDone": false
    }]
});
} 