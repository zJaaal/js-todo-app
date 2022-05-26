export const addEventListeners = () => {
    const checkboxes = document.querySelectorAll(".checkmark");

    const state ={
        actualCheckbox:{},
        actualLabel:{}
    }

    const useState = (key, value) => state[key] = value;

    const toggleCheck = (e) =>{
        useState("actualCheckbox", e.target.previousElementSibling);
        useState("actualLabel", e.target.parentElement);

        state.actualCheckbox.checked = !state.actualCheckbox.checked;
            if(state.actualCheckbox.checked){
                e.target.classList.add("checked");
                state.actualLabel.classList.add("checked");
            
            }else{
                e.target.classList.remove("checked");
                state.actualLabel.classList.remove("checked");
            }

    }
    const hoverAction = (e) =>{
        e.target.classList.add("hover");
    }
    const blurAction = (e) =>{
        e.target.classList.remove("hover");
    }
    checkboxes.forEach(element =>{
        element.addEventListener("click", toggleCheck);
    })

    checkboxes.forEach(element => {
        element.addEventListener("mouseenter", hoverAction);
    })
    checkboxes.forEach(element => {
        element.addEventListener("mouseout", blurAction);
    })
}
addEventListeners();