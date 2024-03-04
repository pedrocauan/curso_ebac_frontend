$(document).ready(function() {
    let taskCreated = false;
    $("form").on("submit",function (e) {
        const taskContainer = $("#task-container");
        e.preventDefault();
        let task = $(`form input`).val();
        const newTask = $(`<li id="task-item">${task}</li>`);
        newTask.appendTo(taskContainer);
        
    });
    
    $("#task-container").on("click","#task-item", function(e) {
        e.target.classList.toggle("checked");
    });
});
