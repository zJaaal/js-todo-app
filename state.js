const projects = [
    {
        "name": "To-Do App",
        "tasks": [
            {
                "toDo": "Add create buttons", 
                "isDone": false 
            },
            {
                "toDo": "Add edit and delete buttons", 
                "isDone": false 
            },
            {
                "toDo": "Add JS", 
                "isDone": false 
            },
            {
                "toDo": "Debug", 
                "isDone": false 
            },
            {
                "toDo": "Improve!", 
                "isDone": false 
            }
        ]
    }
]
const createGroupRow = (task, index) =>{
    let label = document.createElement("label");

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