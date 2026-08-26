const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskContainer = document.getElementById("taskContainer");
const eventLog = document.getElementById("eventLog");


function showEvent(message){
    eventLog.textContent= message;
}


taskContainer.addEventListener("click",function(){
        showEvent(
            "Capturing Parent -> Child"
        );


}, true
);


taskContainer.addEventListener("click",function(event){
    showEvent(
            "Bubbling Child -> Parent"
        );
});

taskContainer.addEventListener("click",function(event){
    if(event.target.classList.contains("delete-btn")){
        event.target.closest(".task").remove();
        showEvent(
            "Event Delegation: Task Deleted "
        );
    }

    if (
        event.target.classList.contains("task-text" )
    ){
        event.target.classList.toggle("completed");

         showEvent(
            "Event Delegation: Task completed "
        );
    }


});

