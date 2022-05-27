let isTouchscreen = false;

const disableHover = () => {isTouchscreen = true; window.removeEventListener("touchstart", disableHover);};

window.addEventListener("touchstart", disableHover);

export const addStylesEventListener = () => {
    const checkboxes = document.querySelectorAll(".checkmark");

    const state ={
        actualCheckbox:{},
        actualLabel:{}
    }

    const useState = (key, value) => state[key] = value;

    const toggleCheck = (e) =>{
        useState("actualCheckbox", e.target.previousElementSibling);
        useState("actualLabel", e.target.nextElementSibling);

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
        if(isTouchscreen)
            return;
        useState("actualLabel", e.target.nextElementSibling);
        e.target.classList.add("hover");
        state.actualLabel.classList.add("hover");
    }
    const blurAction = (e) =>{
        if(isTouchscreen)
            return;
        useState("actualLabel", e.target.nextElementSibling);
        e.target.classList.remove("hover");
        state.actualLabel.classList.remove("hover");
    }
    checkboxes.forEach(element =>{
        element.addEventListener("click", toggleCheck);
        element.addEventListener("mouseout", blurAction);
        element.addEventListener("mouseenter", hoverAction);
    })
}