import { projects } from "./state";
import { addStylesEventListener } from "./style-events";
const renderCurrentProject = (e) => {
  let index;

  if (!e) {
    index = "0";
  } else index = e.target.getAttribute("id");

  const btnText = document.querySelector(".btn-text");
  btnText.innerHTML = projects[index].name;

  const checkboxGroup = document.querySelector(".checkbox-group");
  checkboxGroup.innerHTML = "";

  let fragment = document.createDocumentFragment();

  projects[index].tasks.forEach((task, i) => {
    fragment.appendChild(createGroupRow(task, i));
  });

  checkboxGroup.appendChild(fragment);
  addStylesEventListener();
};

const createGroupRow = (task, index) => {
  const div = document.createElement("div");
  div.setAttribute(
    "style",
    "display: flex; flex-grow: 1; align-items: center; justify-content: space-between;"
  );
  div.innerHTML = `<div style="display: flex; flex: 1; flex-grow: 1; align-items: center;">
        <input type="checkbox" id="checkbox-${index}"/>
        <span class="checkmark"></span>
        <label for="" class="group-row">${task.toDo}</label>
      </div>
      <img class="pencil" src="pencil.svg" alt="">`;

  return div;
};
const createProject = (project) => {
  projects.push({
    name: project,
    tasks: [
      {
        toDo: "You can edit me!",
        isDone: false,
      },
    ],
  });
};

const dropdownItems = document.querySelectorAll(".dropdown-item");

dropdownItems.forEach((element) => {
  element.addEventListener("click", renderCurrentProject);
});

renderCurrentProject();
