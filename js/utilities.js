export const createGroupRow = (task, state, index) =>{
    const isChecked = state ? "checked" : "";
    const div = document.createElement("div");
    div.setAttribute("style", "display: flex; flex-grow: 1; align-items: center; justify-content: space-between;");
    div.innerHTML = (`<div style="display: flex; flex: 1; flex-grow: 1; align-items: center;">
    <input type="checkbox" id="checkbox-${index}"/>
    <span id="${index}" class="checkmark ${isChecked}"></span>
    <label for="checkbox-${index}" class="group-row ${isChecked}">${task}</label>
  </div>
  <img class="pencil" src="pencil.svg" alt="" id="${index}">`);     

return div;
}

export const isEmpty = (str) => {
  return !str.trim().length;
}